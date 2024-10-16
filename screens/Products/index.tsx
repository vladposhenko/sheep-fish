import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@ui-kitten/components'  
import { FC, memo, useCallback, useEffect } from 'react'
import { FlatList, StyleSheet, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getProducts } from '../../store/appActions';
import { IProductItem } from '../../models';
import { AddProduct, ProductDetails } from '../../constants/routes';
import { RootStackParamList } from '../../constants/screens';

const noImage = require('../../assets/noImage.png')

interface IProductsProps {
    navigation: NativeStackNavigationProp<RootStackParamList>
}

type IProductListItemProp = {
    item: IProductItem
}


const Products: FC<IProductsProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { products, isLoading } = useAppSelector(state => state.app)
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const handleProductPress = (product: IProductItem) => {
        navigation.navigate(ProductDetails, { product })
    }

    const handleAddProductPress = () => {
        navigation.navigate(AddProduct)
    }

    const renderProduct = useCallback(({ item }: IProductListItemProp) => {
        return (
          <TouchableOpacity style={styles.productItem} onPress={() => handleProductPress(item)}>
            <Image
              resizeMode="contain"
              style={{ width: 100, height: 100 }}
              source={item.image ? { uri: item.image } : noImage}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '700' }} ellipsizeMode="clip">
                {item.title}
              </Text>
              <Text style={styles.productPrice}>Price: {String(item.price)}$ </Text>
            </View>
          </TouchableOpacity>
        );
      }, [navigation]);

  return (
    <View style={styles.productsContainer}>
        <View style={styles.productsHeaderContainer}>
            <Text style={styles.productsPageTitle}>Products List</Text>
            <Button onPress={handleAddProductPress} style={{ width: '50%', height: 50 }}><Text style={{ fontSize: 10, lineHeight: 10 }}>Add product</Text></Button>
        </View>
        {isLoading ? (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large"/>
            </View>
        ) : (
            <FlatList
                data={products}
                style={styles.productsListContainer}
                renderItem={renderProduct}  
                indicatorStyle='black'
            />
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    productsContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff'
    },
    productsHeaderContainer: {
        flexGrow: 0, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingBottom: 15
    },
    productsPageTitle: {
        fontWeight: '700',
        textAlign: 'center'
    },
    productsListContainer: {
        flex: 1,
        gap: 20,
        marginBottom: 30
    },
    productItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginTop: 20,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10
    },
    productPrice: {
        marginTop: 10
    }
})

export default Products

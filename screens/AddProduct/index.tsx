import { Button } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Formik } from "formik";
import { productsFormConfig, validationSchema } from "./config";
import CustomTextInput from "../../components/ui/CustomTextInput";
import { FC, memo, useState } from "react";
import { addNewProduct } from "../../store/appActions";
import { Products } from "../../constants/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../constants/screens";

interface IAddProductProps {
    navigation: NativeStackNavigationProp<RootStackParamList>
}

const AddProduct: FC<IAddProductProps> = ({ navigation }) => {
  const [isAlreadySubmitted, setSubmitted] = useState(false)
  const dispatch = useAppDispatch()
  const products  = useAppSelector(state => state.app.products)

  const createProduct = (values: any) => {
    const newProduct = {
        id: products.length + 1,
        title: values.productName,
        description: values.productDescription,
        price: values.productPrice
    }
    dispatch(addNewProduct(newProduct))
    navigation.navigate(Products)
  }
  
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
            productName: '',
            productPrice: '',
            productDescription: ''
        }}
        validationSchema={validationSchema}
        validateOnChange={isAlreadySubmitted}
        validateOnBlur={false}
        onSubmit={(values) => {
            createProduct(values)
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.formContainer}>
            {productsFormConfig.map((item) => (
                <CustomTextInput
                    name={item.name}
                    title={item.title}
                    handleChange={handleChange}
                    value={values[item.name]}
                    error={errors[item.name]}
                    textarea={item.textarea}
                    num={item.num}
                />
            ))}
            <Button onPress={() => {
                setSubmitted(true)
                handleSubmit()
            }} style={{ width: '100%', height: 50 }}>Add product</Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formContainer: {
    flex: 1,
    gap: 15,
    padding: 15,
  }
});

export default memo(AddProduct);

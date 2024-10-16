import { Text } from "@ui-kitten/components";
import { Image, StyleSheet, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IProductItem } from "../../models";
import { useRoute } from "@react-navigation/native";

const noImage = require("../../assets/noImage.png");

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.productDetailsContainer}>
        <Image
          resizeMode="contain"
          style={{ width: "100%", height: 200 }}
          source={product.image ? { uri: product.image } : noImage}
        ></Image>
        <View style={{ flex: 1, alignItems: "center", gap: 10 }}>
          <Text style={styles.productDetailsTitle}>{product.title}</Text>
          <Text style={styles.productDetailsDescription}>
            {product.description}
          </Text>
          <Text style={styles.productDetailsPrice}>
            Price: {product.price}$
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productDetailsContainer: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    padding: 15,
  },
  productDetailsTitle: {
    fontWeight: "700",
    textAlign: "center",
  },
  productDetailsDescription: {
    textAlign: "center",
  },
  productDetailsPrice: {
    textAlign: "center",
  },
});

export default ProductDetails;

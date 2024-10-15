import { Text, Button } from "@ui-kitten/components";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IProductItem } from "../../models";
import { useRoute } from "@react-navigation/native";
import { Formik } from "formik";
import { validationSchema } from "./config";
import CustomTextInput from "../../components/ui/CustomTextInput";
import { useState } from "react";
import { addNewProduct } from "../../store/appActions";
import { Products } from "../../constants/routes";

type IProps = {
  item: IProductItem;
};

const AddProduct = ({ navigation }) => {
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
            <CustomTextInput
                name="productName"
                title='Enter product name'
                handleChange={handleChange}
                value={values.productName}
                error={errors.productName}
            />
             <CustomTextInput
                name="productPrice"
                title='Enter product price'
                handleChange={handleChange}
                value={values.productPrice}
                error={errors.productPrice}
                num
            />
            <CustomTextInput
                name="productDescription"
                title='Enter product description'
                handleChange={handleChange}
                value={values.productDescription}
                error={errors.productDescription}
                textarea
            />
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

export default AddProduct;

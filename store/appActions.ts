import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getProducts = createAsyncThunk('getProducts', async () => {
    try {
        const savedProducts = await AsyncStorage.getItem('ProductsData')
        if(!savedProducts) {
            const { data } = await axios.get(API_URL + '/products')
            await AsyncStorage.setItem('ProductsData', JSON.stringify(data))
            return data
        } else {
            return JSON.parse(savedProducts)
        }
    } catch (error) {
        console.log('er', error)
    }
})

export const addNewProduct = createAsyncThunk('addNewProduct', async (newProduct, { rejectWithValue }) => {
    try {
        const savedProducts = await AsyncStorage.getItem('ProductsData')

        const products = savedProducts ? JSON.parse(savedProducts) : [];
        const updatedProducts = [...products, newProduct];

        await AsyncStorage.setItem('ProductsData', JSON.stringify(updatedProducts));
        
        return updatedProducts;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


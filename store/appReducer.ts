import { createSlice } from "@reduxjs/toolkit";
import { addNewProduct, getProducts } from "./appActions";
import { IProductItem } from "../models";

export interface AppState {
  products: IProductItem[]
  isLoading: boolean
}

const initialState: AppState = {
  products: [],
  isLoading: false
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false
    })
    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.products = action.payload
    })
  },
});


export default appSlice.reducer;

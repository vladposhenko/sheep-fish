import { createSlice } from "@reduxjs/toolkit";
import { addNewProduct, getProducts } from "./appActions";
import { IProductItem } from "../models";

export interface AppState {
  products: IProductItem[]
}

const initialState: AppState = {
  products: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.products = action.payload
    })
  },
});


export default appSlice.reducer;

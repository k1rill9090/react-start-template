import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "src/homeworks/ts1/3_write";
import { RootState } from "src/store/store";

const initialState = {
    products: [] as Product[],
    page: 1,
    error: ''
}
export type TypeProduct = typeof initialState

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        initialGetProductsSaga: () => {
            void 0
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        addError: (state, action) =>{
            state.error = action.payload
        },
        changePage: (state, action) => {
            state.page = action.payload
        },
        clearProducts: () => {
            return initialState
        }

    }
})

export const selectProducts = (state: RootState) => state.product;
export const {
    addProduct, 
    addError, 
    initialGetProductsSaga, 
    changePage, 
    clearProducts
} = productSlice.actions;
export default productSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "src/homeworks/ts1/3_write";
import { RootState } from "src/store/store";

const initialState = {
    getProducts: {
        products: [] as Product[],
        page: 1,
        totalPages: 1,
        status: '',
        error: ''
    },
    addProduct: {
        payload: {
            "name": "",
            "photo": "",
            "desc": "",
            "price": 0,
            "categoryId": ""
        },
        status: '',
        error: ''
    }
}
export type TypeProduct = typeof initialState
export type ProductPayload = typeof initialState.addProduct.payload
export type AddProductStatusType = Omit<typeof initialState.addProduct, 'payload'>

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        initialGetProductsSaga: () => {
            void 0
        },
        getProduct: (state, action: PayloadAction<Product[]>) => {
            if (action.payload !== null) {
                state.getProducts.products.push(...action.payload);
                state.getProducts.status = 'success';
            } 
            else state.getProducts.products = []
        },
        addProduct: (state, action: PayloadAction<ProductPayload>) => {
            state.addProduct.payload = action.payload
        },
        addProductStatus: (state, action: PayloadAction<{status: string, error:string}>) =>{
            state.addProduct.status = action.payload.status
            state.addProduct.error = action.payload.error
        },
        addErrorGetProduct: (state, action) =>{
            state.getProducts.error = action.payload
        },
        changePage: (state, action) => {
            state.getProducts.page = action.payload
        },
        getTotalPages: (state, action) => {
            state.getProducts.totalPages = action.payload
        },
        clearProducts: () => {
            return initialState
        },
        clearAddPRoductStatus: (state) => {
            state.addProduct.status = ''
            state.addProduct.error = ''
        }

    }
})

export const selectProducts = (state: RootState) => state.product;
export const {
    addProduct,
    addProductStatus,
    getProduct, 
    addErrorGetProduct, 
    initialGetProductsSaga, 
    changePage, 
    getTotalPages,
    clearProducts,
    clearAddPRoductStatus
} = productSlice.actions;
export default productSlice.reducer
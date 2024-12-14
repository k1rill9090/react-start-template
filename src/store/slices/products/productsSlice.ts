import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "src/homeworks/ts1/3_write";
import { RootState } from "src/store/store";

const initialState: Product[] = []

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push(action.payload)
        }
    }
})

export const selectProducts = (state: RootState) => state.product
export const {addProduct} = productSlice.actions
export default productSlice.reducer
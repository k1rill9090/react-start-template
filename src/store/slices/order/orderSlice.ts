import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/store/store";

type TypeOrder = {
    payload: {
        products: Array<{id: string, quantity: number}>,
    },
    responce: {
        status: string,
        error: string,
        
    }
}

const initialState: TypeOrder = {
    payload: {
        products: [],
    },
    responce: {
        status: "",
        error: "",
    }
}
export type TypeOrderPayload = typeof initialState.payload
export type TypeOrderResponce = typeof initialState.responce

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        createOrder: (state, action: PayloadAction<TypeOrderPayload>) => {
            state.payload = action.payload
        },
        addResponceOrder: (state, action: PayloadAction<TypeOrderResponce>) => {
            state.responce = action.payload
        },
        clearResponceOrder: (state) => {
            state.responce = initialState.responce
        },
        clearPayloadOrder: (state) => {
            state.payload = initialState.payload
        }
    }
})

export const orderStore = (state: RootState) => state.order;
export const {createOrder, clearPayloadOrder, clearResponceOrder, addResponceOrder} = orderSlice.actions
export default orderSlice.reducer
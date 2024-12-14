import { configureStore} from "@reduxjs/toolkit";
import createReducer from './slices/cart/cartSlice'
import productReducer from './slices/products/productsSlice'

export const store = configureStore({
    reducer: {
        cart: createReducer,
        product: productReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
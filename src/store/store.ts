import { configureStore} from "@reduxjs/toolkit";
import createReducer from './slices/cart/cartSlice'
import productReducer from './slices/products/productsSlice'
import token from "./slices/token/token";
import profile from './slices/profile/profile'
import initialFlag from './slices/initialFlag/initialFlag'

export const store = configureStore({
    reducer: {
        cart: createReducer,
        product: productReducer,
        token: token,
        profile: profile,
        initialFlag: initialFlag
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
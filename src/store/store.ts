import { configureStore } from "@reduxjs/toolkit";
import createReducer from './slices/cart/cartSlice';
import productReducer from './slices/products/productsSlice';
import token from "./slices/token/token";
import profile from './slices/profile/profile';
import initialFlag from './slices/initialFlag/initialFlag';
import registration from './slices/registration/registration';
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./sagas";
import orderReducer from './slices/order/orderSlice'


const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        cart: createReducer,
        product: productReducer,
        token: token,
        profile: profile,
        initialFlag: initialFlag,
        registration: registration,
        order: orderReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
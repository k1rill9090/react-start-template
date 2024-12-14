import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "src/homeworks/ts1/3_write";
import { RootState } from "src/store/store";

type CartItem = {
    id: string;
    quantity: number;
};

export type cartState = {
    items: CartItem[];
}


export type productInCartType = Pick<Product, "id" | "name" | "price"> & Pick<CartItem, "quantity">;

const initialState: cartState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const isExist = state.items.find(item => item.id === action.payload.id);

            if (isExist) {
                isExist.quantity = action.payload.quantity;
            } else {
                state.items.push({id: action.payload.id, quantity: action.payload.quantity});
            }           
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
})

export const productInCart = createSelector(
    [(state) => state.cart.items, (state) => state.product],
    (items, product) => {
        return items.map((item: CartItem) => {
            const productAtr = product.find((product: Product) => product.id === item.id);
            return {
                id: productAtr.id,
                price: productAtr.price,
                name: productAtr.name,
                quantity: item.quantity
            }
        })

    }
)

export const selectCart = (state: RootState) => state.cart

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
import type { Meta } from "@storybook/react";
import ButtonAddToCart from "./ButtonAddToCart";


const meta: Meta<typeof ButtonAddToCart> = {
    title: "Homework2/OnlineStore/ButtonAddToCart",
    component: ButtonAddToCart,
    argTypes: {
        count: {
            type: "number",
        } ,
    }
}

export default meta

export const primary = {
    args: {
        count: 0,
    }
};
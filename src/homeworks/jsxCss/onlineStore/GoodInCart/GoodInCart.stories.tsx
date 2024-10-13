import { Meta } from "@storybook/react";
import GoodInCart from "./GoodInCart";


const meta: Meta<typeof GoodInCart> = {
    title: "Homework2/OnlineStore/GoodInCart",
    component: GoodInCart,
}

export default meta

export const primary = {
    args: {
        sum: 120,
        name: "Матовая гидрогелевая пленка на экран телефона"
    }
};
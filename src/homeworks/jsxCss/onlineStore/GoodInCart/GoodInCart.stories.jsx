import GoodInCart from "./GoodInCart";

export default  {
    title: "Homework2/OnlineStore/GoodInCart",
    component: GoodInCart,
    argTypes: {
        sum: {
            type: "number",
        } ,
        name: {
            type: "string",
        }
    }
}

export const primary = {
    args: {
        sum: 120,
        name: "Матовая гидрогелевая пленка на экран телефона"
    }
};
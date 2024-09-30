import ButtonAddToCart from "./ButtonAddToCart";

export default  {
    title: "Homework2/OnlineStore/ButtonAddToCart",
    component: ButtonAddToCart,
    argTypes: {
        count: {
            type: "number",
        } ,
    }
}

export const primary = {
    args: {
        count: 0,
    }
};
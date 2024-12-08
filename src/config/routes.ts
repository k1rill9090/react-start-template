import Cart from "src/pages/Cart/Cart";
import Products from "src/pages/Products/Products";
import Profile from "src/pages/Profile/Profile";

export const routes = [
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/products',
        component: Products
    },
    {
        path: '/products/create',
        component: Products
    },
    {
        path: '/cart',
        component: Cart
    },
]
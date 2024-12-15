import UserProfile from "src/homeworks/jsxCss/UserProfile/UserProfile";
import Cart from "src/pages/Cart/Cart";
import ErrorForbidden from "src/pages/ErrorForbidden/ErrorForbidden";
import Products from "src/pages/Products/Products";
import Profile from "src/pages/Profile/Profile";

export const routes = [
    {
        path: '/login',
        component: Profile,
        auth: false,
        role:'user',
    },
    {
        path: '/profile',
        component: UserProfile,
        auth: true,
        role:'user',
    },
    {
        path: '/products',
        component: Products,
        auth: false,
        role:'user',
    },
    {
        path: '/create-product',
        component: Products,
        auth: true,
        role:'admin',
    },
    {
        path: '/cart',
        component: Cart,
        auth: false,
        role:'user',
    },
    {
        path: '/error',
        component: ErrorForbidden,
        auth: false,
        role:'user',
    }
]
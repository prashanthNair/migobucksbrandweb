 

import Auth from "./pages/auth/auth";
import ProductContainer from "./pages/inventory/ProductContainer";
import ProductDetails from "./pages/inventory/ProductDetails/ProductDetails";

 

const AppRouting = [
    {
        key: "auth",
        path: "/auth",
        component: Auth

    },
    {
        key: "products",
        path: "/products",
        component: ProductContainer

    } 
]


export default AppRouting;
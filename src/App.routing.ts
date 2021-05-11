 
import Layout from "./pages/Products/ProductContainer";
import Auth from "./pages/auth/auth";

 

const AppRouting = [
    {
        key: "auth",
        path: "/auth",
        component: Auth

    },
    {
        key: "product",
        path: "/product",
        component: Layout

    } 
]


export default AppRouting;
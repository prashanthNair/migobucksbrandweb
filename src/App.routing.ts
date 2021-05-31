import { RouteProps } from 'react-router-dom';
import Auth from "./pages/Auth/Auth";
import ProductContainer from "./pages/Dashboard/ProductContainer";
import ProductDetails from "./pages/Dashboard/ProductDetails/ProductDetails";

export interface IAppRouting extends RouteProps {
    key: string;
}

const AppRouting: IAppRouting[] = [
    {
        key: "auth",
        path: "/auth",
        component: Auth,

    },
    {
        key: "dashboard",
        path: "/dashboard",
        component: ProductContainer

    }
];


export default AppRouting;
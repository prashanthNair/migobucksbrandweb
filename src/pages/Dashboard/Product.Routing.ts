import { RouteProps } from 'react-router-dom';
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductList from "./ProductList/ProductList";
import MyInventory from './MyInventory/MyInventory';

export interface IProductRouting extends RouteProps {
    key: string;
}

const ProductRouting: IProductRouting[] = [

    {
        key: 'add',
        path: '/products/add',
        component: ProductDetails
    }, 
    {
        key: 'products',
        path: '/products/list',
        component: ProductList
    },
    {
        key: "myInventory",
        path: "/dashboard/my-inventory",
        component: MyInventory,
    }
]

export default ProductRouting;
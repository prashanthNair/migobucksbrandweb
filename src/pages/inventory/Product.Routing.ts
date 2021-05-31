import { RouteProps } from 'react-router-dom';
import AddProduct from "./AddProduct/Product";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductList from "./ProductList/ProductList";
import MyInventory from './MyInventory/MyInventory';
export interface IProductRouting extends RouteProps {
    key: string;
}

const ProductRouting: IProductRouting[] = [

    {
        path: '/products/add',
        key: 'add',
        component: ProductDetails
    }, 
    {
        path: '/products/list',
        key: 'products',
        component: ProductList
    },
    {
        key: "myInventory",
        path: "/products/my-inventory",
        component: MyInventory,
    }
]

export default ProductRouting;
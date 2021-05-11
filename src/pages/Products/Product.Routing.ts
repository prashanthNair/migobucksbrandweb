import AddProduct from "./AddProduct/Product";
import ProductList from "./ProductList/ProductList";

 

const ProductRouting = [

    
    {
        path: '/products',
        key: 'products',
        component: ProductList
    },
    {
        path: '/products/add',
        key: 'products',
        component: AddProduct
    }
]

export default ProductRouting;
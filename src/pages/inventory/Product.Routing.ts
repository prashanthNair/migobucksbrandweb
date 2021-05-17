import AddProduct from "./AddProduct/Product";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductList from "./ProductList/ProductList";



const ProductRouting = [

    {
        path: '/products/add',
        key: 'add',
        component: ProductDetails
    }, {
        path: '/products/list',
        key: 'products',
        component: ProductList
    },
]

export default ProductRouting;
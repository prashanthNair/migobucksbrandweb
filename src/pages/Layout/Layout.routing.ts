import Dashboard from '../Dashboard/Dashboard';
import ProductAddLayout
  from '../Products/components/ProductAddLayout/ProductLayout';
import ProductList from '../Products/components/ProductList/ProductList';

const LayoutRouting = [

    {
        path: '/layout/dashboard',
        key: 'dashboard',
        component: Dashboard
    },
    {
        path: '/layout/products/list',
        key: 'products',
        component: ProductList
    },
    {
        path: '/layout/products/add',
        key: 'products',
        component: ProductAddLayout
    }
]

export default LayoutRouting;
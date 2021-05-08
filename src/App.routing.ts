import myAccount from './pages/Account/myAccount';
import Auth from './pages/Auth/Auth';
import Layout from './pages/Layout/Layout';

const AppRouting = [
    {
        key: "auth",
        path: "/auth",
        component: Auth

    },
    {
        key: "layout",
        path: "/layout",
        component: Layout

    },
    {
        path: '/account',
        key: 'account',
        component: myAccount
    }
]


export default AppRouting;
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const AuthRouting = [

    {
        path: '/auth/login',
        key: 'login',
        component: Login
    },
    {
        path: '/auth/register',
        key: 'register',
        component: Register
    }
]

export default AuthRouting;
import Login from "./Login/Login";
import RegisterSuccess from "./Register-success/Register-success";
import Register from "./Register/Register";

 
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
    },
    {
        path: '/auth/register-success',
        key: 'register',
        component: RegisterSuccess
    }
]

export default AuthRouting;
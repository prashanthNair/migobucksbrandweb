import Login from './components/Login/Login';
import RegisterSuccess from './components/register-success/register-success';
import Register from './components/Register/Register';

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
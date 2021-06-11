import BrandType from "./Brand-type/Band-type";
import CreatePassword from "./Create-password/Create-password";
import RegisterBrand from "./Register-brand/Register-brand";
import SignUp from "./Sign-up/Sign-up";
import Verification from "./Verification/Verification";

 
const RegisterRouting = [
    {
        path: '/auth/register/brand-type',
        key: 'register',
        component: BrandType
    },
    {
        path: '/auth/register/brand-reg',
        key: 'register',
        component: RegisterBrand
    },
    {
        path: '/auth/register/sign-up',
        key: 'register',
        component: SignUp
    },
    {
        path: '/auth/register/verification',
        key: 'register',
        component: Verification
    },
    {
        path: '/auth/register/create-password',
        key: 'register',
        component: CreatePassword
    }
]

export default RegisterRouting;
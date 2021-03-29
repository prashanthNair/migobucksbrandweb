import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";

const AppRouting = [
    {
        key: "auth",
        path: "/auth",
        component: Auth

    },
    {
        key: "dashboard",
        path: "/dashboard",
        component: Dashboard
    }
]


export default AppRouting;
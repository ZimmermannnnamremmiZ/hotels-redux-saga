import { LOGIN_ROUTE, HOTELS_ROUTE } from "./utils/consts"
import Login from "./pages/Login"
import Hotels from "./pages/Hotels"

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: HOTELS_ROUTE,
        Component: Hotels
    }
]
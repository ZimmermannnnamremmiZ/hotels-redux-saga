import { useId } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes"
import { LOGIN_ROUTE, HOTELS_ROUTE } from "../../utils/consts";

const AppRouter = () => {
    const id = useId();
    const user = false;
    return user ?
        (
        <Routes>
            {privateRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component />} key={id}/>
            )}
            <Route element={<Navigate to={HOTELS_ROUTE} />} />
        </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route path={path} element={<Component />} key={id}/>
                )}
                <Route element={<Navigate to={LOGIN_ROUTE} />} />
            </Routes>
        )
}

export default AppRouter
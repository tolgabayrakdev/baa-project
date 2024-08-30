import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const HomePage = lazy(() => import("./pages/Home"));
const AuthenticationPage = lazy(() => import("./pages/Authentication"));



const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/authentication",
        element: <AuthenticationPage />
    }
]);

export default routes;
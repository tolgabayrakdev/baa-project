import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const NotFoundPage = lazy(() => import("./pages/error/NotFound"))

const BoardLayout = lazy(() => import("./layouts/BoardLayout"));


const HomePage = lazy(() => import("./pages/Home"));
const AuthenticationPage = lazy(() => import("./pages/Authentication"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPassword"));

//board pages
const BoardIndexPage = lazy(() => import("./pages/board/Index"));



const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
    {
        path: "/authentication",
        element: <AuthenticationPage />
    },
    {
        path: "/reset-password",
        element: <ResetPasswordPage />
    },
    {
        path: "/board",
        element: <BoardLayout />,
        children: [
            { path: "", element: <BoardIndexPage />, index: true }
        ]
    }
]);

export default routes;
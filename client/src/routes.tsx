import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const BoardLayout = lazy(() => import("./layouts/BoardLayout"));


const HomePage = lazy(() => import("./pages/Home"));
const AuthenticationPage = lazy(() => import("./pages/Authentication"));


const BoardIndexPage = lazy(() => import("./pages/board/Index"));



const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/authentication",
        element: <AuthenticationPage />
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
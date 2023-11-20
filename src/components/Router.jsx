import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../pages/About.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Layout from "../pages/Layout.jsx";
import LoginUser from "../pages/LoginUser.jsx";
import LoginAdmin from "../pages/LoginAdmin.jsx";
import AdminDashboard from "../pages/AdminDashboard.jsx";

const Router = () => {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <App />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "login",
                    element: <LoginUser />,
                },
            ],
        },
        {
            path: "admin",
            element: <LoginAdmin />,
            errorElement: <ErrorPage />,
        },
        {
            path: "adminDashboard",
            element: <AdminDashboard />,
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;

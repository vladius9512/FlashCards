import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../pages/About.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Login from "../pages/LogIn.jsx";
import Layout from "../pages/Layout.jsx";

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
                    element: <Login />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;

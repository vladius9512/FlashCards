import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "./About.jsx";
import ErrorPage from "./ErrorPage.jsx";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "about/:name",
            element: <About />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navigation></Navigation>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </>
    );
};

export default Layout;

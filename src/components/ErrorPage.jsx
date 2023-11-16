import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <h1>Oh no, it isnt working.</h1>
            <Link to="/">Click here and go back home.</Link>
        </>
    );
};

export default ErrorPage;

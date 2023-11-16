import Navigation from "./Navigation";
const Login = () => {
    return (
        <>
            <Navigation></Navigation>
            <label htmlFor="username">Username</label>
            <input type="text" htmlFor="username" />
            <label htmlFor="password">Password</label>
            <input type="password" htmlFor="password" />
        </>
    );
};

export default Login;

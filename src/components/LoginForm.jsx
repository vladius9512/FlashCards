import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [usernameValue, setUsernameValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const navigateTo = useNavigate();

    const onChangeHandlerUsername = (e) => {
        setUsernameValue(e.target.value);
    };

    const onChangeHandlerPass = (e) => {
        setPassValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usernameValue) {
            if (passValue !== credentials.password) {
                renderErrorMessage("password");
            } else {
                navigateTo("/adminDashboard");
            }
        } else {
            renderErrorMessage("username");
        }
    };

    const renderErrorMessage = (name) => {
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    };

    const credentials = { username: "admin", password: "carina" };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                htmlFor="username"
                name="username"
                required
                onChange={onChangeHandlerUsername}
                value={usernameValue}
            />
            {renderErrorMessage("username")}
            <label htmlFor="password">Password</label>
            <input
                type="password"
                htmlFor="password"
                name="pass"
                required
                onChange={onChangeHandlerPass}
                value={passValue}
            />
            {renderErrorMessage("pass")}
            <input type="submit" />
        </form>
    );
};

export default Login;

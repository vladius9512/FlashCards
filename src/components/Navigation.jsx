import { Link } from "react-router-dom";
import styles from "../styles/buttons.module.css";
import logo from "../assets/logo.svg";

function Navigation() {
    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu-container">
                <Link to="/">
                    <button className={styles.secondaryBtn}>Acasa</button>
                </Link>
                <Link to="about">
                    <button className={styles.secondaryBtn}>Despre</button>
                </Link>
                <Link to="login">
                    <button className={styles.secondaryBtn}>Conectare</button>
                </Link>
                <Link to="signup">
                    <button className={styles.primaryBtn}>Inregistrare</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;

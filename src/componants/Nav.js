import styles from "../styles/Nav.module.css";

import logo from "../assets/images/logo-bg.png";
import Account from "./Account";
import {Link} from "react-router-dom"
export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to="/" className={styles.brand}>
                        <img src={logo} alt="Edutune" />
                        <h3>Edutune</h3>

                    </Link>
                </li>
            </ul>
            <Account/>
        </nav>
    )
}

import { useEffect } from "react";
import styles from "../styles/Account.module.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./Pages/Auth/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Account() {
    const location = useLocation();
    const hideButtonForTheseRoutes = ["/login", "/signup"];
    const { user } = useAuth();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);
    const handleLogout = () => {
        const token = localStorage.getItem('token');
        console.log('this is ' + token);
        try {
            localStorage.removeItem('name');
            localStorage.removeItem('token');
            toast.success('Successfully logged out!');
            window.location.href = '/login';
        } catch (error) {
            console.log(error);
        }
    };

    const shouldHideButton = hideButtonForTheseRoutes.includes(location.pathname);
    return (
            <div className={styles.nav_right}>
                <div className="material-icons-outlined" title="Account">
                    account_circle
                </div>
                {user && <div className={styles.name}>{user.name}</div>}
                {!user && <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>}
                {user && !shouldHideButton && (
                    <div className={styles.logout_button}>

                    <button onClick={handleLogout} className="dropdown-item">
                        Logout
                    </button>

                    </div>
                )}
                 <ToastContainer />
            </div>
    );
}
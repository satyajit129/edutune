import signupimg from "../assets/images/signup.svg"
import styles from "../styles/Illustration.module.css";
export default function Illustration() {

    return (
        <div className={styles.illustration}>
            <img src={signupimg} alt="Signup" />
        </div>
    )
}
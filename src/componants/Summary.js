import styles from "../styles/Summary.module.css";
import image from "../assets/images/success.png";

export default function Result() {
    return (
        <div className={styles.summary}>
            <div className={styles.point}>
                <p className={styles.score}>
                    Your score is <br />
                    5 out of 10
                </p>
            </div>

            <div className={styles.badge}>
                <img src={image} alt="Success" />
            </div>
        </div>
    )
}
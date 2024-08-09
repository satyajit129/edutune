import Checkbox from "./Checkbox";
import styles from "../styles/Answer.module.css";

export default function Answer(){
    return (
        <div className={styles.answers}>
            <Checkbox className={styles.answer} text="A New Hope 1"/>
        </div>
    )
}
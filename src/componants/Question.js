import styles from "../styles/Question.module.css";
import Answer from './Answer';

export default function Question() {
    return (
        <div className={styles.question}>
            <div className={styles.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the question from Learn with Sumit?
            </div>
            <Answer/>
        </div>

    )
}
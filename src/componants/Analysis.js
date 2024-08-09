import styles from "../styles/Analysis.module.css";
import Question from "./Question";
export default function Analysis(){
    return (
        <div className={styles.analysis}>
          <h1 className={styles.analysis}>Question Analysis</h1>
          <h4 className={styles.analysis}>You answerd 5 out of 10 questions correctly</h4>
          <Question/>
        </div>
    )
}
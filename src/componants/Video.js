import image from "../assets/images/1.jpeg"
import styles from "../styles/Video.module.css"

export default function Video() {

    return (
        <div >
            <div className={styles.video}>
                <img src={image} alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={styles.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </div>
    )
}
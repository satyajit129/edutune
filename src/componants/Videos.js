import styles from "../styles/Videos.module.css";
import Video from "./Video";
import { Link } from "react-router-dom";
import sectionStyles from "../styles/Section.module.css";

export default function Videos() {
    return (
        <div className={sectionStyles.section}>
            <div className="">
                <h2>Quiz Section</h2>
                <hr style={{ color: 'white' }}/>
            </div>
            <div className={styles.videos}>

                <Link to="/quiz"><Video /></Link>
                <Link to="/quiz"><Video /></Link>
                <Link to="/quiz"><Video /></Link>
                <Link to="/quiz"><Video /></Link>
                <Link to="/quiz"><Video /></Link>
                <Link to="/quiz"><Video /></Link>
                <Link to="/quiz"><Video /></Link>
                <Link to="/quiz"><Video /></Link>

            </div>
        </div>
    )
}
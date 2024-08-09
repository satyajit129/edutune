import styles from "../styles/Miniplayer.module.css";
import miniplayerimg from "../assets/images/3.jpg"
export default function Miniplayer(){
    return (
        <div className={` ${styles.miniPlayer} ${styles.floatingBtn}`}>
          <span className={`material-icons-outlined ${styles.open}`}> play_circle_filled </span>
          <span className={`material-icons-outlined ${styles.close}`}> close </span>
          <img src={miniplayerimg} alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    )
}
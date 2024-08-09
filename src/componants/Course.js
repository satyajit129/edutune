
import image from '../assets/images/course.png'
import styles from "../styles/Course.module.css"

export default function Course({ course_name, course_duration , course_price, course_images }) {
    return (
        <div >
            <div className={styles.course}>
                <img src={image} alt="" />
                <p className={styles.course_title}>{course_name}</p>
                <hr/>
                <div className={styles.qmeta}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>Full Course Fees</p>
                        <p className="">{course_price}</p>
                    </div>
                    <p>{course_duration}</p>
                </div>
            </div>
        </div>
    )
}
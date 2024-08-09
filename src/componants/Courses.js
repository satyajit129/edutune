import { Link } from "react-router-dom";
import sectionStyles from "../styles/Section.module.css";
import styles from "../styles/Courses.module.css";
import Course from "./Course";
import { useEffect, useState } from "react";
import Constants from "../assets/URL/BASE_URL";
import axios from "axios";

export default function Courses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${Constants.BASE_URL}/course-list`);
                console.log(response.data);
                setCourses(response.data);
            } catch (error) {
                console.error('There was an error fetching the course data!', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);
    return (
        <div className={sectionStyles.section}>
            <div className="">
                <h2 >EduTune Courses</h2>
                <hr style={{ color: 'white' }} />
            </div>
            <div className={styles.courses}>
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-dark" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    courses.map((course) => (
                        <Link to={`course-details/${course.id}`} key={course.id}>
                            <Course 
                                course_name={course.title}
                                course_duration={course.duration}
                                course_price={course.price}
                            />
                        </Link>
                    ))
                )}
            </div>
            {error && <div className="alert alert-danger mt-3">There was an error fetching the course data!</div>}
        </div>
    )
}
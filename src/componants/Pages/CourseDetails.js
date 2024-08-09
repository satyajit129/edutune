import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import sectionStyles from "../../styles/Section.module.css";
import Carousel from './../Carousel';
import Button from "../Button";


export default function CourseDetails() {
    const { id } = useParams();
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError('Invalid course ID');
            setLoading(false);
            return;
        }
        const fetchCourse = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/api/course-details/${id}`);;
                console.log(response.data);
                setCourse(response.data);
            } catch (error) {
                console.error("There was an error fetching the course data!", error);
                setError(error.message || "Error setting up the request");
            } finally {
                setLoading(false);
            }
        };
        fetchCourse();
    }, [id]);
    

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger mt-3">
                There was an error fetching the course details! {error}
            </div>
        );
    }

    return (
        <div>

            <div className={sectionStyles.section}>
                <h2>Course Details</h2>
                <div className="row mt-3">
                    <div className="col-lg-5 mt-3">
                        <div className="course-details-left">
                            {course.status === true ? (
                                <span className="badge_style_primary">Live</span>
                            ) : (
                                <span className="badge_style_primary">Live</span>
                            )}
                            <br />
                            <h3 className="py-3">Course Name: <b>{course.title}</b> </h3>
                            <ul className="">
                                <li className=""><span className="material-icons-outlined">video_library</span> Course Duration : {course.duration} Hours</li>
                                <li className=""><span className="material-icons-outlined">access_time</span> Course Level : {course.level} </li>
                                <li className=""><span className="material-icons-outlined">attach_money</span> Course Price : {course.price} Taka</li>
                                <li className=""><span className="material-icons-outlined">description</span> Certificate : {course.certification === 1 ? "Yes" : "No"}</li>
                                <li className=""><span className="material-icons-outlined">people</span> Maximum Students : {course.max_students}</li>
                                <li className=""><span className="material-icons-outlined">library_books</span> Course Mode : {course.mode}</li>
                                <li className=""><span className="material-icons-outlined">event</span> Course Start Date : {course.start_date}</li>
                                <li className=""><span className="material-icons-outlined">event</span> Course End Date : {course.end_date}</li>
                                <li className=""><span className="material-icons-outlined">person</span> Course Instructor : {course.instructor.name}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-3">
                        <div className="course-details-right">
                            <Carousel/>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row gap-2">
                    <Button type="submit"><span >Join Batch</span>  </Button>
                    <Button type="submit"><span >Share With <span class="material-icons-outlined">share</span></span></Button>
                </div>
                
            </div>
        </div>
    );
}

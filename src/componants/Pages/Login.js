import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import styles from "../../styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Constants from "../../assets/URL/BASE_URL";

export default function Login() {
    
    const [input, setInput] = useState({});
    const [errors, setError] = useState([]);
    const [responseMessage, setResponseMessage] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);
    const handleInput = (e) => {
        setError((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: null,
        }));
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        setResponseMessage(null);
    };
    const handleSubmit = async (e) => {
        console.log('clicked');
        e.preventDefault();
        try {
            const response = await axios.post(`${Constants.BASE_URL}/login`, input);
            console.log(response.data.status_message);
            if (response && response.data && response.data.status_message) {
                if (response.data.status === false) {
                    setResponseMessage(response.data.status_message);
                } else {
                    const name = response.data.data.user.name;
                    const token = response.data.data.token;
                    localStorage.setItem("name", name);
                    localStorage.setItem("token", token);
                    window.location.href = '/';
                }
            }
        } catch (errors) {
            if (errors.response && errors.response.status === 422) {
                setError(errors.response.data.errors);
            } else {
                console.error("An unexpected error occurred:", errors);
            }
        }
    };
    console.log(input);
    return (
        <>
            <h1>Login To your Account</h1>
            <div className="column login">
                <Illustration />
                <Form className={`${styles.login} `} >
                    <TextInput
                        onChange={handleInput}
                        name="email_or_phone"
                        type="email"
                        placeholder="Enter Email"
                        icon="alternate_email"
                    />
                    {errors.email_or_phone && (
                        <p className="error-response">
                            {errors.email_or_phone[0]}
                        </p>
                    )}
                    {responseMessage && (
                        <p className="error-response">
                            {responseMessage}
                        </p>
                    )}
                    <TextInput
                        onChange={handleInput}
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        icon="lock"
                    />
                    {errors.password  && (
							<p className="error-response">
								{errors.password[0]}
							</p>
						)}
                    <Checkbox text="I agree to the Terms & Conditions" />
                    <Button onClick={handleSubmit} type="submit"><span >Submit now</span>  </Button>
                    
                    <div className="info">
                        Don't have an account? <Link to="/signup">SignUp</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    )
}
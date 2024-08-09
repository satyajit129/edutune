import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import styles from "../../styles/Signup.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Constants from "../../assets/URL/BASE_URL";


export default function Signup() {
    const [input, setInput] = useState({});
    const [errors, setError] = useState([]);
    const handleInput = (e) => {
        setError(prevErrors => ({
            ...prevErrors,
            [e.target.name]: null,
        }));
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${Constants.BASE_URL}/register`, input);
            console.log(response);
            const name = response.data.data.user.name;
            const token = response.data.data.token;
            localStorage.setItem('name', name);
            localStorage.setItem('token', token);
            window.location.href = '/';
        } catch (errors) {
            // eslint-disable-next-line no-cond-assign
            if (errors.response.status = '422') {
                setError(errors.response.data.errors);
            }
        }
    };
    return (
        <div>
            <h1 >Create an account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${styles.signup} `} >
                    <TextInput
                        onChange={handleInput}
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        icon="person"
                    />
                    {errors.name && (
                            <p className="error-response">{errors.name[0]}</p>
                        )}
                    <TextInput
                        onChange={handleInput}
                        name="phone"
                        type="text"
                        placeholder="Enter Mobile Number"
                        icon="phone"
                    />
                    {errors.phone  && (
                            <p className="error-response">{errors.phone[0]}</p>
                        )}
                    <TextInput
                        onChange={handleInput}
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        icon="alternate_email"
                    />
                    {errors.email && (
                            <p className="error-response">{errors.email[0]}</p>
                        )}
                    <TextInput
                        onChange={handleInput}
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        icon="lock"
                    />
                    {errors.password && (
                            <p className="error-response">{errors.password[0]}</p>
                        )}
                    <Checkbox text="I agree to the Terms & Conditions" />
                    <Button onClick={handleSubmit} type="submit"><span className="">Submit now</span> </Button>
                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </div>
    )
}
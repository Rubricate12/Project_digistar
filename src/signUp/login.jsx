import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import "./signUp.css"; // Ensure this file contains the necessary styles

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoginSuccess, setIsLoginSuccess] = useState(false); // State for success pop-up
    const navigate = useNavigate();

    const postLoginDetails = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (data.status === 200) {
                localStorage.setItem("access_token", data.access_token);
                setIsLoginSuccess(true); // Show success pop-up
            } else {
                handleErrors(data.errors);
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred. Please try again.");
        }
    };

    const handleErrors = (errors) => {
        if (errors) {
            setErrors(errors);
        } else {
            alert("An error occurred. Please try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            postLoginDetails();
            setEmail("");
            setPassword("");
        }
    };

    const validateForm = () => {
        const errors = {};
        let isValid = true;

        if (!email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const gotoSignUpPage = () => navigate("/signUp");

    const closeModal = () => {
        setIsLoginSuccess(false);
        navigate("/dashboard"); // Redirect to dashboard after login
    };

    return (
        <div>
            <Navbar />
            <div className='containers'>
                <h2 className='title'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email" className="label">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                
                    <div className="input-group">
                        <label htmlFor="password" className="label">Password:</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input"
                        />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                
                    <button className="button" type="submit">Login</button>
                </form>

                <div className="promo">
                    Don't have an account?{" "}
                    <span className='link-to-login' onClick={gotoSignUpPage}>
                        Sign up
                    </span>
                </div>
            </div>

            <Footer />

            {/* Pop-up Modal */}
            {isLoginSuccess && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Login Successful!</h3>
                        <p>Welcome back! You have successfully logged in.</p>
                        <button onClick={closeModal} className="button">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;

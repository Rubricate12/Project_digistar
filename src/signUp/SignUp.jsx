import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./signUp.css";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        phone: "",
        birthDate: "",
        gender: "",
        address: "",
        termsAccepted: false,
    });
    const [errors, setErrors] = useState({});
    const [captcha, setCaptcha] = useState(""); // For the captcha field
    const [isSignUpSuccess, setIsSignUpSuccess] = useState(false); // For success pop-up
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        
        if (!formData.password.trim()) newErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        
        if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions";

        // Example validation for captcha
        if (captcha.trim() !== "12345") newErrors.captcha = "Invalid captcha";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Simulate successful sign-up process
            setIsSignUpSuccess(true);
        }
    };

    const closeModal = () => {
        setIsSignUpSuccess(false);
        navigate("/dashboard"); // Redirect to dashboard after successful sign up
    };

    return (
        <div>
            <Navbar />
            <div className="containers">
                <h2 className="title">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    {/* Nama Lengkap */}
                    <div className="input-group">
                        <label htmlFor="firstName" className="label">First Name:</label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="input"
                        />
                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="lastName" className="label">Last Name:</label>
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="input"
                        />
                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                    </div>

                    {/* Alamat Email */}
                    <div className="input-group">
                        <label htmlFor="email" className="label">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input"
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>

                    {/* Username (Opsional) */}
                    <div className="input-group">
                        <label htmlFor="username" className="label">Username (Optional):</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="input"
                        />
                    </div>

                    {/* Kata Sandi */}
                    <div className="input-group">
                        <label htmlFor="password" className="label">Password:</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="input"
                        />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>

                    {/* Konfirmasi Kata Sandi */}
                    <div className="input-group">
                        <label htmlFor="confirmPassword" className="label">Confirm Password:</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="input"
                        />
                        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                    </div>

                    {/* Captcha */}
                    <div className="input-group">
                        <label htmlFor="captcha" className="label">Captcha: Enter "12345"</label>
                        <input
                            id="captcha"
                            type="text"
                            value={captcha}
                            onChange={(e) => setCaptcha(e.target.value)}
                            className="input"
                        />
                        {errors.captcha && <div className="error">{errors.captcha}</div>}
                    </div>

                    {/* Setuju dengan Syarat dan Ketentuan */}
                    <div className="input-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleInputChange}
                            /> I agree with the Terms and Conditions
                        </label>
                        {errors.termsAccepted && <div className="error">{errors.termsAccepted}</div>}
                    </div>

                    {/* Tombol Daftar */}
                    <button className="button" type="submit">Sign Up</button>
                </form>

                {/* Pop-up Modal */}
                {isSignUpSuccess && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>Sign Up Successful!</h3>
                            <p>You have successfully signed up. Welcome aboard!</p>
                            <button onClick={closeModal} className="button">Close</button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;

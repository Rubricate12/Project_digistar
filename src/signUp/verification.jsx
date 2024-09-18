import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './verification.css';

const PhoneVerify = () => {
    const [code, setCode] = useState("");
    const [error, setError] = useState(""); // State for handling errors
    const [loading, setLoading] = useState(false); // State for handling loading
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Clear previous errors

        try {
            // Simulate API call
            // Replace this with actual API request
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/verify`, {
                method: "POST",
                body: JSON.stringify({ code }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();

            if (data.success) {
                navigate("/dashboard");
            } else {
                setError(data.message || "Verification failed. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='verify'>
            <h2 className='verify__title'>Verify your Phone Number</h2>
            <form className='verify__form' onSubmit={handleSubmit}>
                <label htmlFor='code' className='verify__label'>
                    A code has been sent to your phone
                </label>
                <input
                    type='text'
                    name='code'
                    id='code'
                    className='verify__input'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                    placeholder="Enter verification code"
                />
                {error && <div className='verify__error'>{error}</div>}
                <button className='verify__button' type='submit' disabled={loading}>
                    {loading ? "Authenticating..." : "Authenticate"}
                </button>
            </form>
        </div>
    );
};

export default PhoneVerify;

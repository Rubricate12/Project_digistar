import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="socials">
                <a href="https://www.facebook.com" className="link" aria-label="Facebook">
                    <CiFacebook />
                </a>
                <a href="https://twitter.com" className="link" aria-label="Twitter">
                    <AiFillTwitterCircle />
                </a>
                <a href="https://www.instagram.com" className="link" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com" className="link" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
            </div>

            <ul className="list">
                <li>
                    <Link to="/" className="links">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/map" className="links">
                        Map
                    </Link>
                </li>
                <li>
                    <Link to="/download" className="links">
                        Download
                    </Link>
                </li>
                <li>
                    <Link to="/privacy-policy" className="links">
                        Privacy Policy
                    </Link>
                </li>
            </ul>

            <p className="copyright">
                Zidio development © 2024
            </p>
        </div>
    );
}

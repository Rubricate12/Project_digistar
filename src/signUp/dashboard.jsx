import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../signUp/dashboard.css";
import notify from "../assets/notif-icon.png";
import search from "../assets/search-icon.png";
import userImg from "../assets/avatar-img.png"; // Pastikan path ini benar

const Dashboard = () => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => setActive(!isActive);
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = () => {
            if (!localStorage.getItem("username")) {
                navigate("/login"); // Redirect ke login jika tidak ada username
            }
        };
        checkUser();
    }, [navigate]);

    const handleSignOut = () => {
        localStorage.removeItem("username");
        navigate("/"); // Redirect ke halaman utama setelah logout
    };

    return (
        <div className='dashboard'>
            <section id="sidebar" className={isActive ? "hide" : ""}>
                <a href="#" className="brand">
                    <i className="bx bxs-smile"></i>
                    <span className="text">Welcome Howdy</span>
                </a>

                <ul className="side-menu-top">
                    <li className="active">
                        <a href="#">
                            <i className="bx bxs-dashboard"></i>
                            <span className="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-user"></i>
                            <span className="text">User</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-doughnut-chart"></i>
                            <span className="text">Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-message-dots"></i>
                            <span className="text">Message</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-map"></i>
                            <span className="text">Map</span>
                        </a>
                    </li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <a href="#">
                            <i className="bx bxs-cog"></i>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="logout" onClick={handleSignOut}>
                            <i className="bx bxs-log-out-circle"></i>
                            <span className="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>
            <section id="content">
                <nav>
                    <i className="bx bx-menu" onClick={toggleClass}></i>
                    <a href="#" className="nav-link">
                        Categories
                    </a>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                            <button type="button" className="search-btn">
                                <img src={search} alt="Search" />
                            </button>
                        </div>
                    </form>
                    <a href="#" className="notification">
                        <img src={notify} alt="Notifications" />
                        <span className="num">8</span>
                    </a>
                    <a href="#" className="profile">
                        <img src={userImg} alt="Profile" />
                    </a>
                </nav>
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Howdy David</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                </li>
                                <li>
                                    <a href="#" className="active">
                                        Home
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ul className="box-info">
                        <li>
                            <i className="bx bxs-user"></i>
                            <span className="text">
                                <h3>Howdy</h3>
                                <p>New User</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-map-pin"></i>
                            <span className="text">
                                <h3>Location</h3>
                                <p>Lagos, Nigeria</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-time"></i>
                            <span className="text">
                                <h3>Time</h3>
                                <p>12:04pm</p>
                            </span>
                        </li>
                    </ul>
                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>Location History</h3>
                                <i className="bx bx-search"></i>
                                <i className="bx bx-filter"></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Location</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={userImg} alt="User" />
                                            <p>Howdy David</p>
                                        </td>
                                        <td>Lagos, Nigeria</td>
                                        <td>
                                            <span className="status completed">15:00pm</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={userImg} alt="User" />
                                            <p>Howdy David</p>
                                        </td>
                                        <td>Abuja, Nigeria</td>
                                        <td>
                                            <span className="status pending">23:45pm</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={userImg} alt="User" />
                                            <p>Howdy David</p>
                                        </td>
                                        <td>Barcelona, Spain</td>
                                        <td>
                                            <span className="status process">09:15am</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={userImg} alt="User" />
                                            <p>Howdy David</p>
                                        </td>
                                        <td>New York</td>
                                        <td>
                                            <span className="status pending">11:30am</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default Dashboard;

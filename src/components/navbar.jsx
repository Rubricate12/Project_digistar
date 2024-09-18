import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import cancel from '../assets/cancel-icon.svg';
import search from '../assets/search-icon.png';
import bookmark from '../assets/bookmark-icon.svg';
import notify from '../assets/notif-icon.png';
import avatar from '../assets/avatar-img.png';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isSearchBarOut, setIsSearchBarOut] = useState(false);
  const inputRef = useRef(null);
  const isLoggedIn = false; // Update this based on authentication state

  const handleSearchClick = () => {
    setIsSearchBarOut(!isSearchBarOut);
  };

  // Ensure inputRef.current is not null before calling focus()
  useEffect(() => {
    if (inputRef.current && isSearchBarOut) {
      inputRef.current.focus();
    }
  }, [isSearchBarOut]);

  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo-container">
          <NavLink to='/'>
            <img src={logo} alt="Logo" height={50} />
          </NavLink>
        </div>

        <ul className="header-links">
          <NavLink to="/" exact activeClassName="active">
            <li>Home</li>
          </NavLink>
          <NavLink to="/map" activeClassName="active">
            <li>Map</li>
          </NavLink>
          <NavLink to="#" aria-disabled="true">
            <li>Download</li>
          </NavLink>
        </ul>
      </div>
      <div className="header-right">
        {isSearchBarOut && (
          <div className="header-input-container">
            <img src={search} alt="Search" />
            <input type="text" ref={inputRef} placeholder="Search..." />
            <img
              src={cancel}
              alt="Cancel"
              className="cancel-icon"
              onClick={() => setIsSearchBarOut(false)}
              aria-label="Close search bar"
            />
          </div>
        )}

        <div className="header-tags">
          <ul>
            {!isSearchBarOut && (
              <li onClick={handleSearchClick} className="header-tag-search">
                <img src={search} alt="Search" />
              </li>
            )}
            <li className="header-tag-bookmark">
              <img src={bookmark} alt="Bookmark" />
            </li>
            <li className="header-tag">
              <img src={notify} alt="Notification" />
            </li>
          </ul>
        </div>

        {isLoggedIn ? (
          <div className="avatar-container">
            <img src={avatar} alt="Avatar" />
          </div>
        ) : (
          <div className="header-buttons">
            <Link to="/login">
              <button className="header-login">Login</button>
            </Link>
            <Link to="/signup">
              <button className="header-signup">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

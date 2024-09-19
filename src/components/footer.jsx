import React from "react";
import { NavLink } from "react-router-dom";
import { FaRoute } from "react-icons/fa";  // Icon for Routes
import { MdDeliveryDining } from "react-icons/md";  // Icon for Delivery
import { FiMapPin } from "react-icons/fi";  // Icon for Track

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer navigation with icons */}
        <ul className="footer-nav">
          <li>
            <NavLink to="/routes" className="footer-link" activeClassName="active">
              <FaRoute className="footer-icon" />
              <span className="footer-text">Routes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/delivery" className="footer-link" activeClassName="active">
              <MdDeliveryDining className="footer-icon" />
              <span className="footer-text">Delivery</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/track" className="footer-link" activeClassName="active">
              <FiMapPin className="footer-icon" />
              <span className="footer-text">Track</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

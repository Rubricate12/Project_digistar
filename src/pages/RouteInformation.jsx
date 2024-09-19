import React from 'react';
import './RouteInformation.css';

const RouteInformation = () => {
  return (
    <div className="route-info-container">
      <div className="map-section">
        <div className="map-placeholder">
          {/* Replace this with your actual map */}
          <p>Map will go here</p>
        </div>
      </div>

      <div className="route-info-section">
        <div className="order-details">
          <p>Order ID #457898</p>
          <p>Weight: 2.5 kg</p>
          <p className="on-delivery-status">On Delivery</p>
        </div>

        <div className="route-summary">
          <p>135 km - 5 stops</p>
          <p>Started: 13:35 PM</p>
          <p>Updates every 1 hour</p>
        </div>

        <div className="stops-section">
          <div className="stop">
            <p><strong>JL Karika Utama, South Jakarta</strong></p>
            <p>Pick-up (400 meters away)</p>
            <p>13:35 PM</p>
          </div>

          <div className="stop">
            <p><strong>JL Metro Pondok Indah, South Jakarta</strong></p>
            <p>4 min (1.0 km)</p>
            <p>13:39 PM</p>
          </div>

          <div className="stop">
            <p><strong>JL Pejompongan Raya, Central Jakarta</strong></p>
            <p>15 min (8.5 km)</p>
            <p>13:54 PM</p>
          </div>

          <div className="stop">
            <p><strong>JL Jenderal Sudirman, Central Jakarta</strong></p>
            <p>13 min (4.8 km)</p>
            <p>14:10 PM</p>
          </div>
        </div>

        <button className="refresh-btn">Refresh Route</button>
      </div>
    </div>
  );
};

export default RouteInformation;

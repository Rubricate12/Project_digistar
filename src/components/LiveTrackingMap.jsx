import React from 'react';
import './LiveTrackingMap.css'; // Sesuaikan dengan file CSS Anda

const LiveTrackingMap = ({ order }) => {
  return (
    <div className="live-tracking">
      <div className="order-header">
        <h3>Order ID #{order.id}</h3>
        <button className="on-delivery">On Delivery</button>
      </div>
      
      {/* Bagian Peta dengan Google Maps */}
      <div className="map">
        <iframe
          src={`https://maps.google.com/maps?q=${order.location.lat},${order.location.lng}&z=15&output=embed`}
          width="100%"
          height="200"
          frameBorder="0"
          title="Live Map"
          allowFullScreen
        ></iframe>
      </div>

      {/* Informasi Driver dan Status */}
      <div className="driver-info">
        <h4>Driver: {order.driver}</h4>
        <div className="status-updates">
          {order.updates.map((update, index) => (
            <div key={index} className={`status-update ${update.type}`}>
              <div className="status-circle"></div> {/* Titik status */}
              <p className="status-message">{update.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTrackingMap;

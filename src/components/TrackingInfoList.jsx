import React from 'react';
import './TrackingInfoList.css'; // Pastikan file CSS sudah ada

const TrackingInfoList = ({ orders }) => {
  return (
    <div className="tracking-info">
      <div className="header">
        <h2>Tracking Information</h2>
        <div className="tabs">
          <button className="active">Ongoing</button>
          <button>Completed</button>
        </div>
      </div>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <div className="order-header">
              <span>Order ID #{order.id}</span>
              <span>{order.time}</span>
            </div>
            <div className="locations">
              <p><strong>Pick-up Location:</strong></p>
              <p>{order.pickUp}</p>
              <p><strong>Destination Location:</strong></p>
              <p>{order.destination}</p>
            </div>
            
            {/* Status update list */}
            <div className="tracking-updates">
              {order.updates.map((update, idx) => (
                <div key={idx} className="tracking-item">
                  {/* Waktu Update */}
                  <div className="tracking-time">{order.time}</div>

                  {/* Status Icon */}
                  <div className="tracking-status">
                    <div className={`circle ${update.type}`}></div>
                    <div className="tracking-details">
                      <p>{update.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="delivery-status">On Delivery</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingInfoList;

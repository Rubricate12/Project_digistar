// src/pages/DeliveryActivity.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DeliveryActivity.css'; // Assuming CSS styles are added here

function DeliveryActivity() {
  const navigate = useNavigate();

  // Mock data for orders
  const orders = [
    {
      id: '457898',  // Remove the '#' from the ID for navigation
      displayId: '#457898',  // Keep the '#' for display purposes
      pickUp: 'PQM#P7 Pondok Pinang, South Jakarta City, Jakarta',
      destination: 'RR3C+XC Menteng, Central Jakarta City, Jakarta',
      status: 'On Delivery',
      date: '13 Nov 16:35 PM',
    },
    // Add more orders if needed
  ];

  // Function to handle arrow click
  const handleOrderClick = (orderId) => {
    navigate(`/order-summary/${orderId}`);  // Navigate using the ID without '#'
  };

  return (
    <div className="delivery-activity">
      <h2>Delivery Activity</h2>

      <div className="tab">
        <button className="tab-button active">Ongoing</button>
        <button className="tab-button">Completed</button>
      </div>

      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-info">
              <p>Order ID {order.displayId}</p>  {/* Display with '#' */}
              <p><strong>Pick-up Location:</strong> {order.pickUp}</p>
              <p><strong>Destination Location:</strong> {order.destination}</p>
            </div>
            <div className="order-footer">
              <p>{order.date} <span className="status">{order.status}</span></p>
              <button 
                className="arrow-button" 
                onClick={() => handleOrderClick(order.id)}  // Pass the ID without '#'
              >
                ➔
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryActivity;

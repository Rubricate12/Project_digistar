// src/pages/OrderSummary.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './OrderSummary.css'; 

function OrderSummary() {
  const { orderId } = useParams();

  // You can fetch or use mock data based on orderId
  const order = {
    id: '#457898',
    weight: '2.5 kg',
    pickUp: 'PQM#P7 Pondok Pinang, South Jakarta City, Jakarta',
    destination: 'RR3C+XC Menteng, Central Jakarta City, Jakarta',
    shipper: 'Calvin Benjamin',
    driver: 'Silas Theodore',
    date: 'Wednesday, 13 Nov 14:35 PM',
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p><strong>Order delivered</strong></p>
      <p>{order.date} <span>Order ID {order.id}</span></p>

      <div className="order-details">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Weight:</strong> {order.weight}</p>
        <p><strong>Pick-up:</strong> {order.pickUp}</p>
        <p><strong>Destination:</strong> {order.destination}</p>
        <button className="live-tracking-button">Live Tracking</button>
      </div>

      <div className="contact-section">
        <h3>Shipper</h3>
        <p>{order.shipper}</p>
        <button className="contact-button">Call</button>
        <button className="contact-button">Message</button>

        <h3>Driver</h3>
        <p>{order.driver}</p>
        <button className="contact-button">Call</button>
        <button className="contact-button">Message</button>
      </div>
    </div>
  );
}

export default OrderSummary;

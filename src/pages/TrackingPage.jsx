import React, { useState } from 'react';
import TrackingInfoList from '../components/TrackingInfoList';
import LiveTrackingMap from '../components/LiveTrackingMap';

const TrackingPage = () => {
  const [orders] = useState([
    {
      id: '457898',
      time: '13 Nov 14:35 PM',
      pickUp: 'PGMM+P7 Pondok Pinang, South Jakarta City, Jakarta',
      destination: 'RR3C+XC Menteng, Central Jakarta City, Jakarta',
      location: { lat: -6.200000, lng: 106.816666 },
      driver: 'Silas Theodore',
      updates: [
        { type: 'active', message: 'Package is on Jl. Pejompongan Raya, Central Jakarta' },
        { type: 'warning', message: 'The driver is taking a break. Location updates will be made soon' },
        { type: 'normal', message: 'Package is on Jl. Metro Pondok Indah, South Jakarta' },
      ]
    },
    // Add more orders here
  ]);

  const currentOrder = orders[0]; // Mengambil order pertama untuk tracking

  return (
    <div className="tracking-page">
      <TrackingInfoList orders={orders} />
      <LiveTrackingMap order={currentOrder} />
    </div>
  );
};

export default TrackingPage;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet-routing-machine';
import './map.css';

const MapWithTracking = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(null);
  const [isTrackingPaused, setIsTrackingPaused] = useState(false);
  const [destination, setDestination] = useState(null);
  const watchIdRef = useRef(null);
  const markerRef = useRef(null); // Reference for marker
  const destinationMarkerRef = useRef(null); // Reference for destination marker
  const routingControlRef = useRef(null); // Reference for routing control
  const [address, setAddress] = useState(''); // For address input
  const [distance, setDistance] = useState(''); // To store calculated distance
  const navigate = useNavigate();

  // Initialize the map
  useEffect(() => {
    const leafletMap = L.map('map').setView([0, 0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap);

    setMap(leafletMap);

    return () => {
      leafletMap.remove();
    };
  }, []);

  // Update map and position when user location changes
  useEffect(() => {
    if (map && position) {
      const { latitude, longitude } = position;

      // Remove previous marker if it exists
      if (markerRef.current) {
        map.removeLayer(markerRef.current);
      }

      // Create and add new marker
      const marker = L.marker([latitude, longitude]).addTo(map);
      markerRef.current = marker; // Store the marker in the ref

      // Update the map's view if tracking is not paused
      if (!isTrackingPaused) {
        map.setView([latitude, longitude], 13);
      }

      // If destination is set, update the route
      if (destination) {
        updateRoute();
      }
    }
  }, [map, position, destination, isTrackingPaused]);

  // Start tracking user's position
  const startTracking = () => {
    if (!watchIdRef.current) {
      if ('geolocation' in navigator) {
        watchIdRef.current = navigator.geolocation.watchPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            setPosition({ latitude, longitude });
          },
          (err) => console.error('Geolocation error:', err),
          { enableHighAccuracy: true, maximumAge: 0 }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }
  };

  // Stop tracking user's position
  const stopTracking = () => {
    if (watchIdRef.current) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
  };

  // Toggle tracking pause
  const togglePauseTracking = () => {
    setIsTrackingPaused(prevState => !prevState);
  };

  // Fetch coordinates from address using Nominatim API
  const searchAddress = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`
      );

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];

        // Set destination marker
        if (destinationMarkerRef.current) {
          map.removeLayer(destinationMarkerRef.current);
        }

        const destinationMarker = L.marker([lat, lon]).addTo(map);
        destinationMarkerRef.current = destinationMarker;

        // Center map to destination
        map.setView([lat, lon], 13);

        // Save destination
        setDestination({ latitude: lat, longitude: lon });
      } else {
        alert('Address not found');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      alert('An error occurred while fetching the location.');
    }
  };

  // Update the route between user's current position and destination
  const updateRoute = () => {
    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
    }

    if (position && destination) {
      const { latitude: startLat, longitude: startLng } = position;
      const { latitude: destLat, longitude: destLng } = destination;

      // Create routing control and add to the map
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(startLat, startLng),
          L.latLng(destLat, destLng)
        ],
        routeWhileDragging: true
      }).addTo(map);

      routingControlRef.current = routingControl;

      // Calculate and display distance
      routingControl.on('routesfound', function (e) {
        const route = e.routes[0];
        const routeDistance = route.summary.totalDistance / 1000; // Convert to kilometers
        setDistance(`${routeDistance.toFixed(2)} km`);
      });
    }
  };

  const gotoHistory = () => navigate("/history");
  const gotoHome = () => navigate("/");

  return (
    <div className='map-content'>
      <div id="map" style={{ width: '100%', height: '400px' }} />

      {/* Input for address */}
      <div className='destination-input'>
        <input
          type='text'
          placeholder='Enter address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className='tracking-btn' onClick={searchAddress}>
          Search Address
        </button>
      </div>

      <div className='tracking-content'>
        <button className='tracking-btn' onClick={startTracking}>Start</button>
        <button className='tracking-btn' onClick={stopTracking}>Stop</button>
        <button className='tracking-btn' onClick={togglePauseTracking}>
          {isTrackingPaused ? 'Resume' : 'Pause'}
        </button>
      </div>

      {/* Tombol untuk mulai navigasi */}
      {position && destination && (
        <div className='tracking-content'>
          <button className='tracking-btn' onClick={updateRoute}>
            Show Route
          </button>
        </div>
      )}

      {/* Display distance */}
      {distance && (
        <div className='distance-display'>
          <p>Distance to destination: {distance}</p>
        </div>
      )}

      <div className='tracking-content'>
        <button onClick={gotoHistory} className='tracking-btn'>
          View History
        </button>
        <button onClick={gotoHome} className='tracking-btn'>
          Home
        </button>
      </div>
    </div>
  );
};

export default MapWithTracking;

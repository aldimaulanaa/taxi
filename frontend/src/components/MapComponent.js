import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

const MapComponent = ({ trips }) => {
  return (
    <MapContainer center={[40.7128, -74.0060]} zoom={12} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {trips.map(trip => (
        <Polyline positions={trip.route} key={trip.id} />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
import React, { useRef } from 'react';
import { useGoogleMap, useMap } from '../hooks/googleMap'

const initialConfig = {
  zoom: 12,
  center: { lat: 40.740, lng: -74.18 }
}

function GoogleMap() {
  const googleMap = useGoogleMap(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  const mapContainerRef = useRef(null);
  useMap({ googleMap, mapContainerRef, initialConfig });
  return (
    <div
      style={{height: "100vh", width: "100%"}}
      ref={mapContainerRef}
    />
  );
}

export default GoogleMap;

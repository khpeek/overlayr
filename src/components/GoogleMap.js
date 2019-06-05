import React from 'react';
import useGoogleMap from '../hooks/useGoogleMap'

const options = {
  zoom: 12,
  center: { lat: 40.740, lng: -74.18 }
}

export default function GoogleMap(props) {
  const { maps, map, mapRef, loading } = useGoogleMap(options);

  return (
    <div className="map-container">
      <div
        style={{height: "100vh", width: "100%"}}
        ref={mapRef}
      />
      {React.Children.map(
        props.children,
        child => React.cloneElement(child, {map, maps}))}
    </div>
  );
}


// function GoogleMap() {
//   const googleMap = useGoogleMap(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
//   const mapContainerRef = useRef(null);
//   useMap({ googleMap, mapContainerRef, initialConfig });
//   return (
//     <div
//       style={{height: "100vh", width: "100%"}}
//       ref={mapContainerRef}
//     />
//   );
// }
//
// export default GoogleMap;

import {useState, useEffect, useRef } from 'react';
import GoogleMapsApiLoader from 'google-maps-api-loader';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function useGoogleMap(options) {
  const [mapState, setMapState] = useState();
  const mapRef = useRef();

  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      const map = new google.maps.Map(mapRef.current, options);
      setMapState({ maps: google.maps, map });
    });
  }, [options]);
  return { mapRef, ...mapState };
}


// function useGoogleMap(apiKey) {
//   const [googleMap, setGoogleMap] = useState(null);
//
//   useEffect(() => {
//     GoogleMapsApiLoader({ apiKey }).then(setGoogleMap)
//   }, [apiKey])
//
//   return googleMap;
// }
//
// function useMap({googleMap, mapContainerRef, initialConfig}) {
//   const [map, setMap] = useState(null);
//
//   useEffect(() => {
//     if (!googleMap || !mapContainerRef.current) {
//       return;
//     }
//
//     const map = new googleMap.maps.Map(
//       mapContainerRef.current,
//       initialConfig
//     );
//
//     const imageBounds = {
//       north: 40.773941,
//       south: 40.712216,
//       east: -74.12544,
//       west: -74.22655
//     };
//
//     const overlay = new googleMap.maps.GroundOverlay(
//        'https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
//        imageBounds
//     );
//
//     overlay.setMap(map);
//     overlay.setOpacity(0.5);
//
//     setMap(map);
//   }, [googleMap, mapContainerRef, initialConfig]);
//
//   return map;
// };
//
// export { useGoogleMap, useMap };

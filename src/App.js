import React from 'react';
import './App.css';
import GoogleMap from './components/GoogleMap';
import GroundOverlay from './components/GroundOverlay';

function App() {
  return (
    <div className="App">
      <GoogleMap>
        <GroundOverlay
          url='https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg'
          bounds={{
            north: 40.773941,
            south: 40.712216,
            east: -74.12544,
            west: -74.22655 }}
        />
      </GoogleMap>
    </div>
  );
}

export default App;

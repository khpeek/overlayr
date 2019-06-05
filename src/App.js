import React, { useState } from 'react';
import './App.css';
import Map from './components/Map'
import GroundOverlay from './components/GroundOverlay';

function App() {
  const [bounds, setBounds] = useState({});

  return (
    <div className="App">
      <Map
        zoom={12}
        center={{ lat: 40.740, lng: -74.18 }}
        events={{ onBoundsChanged: arg => setBounds(arg) }}
      >
        <GroundOverlay
          url='https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg'
          bounds={{
            north: 40.773941,
            south: 40.712216,
            east: -74.12544,
            west: -74.22655
          }}
          opacity={0.5}/>
      </Map>
    </div>
  );
}

export default App;

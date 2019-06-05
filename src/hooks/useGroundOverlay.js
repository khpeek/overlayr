import { useState, useEffect } from 'react';

export default function useGroundOverlay({ url, bounds, maps, map, ...options }) {
  const [overlay, setOverlay] = useState();

  useEffect(() => {
    const groundOverlay = new maps.GroundOverlay(url, bounds, options);
    groundOverlay.setMap(map);

    setOverlay(groundOverlay);
  }, [url, bounds, options, map, maps]);

  return overlay;
}

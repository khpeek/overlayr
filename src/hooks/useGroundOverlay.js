import { useEffect, useState } from "react";

export default function useGroundOverlay({
  url,
  bounds,
  maps,
  map,
  opacity
}) {
  const [groundOverlay, setGroundOverlay] = useState();
  useEffect(() => {
    const groundOverlay = new maps.GroundOverlay(
      url,
      bounds
    );
    groundOverlay.setMap(map);
    groundOverlay.setOpacity(opacity);

    setGroundOverlay(groundOverlay);
  }, [opacity]);

  return groundOverlay;
}

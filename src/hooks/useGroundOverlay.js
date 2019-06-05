import { useEffect, useState } from "react";

const eventMapping = {
  onClick: "click",
  onDoubleClick: "dblclick"
};

export default function useGroundOverlay({
  url,
  bounds,
  maps,
  map,
  events,
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

    // Object.keys(events).forEach(eventName =>
    //   groundOverlay.addListener(eventMapping[eventName], events[eventName])
    // );
    setGroundOverlay(groundOverlay);
  }, []);

  return groundOverlay;
}

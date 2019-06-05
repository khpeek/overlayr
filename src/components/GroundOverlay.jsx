import useGroundOverlay from '../hooks/useGroundOverlay';

export default function GroundOverlay({
  url,
  bounds,
  maps,
  map,
  events,
  opacity
}) {
  useGroundOverlay({
    url,
    bounds,
    maps,
    map,
    events,
    opacity
  });

  return null;
}

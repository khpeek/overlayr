import useGroundOverlay from '../hooks/useGroundOverlay';

export default function GroundOverlay({ url, bounds, maps, map, ...options }) {
  useGroundOverlay({ url, bounds, maps, map, ...options });
  return null;
}

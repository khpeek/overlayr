import { useEffect, useState, useRef } from 'react'

export default function useSearchBox({ maps, map }) {
  const [searchBox, setSearchBox] = useState();
  const searchBoxRef = useRef();

  useEffect(() => {
    const searchBox = new maps.places.SearchBox(searchBoxRef.current);
    map.controls[maps.ControlPosition.TOP_LEFT].push(searchBoxRef.current);

    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    })

    searchBox.addListener('places_changed', function() {
      const places = searchBox.getPlaces();

      if (!places) {
        return;
      }

      let bounds = new maps.LatLngBounds();
      places.forEach(function(place) {
        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    })

    setSearchBox(searchBox);
  }, [])
  return { searchBox, searchBoxRef }
}

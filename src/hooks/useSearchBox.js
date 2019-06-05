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

    setSearchBox(searchBox);
  }, [])
  return { searchBox, searchBoxRef }
}

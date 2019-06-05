import React from 'react';
import useSearchBox from '../hooks/useSearchBox';

export default function SearchBox({ maps, map }) {
  const { searchBox, searchBoxRef } = useSearchBox({ maps, map });

  return (
    <input
      ref={searchBoxRef}
      type="text"
      placeholder="Search Box"
    />
  );
}

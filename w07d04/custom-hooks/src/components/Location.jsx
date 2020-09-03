import React from 'react';
import useLocationData from '../hooks/useLocationData';

const Location = () => {
  const coords = useLocationData();

  return (
    <div>
      <button 
        onClick={() => alert(`lat: ${coords.lat}, lon: ${coords.lon}`)}
      >
        See your location!
      </button>
    </div>
  )
};

export default Location

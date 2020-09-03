import { useEffect, useState } from 'react';

const useMousePosition = () => {
  // set up state
  const [coords, setCoords] = useState({x: 0, y: 0});

  // attach an event listener to the document
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };
    
    document.addEventListener('mousemove', mouseMoveHandler);

    const cleanup = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    return cleanup;
  }, []);

  return coords;
};

export default useMousePosition;

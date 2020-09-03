import React from 'react';
import useMousePosition from '../hooks/useMousePosition';
import useDocumentTitle from '../hooks/useDocumentTitle';

const MouseMove = () => {
  const coords = useMousePosition();
  useDocumentTitle(`x: ${coords.x}, y: ${coords.y}`);

  const style = {
    fontSize: `${coords.y / 5}px`,
    color: `rgb(${coords.x / 4}, ${coords.y / 4}, 0)`,
    backgroundColor: `rgb(0, ${coords.x / 4}, ${coords.y / 4})`,
    padding: '10px',
    border: `10px dotted rgb(${coords.y / 4}, 0, ${coords.x / 4})` 
  };

  return (
    <div>
      <h1 style={style}>Mouse Move</h1>
      <h2>X: {coords.x}, Y: {coords.y}</h2>
    </div>
  )
};

export default MouseMove;

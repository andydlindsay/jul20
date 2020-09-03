import React from 'react'
import useKeyPress from '../hooks/useKeyPress';

const KeyPress = () => {
  const hPressed = useKeyPress('h');
  const sPressed = useKeyPress('s');
  const pPressed = useKeyPress('p');

  return (
    <div>
      <h2>Key Press</h2>
      {hPressed && <h1>😀</h1>}
      {sPressed && <h1>😢</h1>}
      {pPressed && <h1>🍕</h1>}
    </div>
  )
}

export default KeyPress

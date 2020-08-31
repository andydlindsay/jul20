import React from 'react';
import './App.css';
import Button from './components/Button';

const App = () => {
  const [value, setValue] = React.useState('register');

  const handleClick = () => {
    setValue('goodbye');
  };

  return (
    <div className="App">
      <h1>W07D01 Intro to React</h1>
      <Button
        label={value}
        another="my value??"
        clickHandler={handleClick}
      />
      {/* <Button label="Login"></Button> */}
    </div>
  );
};

export default App;

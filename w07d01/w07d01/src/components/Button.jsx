import React from 'react';

const Button = (props) => {
  // const arr = React.useState('hello');
  // const value = arr[0];
  // const setValue = arr[1];

  console.log('props', props);

  return (
    <div>
      <button 
        onClick={() => props.clickHandler('log in the user')}
        className="button"
      >
        { props.label }
      </button>
    </div>
  );
};

export default Button;

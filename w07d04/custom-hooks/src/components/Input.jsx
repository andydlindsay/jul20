import React, {useState} from 'react';
import useInput from '../hooks/useInput';

const Input = () => {
  const username = useInput('');
  const password = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thanks for logging in! ${username.value} with password: ${password.value}`);
  };

  return (
    <div>
      <h1>Input</h1>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username.value}
          onChange={username.onChange}
        />
        <button type="button" onClick={username.clear}>Clear</button>
        <br/>
        <label>Password</label>
        <input 
          type="text"
          {...password}
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  )
};

export default Input;

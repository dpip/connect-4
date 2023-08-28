// src/components/UserLogin.js
// Component for user login form.

import React, { useState } from 'react';
import axios from 'axios';
import { useGlobalState } from './../context/GlobalStateContext';

// UserLogin component displays a login form for users.
const UserLogin = () => {
  const { state, dispatch } = useGlobalState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handles changes in the username input field.
  const handleUsername = (e) => {
    setUsername(e.target.value)
  };

  // Handles changes in the password input field.
  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  const user = state.username;

  // Handles form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000', {username, password})
    .then((response) => {
        console.log(response) 
        dispatch({type: 'UPDATE_USER', payload: username})
    })
    .catch((error) => {
        console.log(error)
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsername} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePassword} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;

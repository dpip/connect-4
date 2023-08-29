// src/components/UserLogin.js
// Component for user login form.

import React, { useState } from 'react';
import axios from 'axios';
import { useGlobalState } from './../context/GlobalStateContext';
import { useNavigate} from 'react-router-dom';

// UserLogin component displays a login form for users.
const UserLogin = () => {
  const { dispatch } = useGlobalState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 


  // Handles changes in the username input field.
  const handleUsername = (e) => {
    setUsername(e.target.value)
  };

  // Handles changes in the password input field.
  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  // Handles form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000', {username, password})
    .then((response) => {
        console.log(response) 
        const updatedUsername = response.data.username;
        dispatch({type: 'UPDATE_USERNAME', payload: updatedUsername})
        navigate('/welcome');
    })
    .catch((error) => {
        console.log(error)
    })
  };

  return (
    <div>
      <h1>Welcome to Pip's Connect Four Game!</h1>
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

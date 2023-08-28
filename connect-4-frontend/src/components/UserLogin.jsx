// src/components/UserForm.js
import React, { useState } from 'react';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        console.log('User added successfully');
        setUsername('');
        setPassword('');
      } else {
        console.error('Failed to add user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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

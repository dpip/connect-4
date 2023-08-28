// WelcomePage.js
import React from 'react';
import { useGlobalState } from './../context/GlobalStateContext';


const WelcomePage = (props) => {
  const { state } = useGlobalState();
  return (
    <div>
      <h1>Welcome, {state.username}!</h1>
    </div>
  );
};

export default WelcomePage;
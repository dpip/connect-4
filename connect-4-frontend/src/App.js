import React from 'react';
import './App.css';
import UserLogin from './components/UserLogin';
import WelcomePage from './pages/WelcomePage';

const App = (props) => {
  return (
    <div className="App">
      <h1>Welcome to connect 4</h1>
      <WelcomePage />
      <UserLogin />
    </div>
  );
};

export default App;

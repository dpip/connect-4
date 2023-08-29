import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserLogin from './components/UserLogin';
import WelcomePage from './pages/WelcomePage';

const App = (props) => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </div>
  );
};

export default App;

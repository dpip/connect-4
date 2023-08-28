import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserLogin from './components/UserLogin';
import WelcomePage from './pages/WelcomePage';
import { useGlobalState } from './context/GlobalStateContext';

const App = (props) => {
  const { state } = useGlobalState();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLogin globalState={state} />} />
        <Route
          path="/welcome"
          element={<WelcomePage globalState={state} />}
        />
      </Routes>
    </div>
  );
};

export default App;

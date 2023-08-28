import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  // Initial global state properties
  username: ''
};

// Reducer handles state changes
function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_USERNAME':
        return {
            ...state, 
            username: action.payload
        } 
    default:
      return state;
  }
}

// Create the context
const GlobalStateContext = createContext();

// Provider component
export function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// Custom hook to access the context
export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
}

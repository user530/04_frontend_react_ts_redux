import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePageComponent from './app/containers/homepage';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">App component</h1>
      <HomePageComponent />
    </div>
  );
}

export default App;

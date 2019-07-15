import React from 'react';
import './App.css';

import FetchData from './components/FetchData'
import AsteroidData from './components/AsteroidData'

function App() {
  return (
    <div className="App">
      <FetchData />
      <AsteroidData />
    </div>
  );
}

export default App;

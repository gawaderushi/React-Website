import React from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Welcome to My React Website</h1>
        <p>This is a sample website built using React.</p>
      </div>
    </div>
  );
}

export default App;

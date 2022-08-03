// Libraries
import React from 'react';
import './App.css';

// Stylesheets
import './App.css'

// Images and logos
import logo from './images/logo.svg'
import design from './images/illustration-mockups.svg'

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <img src={logo} alt='logo'></img>
        <div className='main-container'>
          <img className='design' src={design} alt='design'></img>
        </div>
      </div>
    </div>
  );
}

export default App;

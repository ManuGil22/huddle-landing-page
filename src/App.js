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
          <div className='description-container'>
            <h2>Build The Community Your Fans Will Love</h2>
            <p className='description'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
             Create connections with your users as you engage in genuine discussion.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Count from './components/Count'
import './App.css'


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Estamos viendo componentes!</h1>
        <Count/>
        
      </header>
    </div>
  );  
}

export default App;
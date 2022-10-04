import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Estamos viendo estados!</h1>
        <h3>El estado actual es: {count}</h3>
        <button onClick={() => setCount (prevCount => prevCount + 1)}>+</button>
        <button onClick={() => setCount (prevCount => Math.max(prevCount - 1, 0))}>-</button>
        <button onClick={() => setCount (0)}>Reset</button>
      </header>
    </div>
  );  
}

export default App;

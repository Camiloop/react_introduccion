import React, { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks! ${count}`;
  })
  
  return (

    <div>
      <h1>Estamos viendo estados!</h1>
      <h3>El estado actual es: {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button
        onClick={() => setCount((prevCount) => Math.max(prevCount - 1, 0))}
      >
        -
      </button>
      <button onClick={() => setCount((prevCount) => Math.round(Math.random(prevCount) * (100)) )}>Random Number</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Count;
import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  // Method 1: Increment Count
  const increment = () => {
    setCount(prev => prev + 1);
  };

  // Method 2: Say Hello
  const sayHello = () => {
    alert("Hello! Button was clicked.");
  };

  // Decrement
  const decrement = () => {
    setCount(prev => prev - 1);
  };

  // Say Welcome Function
  const sayMessage = (message) => {
    alert(message);
  };

  // Synthetic Event
  const handleClick = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>React Event Handling Example</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => { increment(); sayHello(); }}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayMessage("Welcome!")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>
        Click Me (Synthetic Event)
      </button>

      <br /><br />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;

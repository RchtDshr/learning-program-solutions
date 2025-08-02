import React, { useState } from 'react';
import './App.css';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  // Flag variable to toggle between components
  const [flag, setFlag] = useState(true);
  
  // Array with 11 players and their scores
  const players = [
    { name: 'Mr. Jack', score: 50 },
    { name: 'Mr. Michael', score: 70 },
    { name: 'Mr. John', score: 40 },
    { name: 'Mr. Ann', score: 61 },
    { name: 'Mr. Elizabeth', score: 63 },
    { name: 'Mr. Cristy', score: 55 },
    { name: 'Mr. Dhoni', score: 100 },
    { name: 'Mr. Virat', score: 84 },
    { name: 'Mr. Sachin', score: 64 },
    { name: 'Mr. Rohit', score: 75 },
    { name: 'Mr. Kohli', score: 88 }
  ];

  return (
    <div className="App">
      <button onClick={() => setFlag(!flag)}>
        Toggle View (Current: {flag ? 'Players List' : 'Indian Players'})
      </button>
      <br />
      <br />
      {flag === true ? (
        <div>
          <ListofPlayers players={players} />
        </div>
      ) : (
        <div>
          <IndianPlayers />
        </div>
      )}
    </div>
  );
}

export default App;
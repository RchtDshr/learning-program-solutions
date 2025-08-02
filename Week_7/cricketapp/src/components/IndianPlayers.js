import React from 'react';

// Function to display Odd Players using destructuring and filtering
const OddPlayers = (IndianTeam) => {
  // Get all odd positioned players (1st, 3rd, 5th, etc.)
  const oddPlayers = IndianTeam.filter((player, index) => (index + 1) % 2 !== 0);
  
  return (
    <div>
      {oddPlayers.map((player, index) => (
        <li key={index}>
          {index === 0 ? 'First' : 
           index === 1 ? 'Third' : 
           index === 2 ? 'Fifth' : 
           index === 3 ? 'Seventh' : 
           index === 4 ? 'Ninth' : 
           index === 5 ? 'Eleventh' : `Position ${(index * 2) + 1}`}: {player}
        </li>
      ))}
    </div>
  );
};

// Function to display Even Players using destructuring and filtering
const EvenPlayers = (IndianTeam) => {
  // Get all even positioned players (2nd, 4th, 6th, etc.)
  const evenPlayers = IndianTeam.filter((player, index) => (index + 1) % 2 === 0);
  
  return (
    <div>
      {evenPlayers.map((player, index) => (
        <li key={index}>
          {index === 0 ? 'Second' : 
           index === 1 ? 'Fourth' : 
           index === 2 ? 'Sixth' : 
           index === 3 ? 'Eighth' : 
           index === 4 ? 'Tenth' : 
           index === 5 ? 'Twelfth' : `Position ${(index * 2) + 2}`}: {player}
        </li>
      ))}
    </div>
  );
};

// IndianPlayers Component
const IndianPlayers = () => {
  const IndianTeam = ['Sachin', 'Virat', 'Dhoni', 'Rohit', 'Hardik', 'Rahul'];
  
  // Declare two arrays for T20players and RanjiTrophy players
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  
  // Merge the two arrays using spread operator (ES6 merge feature)
  const IndianPlayersMerged = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <div>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        <ul>
          {OddPlayers(IndianTeam)}
        </ul>
        <hr />
        <h1>Even Players</h1>
        <ul>
          {EvenPlayers(IndianTeam)}
        </ul>
      </div>
      <div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <ul>
            {IndianPlayersMerged.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndianPlayers;

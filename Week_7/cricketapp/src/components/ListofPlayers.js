import React from 'react';

const ListofPlayers = ({ players }) => {
  // Filter players with scores below 70 using arrow function
  const playersBelow70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h1>List of Players</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name}: {player.score}
          </li>
        ))}
      </ul>
      <hr />
      <h1>List of Players having Scores Less than 70</h1>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>
            {player.name}: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;

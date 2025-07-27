import React from 'react';
import { Link } from 'react-router-dom';

const TrainersList = ({ trainers }) => {
    return (
        <div>
            <h1>Trainers List</h1>
            <ol>
                {trainers.map(trainer => (
                    <li key={trainer.trainerId}>
                        <Link to={`/trainer/${trainer.trainerId}`}>
                            {trainer.name}
                        </Link>
                        - {trainer.technology}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TrainersList;

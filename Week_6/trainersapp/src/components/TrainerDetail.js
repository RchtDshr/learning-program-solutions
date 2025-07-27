import React from 'react';
import { useParams, Link } from 'react-router-dom';
import trainersMock from '../TrainersMock';

const TrainerDetail = () => {
    const { id } = useParams();
    const trainer = trainersMock.find(t => t.trainerId === id);

    if (!trainer) {
        return (
            <div>
                <h2>Trainer not found</h2>
                <a href="/trainers">Back to Trainers List</a>
            </div>
        );
    }

    return (
        <div>
            <a href="/trainers">← Back to Trainers List</a>
            
            <h2>{trainer.name} <span>({trainer.technology})</span></h2> 
            {/* <p><strong>ID:</strong> {trainer.trainerId}</p> */}
            
            <h3>Contact Information</h3>
            <p> <a href={`mailto:${trainer.email}`}>{trainer.email}</a></p>
            <p> <a href={`tel:${trainer.phone}`}>{trainer.phone}</a></p>
            
            
            <h3>Skills & Expertise</h3>
            <ul>
                {trainer.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default TrainerDetail;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TrainersList from './components/TrainersList';
import TrainerDetail from './components/TrainerDetail';
import trainersMock from './TrainersMock';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <h2>My Academy Trainer app</h2>
          <a href="/">Home</a> | <a href="/trainers">Trainers</a>
        </nav>
        
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={<TrainersList trainers={trainersMock} />} />
            <Route path="/trainer/:id" element={<TrainerDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

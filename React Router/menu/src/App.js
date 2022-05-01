import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import DriftPage from './components/DriftPage/DriftPage';
import ForzaPage from './components/ForzaPage/ForzaPage';
import HomePage from './components/HomePage/HomePage';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div>

      <Menu />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
      </Routes>
    </div>
  );
}

export default App;

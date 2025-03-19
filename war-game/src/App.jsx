import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/Main'
import Score from './pages/Score'
import GameBoard from './pages/GameBoard'

function App() {
  return (<Router>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/score' element={<Score />} />
      <Route path='/game-board' element={<GameBoard />} />
    </Routes>
  </Router>);
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => (

  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>

);

export default App;

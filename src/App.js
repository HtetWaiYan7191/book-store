import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import './style.css';

const App = () => (

  <Routes>
    <Route path="/*" element={<Home />} />
    <Route path="/" element={<Home />} />
    <Route path="/category" element={<Categories />} />
  </Routes>

);

export default App;

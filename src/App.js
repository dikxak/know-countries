import React from 'react';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CountryDetail from './pages/CountryDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:name" element={<CountryDetail />} />
    </Routes>
  );
};

export default App;

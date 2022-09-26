import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CountryDetail from './pages/CountryDetail';

import ThemeModeContext from './context/ThemeModeContext/theme-mode-context';

import './sass/general.scss';

const App = () => {
  const themeCtx = useContext(ThemeModeContext);
  const { themeMode } = themeCtx;

  useEffect(() => {
    document.body.removeAttribute('class');
    document.body.classList.add(themeMode);
  }, [themeMode]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:name" element={<CountryDetail />} />
    </Routes>
  );
};

export default App;

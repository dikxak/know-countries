import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import ThemeModeProvider from './context/ThemeModeContext/ThemeModeProvider';

import './sass/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <Router>
        <App />
      </Router>
    </ThemeModeProvider>
  </React.StrictMode>
);

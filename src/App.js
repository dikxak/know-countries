import React from 'react';

import Navbar from './components/ui/Navbar/Navbar';

import CountryContainer from './components/country/CountryContainer';

const App = () => {
  return (
    <div>
      <Navbar className="light" />
      <CountryContainer />
    </div>
  );
};

export default App;

import React from 'react';

import CountryContainer from '../components/country/CountryContainer';
import Navbar from '../components/ui/Navbar/Navbar';

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <CountryContainer />
    </React.Fragment>
  );
};

export default HomePage;

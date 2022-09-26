import React, { useState, useEffect } from 'react';

import CountryInput from './CountryInput';
import Countries from './Countries';

import classes from '../../sass/country/CountryContainer.module.scss';

const allCountriesURL = 'https://restcountries.com/v3.1/all';
const oneCountryURL = 'https://restcountries.com/v3.1/name/';

const CountryContainer = props => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const getAllCountriesData = async () => {
      const response = await fetch(allCountriesURL);
      const data = await response.json();

      setCountryData(data);
    };

    getAllCountriesData();
  }, []);

  const getCountryName = async cName => {
    const response = await fetch(`${oneCountryURL}${cName}`);
    const data = await response.json();
    console.log(data);

    setCountryData(data);
  };

  return (
    <section
      className={`${classes['countries-section']} ${classes['container']}`}
    >
      <CountryInput getCountryName={getCountryName} />
      <Countries countryData={countryData} />
    </section>
  );
};

export default CountryContainer;

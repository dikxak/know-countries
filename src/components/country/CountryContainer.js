import React, { useState, useEffect } from 'react';

import CountryInput from './CountryInput';
import Countries from './Countries';

import '../../sass/general.scss';
import classes from '../../sass/country/CountryContainer.module.scss';

const allCountriesURL = 'https://restcountries.com/v3.1/all';
const oneCountryURL = 'https://restcountries.com/v3.1/name/';

const CountryContainer = props => {
  const [countryData, setCountryData] = useState([]);
  const [countryError, setCountryError] = useState(false);

  useEffect(() => {
    const getAllCountriesData = async () => {
      try {
        const response = await fetch(allCountriesURL);

        if (!response.ok) throw new Error('Something went wrong 😟.');

        const data = await response.json();

        setCountryData(data);
      } catch (err) {
        setCountryError(true);
      }
    };

    getAllCountriesData();
  }, []);

  const getCountryName = async cName => {
    try {
      const response = await fetch(`${oneCountryURL}${cName}`);

      if (!response.ok) throw new Error('Something went wrong 😟.');

      const data = await response.json();

      setCountryData(data);
    } catch (err) {
      setCountryError(true);
    }
  };

  return (
    <section
      className={`${classes['countries-section']} ${classes['container']}`}
    >
      <CountryInput getCountryName={getCountryName} />
      {countryError ? (
        <p className="error-msg">Something went wrong 😟.</p>
      ) : (
        <Countries countryData={countryData} />
      )}
    </section>
  );
};

export default CountryContainer;

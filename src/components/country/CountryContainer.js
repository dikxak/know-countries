import React, { useState, useEffect } from 'react';

import CountryInput from './CountryInput';
import Countries from './Countries';
import Loader from '../ui/Loader/Loader';

import '../../sass/general.scss';
import classes from '../../sass/country/CountryContainer.module.scss';

const allCountriesURL = 'https://restcountries.com/v3.1/all';
const oneCountryURL = 'https://restcountries.com/v3.1/name/';

const CountryContainer = props => {
  const [countryData, setCountryData] = useState([]);
  const [countryError, setCountryError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllCountriesData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(allCountriesURL);

        if (!response.ok) throw new Error('Something went wrong 😟.');

        const data = await response.json();

        setCountryData(data);
        setIsLoading(false);
      } catch (err) {
        setCountryError(true);
        setIsLoading(false);
      }
    };

    getAllCountriesData();
  }, []);

  const getCountryName = async cName => {
    try {
      setIsLoading(true);
      const response = await fetch(`${oneCountryURL}${cName}`);

      if (!response.ok) throw new Error('Something went wrong 😟.');

      const data = await response.json();

      setCountryData(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setCountryError(true);
    }
  };

  return (
    <section
      className={`${classes['countries-section']} ${classes['container']}`}
    >
      <CountryInput getCountryName={getCountryName} />
      {isLoading ? (
        <Loader />
      ) : countryError ? (
        <p className={`error-msg ${classes['country-error']}`}>
          😟 Could not fetch countries data.
        </p>
      ) : (
        <Countries countryData={countryData} />
      )}
    </section>
  );
};

export default CountryContainer;

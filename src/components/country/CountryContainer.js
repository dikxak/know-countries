import React, { useEffect } from 'react';

import CountryInput from './CountryInput';
import Countries from './Countries';
import Loader from '../ui/Loader/Loader';

import useHttp from '../../hooks/use-http';

import '../../sass/general.scss';
import classes from '../../sass/country/CountryContainer.module.scss';

const allCountriesURL = 'https://restcountries.com/v3.1/all';
const oneCountryURL = 'https://restcountries.com/v3.1/name/';

const CountryContainer = () => {
  let { countryData, countryError, isLoading, getCountryData } = useHttp();

  ({ countryData, countryError, isLoading, getCountryData } = useHttp());

  useEffect(() => {
    getCountryData(allCountriesURL);
  }, [getCountryData]);

  const getCountryDataFromName = cName => {
    getCountryData(`${oneCountryURL}${cName}`);
  };

  return (
    <section
      className={`${classes['countries-section']} ${classes['container']}`}
    >
      <CountryInput getCountryDataFromName={getCountryDataFromName} />
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

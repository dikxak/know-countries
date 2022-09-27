import React, { useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Navbar from '../components/ui/Navbar/Navbar';
import Loader from '../components/ui/Loader/Loader';

import ThemeModeContext from '../context/ThemeModeContext/theme-mode-context';

import useHttp from '../hooks/use-http';

import '../sass/general.scss';
import classes from '../sass/pages/CountryDetail.module.scss';

const countryNameURL = 'https://restcountries.com/v3.1/name/';

const CountryDetail = () => {
  const themeCtx = useContext(ThemeModeContext);

  let { countryData, countryError, isLoading, getCountryData } = useHttp();

  const { state } = useLocation();
  const { countryName } = state;

  useEffect(() => {
    getCountryData(`${countryNameURL}${countryName}`);
  }, [getCountryData, countryName]);

  let name,
    population,
    flags,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    nativeName;

  if (countryData.length !== 0) {
    ({
      name,
      flags,
      population,
      region,
      subregion,
      borders,
      capital,
      tld: topLevelDomain,
      currencies,
      languages,
    } = countryData[0]);

    nativeName = name.nativeName[Object.keys(name.nativeName)[0]];
  }

  return (
    <React.Fragment>
      <Navbar />
      {
        <div className={classes['container']}>
          <NavLink
            to="/"
            className={`${classes['btn-back']} ${classes[themeCtx.themeMode]}`}
          >
            &larr; Back
          </NavLink>
          {isLoading ? (
            <Loader />
          ) : countryError ? (
            <p className={`error-msg ${classes['country-error']}`}>
              😟 Could not fetch country data.
            </p>
          ) : (
            countryData.length !== 0 && (
              <div className={classes['country-content']}>
                <div className={classes['country-flag']}>
                  <img src={flags.svg} alt={`${name.common} flag`} />
                </div>

                <div
                  className={`${classes['country-info']} ${
                    classes[themeCtx.themeMode]
                  }`}
                >
                  <h2 className={classes['country-name']}>{name.common}</h2>
                  <div className={classes['country-details']}>
                    <div className={classes['country-detail-1']}>
                      <p className={classes['country-detail-text']}>
                        <strong>Native Name: </strong> {nativeName.common}
                      </p>

                      <p className={classes['country-detail-text']}>
                        <strong>Population: </strong>{' '}
                        {population.toLocaleString('en-US')}
                      </p>

                      <p className={classes['country-detail-text']}>
                        <strong>Region: </strong> {region}
                      </p>

                      <p className={classes['country-detail-text']}>
                        <strong>Sub Region: </strong> {subregion}
                      </p>

                      <p className={classes['country-detail-text']}>
                        <strong>Capital: </strong> {capital}
                      </p>
                    </div>
                    <div className={classes['country-detail-2']}>
                      <p className={classes['country-detail-text']}>
                        <strong>Top level domain: </strong> {topLevelDomain}
                      </p>

                      <p className={classes['country-detail-text']}>
                        <strong> Currencies: </strong>{' '}
                        {Object.keys(currencies).map((cur, i) => (
                          <span key={i}>
                            {currencies[cur].name}
                            {`${
                              i === Object.keys(currencies).length - 1
                                ? ''
                                : ','
                            }`}
                          </span>
                        ))}
                      </p>

                      <p className={classes['country-detail-text']}>
                        <strong>Languages: </strong>{' '}
                        {Object.keys(languages).map((lng, i) => (
                          <span key={i}>
                            {languages[lng]}
                            {`${
                              i === Object.keys(languages).length - 1 ? '' : ','
                            }`}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <p className={classes['border-countries']}>
                    <strong>Border countries: </strong>
                    {borders &&
                      borders.map((el, i) => (
                        <span key={i} className={`tag ${themeCtx.themeMode}`}>
                          {el}
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      }
    </React.Fragment>
  );
};

export default CountryDetail;

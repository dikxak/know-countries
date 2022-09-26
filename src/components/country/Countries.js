import React from 'react';

import { useNavigate } from 'react-router-dom';

import CountryItem from './CountryItem';

import classes from '../../sass/country/Countries.module.scss';
import '../../sass/general.scss';

const Countries = props => {
  const navigate = useNavigate();

  const data = props.countryData;

  const navigateToDetailPage = countryName => {
    navigate(`/country/${countryName.toLowerCase()}`, {
      state: { name: countryName.toLowerCase() },
    });
  };

  return (
    <div className={`${classes['countries']} grid--4-cols`}>
      {data.map(country => {
        return (
          <CountryItem
            key={`${country.name.common}`}
            flags={country.flags}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            onClick={navigateToDetailPage.bind(null, country.name.common)}
          />
        );
      })}
    </div>
  );
};

export default Countries;

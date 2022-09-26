import React from 'react';

import CountryItem from './CountryItem';

import classes from '../../sass/country/Countries.module.scss';
import '../../sass/general.scss';

const Countries = props => {
  const data = props.countryData;

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
          />
        );
      })}
    </div>
  );
};

export default Countries;

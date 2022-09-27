import React from 'react';

import { useNavigate } from 'react-router-dom';

import CountryItem from './CountryItem';

import '../../sass/general.scss';

const Countries = props => {
  const navigate = useNavigate();

  const data = props.countryData;

  const navigateToDetailPage = countryName => {
    navigate(`/country/${countryName.toLowerCase()}`, {
      state: { countryName: countryName.toLowerCase() },
    });
  };

  return (
    <div className="grid--4-cols">
      {data.map(country => {
        return (
          <CountryItem
            key={`${country.name.common}`}
            flags={country.flags}
            name={country.name}
            population={country.population.toLocaleString('en-US')}
            region={country.region}
            capital={country.capital}
            role="link"
            tabIndex="0"
            onClick={navigateToDetailPage.bind(null, country.name.common)}
          />
        );
      })}
    </div>
  );
};

export default Countries;

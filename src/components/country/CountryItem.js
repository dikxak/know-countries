import React from 'react';

import Card from '../ui/Card/Card';

import classes from '../../sass/country/CountryItem.module.scss';

const CountryItem = props => {
  const { flags, name, population, region, capital } = props;
  return (
    <Card
      className={`${classes['country-item-container']} ${classes['light']}`}
    >
      <div className={`${classes['country-flag']}`}>
        <img src={flags.svg} alt={`${name.common} Flag`} />
        <div className={classes['country-info']}>
          <h3 className={classes['country-name']}>{name.common}</h3>
          <p className={classes['country-text']}>
            👫 <strong>Population: </strong> {population}
          </p>
          <p className={classes['country-text']}>
            🌎 <strong>Region: </strong>
            {region}
          </p>
          <p className={classes['country-text']}>
            🗺 <strong>Capital: </strong> {capital}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CountryItem;

import React, { useContext } from 'react';

import Card from '../ui/Card/Card';

import ThemeModeContext from '../../context/ThemeModeContext/theme-mode-context';

import classes from '../../sass/country/CountryItem.module.scss';

const CountryItem = props => {
  const themeCtx = useContext(ThemeModeContext);

  const { flags, name, population, region, capital } = props;
  return (
    <Card
      role={props.role}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
      className={`${classes['country-item-container']} ${
        classes[themeCtx.themeMode]
      }`}
    >
      <div className={`${classes['country-flag']}`}>
        <img src={flags.svg} alt={`${name.common} Flag`} />
      </div>
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
    </Card>
  );
};

export default CountryItem;

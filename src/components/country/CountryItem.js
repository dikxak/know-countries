import React from 'react';

import Card from '../ui/Card/Card';

import classes from '../../sass/country/CountryItem.module.scss';

const CountryItem = props => {
  return (
    <Card
      className={`${classes['country-item-container']} ${classes['light']}`}
    >
      <div className={`${classes['country-flag']}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
          alt="USA Flag"
        />
        <div className={classes['country-info']}>
          <h3 className={classes['country-name']}>USA</h3>
          <p className={classes['country-text']}>
            👫 <strong>Population: </strong> 323,947,000
          </p>
          <p className={classes['country-text']}>
            🌎 <strong>Region: </strong>Americas
          </p>
          <p className={classes['country-text']}>
            🗺 <strong>Capital: </strong> Washington,D.C.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CountryItem;

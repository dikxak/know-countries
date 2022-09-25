import React from 'react';

import CountryInput from './CountryInput';
import Countries from './Countries';

import classes from '../../sass/country/CountryContainer.module.scss';

const CountryContainer = props => {
  return (
    <section
      className={`${classes['countries-section']} ${classes['container']}`}
    >
      <CountryInput />
      <Countries />
    </section>
  );
};

export default CountryContainer;

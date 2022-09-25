import React from 'react';

import CountryInput from './CountryInput';

import classes from '../../sass/country/CountryContainer.module.scss';

const CountryContainer = props => {
  return (
    <section
      className={`${classes['countries-section']} ${classes['container']}`}
    >
      <CountryInput />
    </section>
  );
};

export default CountryContainer;

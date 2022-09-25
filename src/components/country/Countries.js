import React from 'react';

import CountryItem from './CountryItem';

import classes from '../../sass/country/Countries.module.scss';
import '../../sass/general.scss';

const Countries = props => {
  return (
    <div className={`${classes['countries']} grid--4-cols`}>
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
    </div>
  );
};

export default Countries;

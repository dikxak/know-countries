import React from 'react';

import classes from '../../sass/country/CountryInput.module.scss';

import { BsSearch } from 'react-icons/bs';

const CountryInput = props => {
  return (
    <form className={`${classes['search-form']} ${classes['light']}`}>
      <label>
        <BsSearch className={classes['search-icon']} />
      </label>
      <input type="search" placeholder="Search for a country..." />
    </form>
  );
};

export default CountryInput;

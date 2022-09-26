import React, { useState } from 'react';

import classes from '../../sass/country/CountryInput.module.scss';

import { BsSearch } from 'react-icons/bs';

const CountryInput = props => {
  const [searchQuery, setSearchQuery] = useState('');

  const countryNameSubmitHandler = e => {
    e.preventDefault();

    props.getCountryName(searchQuery);
  };

  return (
    <form
      onSubmit={countryNameSubmitHandler}
      className={`${classes['search-form']} ${classes['light']}`}
    >
      <div className={classes['form-control']}>
        <label>
          <BsSearch className={classes['search-icon']} />
        </label>
        <input
          onChange={e => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Search for a country..."
        />
      </div>
    </form>
  );
};

export default CountryInput;

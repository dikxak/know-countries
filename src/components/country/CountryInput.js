import React, { useState, useContext } from 'react';

import ThemeModeContext from '../../context/ThemeModeContext/theme-mode-context';

import { BsSearch } from 'react-icons/bs';

import classes from '../../sass/country/CountryInput.module.scss';
import '../../sass/general.scss';

const CountryInput = props => {
  const themeCtx = useContext(ThemeModeContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryFocused, setSearchQueryFocused] = useState(false);

  const searchQueryIsValid = searchQuery.trim().length > 0;
  const searchQueryHasError = searchQueryFocused && !searchQueryIsValid;

  const searchQueryChangeHandler = e => {
    setSearchQueryFocused(true);
    setSearchQuery(e.target.value);
  };

  const searchBlurHandler = e => {
    setSearchQueryFocused(true);
  };

  const countryNameSubmitHandler = e => {
    e.preventDefault();

    setSearchQueryFocused(true);
    if (!searchQueryIsValid) return;

    props.getCountryName(searchQuery);
  };

  return (
    <form
      onSubmit={countryNameSubmitHandler}
      className={`${classes['search-form']}`}
    >
      <div
        className={`${classes['form-control']} ${classes[themeCtx.themeMode]}`}
      >
        <label>
          <BsSearch className={classes['search-icon']} />
        </label>
        <input
          onChange={searchQueryChangeHandler}
          onBlur={searchBlurHandler}
          type="search"
          placeholder="Search for a country..."
        />
      </div>
      {searchQueryHasError && (
        <p className="error-msg">Search input should not be empty.</p>
      )}
    </form>
  );
};

export default CountryInput;

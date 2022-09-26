import React, { useContext } from 'react';

import ThemeModeContext from '../../../context/ThemeModeContext/theme-mode-context';

import classes from '../../../sass/ui/Navbar.module.scss';

const Navbar = () => {
  const themeCtx = useContext(ThemeModeContext);

  const themeChangeHandler = () => {
    themeCtx.setThemeMode(
      `${themeCtx.themeMode === 'light' ? 'dark' : 'light'}`
    );
  };

  return (
    <header
      className={`${classes['header']} ${classes[`${themeCtx.themeMode}`]}`}
    >
      <div className={classes['container']}>
        <h1 className={classes['logo']}>KnowCountries</h1>
        <div onClick={themeChangeHandler} className={classes['theme-mode']}>
          <span className={classes['theme-mode-text']}>
            {themeCtx.themeMode === 'dark' ? 'Go bright' : 'Go dark'}
          </span>
          <input
            checked={themeCtx.themeMode === 'dark'}
            type="checkbox"
            tabIndex="-1"
          />
          <span
            className={`${classes['theme-control']} ${
              classes[themeCtx.themeMode]
            }`}
          ></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

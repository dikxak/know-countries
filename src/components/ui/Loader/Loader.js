import React, { useContext } from 'react';

import ThemeModeContext from '../../../context/ThemeModeContext/theme-mode-context';

import classes from '../../../sass/ui/Loader.module.scss';

const Loader = props => {
  const themeCtx = useContext(ThemeModeContext);

  return (
    <div className={classes['loader-container']}>
      <div
        className={`${classes['loader']} ${classes[themeCtx.themeMode]}`}
      ></div>
    </div>
  );
};

export default Loader;

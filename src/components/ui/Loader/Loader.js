import React from 'react';

import classes from '../../../sass/ui/Loader.module.scss';

const Loader = props => {
  return (
    <div className={classes['loader-container']}>
      <div className={`${classes['loader']} ${classes['light']}`}></div>
    </div>
  );
};

export default Loader;

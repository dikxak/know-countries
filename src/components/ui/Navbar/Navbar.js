import React from 'react';

import classes from '../../../sass/ui/Navbar.module.scss';

const Navbar = props => {
  return (
    <header className={`${classes['header']} ${classes[`${props.className}`]}`}>
      <div className={classes['container']}>
        <h1 className={classes['logo']}>KnowCountries</h1>
        <button>Dark Mode</button>
      </div>
    </header>
  );
};

export default Navbar;

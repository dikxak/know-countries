import React from 'react';

import classes from '../../../sass/ui/Card.module.scss';

const Card = props => {
  return (
    <div className={`${classes['card']} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;

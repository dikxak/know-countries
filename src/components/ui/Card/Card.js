import React from 'react';

import classes from '../../../sass/ui/Card.module.scss';

const Card = props => {
  return (
    <div
      role={props.role}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
      className={`${classes['card']} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;

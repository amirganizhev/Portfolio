import React from 'react';
import classes from './styles/Anchor.module.css';

const Anchor = (props) => {

  return (
    <span className={classes.anchor}>
      {props.children}
    </span>
  )

}

export default Anchor;

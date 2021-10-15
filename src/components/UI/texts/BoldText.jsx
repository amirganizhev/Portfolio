import React from 'react';
import classes from './styles/BoldText.module.css';

const BoldText = (props) => {

  return (
    <p className={classes.boldText}>
      {props.children}
    </p>
  )

}

export default BoldText;

import React from 'react';
import classes from './styles/NormalText.module.css';

const NormalText = (props) => {

  return (
    <p className={classes.normalText}>
      {props.children}
    </p>
  )

}

export default NormalText;

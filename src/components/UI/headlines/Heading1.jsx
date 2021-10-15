import React from 'react';
import classes from './styles/Heading1.module.css';

const Heading1 = (props) => {

  return (
    <h1 className={classes.heading1}>
      {props.children}
    </h1>
  )

}

export default Heading1;

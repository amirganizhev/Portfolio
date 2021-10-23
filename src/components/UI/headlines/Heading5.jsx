import React from 'react';
import classes from './styles/Heading5.module.css';

const Heading5 = (props) => {

  return (
    <h5 className={classes.heading5} {...props}>
      {props.children}
    </h5>
  )

}

export default Heading5;

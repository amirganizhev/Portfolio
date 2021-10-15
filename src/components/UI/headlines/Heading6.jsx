import React from 'react';
import classes from './styles/Heading6.module.css';

const Heading6 = (props) => {

  return (
    <h6 className={classes.heading6}>
      {props.children}
    </h6>
  )

}

export default Heading6;

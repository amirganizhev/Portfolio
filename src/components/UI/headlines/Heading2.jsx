import React from 'react';
import classes from './styles/Heading2.module.css';

const Heading2 = (props) => {

  return (
    <h2 className={classes.heading2} {...props}>
      {props.children}
    </h2>
  )

}

export default Heading2;

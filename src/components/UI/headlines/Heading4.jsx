import React from 'react';
import classes from './styles/Heading4.module.css';

const Heading4 = (props) => {

  return (
    <h4 className={classes.heading4}>
      {props.children}
    </h4>
  )

}

export default Heading4;

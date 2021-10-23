import React from 'react';
import classes from './styles/Heading3.module.css';

const Heading3 = (props) => {

  return (
    <h3 className={classes.heading3} {...props}>
      {props.children}
    </h3>
  )

}

export default Heading3;

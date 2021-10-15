import React from 'react';
import classes from './styles/ItalicText.module.css';

const ItalicText = (props) => {

  return (
    <p className={classes.italicText}>
      {props.children}
    </p>
  )

}

export default ItalicText;

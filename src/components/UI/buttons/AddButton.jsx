import React from 'react';
import classes from './styles/AddButton.module.css';

const AddButton = (props) => {

  return (
    <button className={classes.addButton} {...props}>
      {props.children}
    </button>
  )

}

export default AddButton;

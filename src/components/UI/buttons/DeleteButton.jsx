import React from 'react';
import classes from './styles/DeleteButton.module.css';

const DeleteButton = (props) => {

  return (
    <button className={classes.deleteButton}>
      {props.children}
    </button>
  )

}

export default DeleteButton;

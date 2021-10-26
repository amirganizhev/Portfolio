import React from 'react';
import classes from './styles/DeleteButton.module.css';

const DeleteButton = React.forwardRef((props, ref) => {

  return (
    <button className={classes.deleteButton} ref={ref} {...props}>
      {props.children}
    </button>
  )

})

export default DeleteButton;

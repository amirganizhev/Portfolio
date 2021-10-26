import React from 'react';
import classes from './styles/AddButton.module.css';

const AddButton = React.forwardRef((props, ref) => {

  return (
    <button className={classes.addButton} ref={ref} {...props}>
      {props.children}
    </button>
  )

})

export default AddButton;

Установлено:
1) react-transition-group;

/--------------------------------------------/
import React from 'react';
import classes from './styles/COMPONENT.module.css';

const COMPONENT = (props) => {

  return (
    <div className={classes.COMPONENT}>
      {props.children}
    </div>
  )

}

export default COMPONENT;
/--------------------------------------------/

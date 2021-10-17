Установлено:
1) react-transition-group;
2) react-router-dom;

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

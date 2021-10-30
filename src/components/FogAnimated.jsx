import React from 'react';
import classes from './styles/FogAnimated.module.css';

import fog from'./images/fog.png';

const FogAnimated = () => {

  return (
    <img className={classes.fogAnimated} src={fog} alt="fog" />
  )

}

export default FogAnimated;

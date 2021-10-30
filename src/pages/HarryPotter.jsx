import React from 'react';
import classes from './styles/HarryPotter.module.css';

import FacultyTest from '../components/FacultyTest';
import FogAnimated from '../components/FogAnimated';

const HarryPotter = () => {

  return (
    <div className={classes.harryPotter}>
      <FacultyTest />
      <FogAnimated />
    </div>
  )

}

export default HarryPotter;

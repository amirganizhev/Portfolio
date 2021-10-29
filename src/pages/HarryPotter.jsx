import React from 'react';
import classes from './styles/HarryPotter.module.css';

import FacultyTest from '../components/FacultyTest';

const HarryPotter = () => {

  return (
    <div className={classes.harryPotter}>
      <h2>HarryPotter</h2>
      <FacultyTest />
    </div>
  )

}

export default HarryPotter;

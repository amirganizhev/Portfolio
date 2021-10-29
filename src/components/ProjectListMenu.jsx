import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import classes from './styles/ProjectListMenu.module.css';

import AppRouter from './AppRouter';

const ProjectListMenu = () => {

  return (
    <BrowserRouter>
      <div className={classes.projectListMenu}>
        <h1>Список всех проектов</h1>
        <div>
          <Link to='/portfolioDescription' className={classes.linkProject}>Описание портфолио</Link>
          <Link to='/harryPotter' className={classes.linkProject}>HarryPotter</Link>
          <Link to='/weatherApp' className={classes.linkProject}>Погодное приложение</Link>
        </div>
      </div>
      <AppRouter />
    </BrowserRouter>
  )

}

export default ProjectListMenu;

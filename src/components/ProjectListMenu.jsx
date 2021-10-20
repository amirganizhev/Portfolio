import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import classes from './styles/ProjectListMenu.module.css';

import AppRouter from './AppRouter';

import Anchor from './UI/anchor/Anchor';
import Heading1 from './UI/headlines/Heading1';

const ProjectListMenu = (props) => {

  return (
    <BrowserRouter>
      <div className={classes.projectListMenu}>
        <div className={classes.projectListHeader}>
          <Heading1>Список всех проектов</Heading1>
        </div>
        <div className={classes.linksProjects}>
          <Link to='/portfolioDescription' className={classes.linkProject}><Anchor>Описание портфолио</Anchor></Link>
          <Link to='/bankingApp' className={classes.linkProject}><Anchor>Банковское приложение</Anchor></Link>
          <Link to='/weatherApp' className={classes.linkProject}><Anchor>Погодное приложение</Anchor></Link>
        </div>
      </div>
      <AppRouter />
    </BrowserRouter>
  )

}

export default ProjectListMenu;

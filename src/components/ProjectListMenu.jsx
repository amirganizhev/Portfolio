import React from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import classes from './styles/ProjectListMenu.module.css';

import Anchor from './UI/anchor/Anchor';
import Heading1 from './UI/headlines/Heading1';

import PortfolioDescription from '../pages/PortfolioDescription';
import BankingApp from '../pages/BankingApp';
import ErrorPage from '../pages/ErrorPage';

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
          <Link to='/' className={classes.linkProject}><Anchor>Погодное приложение</Anchor></Link>
        </div>
      </div>

      <Switch>
        <Route path='/errorPage'>
          <ErrorPage />
        </Route>
        <Route path='/portfolioDescription'>
          <PortfolioDescription/>
        </Route>
        <Route path='/bankingApp'>
          <BankingApp/>
        </Route>
        <Redirect to='/errorPage' />
      </Switch>

    </BrowserRouter>
  )

}

export default ProjectListMenu;

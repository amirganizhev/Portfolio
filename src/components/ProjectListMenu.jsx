import React from 'react';
import classes from './styles/ProjectListMenu.module.css';

import Anchor from './UI/anchor/Anchor';
import Heading1 from './UI/headlines/Heading1';

import PortfolioDescription from '../pages/PortfolioDescription';
import BankingApp from '../pages/BankingApp';

import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

const ProjectListMenu = (props) => {

  return (
    <BrowserRouter>
      <div className={classes.projectListMenu}>
        <div className={classes.projectListHeader}>
          <Heading1>Список всех проектов</Heading1>
        </div>
        <div className={classes.linksProjects}>
          <a><Anchor>Описание портфолио</Anchor></a>
          <a><Anchor>Банковское приложение</Anchor></a>
          <a><Anchor>Погодное приложение</Anchor></a>
        </div>
      </div>
      <Route path="/portfolioDescription">
        <PortfolioDescription/>
      </Route>
      <Route path="/bankingApp">
        <BankingApp/>
      </Route>
    </BrowserRouter>
  )

}

export default ProjectListMenu;

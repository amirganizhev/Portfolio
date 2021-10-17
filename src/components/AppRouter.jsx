import React from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

import PortfolioDescription from '../pages/PortfolioDescription';
import BankingApp from '../pages/BankingApp';
import ErrorPage from '../pages/ErrorPage';

const AppRouter = (props) => {

  return (
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
  )

}

export default AppRouter;

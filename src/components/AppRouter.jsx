import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import ErrorPage from '../pages/ErrorPage';
import PortfolioDescription from '../pages/PortfolioDescription';
import HarryPotter from '../pages/HarryPotter';
import WeatherApp from '../pages/WeatherApp';

const AppRouter = () => {

  return (
    <Switch>
      <Route path='/errorPage'>
        <ErrorPage />
      </Route>
      <Route path='/portfolioDescription'>
        <PortfolioDescription/>
      </Route>
      <Route path='/harryPotter'>
        <HarryPotter/>
      </Route>
      <Route path='/weatherApp'>
        <WeatherApp/>
      </Route>
      <Redirect to='/errorPage' />
    </Switch>
  )

}

export default AppRouter;

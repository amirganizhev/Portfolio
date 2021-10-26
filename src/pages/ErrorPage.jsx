import React from 'react';
import classes from './styles/ErrorPage.module.css';

import NormalText from '../components/UI/texts/NormalText';

const ErrorPage = () => {

  return (
    <div className={classes.errorPage}>
      <NormalText>ErrorPage</NormalText>
    </div>
  )

}

export default ErrorPage;

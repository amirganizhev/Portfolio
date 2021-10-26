import React from 'react';
import classes from './styles/ExchangeRate.module.css';

import Heading3 from './UI/headlines/Heading3';

const ExchangeRate = () => {
  return (
    <div className={classes.exchangeRate}>
      <Heading3>Актуальный курс валют</Heading3>
    </div>
  )
}

export default ExchangeRate;

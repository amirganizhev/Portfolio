import React from 'react';
import classes from './styles/BankingApp.module.css';

import CreditTest from '../components/CreditTest';
import ExchangeRate from '../components/ExchangeRate';
import CreditCalculator from '../components/CreditCalculator';

import Heading2 from '../components/UI/headlines/Heading2';

const BankingApp = () => {

  return (
    <div className={classes.bankingApp}>
      <Heading2 style={{textAlign: 'center'}}>Банковское приложение</Heading2>
      <ExchangeRate />
      <CreditTest />
      <CreditCalculator />
    </div>
  )

}

export default BankingApp;

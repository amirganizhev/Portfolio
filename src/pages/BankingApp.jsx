import React from 'react';
import classes from './styles/BankingApp.module.css';

import CreditTest from '../components/CreditTest';
import ExchangeRate from '../components/ExchangeRate';

import Heading2 from '../components/UI/headlines/Heading2';
import Heading3 from '../components/UI/headlines/Heading3';

const BankingApp = () => {

  return (
    <div className={classes.bankingApp}>
      <Heading2 style={{textAlign: 'center'}}>Банковское приложение</Heading2>
      <ExchangeRate />
      <CreditTest />
    </div>
  )

}

export default BankingApp;

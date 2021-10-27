import React, {useState, useRef} from 'react';
import classes from './styles/CreditCalculator.module.css';

import Heading3 from './UI/headlines/Heading3';
import AddButton from './UI/buttons/AddButton';

const CreditCalculator = () => {

  const [result, setResult] = useState({
    refundableAmount: '...',
    monthlyPayment: '...'
  })

  const creditAmountValue = useRef();
  const creditTermValue = useRef();
  const interestRateValue = useRef();

  const payment = () => {
    let creditAmount = parseInt(creditAmountValue.current.value);
    let creditTerm = parseInt(creditTermValue.current.value);
    let interestRate = parseInt(interestRateValue.current.value);
    let totalAmount = creditAmount + (creditAmount/100) * (interestRate/12) * (creditTerm*12);
    let oneTimePayment = totalAmount / (creditTerm * 12);
    setResult({
      refundableAmount: Math.round(totalAmount),
      monthlyPayment: Math.round(oneTimePayment)
    })
    creditAmountValue.current.value = '';
    creditTermValue.current.value = '';
    interestRateValue.current.value = '';
  }

  console.log(result.refundableAmount)
  console.log(result.monthlyPayment)

  return (
    <div className={classes.creditCalculator}>
      <Heading3>Кредитный калькулятор</Heading3>
      <p>Сумма кредита:</p>
      <input
        type='text'
        ref={creditAmountValue}
      />
      <p>Срок кредита:</p>
      <input
        type='text'
        ref={creditTermValue}
      />
      <p>Процентная ставка:</p>
      <input
        type='text'
        ref={interestRateValue}
      />
      <AddButton onClick={payment}>Расчитать</AddButton>
      <p>Общая сумма к возврату: {result.refundableAmount} рублей</p>
      <p>Ежемесячный платеж: {result.monthlyPayment} рублей</p>
    </div>
  )
}

export default CreditCalculator;

import React, {useState, useRef} from 'react';
import classes from './styles/CreditCalculator.module.css';

const CreditCalculator = () => {

  const [result, setResult] = useState({
    refundableAmount: '...',
    monthlyPayment: '...'
  })

  const creditAmountValue = useRef();
  const creditTermValue = useRef();
  const interestRateValue = useRef();

  const payment = (e) => {
    e.preventDefault();
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

  return (
    <div className={classes.creditCalculator}>

      <h1 className={classes.creditCalculatorHeader}>Кредитный калькулятор</h1>

      <form className={classes.creditCalculatorForm}>
        <h2>Подсчет ежемесячного платежа кредита</h2>
        <div>
          <p>Сумма кредита:</p>
          <input type='text' ref={creditAmountValue} />
        </div>
        <div>
          <p>Срок кредита в годах:</p>
          <input  type='text' ref={creditTermValue} />
        </div>
        <div>
          <p>Процентная ставка:</p>
          <input  type='text' ref={interestRateValue} />
        </div>
        <div>
          <p>Общая сумма к возврату: {result.refundableAmount} рублей</p>
          <p>Ежемесячный платеж: {result.monthlyPayment} рублей</p>
        </div>
        <button onClick={payment}>Расчитать</button>
      </form>

    </div>
  )

}

export default CreditCalculator;

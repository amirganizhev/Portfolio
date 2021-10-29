import React, {useState, useRef} from 'react';
import classes from './styles/CreditTest.module.css';

const FacultyTest = () => {

  const [resultTesting, setResultTesting] = useState({
    text: ''
  })

  const questions = useRef();
  const testingResult = useRef();

  let salaryVar = undefined;
  let familyVar = undefined;
  let workVar = undefined;
  let paymentVar = undefined;
  let creditVar = undefined;

  const result = () => {
    if (salaryVar === undefined) {
      alert('Вы не ответили на 1-ый вопрос')
    } else if (familyVar === undefined) {
      alert('Вы не ответили на 2-ый вопрос')
    } else if (workVar === undefined) {
      alert('Вы не ответили на 3-ый вопрос')
    } else if (paymentVar === undefined) {
      alert('Вы не ответили на 4-ый вопрос')
    } else if (creditVar === undefined) {
      alert('Вы не ответили на 5-ый вопрос')
    } else {
      let sum = salaryVar + familyVar + workVar + paymentVar + creditVar;
      questions.current.style = 'display: none';
      testingResult.current.style = 'display: block';
      if (sum <= 10) {
        setResultTesting({text: 'Вам подойдет кредит на сумму 300.000 рублей на 5 лет под 12 % годовых'})
      } else if (sum > 10) {
        setResultTesting({text: 'Вам подойдет кредит на сумму 1.000.000 рублей на 10 лет под 5.5 % годовых'})
      }
    }
  }

  const restart = () => {
    questions.current.style = 'display: block';
    testingResult.current.style = 'display: none';
    salaryVar = undefined;
    familyVar = undefined;
    workVar = undefined;
    paymentVar = undefined;
    creditVar = undefined;
  }

  return (
    <div className={classes.creditTest}>

      <h3>Тест для подбора кредита</h3>

      <div ref={questions}>

        <div>
          <p>1) Какой ваш ежемесячный доход ?</p>
          <input
            type="radio"
            name="salary"
            id="salary-1"
            onClick={() => {
              salaryVar = 1;
            }}
          />
          <label htmlFor="salary-1">От 20 до 40 тысяч рублей</label>
          <br/>
          <input
            type="radio"
            name="salary"
            id="salary-2"
            onClick={() => {
              salaryVar = 2;
            }}
          />
          <label htmlFor="salary-2">От 40 до 60 тысяч рублей</label>
          <br/>
          <input
            type="radio"
            name="salary"
            id="salary-3"
            onClick={() => {
              salaryVar = 3;
            }}
          />
          <label htmlFor="salary-3">От 60 до 80 тысяч рублей</label>
          <br/>
          <input
            type="radio"
            name="salary"
            id="salary-4"
            onClick={() => {
              salaryVar = 4;
            }}
          />
          <label htmlFor="salary-4">От 80 и больше</label>
          <br/>
        </div>

        <div>
          <p>2) Сколько человек в вашей семье ?</p>
          <input
            type="radio"
            name="family"
            id="family-1"
            onClick={() => {
              familyVar = 1;
            }}
          />
          <label htmlFor="family-1">От 1 до 4 человек</label>
          <br/>
          <input
            type="radio"
            name="family"
            id="family-2"
            onClick={() => {
              familyVar = 2;
            }}
          />
          <label htmlFor="family-2">От 4 до 6 человек</label>
          <br/>
          <input
            type="radio"
            name="family"
            id="family-3"
            onClick={() => {
              familyVar = 3;
            }}
          />
          <label htmlFor="family-3">От 6 до 8 человек</label>
          <br/>
          <input
            type="radio"
            name="family"
            id="family-4"
            onClick={() => {
              familyVar = 4;
            }}
          />
          <label htmlFor="family-4">От 8 и больше человек</label>
          <br/>
        </div>

        <div>
          <p>3) Как долго вы работаете на на текущем месте работы ?</p>
          <input
            type="radio"
            name="work"
            id="work-1"
            onClick={() => {
              workVar = 1;
            }}
          />
          <label htmlFor="work-1">От 0 до 6 месяцев</label>
          <br/>
          <input
            type="radio"
            name="work"
            id="work-2"
            onClick={() => {
              workVar = 2;
            }}
          />
          <label htmlFor="work-2">От 6 до 12 месяцев</label>
          <br/>
          <input
            type="radio"
            name="work"
            id="work-3"
            onClick={() => {
              workVar = 3;
            }}
          />
          <label htmlFor="work-3">От 1 до 3 лет</label>
          <br/>
          <input
            type="radio"
            name="work"
            id="work-4"
            onClick={() => {
              workVar = 4;
            }}
          />
          <label htmlFor="work-4">От 3 и больше лет</label>
          <br/>
        </div>

        <div>
          <p>4) Какой ежемесячный платеж вы готовы платить ?</p>
          <input
            type="radio"
            name="payment"
            id="payment-1"
            onClick={() => {
              paymentVar = 1;
            }}
          />
          <label htmlFor="payment-1">От 10 до 20 тысяч рублей</label>
          <br/>
          <input
            type="radio"
            name="payment"
            id="payment-2"
            onClick={() => {
              paymentVar = 2;
            }}
          />
          <label htmlFor="payment-2">От 20 до 30 тысяч рублей</label>
          <br/>
          <input
            type="radio"
            name="payment"
            id="payment-3"
            onClick={() => {
              paymentVar = 3;
            }}
          />
          <label htmlFor="payment-3">От 30 до 40 тысяч рублей</label>
          <br/>
          <input
            type="radio"
            name="payment"
            id="payment-4"
            onClick={() => {
              paymentVar = 4;
            }}
          />
          <label htmlFor="payment-4">От 40 тысяч рублей и больше</label>
          <br/>
        </div>

        <div>
          <p>5) На какую сумму вы хотите оформить кредит ?</p>
          <input
            type="radio"
            name="credit"
            id="credit-1"
            onClick={() => {
              creditVar = 1;
            }}
          />
          <label htmlFor="credit-1">От 10.000 до 100.000 рублей</label>
          <br/>
          <input
            type="radio"
            name="credit"
            id="credit-2"
            onClick={() => {
              creditVar = 2;
            }}
          />
          <label htmlFor="credit-2">От 100.000 до 300.000 рублей</label>
          <br/>
          <input
            type="radio"
            name="credit"
            id="credit-3"
            onClick={() => {
              creditVar = 3;
            }}
          />
          <label htmlFor="credit-3">От 300.000 до 1.000.000 рублей</label>
          <br/>
          <input
            type="radio"
            name="credit"
            id="credit-4"
            onClick={() => {
              creditVar = 4;
            }}
          />
          <label htmlFor="credit-4">От 1.000.000 и больше рублей</label>
          <br/>
        </div>

        <button onClick={result}>Узнать результат</button>

      </div>

      <div className={classes.testingResult} ref={testingResult}>
        {resultTesting.text}
        <button onClick={restart}>Пройти тест заново</button>
      </div>

    </div>
  )
}

export default FacultyTest;

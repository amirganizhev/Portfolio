import React, {useState, useRef} from 'react';
import classes from './styles/CreditTest.module.css';

import Heading3 from './UI/headlines/Heading3';
import AddButton from './UI/buttons/AddButton';

const forp = () => {
  console.log('pol')
}

const CreditTest = () => {

  const [answer, setAnswer] = useState({answerBall: undefined})

  const salary1 = useRef();
  const salary2 = useRef();
  const salary3 = useRef();
  const salary4 = useRef();

  const fun = () => {
    if (salary1.current.checked) {
      setAnswer({answerBall: 1})
    } else if (salary2.current.checked) {
      setAnswer({answerBall: 2})
    } else if (salary3.current.checked) {
      setAnswer({answerBall: 3})
    } else if (salary4.current.checked) {
      setAnswer({answerBall: 4})
    }
  }

  console.log(answer.answerBall)

  return (
    <div className={classes.creditTest}>

      <Heading3>Тест для подбора кредита</Heading3>

      <div className={classes.questions}>

        <p>1) Какой ваш ежемесячный доход ?</p>
        <input
          type="radio"
          name="salary"
          id="salary-1"
          ref={salary1}
          />
        <label htmlFor="salary-1">От 20 до 40 тысяч рублей</label>
        <br/>
        <input
          type="radio"
          name="salary"
          id="salary-2"
          ref={salary2}
        />
        <label htmlFor="salary-2">От 40 до 60 тысяч рублей</label>
        <br/>
        <input
          type="radio"
          name="salary"
          id="salary-3"
          ref={salary3}
        />
        <label htmlFor="salary-3">От 60 до 80 тысяч рублей</label>
        <br/>
        <input
          type="radio"
          name="salary"
          id="salary-4"
          ref={salary4}
        />
        <label htmlFor="salary-4">От 80 и больше</label>
        <br/>

      </div>

      <AddButton onClick={fun}>onclick</AddButton>
    </div>
  )
}

export default CreditTest;

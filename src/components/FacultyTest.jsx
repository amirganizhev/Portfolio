import React, {useState, useRef} from 'react';
import classes from './styles/FacultyTest.module.css';

import hufflepuff from './images/hufflepuff.png';
import ravenclaw from './images/ravenclaw.png';
import gryffindor from './images/gryffindor.png';
import slytherin from './images/slytherin.png';

const FacultyTest = () => {

  const [resultTesting, setResultTesting] = useState({
    text: ''
  })

  const questions = useRef();
  const testingResult = useRef();

  let doorScore;
	let surpriseScore;
	let weddingScore;
	let wandScore;
	let locationScore;
	let personScore;
	let teacherScore;
	let spellScore;
	let disciplineScore;

  const result = (e) => {
    e.preventDefault();
    if (doorScore === undefined) {
      alert('Вы не ответили на 1-ый вопрос')
    } else if (surpriseScore === undefined) {
      alert('Вы не ответили на 2-ый вопрос')
    } else if (weddingScore === undefined) {
      alert('Вы не ответили на 3-ый вопрос')
    } else if (wandScore === undefined) {
      alert('Вы не ответили на 4-ый вопрос')
    } else if (locationScore === undefined) {
      alert('Вы не ответили на 5-ый вопрос')
    } else if (personScore === undefined) {
      alert('Вы не ответили на 6-ый вопрос')
    } else if (teacherScore === undefined) {
      alert('Вы не ответили на 7-ый вопрос')
    } else if (spellScore === undefined) {
      alert('Вы не ответили на 8-ый вопрос')
    } else if (disciplineScore === undefined) {
      alert('Вы не ответили на 9-ый вопрос')
    } else {
      let sumScore = doorScore + surpriseScore + weddingScore + wandScore + locationScore + personScore + teacherScore + spellScore + disciplineScore;
      questions.current.style = 'display: none';
      testingResult.current.style = 'display: block';
      if (sumScore <= 11) {
        setResultTesting({text: 'Пуффендуй'})
        /*hufflepuff.current.src = './images/slytherin.png'*/
      } else if (sumScore > 11 && sumScore <= 17) {
        setResultTesting({text: 'Когтевран'})
        /*ravenclaw.current.src = './images/ravenclaw.png'*/
      } else if (sumScore > 17 && sumScore <= 25) {
        setResultTesting({text: 'Гриффиндор'})
        /*gryffindor.current.src = './images/slytherin.png'*/
      } else if (sumScore > 25) {
        setResultTesting({text: 'Слизерин'})
        /*slytherin.current.src = './images/slytherin.png'*/
      } else {
        alert('Возникла какая то ошибка!')
      }
    }
  }

  const restart = () => {
    questions.current.style = 'display: block';
    testingResult.current.style = 'display: none';
  }

  return (
    <div className={classes.facultyTest}>

      <h1>Harry Potter</h1>

      <h2>Пройди тест и узнай свой факультет в школе чародейства и волшебства Хогвартс</h2>

      <form ref={questions}>

        <div>
          {/*.......................1 - вопрос.......................*/}
          <p>1) В какую дверь б вы вошли ?</p>
          <input  type="radio"  name="doorScore" id="doorScore-1" onClick={() => {doorScore = 3}}/>
          <label htmlFor="doorScore-1">Обычная деревянная дверь без излишеств</label>
          <br/>
          <input  type="radio"  name="doorScore" id="doorScore-2" onClick={() => {doorScore = 2}}/>
          <label htmlFor="doorScore-2">Дверь из золота, с инскрутацией камнями</label>
          <br/>
          <input  type="radio"  name="doorScore" id="doorScore-3" onClick={() => {doorScore = 1}}/>
          <label htmlFor="doorScore-3">Дверь из растений покрытых колючками</label>
          <br/>
          <input  type="radio"  name="doorScore" id="doorScore-4" onClick={() => {doorScore = 4}}/>
          <label htmlFor="doorScore-4">Железная дверь, с небольшой ржавчиной</label>
          <br/>
        </div>
        {/*.......................2 - вопрос.......................*/}
        <div>
          <p>2) Какой подарок вы б предпочли ?</p>
          <input  type="radio"  name="surpriseScore" id="surpriseScore-1" onClick={() => {surpriseScore = 2}}/>
          <label htmlFor="surpriseScore-1">Бузинная палочка</label>
          <br/>
          <input  type="radio"  name="surpriseScore" id="surpriseScore-2" onClick={() => {surpriseScore = 1}}/>
          <label htmlFor="surpriseScore-2">Мантия невидимка</label>
          <br/>
          <input  type="radio"  name="surpriseScore" id="surpriseScore-3" onClick={() => {surpriseScore = 3}}/>
          <label htmlFor="surpriseScore-3">Философский камень</label>
          <br/>
          <input  type="radio"  name="surpriseScore" id="surpriseScore-4" onClick={() => {surpriseScore = 4}}/>
          <label htmlFor="surpriseScore-4">Птица феникс</label>
          <br/>
        </div>
        {/*.......................3 - вопрос.......................*/}
        <div>
          <p>3) Кого б вы взяли в жены (вышли замуж) ?</p>
          <input  type="radio"  name="weddingScore" id="weddingScore-1" onClick={() => {weddingScore = 1}}/>
          <label htmlFor="weddingScore-1">Полумна Лавгут (Невилл Долгопупс)</label>
          <br/>
          <input  type="radio"  name="weddingScore" id="weddingScore-2" onClick={() => {weddingScore = 4}}/>
          <label htmlFor="weddingScore-2">Гермиона Гренджер (Гарри Поттер)</label>
          <br/>
          <input  type="radio"  name="weddingScore" id="weddingScore-3" onClick={() => {weddingScore = 3}}/>
          <label htmlFor="weddingScore-3">Минерва Макгонагалл (Аластор Грюм)</label>
          <br/>
          <input  type="radio"  name="weddingScore" id="weddingScore-4" onClick={() => {weddingScore = 2}}/>
          <label htmlFor="weddingScore-4">Джинни Уизли (Драко Малфой)</label>
          <br/>
        </div>
        {/*.......................4 - вопрос.......................*/}
        <div>
          <p>4) Какую палочку вы б предпочли ?</p>
          <input  type="radio"  name="wandScore" id="wandScore-1" onClick={() => {wandScore = 3}}/>
          <label htmlFor="wandScore-1">Ядро: Волосы с Хвоста Единорога</label>
          <br/>
          <input  type="radio"  name="wandScore" id="wandScore-2" onClick={() => {wandScore = 4}}/>
          <label htmlFor="wandScore-2">Ядро: Рог Василиска</label>
          <br/>
          <input  type="radio"  name="wandScore" id="wandScore-3" onClick={() => {wandScore = 2}}/>
          <label htmlFor="wandScore-3">Ядро: Волосы Фестрала</label>
          <br/>
          <input  type="radio"  name="wandScore" id="wandScore-4" onClick={() => {wandScore = 1}}/>
          <label htmlFor="wandScore-4">Ядро: Перо Феникса</label>
          <br/>
        </div>
        {/*.......................5 - вопрос.......................*/}
        <div>
          <p>5) Где б вы остались жить ?</p>
          <input  type="radio"  name="locationScore" id="locationScore-1" onClick={() => {locationScore = 2}}/>
          <label htmlFor="locationScore-1">Годрикова Впадина</label>
          <br/>
          <input  type="radio"  name="locationScore" id="locationScore-2" onClick={() => {locationScore = 4}}/>
          <label htmlFor="locationScore-2">Паучий тупик</label>
          <br/>
          <input  type="radio"  name="locationScore" id="locationScore-3" onClick={() => {locationScore = 3}}/>
          <label htmlFor="locationScore-3">Литтл Уингинг</label>
          <br/>
          <input  type="radio"  name="locationScore" id="locationScore-4" onClick={() => {locationScore = 1}}/>
          <label htmlFor="locationScore-4">Косой Переулок</label>
          <br/>
        </div>
        {/*.......................6 - вопрос.......................*/}
        <div>
          <p>6) Какому персонажу вы эмпанируете ?</p>
          <input  type="radio"  name="personScore" id="personScore-1" onClick={() => {personScore = 2}}/>
          <label htmlFor="personScore-1">Альбус Дамблдор</label>
          <br/>
          <input  type="radio"  name="personScore" id="personScore-2" onClick={() => {personScore = 3}}/>
          <label htmlFor="personScore-2">Северус Снегг</label>
          <br/>
          <input  type="radio"  name="personScore" id="personScore-3" onClick={() => {personScore = 1}}/>
          <label htmlFor="personScore-3">Том Реддл</label>
          <br/>
          <input  type="radio"  name="personScore" id="personScore-4" onClick={() => {personScore = 4}}/>
          <label htmlFor="personScore-4">Салазар Слизерин</label>
          <br/>
        </div>
        {/*.......................7 - вопрос.......................*/}
        <div>
          <p>7) Ваш любимый преподаватель в Хогвартсе ?</p>
          <input  type="radio"  name="teacherScore" id="teacherScore-1" onClick={() => {teacherScore = 1}}/>
          <label htmlFor="teacherScore-1">Минерва Макгонагалл</label>
          <br/>
          <input  type="radio"  name="teacherScore" id="teacherScore-2" onClick={() => {teacherScore = 3}}/>
          <label htmlFor="teacherScore-2">Северус Снегг</label>
          <br/>
          <input  type="radio"  name="teacherScore" id="teacherScore-3" onClick={() => {teacherScore = 4}}/>
          <label htmlFor="teacherScore-3">Аластор Грюм (Барти Крауч-младший)</label>
          <br/>
          <input  type="radio"  name="teacherScore" id="teacherScore-4" onClick={() => {teacherScore = 2}}/>
          <label htmlFor="teacherScore-4">Гораций Слизнорт</label>
          <br/>
        </div>
        {/*.......................8 - вопрос.......................*/}
        <div>
          <p>8) Ваше любимое боевое заклинание ?</p>
          <input  type="radio"  name="spellScore" id="spellScore-1" onClick={() => {spellScore = 1}}/>
          <label htmlFor="spellScore-1">Авада Кедавра</label>
          <br/>
          <input  type="radio"  name="spellScore" id="spellScore-2" onClick={() => {spellScore = 4}}/>
          <label htmlFor="spellScore-2">Сектумсемпра</label>
          <br/>
          <input  type="radio"  name="spellScore" id="spellScore-3" onClick={() => {spellScore = 3}}/>
          <label htmlFor="spellScore-3">Остолбеней</label>
          <br/>
          <input  type="radio"  name="spellScore" id="spellScore-4" onClick={() => {spellScore = 2}}/>
          <label htmlFor="spellScore-4">Экспеллиармус</label>
          <br/>
        </div>
        {/*.......................9 - вопрос.......................*/}
        <div>
          <p>9) Ваша любимая дисциплина Хогвартса ?</p>
          <input  type="radio"  name="disciplineScore" id="disciplineScore-1" onClick={() => {disciplineScore = 4}}/>
          <label htmlFor="disciplineScore-1">Защита от Тёмных искусств</label>
          <br/>
          <input  type="radio"  name="disciplineScore" id="disciplineScore-2" onClick={() => {disciplineScore = 1}}/>
          <label htmlFor="disciplineScore-2">История магии</label>
          <br/>
          <input  type="radio"  name="disciplineScore" id="disciplineScore-3" onClick={() => {disciplineScore = 3}}/>
          <label htmlFor="disciplineScore-3">Зельеварение</label>
          <br/>
          <input  type="radio"  name="disciplineScore" id="disciplineScore-4" onClick={() => {disciplineScore = 2}}/>
          <label htmlFor="disciplineScore-4">Трансфигурация</label>
          <br/>
        </div>

        <button onClick={result}>Узнать результат</button>

      </form>

      <div className={classes.testingResult} ref={testingResult}>
        <img className={classes.resultImage} src={hufflepuff} alt="hufflepuff" />
        <img className={classes.resultImage} src={ravenclaw} alt="ravenclaw" />
        <img className={classes.resultImage} src={gryffindor} alt="gryffindor" />
        <img className={classes.resultImage} src={slytherin} alt="slytherin" />
        {resultTesting.text}
        <button onClick={restart}>Пройти тест заново</button>
      </div>

    </div>
  )
}

export default FacultyTest;

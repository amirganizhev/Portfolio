import React from 'react';
import classes from './styles/WeatherApp.module.css';

import Heading2 from '../components/UI/headlines/Heading2';
import Heading3 from '../components/UI/headlines/Heading3';
import SearchInput from '../components/UI/inputs/SearchInput';
import SearchButton from '../components/UI/buttons/SearchButton';

const WeatherApp = () => {

let city = "Moscow";
let apiKey = "0489a7246fa2a2ee031b7a968af86b25";

function weatherSearch() {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
	/*Преобразует строку в массив*/
	.then(function (response) {
		return response.json();
	})
	/*Что выводить*/
	.then(function (data) {
		console.log(data);
	})
	/*Обработка ошибок*/
	.catch(function () {
		alert('Данного города нет в нашшем списке')
	})
}

weatherSearch();
/*---------------------------------------------------------------------------------------*/

  return (
    <div>
      <div className={classes.weatherAppHeading}>
        <Heading2>Погодное приложение</Heading2>
      </div>
      <form className={classes.formSearchCity}>
        <SearchInput />
        <SearchButton>Search</SearchButton>
      </form>
      <div className={classes.weatherBlock}>
        <Heading3>Страна:</Heading3>
        <Heading3>Город:</Heading3>
        <Heading3>Температура:</Heading3>
        <Heading3>Ощущается как:</Heading3>
        <Heading3>Погода:</Heading3>
        <Heading3>Иконка:</Heading3>
        <Heading3>Давление:</Heading3>
        <Heading3>Влажность:</Heading3>
        <Heading3>Скорость ветра:</Heading3>
      </div>
    </div>
  )

}

export default WeatherApp;

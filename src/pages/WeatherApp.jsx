import React, {useState} from 'react';
import classes from './styles/WeatherApp.module.css';

import Heading2 from '../components/UI/headlines/Heading2';
import Heading3 from '../components/UI/headlines/Heading3';
import SearchInput from '../components/UI/inputs/SearchInput';
import SearchButton from '../components/UI/buttons/SearchButton';

const WeatherApp = (props) => {

	const [weather, setWeather] = useState({
		country: undefined,
		city: undefined,
		temperature: undefined,
		likeTemperature: undefined,
		pressure: undefined,
		humidity: undefined,
		windSpeed: undefined
	})

/*---------------------------------------------------------------------------------------*/
	const weatherSearch = () => {
		let city = "Moscow";
		let apiKey = "4c913c448fa4638791f28b486b594b78";
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				setWeather({
					country: data.sys.country,
					city: data.name,
					temperature: data.main.temp,
					likeTemperature: data.main.feels_like,
					pressure: data.main.pressure,
					humidity: data.main.humidity,
					windSpeed: data.wind.speed
				})
			})
		}

		weatherSearch()
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
        <Heading3>Страна: {weather.country}</Heading3>
        <Heading3>Город: {weather.country}</Heading3>
        <Heading3>Температура: {weather.country}</Heading3>
        <Heading3>Ощущается как: {weather.country}</Heading3>
				<Heading3>Иконка: {weather.country}</Heading3>
        <Heading3>Погода: {weather.country}</Heading3>
        <Heading3>Давление: {weather.country}</Heading3>
        <Heading3>Влажность: {weather.country}</Heading3>
        <Heading3>Скорость ветра: {weather.country}</Heading3>
      </div>
    </div>
  )

}

export default WeatherApp;

import React, {useState, useRef} from 'react';
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

	const searchCityInput = useRef();

	let city = "Moscow";

	window.onload = () => {
		const apiKey = "0489a7246fa2a2ee031b7a968af86b25";
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				setWeather({
					country: data.sys.country,
					city: data.name,
					temperature: Math.round(data.main.temp - 273),
					likeTemperature: Math.round(data.main.feels_like - 273),
					weatherDescription: data.weather[0]['description'],
					pressure: data.main.pressure,
					humidity: data.main.humidity,
					windSpeed: data.wind.speed
				})
			})
		}

	const searchCityButton = (e) => {
		e.preventDefault();
		city = searchCityInput.current.value;
		const apiKey = "4c913c448fa4638791f28b486b594b78";
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				setWeather({
					country: data.sys.country,
					city: data.name,
					temperature: Math.round(data.main.temp - 273),
					likeTemperature: Math.round(data.main.feels_like - 273),
					weatherDescription: data.weather[0]['description'],
					pressure: data.main.pressure,
					humidity: data.main.humidity,
					windSpeed: data.wind.speed
				})
			})
			searchCityInput.current.value = '';
	}

  return (
    <div>
      <div className={classes.weatherAppHeading}>
        <Heading2>Погодное приложение</Heading2>
      </div>
      <form className={classes.formSearchCity}>
        <SearchInput ref={searchCityInput} />
        <SearchButton onClick={searchCityButton}>Search</SearchButton>
      </form>
      <div className={classes.weatherBlock}>
				<div>
					<Heading3>Страна: {weather.country}</Heading3>
					<Heading3>Город: {weather.city}</Heading3>
					<Heading3>Температура: {weather.temperature} &deg;</Heading3>
					<Heading3>Ощущается как: {weather.likeTemperature} &deg;</Heading3>
				</div>
				<div>
					<Heading3>Погода: {weather.weatherDescription}</Heading3>
					<Heading3>Давление: {weather.pressure} бар</Heading3>
					<Heading3>Влажность: {weather.humidity} %</Heading3>
					<Heading3>Скорость ветра: {weather.windSpeed} м/с</Heading3>
				</div>
      </div>
    </div>
  )

}

export default WeatherApp;

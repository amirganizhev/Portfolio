import React, {useState, useRef} from 'react';
import classes from './styles/WeatherApp.module.css';

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
			.catch(function (err) {
		     alert(err)
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
    <div className={classes.weatherApp}>
      <div>
        <h2>Погодное приложение</h2>
      </div>
      <form>
        <input type='text' ref={searchCityInput} />
        <button onClick={searchCityButton}>Search</button>
      </form>
      <div>
				<h3>Страна: {weather.country}</h3>
				<h3>Город: {weather.city}</h3>
				<h3>Температура: {weather.temperature} &deg;</h3>
				<h3>Ощущается как: {weather.likeTemperature} &deg;</h3>
				<h3>Погода: {weather.weatherDescription}</h3>
				<h3>Давление: {weather.pressure} бар</h3>
				<h3>Влажность: {weather.humidity} %</h3>
				<h3>Скорость ветра: {weather.windSpeed} м/с</h3>
      </div>
    </div>
  )

}

export default WeatherApp;

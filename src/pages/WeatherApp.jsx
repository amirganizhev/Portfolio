import React, {useState, useRef} from 'react';
import classes from './styles/WeatherApp.module.css';

const WeatherApp = (props) => {

	const [weather, setWeather] = useState({
		country: '...',
		city: '...',
		temperature: '...',
		likeTemperature: '...',
		weatherDescription: '...',
		pressure: '...',
		humidity: '...',
		windSpeed: '...'
	})

	const searchCityInput = useRef();
	const weatherInstruction = useRef();
	const weatherInfo = useRef();

	let city;

	const searchCityButton = (e) => {
		e.preventDefault();
		city = searchCityInput.current.value;
		weatherInstruction.current.style = 'display: none';
		weatherInfo.current.style = 'display: block';
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
			.catch(function () {
				alert('Данного города нет в нашем списке')
			})
			searchCityInput.current.value = '';
	}

  return (
    <div className={classes.weatherApp}>

      <h1 className={classes.weatherAppHeader}>Погодное приложение</h1>

      <form className={classes.weatherForm}>
        <input type='text' id='searchCityInput' ref={searchCityInput} className={classes.searchCityInput} />
        <button onClick={searchCityButton} className={classes.searchCityButton}>Найти город</button>
      </form>

			<div className={classes.weatherInstruction} ref={weatherInstruction}>
				Введите название города в форму выше, и приложение выдаст вам результат
				о названии страны города, сам город, температуре и ее восприятии в градусах
				цельсия, описании погоды (туман, дождь, чистое небо и т.д), давлении в бар,
				влажности в процентах и скорости ветра в метрах в секунду
			</div>

      <div className={classes.weatherInfo} ref={weatherInfo}>
				<div>Страна: {weather.country}</div>
				<div>Город: {weather.city}</div>
				<div>Температура: {weather.temperature} &deg;</div>
				<div>Ощущается как: {weather.likeTemperature} &deg;</div>
				<div>Описание: {weather.weatherDescription}</div>
				<div>Давление: {weather.pressure} бар</div>
				<div>Влажность: {weather.humidity} %</div>
				<div>Скорость ветра: {weather.windSpeed} м/с</div>
      </div>

    </div>
  )

}

export default WeatherApp;

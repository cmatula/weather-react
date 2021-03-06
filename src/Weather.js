import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),

      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let apiKey = "a6e2395246505358e7bef9273f106845";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchCurrentLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "a6e2395246505358e7bef9273f106845";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              name="Enter-city"
              autocomplete="off"
              className="enter-city-box col-md-6"
              placeholder="Enter your city"
              onChange={updateCity}
            />

            <input
              type="submit"
              className="search-btn col-md"
              value="Search ????"
            />

            <input
              type="button"
              className="location-btn col-md"
              data-bs-toggle="tooltip"
              title="Location"
              value="????"
              onClick={getCurrentLocation}
            />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading ... ";
  }
}

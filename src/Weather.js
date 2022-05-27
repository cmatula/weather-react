import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),

      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form className="search-form">
            <input
              type="search"
              name="Enter-city"
              autocomplete="off"
              className="enter-city-box col-md-6"
              placeholder="Enter your city"
            />

            <input
              type="submit"
              className="search-btn col-md"
              value="Search 🔍"
            />

            <input
              type="button"
              className="location-btn col-md"
              data-bs-toggle="tooltip"
              title="Location"
              value="📍"
            />
          </form>
        </div>
        <div className="CurrentWeather">
          <div className="row city-weather-info">
            <div className="col main-city-col">
              <h2>{weatherData.city}</h2>
              <ul className="other-weather-info">
                <li>
                  Last updated <FormattedDate date={weatherData.date} />
                </li>
                <li>{weatherData.description}</li>

                <li>💧 Humidity: {weatherData.humidity}% </li>
                <li>💨 Wind: {weatherData.wind}km/h</li>
              </ul>
            </div>

            <div className="col main-temperature-info">
              <div className="clearfix">
                <div className="float-end">
                  <strong className="main-temperature">
                    {Math.round(weatherData.temperature)}
                  </strong>
                  <span className="units"> ℃ </span>
                </div>
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="float-end main-picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "a6e2395246505358e7bef9273f106845";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return "Loading";
  }
}

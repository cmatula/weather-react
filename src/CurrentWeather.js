import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather(params) {
  let weatherData = {
    city: "Brisbane",
    temperature: 19,
    date: "10:00 Friday",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="CurrentWeather">
      <div className="row city-weather-info">
        <div className="col main-city-col">
          <h2>{weatherData.city}</h2>
          Last updated at {weatherData.date}
          <br />
          {weatherData.description}
          <div className="other-weather-info">
            💧 Humidity: {weatherData.humidity}%
            <br />
            💨 Wind: {weatherData.wind} km/h
          </div>
        </div>

        <div className="col main-temperature-info">
          <div className="clearfix">
            <div className="float-end">
              <strong className="main-temperature">
                {weatherData.temperature}
              </strong>
              <span className="units"> ℃ </span>
            </div>
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-end main-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

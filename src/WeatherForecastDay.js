import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}˚`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}˚`;
  }

  function forecastIcon() {
    let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return <img src={iconUrl} alt={props.data.weather[0].description} />;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div>{day()}</div>
      <div className="weather-icons">{forecastIcon()}</div>

      <div>
        <strong>{maxTemperature()}</strong> / <span>{minTemperature()}</span>
      </div>
    </div>
  );
}

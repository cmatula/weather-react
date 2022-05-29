import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnits] = useState("celsius");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function fahrenheit(params) {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong className="main-temperature">
          {Math.round(props.celsius)}
        </strong>
        <span className="units">
          ℃ |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <strong className="main-temperature">{Math.round(fahrenheit())}</strong>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            ℃
          </a>{" "}
          | ℉
        </span>
      </div>
    );
  }
}

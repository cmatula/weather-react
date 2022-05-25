import React from "react";

import SearchWeather from "./SearchWeather";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

import "./WeatherApp.css";

export default function WeatherApp(params) {
  return (
    <div className="WeatherApp">
      <h1>YourWeather</h1>
      <SearchWeather />
      <CurrentWeather />
      <Forecast />
      <footer>
        <a
          href="https://github.com/cmatula/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Cara Matula 👩‍💻
      </footer>
    </div>
  );
}

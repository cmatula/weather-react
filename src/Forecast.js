import React from "react";

import "./Forecast.css";
import axios from "axios";

export default function Forecast(params) {
  return (
    <div className="Forecast">
      <div className=" row forecast-weather">
        <div className="col">
          <div>Tues</div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ACyEqRdrOz6AhJa_KSICF7Q-LzSTz0NImA&usqp=CAU"
            alt="clouds"
            className="weather-icons"
          />
          <div>
            <strong>13˚</strong> /<span>3˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row city-weather-info">
        <div className="col main-city-col">
          <h2>{props.data.city}</h2>
          <ul className="other-weather-info">
            <li>
              Last updated <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>

            <li>💧 Humidity: {props.data.humidity}% </li>
            <li>💨 Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>

        <div className="col main-temperature-info">
          <div className="clearfix">
            <div className="float-end">
              <strong className="main-temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span className="units"> ℃ </span>
            </div>
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-end main-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

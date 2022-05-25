import React from "react";

import "./SearchWeather.css";

export default function SearchWeather(params) {
  return (
    <div className="SearchWeather">
      <div className="row">
        <form id="search-form" class="search-form">
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
    </div>
  );
}

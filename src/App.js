import React from "react";

import Weather from "./Weather.js";

import "./App.css";

export default function App(params) {
  return (
    <div className="App">
      <h1>YourWeather</h1>
      <Weather defaultCity="Brisbane" />

      <footer>
        <a
          href="https://github.com/cmatula/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Cara Matula 👩‍💻
      </footer>
    </div>
  );
}

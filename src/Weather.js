import React from "react";
import "./Weather.css";
export default function weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="seatch"
              placeholder="Type a city"
              className="search-box"
            ></input>
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Friday 07:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather icon"
          ></img>
          16°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 96%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

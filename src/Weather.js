import React from "react";
import "./Weather.css";
export default function weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row mb-3">
          <div className="col-6">
            <input
              type="seatch"
              placeholder="Type a city"
              className="form-control w-100"
            />
          </div>
          <div className="col-6">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Friday 07:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6 clearfix">
          <div className="float-start">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather icon"
              className="me-3"
            ></img>
          </div>
          <div className="float-start">
            <span className="temperature">16°</span>
            <span className="unit">C | F</span>
          </div>
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

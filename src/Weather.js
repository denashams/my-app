import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [query, setQuery] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
      icon: response.data.condition.icon,
    });

    setLoaded(true);
  }
  function search(){
    let apiKey = "75cct101457333214a7f31a7d08dfbo0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleQuery(event){
    setQuery(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control w-100"
                autoFocus="on"
                onChange={handleQuery}
              />
            </div>
            <div className="col-6">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <h1>
          {weatherData.city}, {weatherData.country}
        </h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 clearfix">
            <div className="float-start">
              
                <div className="float-start mt-3 me-3" >
                <WeatherIcon code={weatherData.icon} />
                </div>

            </div>
            <div className="float-start">
              <WeatherTemperature celsius={weatherData.temperature}/>
              
              
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLike)}°</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
  search(); 
    return "Loading";
  }
}

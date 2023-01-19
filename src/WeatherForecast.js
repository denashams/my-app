import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props){
    function handleResponse(response) {
        console.log(response.data);
    }
    let apiKey = "75cct101457333214a7f31a7d08dfbo0";
    let query = props.city;
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
    return (
<div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <div className="forecast-day">
            Thu
            </div>
            <WeatherIcon code="clear-sky-day" size={40}/>
            <div className="forecast-temperature">
            <span className="forecast-max-temp">19°</span> <span className="forecast-min-temp">10°</span>
            </div>
        </div>
    </div>
</div>

    );


}
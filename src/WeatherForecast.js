import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
export default function WeatherForecast(props){
    let [loaded , setLoaded] = useState(false);
    let [forecast, setForecast]=useState(null); 
    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        

                        <WeatherForecastDay data={forecast[0]}/>
                    </div>
                </div>
            </div>
            
                );

    } else {
        let apiKey = "75cct101457333214a7f31a7d08dfbo0";
        let query = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
return null;

    }
}
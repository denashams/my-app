import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
export default function WeatherForecast(props){
    let [loaded , setLoaded] = useState(false);
    let [forecast, setForecast]=useState(null);
    useEffect(() => {
setLoaded(false)

    }, [props.city]);
    
    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                {forecast.map(function (dailyForecast, index)
                {
                    return (<div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast}/>
                </div>);
                }
                )}

        
                    
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
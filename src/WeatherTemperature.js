import React, { useState } from "react";
export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");
function displayFahrenheit(event) {
event.preventDefault();
setUnit("fahrenheit");
}
function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    
}
if (unit === "celsius")  {
    return (
<div className="WeatherTemperature">
        <span className="temperature">
                {Math.round(props.celsius)}
              </span>
              <span className="unit">°C | <a href="/" onClick={displayFahrenheit}> °F</a></span>
              </div>
    );
} else {
    let fahrenheitDegree = (props.celsius * 9 / 5) + 32;
return (<div className="WeatherTemperature">
<span className="temperature">
        {Math.round(fahrenheitDegree)}°
      </span>
      <span className="unit"> <a href="/" onClick={displayCelsius}> °C</a> | °F </span>
      </div>);

}

}
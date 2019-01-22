import React from "react";
import WeatherIcon from "react-icons-weather";

const MainDisplay = ({ unit, currentWeather }) => {
  const {
    summary,
    icon,
    windSpeed,
    precipChance,
    currentTemp,
    highTemp,
    lowTemp
  } = currentWeather;
  return (
    <div>
      <WeatherIcon name="darksky" iconId={icon} />
      <h3>
        {currentTemp}
        &#176;
      </h3>
      <h3>{summary}</h3>
      <p>{highTemp}&#176;</p>
      <p>{lowTemp}&#176;</p>
      <p>{windSpeed} m/s</p>
      <p>{precipChance}%</p>
    </div>
  );
};

export default MainDisplay;

//change color based on icon
//conditional rendering with given unit type

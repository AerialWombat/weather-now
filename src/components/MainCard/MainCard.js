import React from "react";
import WeatherIcon from "react-icons-weather";

const MainCard = ({ unit, weather }) => {
  const {
    summary,
    icon,
    windSpeed,
    precipChance,
    currentTemp,
    highTemp,
    lowTemp
  } = weather;
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

export default MainCard;

//change color based on icon
//conditional rendering with given unit type

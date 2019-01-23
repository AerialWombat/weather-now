import React from "react";
import WeatherIcon from "react-icons-weather";
import styles from "./MainCard.module.scss";

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
    <div className={styles.container}>
      <WeatherIcon className={styles.icon} name="darksky" iconId={icon} />
      <h1>
        {currentTemp}
        &#176;
      </h1>
      <h3>{summary}</h3>
      <div className={styles.dataPoint}>
        <i className="wi wi-thermometer" />
        <p>{highTemp}&#176;</p>
      </div>
      <div className={styles.dataPoint}>
        <i className="wi wi-thermometer-exterior" />
        <p>{lowTemp}&#176;</p>
      </div>
      <div className={styles.dataPoint}>
        <i className="wi wi-strong-wind" />
        <p>{windSpeed}m/sec</p>
      </div>
      <div className={styles.dataPoint}>
        <i className="wi wi-raindrop" />
        <p>{precipChance}%</p>
      </div>
    </div>
  );
};

export default MainCard;

//change color based on icon
//conditional rendering with given unit type

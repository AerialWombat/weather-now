import React from "react";
import WeatherIcon from "react-icons-weather";
import DataDisplay from "../DataDisplay/DataDisplay.js";
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
    <div className={styles.wrapper}>
      <WeatherIcon className={styles.mainIcon} name="darksky" iconId={icon} />
      <h1 className={styles.currentTemp}>
        {currentTemp}
        {unit === "si" ? "°C" : "°F"}
      </h1>
      <h3 className={styles.summary}>{summary}</h3>
      <div className={styles.info}>
        <DataDisplay
          icon="thermometer"
          label="High"
          value={highTemp}
          unit={unit}
        />
        <DataDisplay
          icon="thermometer-exterior"
          label="Low"
          value={lowTemp}
          unit={unit}
        />
        <DataDisplay
          icon="strong-wind"
          label="Wind"
          value={windSpeed}
          unit={unit}
        />
        <DataDisplay
          icon="raindrop"
          label="Rain"
          value={precipChance}
          unit={unit}
        />
      </div>
    </div>
  );
};

//&#176;

export default MainCard;

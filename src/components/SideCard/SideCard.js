import React from "react";
import WeatherIcon from "react-icons-weather";
import DataDisplay from "../DataDisplay/DataDisplay.js";
import styles from "./SideCard.module.scss";

const SideCard = ({ unit, weather }) => {
  const { icon, precipChance, highTemp, lowTemp } = weather;
  return (
    <div className={styles.wrapper}>
      <div className={styles.summary}>
        <WeatherIcon name="darksky" iconId={icon} className={styles.icon} />
        <p>{icon}</p>
      </div>
      <DataDisplay icon="thermometer" label="High" value={highTemp} />
      <DataDisplay icon="thermometer-exterior" label="Low" value={lowTemp} />
      <DataDisplay icon="raindrop" label="Rain" value={precipChance} />
    </div>
  );
};

export default SideCard;

//change color based on icon
//conditional rendering with given unit type

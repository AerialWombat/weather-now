import React from "react";
import WeatherIcon from "react-icons-weather";
import styles from "./SideCard.module.scss";

const SideCard = ({ unit, weather }) => {
  const { icon, precipChance, highTemp, lowTemp } = weather;
  return (
    <div className={styles.wrapper}>
      <div className={styles.dataPoint}>
        <WeatherIcon name="darksky" iconId={icon} className={styles.icon} />
        <p>{icon}</p>
      </div>
      <div className={styles.dataPoint}>
        <i className={`wi wi-thermometer ${styles.icon}`} />
        <p>{highTemp}&#176;</p>
      </div>
      <div className={styles.dataPoint}>
        <i className={`wi wi-thermometer-exterior ${styles.icon}`} />
        <p>{lowTemp}&#176;</p>
      </div>
      <div className={styles.dataPoint}>
        <i className={`wi wi-raindrop ${styles.icon}`} />
        <p>{precipChance}%</p>
      </div>
    </div>
  );
};

export default SideCard;

//change color based on icon
//conditional rendering with given unit type

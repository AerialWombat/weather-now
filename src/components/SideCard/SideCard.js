import React from "react";
import WeatherIcon from "react-icons-weather";
import styles from "./SideCard.module.scss";

const SideCard = ({ unit, weather }) => {
  const { icon, precipChance, highTemp, lowTemp } = weather;
  return (
    <div className={styles.container}>
      <WeatherIcon name="darksky" iconId={icon} />
      <span>
        <i className="wi wi-thermometer" />
        <h3>{highTemp}&#176;</h3>
      </span>
      <span>
        <i className="wi wi-thermometer-exterior" />
        <h3>{lowTemp}&#176;</h3>
      </span>
      <span>
        <i className="wi wi-raindrop" />
        <h3>{precipChance}%</h3>
      </span>
    </div>
  );
};

export default SideCard;

//change color based on icon
//conditional rendering with given unit type

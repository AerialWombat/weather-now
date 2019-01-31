import React from "react";
import WeatherIcon from "react-icons-weather";
import DataDisplay from "../DataDisplay/DataDisplay.js";
import classNames from "classnames/bind";
import styles from "./SideCard.module.scss";

const SideCard = ({ unit, weather }) => {
  const { icon, precipChance, highTemp, lowTemp } = weather;

  let cx = classNames.bind(styles);
  let wrapperClasses = cx({
    wrapper: true,
    sunny: icon === "clear-day",
    night: icon === "clear-night",
    rain: icon === "rain",
    winter: icon === "snow" || icon === "sleet",
    windy: icon === "wind",
    fog: icon === "fog",
    cloudy:
      icon === "cloudy" ||
      icon === "partly-cloudy-day" ||
      icon === "partly-cloudy-night"
  });

  return (
    <div className={wrapperClasses}>
      <div className={styles.summary}>
        <WeatherIcon name="darksky" iconId={icon} className={styles.icon} />
      </div>
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
        icon="raindrop"
        label="Rain"
        value={precipChance}
        unit={unit}
      />
    </div>
  );
};

export default SideCard;

//change color based on icon
//conditional rendering with given unit type

import React from "react";
import styles from "./SideCard.module.scss";
import classNames from "classnames/bind";
import DataDisplay from "../DataDisplay/DataDisplay.js";
import WeatherIcon from "react-icons-weather";
import { Spring } from "react-spring";

const SideCard = ({ unit, weather }) => {
  const { day, icon, precipChance, highTemp, lowTemp } = weather;

  // Set classes for background image based on icon
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
    <Spring
      from={{ opacity: 0, marginRight: -300, marginLeft: 300 }}
      to={{ opacity: 1, marginRight: 0, marginLeft: 0 }}
      config={{ duration: 500 }}
    >
      {props => (
        <div style={props} className={wrapperClasses}>
          <div className={styles.summary}>
            <WeatherIcon name="darksky" iconId={icon} className={styles.icon} />
            <p>{day}</p>
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
      )}
    </Spring>
  );
};

export default SideCard;

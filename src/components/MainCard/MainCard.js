import React from "react";
import WeatherIcon from "react-icons-weather";
import DataDisplay from "../DataDisplay/DataDisplay.js";
import { Spring } from "react-spring";
import classNames from "classnames/bind";
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
      from={{ opacity: 0, marginRight: 300, marginLeft: -300 }}
      to={{ opacity: 1, marginRight: 0, marginLeft: 0 }}
      config={{ duration: 500 }}
    >
      {props => (
        <div style={props} className={wrapperClasses}>
          <WeatherIcon
            className={styles.mainIcon}
            name="darksky"
            iconId={icon}
          />
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
      )}
    </Spring>
  );
};

export default MainCard;

import React from "react";
import styles from "./DataDisplay.module.scss";

const DataDisplay = ({ icon, label, value, unit }) => {
  let symbol = "";
  switch (icon) {
    case "thermometer":
      symbol = "°";
      break;
    case "thermometer-exterior":
      symbol = "°";
      break;
    case "raindrop":
      symbol = "%";
      break;
    case "strong-wind":
      symbol = unit === "si" ? "m/s" : "mph";
      break;
    default:
      break;
  }

  return (
    <div className={styles.dataPoint}>
      <i className={`wi wi-${icon} ${styles.icon}`} />
      <span>
        <p>
          {value}
          {symbol}
        </p>
        <p className={styles.label}>{label}</p>
      </span>
    </div>
  );
};

export default DataDisplay;

// Determine type of data throuch icon
// Choose appropriate symbol
// if windspeed
// choose based on current unit

// Temperature: degree symbol
// Windspeed: MPH or m/s
// Rain Chance: percent symbol

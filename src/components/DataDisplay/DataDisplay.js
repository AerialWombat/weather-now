import React from "react";
import styles from "./DataDisplay.module.scss";

const DataDisplay = ({ dataType, value, unit }) => {
  console.log(dataType);
  let icon = "";
  let label = "";
  switch (dataType) {
    case "highTemp":
      icon = "thermometer";
      label = "High";
      break;
    case "lowTemp":
      icon = "thermometer-exterior";
      label = "Low";
      break;
    case "windSpeed":
      icon = "strong-wind";
      label = "Wind";
      break;
    case "precipChance":
      icon = "raindrop";
      label = "Rain";
      break;
    default:
      icon = "";
      label = "N/A";
  }
  return (
    <div className={styles.dataPoint}>
      <i className={`wi wi-${icon} ${styles.icon}`} />
      <span>
        <p>{value}&#176;</p>
        <p className={styles.label}>{label}</p>
      </span>
    </div>
  );
};

export default DataDisplay;

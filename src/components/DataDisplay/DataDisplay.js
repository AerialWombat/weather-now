import React from "react";
import styles from "./DataDisplay.module.scss";

const DataDisplay = ({ icon, label, value, unit }) => {
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

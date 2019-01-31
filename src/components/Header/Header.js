import React from "react";
import styles from "./Header.module.scss";

const Header = ({ location, unit }) => {
  return (
    <header>
      <h1 className={styles.title}>Weather Now</h1>
      <h3 className={styles.subtitle}>{location.name}</h3>
      <form className={styles.searchBar}>
        <input className={styles.search} type="text" placeholder="Location" />
        <input className={styles.submit} type="submit" value="Search" />
      </form>
      <button className={styles.toggle}>
        {unit === "SI" ? "F" : "C"}&#176;
      </button>
    </header>
  );
};

export default Header;

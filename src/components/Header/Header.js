import React from "react";
import styles from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar.js";

const Header = ({ location, unit, searchChange, searchSubmit }) => {
  return (
    <header>
      <h1 className={styles.title}>Weather Now</h1>
      <h3 className={styles.subtitle}>{location.name}</h3>
      <SearchBar searchChange={searchChange} searchSubmit={searchSubmit} />
      <button className={styles.toggle}>
        {unit === "SI" ? "F" : "C"}&#176;
      </button>
    </header>
  );
};

export default Header;

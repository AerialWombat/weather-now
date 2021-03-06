import React from "react";
import styles from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar.js";

const Header = ({ location, unit, searchChange, searchSubmit, toggleUnit }) => {
  return (
    <header>
      <h1 className={styles.title}>Weather Now</h1>
      <h3 className={styles.subtitle}>{location.name}</h3>
      <SearchBar searchChange={searchChange} searchSubmit={searchSubmit} />
      <button
        aria-label="Toggle unit type"
        className={styles.toggle}
        onClick={toggleUnit}
      >
        {unit === "si" ? "US" : "SI"}
      </button>
    </header>
  );
};

export default Header;

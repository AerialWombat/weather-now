import React from "react";
import styles from "./Header.module.scss";

const Header = ({ unit }) => {
  return (
    <header>
      <h1 className="title">Weather Now</h1>
      <h3 className="subtitle">Where this is</h3>
      <input className="search" type="text" placeholder="Location" />
      <button>{unit === "SI" ? "F" : "C"}&#176;</button>
    </header>
  );
};

export default Header;

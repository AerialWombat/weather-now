import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <a href="https://darksky.net/poweredby/" target="_blank" rel="noopener noreferrer">
        <img
          src={require("../../assets/Images/darksky.png")}
          alt="Powered by Dark Sky"
          className={styles.attribution}
        />{" "}
      </a>
    </footer>
  );
};

export default Footer;

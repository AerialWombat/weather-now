import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <a href="https://darksky.net/poweredby/" target="_blank">
        <img
          src={require("../../darksky.png")}
          alt="Powered by Dark Sky"
          className={styles.attribution}
        />{" "}
      </a>
    </footer>
  );
};

export default Footer;

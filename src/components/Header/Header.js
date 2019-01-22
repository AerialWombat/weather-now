import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Weather Now</h1>
      <h3>Where this is</h3>
      <input type="text" placeholder="Location" />
      <input type="checkbox" />
    </header>
  );
};

export default Header;

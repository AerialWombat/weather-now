import React from "react";

const Header = () => {
  return (
    <div>
      <h1>Weather Now</h1>
      <h3>Where this is</h3>
      <input type="text" placeholder="Location" />
      <button>Change unit</button>
    </div>
  );
};

export default Header;

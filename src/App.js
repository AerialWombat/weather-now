import React, { Component } from "react";
import Header from "./components/Header/Header";
import MainCard from "./components/MainCard/MainCard";
import SideCard from "./components/SideCard/SideCard";
import Footer from "./components/Footer/Footer";
import "./App.scss";

// import typography from "./utils/typography";

// typography.injectStyles();

class App extends Component {
  constructor() {
    super();
    this.state = {
      unit: "SI",
      location: {
        latitude: 0,
        longitude: 0
        //City||Town name
      },
      currentWeather: {
        summary: "Clear throughout the day",
        icon: "clear-day",
        windSpeed: "2.32",
        precipChance: 23,
        currentTemp: -4.84,
        highTemp: -6.62,
        lowTemp: -14.71
      },
      dayOneWeather: {
        icon: "snow",
        precipChance: 0,
        highTemp: 0.93,
        lowTemp: -2.05
      },
      dayTwoWeather: {
        icon: "fog",
        precipChance: 54,
        highTemp: 11.92,
        lowTemp: 11.16
      },
      dayThreeWeather: {
        icon: "rain",
        precipChance: 73,
        highTemp: 12.58,
        lowTemp: -1.98
      }
    };
  }

  componentDidMount = () => {
    console.log(this.state);
  };

  render() {
    const {
      unit,
      location,
      currentWeather,
      dayOneWeather,
      dayTwoWeather,
      dayThreeWeather
    } = this.state;
    return (
      <div className="App">
        <Header unit={unit} />
        <main>
          <MainCard unit={unit} weather={currentWeather} />
          <SideCard unit={unit} weather={dayOneWeather} />
          <SideCard unit={unit} weather={dayTwoWeather} />
          <SideCard unit={unit} weather={dayThreeWeather} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

//Header: Title, location name, searchbar later
//Display container: main display, 3 side displays
//Footer: "Made by", "Powered by Dark Sky"

//Check if location, if not, show a default message instead asking for search or something
//Change state data on unit button check/uncheck

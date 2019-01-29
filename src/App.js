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
    console.log("App component mounted");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      });
    } else {
      console.log("Geolocation is not available");
      // Render a N/A view via setting a state value
    }
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
        <div className="bg-image sunny" />
        <Header unit={unit} />
        <main>
          <MainCard unit={unit} weather={currentWeather} />
          <div className="sideCardContainer">
            <SideCard unit={unit} weather={dayOneWeather} />
            <SideCard unit={unit} weather={dayTwoWeather} />
            <SideCard unit={unit} weather={dayThreeWeather} />
          </div>
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

//Get weather data via coords and get location name via reverse geocoding
//Check if location, if not, show a default message instead asking for search or something
//Change state data on unit button check/uncheck (either do conversion or do another request to API)
//Change background based on current "icon"
//change card colors based on icon
//global color variables to import
//conditional rendering depending on unit types

//Allow user to search for a location. Implement search box as another component

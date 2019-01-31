import React, { Component } from "react";
import Header from "./components/Header/Header";
import MainCard from "./components/MainCard/MainCard";
import SideCard from "./components/SideCard/SideCard";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { getCiphers } from "tls";

// import typography from "./utils/typography";

// typography.injectStyles();

const DARKSKY_API_KEY = "**REMOVED**";
const GEO_API_KEY = "**REMOVED**";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unit: "si", //"us" or "si"
      location: {
        latitude: 0,
        longitude: 0,
        name: ""
      },
      currentWeather: {
        summary: "",
        icon: "cloudy",
        windSpeed: 0,
        precipChance: 0,
        currentTemp: 0,
        highTemp: 0,
        lowTemp: 0
      },
      dayOneWeather: {
        icon: "cloudy",
        precipChance: 0,
        highTemp: 0,
        lowTemp: 0
      },
      dayTwoWeather: {
        icon: "cloudy",
        precipChance: 54,
        highTemp: 11.92,
        lowTemp: 11.16
      },
      dayThreeWeather: {
        icon: "cloudy",
        precipChance: 0,
        highTemp: 0,
        lowTemp: 0
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

        fetch(
          `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${
            position.coords.latitude
          },${position.coords.longitude}?units=${this.state.unit}`,
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          }
        )
          .then(res =>
            res.json().then(data => {
              const { currently, daily } = data;
              this.setState({
                currentWeather: {
                  summary: currently.summary,
                  icon: currently.icon,
                  windSpeed: currently.windSpeed,
                  precipChance: currently.precipProbability * 100,
                  currentTemp: Math.round(currently.temperature),
                  highTemp: Math.round(daily.data[0].temperatureHigh),
                  lowTemp: Math.round(daily.data[0].temperatureLow)
                },
                dayOneWeather: {
                  icon: daily.data[1].icon,
                  precipChance: daily.data[1].precipProbability * 100,
                  highTemp: Math.round(daily.data[1].temperatureHigh),
                  lowTemp: Math.round(daily.data[1].temperatureLow)
                },
                dayTwoWeather: {
                  icon: daily.data[2].icon,
                  precipChance: daily.data[2].precipProbability * 100,
                  highTemp: Math.round(daily.data[2].temperatureHigh),
                  lowTemp: Math.round(daily.data[2].temperatureLow)
                },
                dayThreeWeather: {
                  icon: daily.data[3].icon,
                  precipChance: daily.data[3].precipProbability * 100,
                  highTemp: Math.round(daily.data[3].temperatureHigh),
                  lowTemp: Math.round(daily.data[3].temperatureLow)
                }
              });
            })
          )
          .catch(err => console.log(err));

        fetch(
          `https://cors-anywhere.herokuapp.com/https://api.geocod.io/v1.3/reverse?q=${
            position.coords.latitude
          },${position.coords.longitude}&api_key=${GEO_API_KEY}`
        ).then(res =>
          res.json().then(data => {
            this.setState({
              location: {
                name: `${data.results[0].address_components.city}`
              }
            });
          })
        );
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
        <Header location={location} unit={unit} />
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

//Get weather data via coords and get location name via reverse geocoding
//Check if location, if not, show a default message instead asking for search or something
//Change state data on unit button check/uncheck (either do conversion or do another request to API)
//Change background based on current "icon"
//change card colors based on icon
//conditional rendering depending on unit types
//Add link to footer for Dark Sky and also maybe Github

//Allow user to search for a location. Implement search box as another component

//37.5451812,-77.4529756 Richmond coords

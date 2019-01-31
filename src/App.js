import React, { Component } from "react";
import Header from "./components/Header/Header";
import MainCard from "./components/MainCard/MainCard";
import SideCard from "./components/SideCard/SideCard";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import classNames from "classnames/bind";

const DARKSKY_API_KEY = "**REMOVED**";
const GEO_API_KEY = "**REMOVED**";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unit: "si",
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

        // Fetching weather data and setting state
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

        // Fetching a city name via reverse geocoding
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
    // Set classes for background image based on icon
    {
      let cx = classNames.bind(styles);
      var bgClasses = cx({
        "bg-image": true,
        sunny: currentWeather.icon === "clear-day",
        night: currentWeather.icon === "clear-night",
        rain: currentWeather.icon === "rain",
        winter:
          currentWeather.icon === "snow" || currentWeather.icon === "sleet",
        windy: currentWeather.icon === "wind",
        fog: currentWeather.icon === "fog",
        cloudy:
          currentWeather.icon === "cloudy" ||
          currentWeather.icon === "partly-cloudy-day" ||
          currentWeather.icon === "partly-cloudy-night"
      });
    }
    return (
      <div className={styles.App}>
        <div className={bgClasses} />
        <Header location={location} unit={unit} />
        <main>
          <MainCard unit={unit} weather={currentWeather} />
          <div className={styles.sideCardContainer}>
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

//Change state data on unit button check/uncheck (either do conversion or do another request to API)

//Change background based on current "icon"

//Get weather data via coords and get location name via reverse geocoding
//Check if location, if not, show a default message instead asking for search or something
//Allow user to search for a location. Implement search box as another component

//Add link to footer for Dark Sky and also maybe Github

//Optimize images

//37.5451812,-77.4529756 Richmond coords

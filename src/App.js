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
      isFetching: false,
      unit: "si",
      searchQuery: "",
      location: {
        latitude: 0,
        longitude: 0,
        name: ""
      },
      currentWeather: {
        summary: null,
        icon: "clear-day",
        windSpeed: null,
        precipChance: null,
        currentTemp: null,
        highTemp: null,
        lowTemp: null
      },
      dayOneWeather: {
        day: null,
        icon: "cloudy",
        precipChance: null,
        highTemp: null,
        lowTemp: null
      },
      dayTwoWeather: {
        day: null,
        icon: "cloudy",
        precipChance: null,
        highTemp: null,
        lowTemp: null
      },
      dayThreeWeather: {
        day: null,
        icon: "cloudy",
        precipChance: null,
        highTemp: null,
        lowTemp: null
      }
    };
  }

  componentDidMount = () => {
    // Set viewport height unit on mount to fix issues with mobile keyboard compressing styles
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          isFetching: true,
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });

        // Fetching weather data and setting state
        this.getWeather(
          position.coords.latitude,
          position.coords.longitude,
          this.state.unit
        );

        // Fetching a city name via reverse geocoding
        fetch(
          `https://api.geocod.io/v1.3/reverse?q=${position.coords.latitude},${
            position.coords.longitude
          }&api_key=${GEO_API_KEY}`
        ).then(res =>
          res.json().then(data => {
            this.setState({
              isFetching: false,
              location: {
                ...this.state.location,
                name: `${data.results[0].address_components.city}, ${
                  data.results[0].address_components.state
                }`
              }
            });
          })
        );
      });
    } else {
      console.log("Geolocation is not available");
    }
  };

  getDay = dayNumber => {
    switch (dayNumber) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        break;
    }
  };

  getCoord = address => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.geocod.io/v1.3/geocode?q=${address}&api_key=**REMOVED**`
      )
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  };

  getWeather = (lat, long, unit) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${long}?units=${unit}&exclude=minutely,hourly,alerts,flags`,
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
              precipChance: Math.round(currently.precipProbability * 100),
              currentTemp: Math.round(currently.temperature),
              highTemp: Math.round(daily.data[0].temperatureHigh),
              lowTemp: Math.round(daily.data[0].temperatureLow)
            },
            dayOneWeather: {
              day: this.getDay(new Date(daily.data[1].time * 1000).getDay()),
              icon: daily.data[1].icon,
              precipChance: Math.round(daily.data[1].precipProbability * 100),
              highTemp: Math.round(daily.data[1].temperatureHigh),
              lowTemp: Math.round(daily.data[1].temperatureLow)
            },
            dayTwoWeather: {
              day: this.getDay(new Date(daily.data[2].time * 1000).getDay()),
              icon: daily.data[2].icon,
              precipChance: Math.round(daily.data[2].precipProbability * 100),
              highTemp: Math.round(daily.data[2].temperatureHigh),
              lowTemp: Math.round(daily.data[2].temperatureLow)
            },
            dayThreeWeather: {
              day: this.getDay(new Date(daily.data[3].time * 1000).getDay()),
              icon: daily.data[3].icon,
              precipChance: Math.round(daily.data[3].precipProbability * 100),
              highTemp: Math.round(daily.data[3].temperatureHigh),
              lowTemp: Math.round(daily.data[3].temperatureLow)
            }
          });
        })
      )
      .catch(err => console.log(err));
  };

  searchChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  searchSubmit = event => {
    this.setState({ isFetching: true });
    this.getCoord(this.state.searchQuery)
      .then(data => {
        this.getWeather(
          data.results[0].location.lat,
          data.results[0].location.lng,
          this.state.unit
        );
        this.setState({
          isFetching: false,
          location: {
            latitude: data.results[0].location.lat,
            longitude: data.results[0].location.lng,
            name: `${
              data.results[0].address_components.city
                ? data.results[0].address_components.city + ","
                : ""
            }
          ${
            data.results[0].address_components.state
              ? data.results[0].address_components.state
              : ""
          }`
          }
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isFetching: false,
          location: {
            name: "Error retrieving data"
          }
        });
      });
    event.preventDefault();
  };

  toggleUnit = () => {
    this.setState(
      {
        unit: this.state.unit === "si" ? "us" : "si"
      },
      () => {
        this.getWeather(
          this.state.location.latitude,
          this.state.location.longitude,
          this.state.unit
        );
      }
    );
  };

  getContent = () => {
    let content;
    const {
      isFetching,
      unit,
      location,
      currentWeather,
      dayOneWeather,
      dayTwoWeather,
      dayThreeWeather
    } = this.state;

    if (location.name) {
      content = (
        <main className={styles.cardGrid}>
          <MainCard unit={unit} weather={currentWeather} />
          <div className={styles.sideCardContainer}>
            <SideCard unit={unit} weather={dayOneWeather} />
            <SideCard unit={unit} weather={dayTwoWeather} />
            <SideCard unit={unit} weather={dayThreeWeather} />
          </div>
        </main>
      );
    } else if (!location.name) {
      content = (
        <main className={styles.defaultView}>
          <h1>Enter a location</h1>
        </main>
      );
    }

    if (isFetching) {
      content = (
        <main width="320" height="320" className={styles.defaultView}>
          <video
            className={styles.spinner}
            src={require("./assets/spinner.webm")}
            type="video/webm"
            autoPlay
            loop
          />
        </main>
      );
    }

    return content;
  };

  render() {
    const { unit, location, currentWeather } = this.state;

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
        <Header
          location={location}
          unit={unit}
          searchChange={this.searchChange}
          searchSubmit={this.searchSubmit}
          toggleUnit={this.toggleUnit}
        />
        {this.getContent()}

        <Footer />
      </div>
    );
  }
}

export default App;

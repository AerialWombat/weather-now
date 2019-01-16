import React, { Component } from "react";
import "./App.css";
import typography from "./utils/typography";

typography.injectStyles();

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
        summary: "",
        icon: "",
        windSpeed: "",
        precipChance: 0,
        currentTemp: 0,
        highTemp: 0,
        lowTemp: 0
      },
      dayOneWeather: {
        icon: "",
        precipChance: "",
        highTemp: "",
        lowTemp: ""
      }
    };
  }

  componentDidMount = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>
          The path of the righteous man is beset on all sides by the iniquities
          of the selfish and the tyranny of evil men. Blessed is he who, in the
          name of charity and good will, shepherds the weak through the valley
          of darkness, for he is truly his brother's keeper and the finder of
          lost children. And I will strike down upon thee with great vengeance
          and furious anger those who would attempt to poison and destroy My
          brothers. And you will know My name is the Lord when I lay My
          vengeance upon thee.
        </p>
      </div>
    );
  }
}

export default App;

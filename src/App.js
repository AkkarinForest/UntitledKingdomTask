import React, { Component } from "react";
import "./styles.css";

import CookieClicker from "./modules/CookieClicker.js";
import Stats from "./modules/Stats.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CookieClicker />
        <Stats />
      </div>
    );
  }
}

export default App;

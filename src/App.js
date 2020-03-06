import React, { Component } from "react";
import "../css/styles.css";
import "../css/clicker.css";
import "../css/achievements.css";

import CookieClicker from "./modules/CookieClicker.js";
import Achievements from "./modules/Achievements.js";
import Stats from "./modules/Stats.js";

class App extends Component {
  render() {
    return (
      <div className="content-wrap">
        <div className="clicking-wrap">
          <CookieClicker />
          <Stats />
        </div>
        <Achievements />
      </div>
    );
  }
}

export default App;

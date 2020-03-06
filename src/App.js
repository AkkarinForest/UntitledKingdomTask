import React, { Component } from "react";
import "./styles.css";
import { inject, observer } from "mobx-react";

import CookieClicker from "./CookieClicker.js";

@inject("CounterStore")
@observer
class App extends Component {
  render() {
    const { clickCount } = this.props.CounterStore;

    return (
      <div className="App">
        <CookieClicker />
        You clicked {clickCount} times.
      </div>
    );
  }
}

export default App;

@observer
class Clicker extends Component {
  yellow = () => {
    const counterValue = this.props.counterValue;
    console.warn("cnahging couner v");
    counterValue = 2;
  };

  render() {
    const counterValue = this.props.counterValue;

    return (
      <div className="Clicker">
        <button onClick={this.yellow}>Click me!</button>
      </div>
    );
  }
}

class Counter extends Component {
  render() {
    const counterValue = this.props.counterValue;
    return (
      <div className="Clicker">
        You clicked:
        <h2>{counterValue}</h2>
      </div>
    );
  }
}

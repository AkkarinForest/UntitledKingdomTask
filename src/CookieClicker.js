import React, { Component } from "react";
import "./styles.css";
import { inject, observer } from "mobx-react";

@inject("CounterStore")
@observer
class CookieClicker extends Component {
  render() {
    const { increaseCounter } = this.props.CounterStore;
    console.warn("changed");

    return (
      <div>
        <button onClick={increaseCounter}>Click me!</button>
      </div>
    );
  }
}

export default CookieClicker;

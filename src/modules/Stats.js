import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("CounterStore")
@observer
class Stats extends Component {
  render() {
    const { clickCount, experienceLevel } = this.props.CounterStore;

    return (
      <div>
        <p>You clicked {clickCount} times.</p>
        <p>Your experience level is {experienceLevel}.</p>
      </div>
    );
  }
}

export default Stats;

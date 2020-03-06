import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Achievement from "./Achievement.js";

@inject("CounterStore")
@observer
class Achievements extends Component {
  achievements = () => {
    const { achievementsData } = this.props.CounterStore;

    return achievementsData.map(achievement => (
      <Achievement
        title={achievement.title}
        achieved={achievement.achieved}
        icon={achievement.icon}
        key={achievement.title}
      />
    ));
  };

  render() {
    return (
      <div className="achievements-wrap">
        <div>
          <h2> Achievements </h2>
        </div>
        <div className="achievements-columns">{this.achievements()}</div>
      </div>
    );
  }
}

export default Achievements;

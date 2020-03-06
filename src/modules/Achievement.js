import React, { Component } from "react";
import QuestionMark from "../../images/question-mark.png";
const classNames = require("classnames");

class Achievement extends Component {
  render = () => {
    const { title, achieved, icon } = this.props;
    const achievementClass = classNames("achievement", { achieved: achieved });
    const maybeIcon = achieved ? icon : QuestionMark;

    return (
      <div className={achievementClass}>
        <img src={maybeIcon} alt="clicking enthusiast avatar" />
        <p>{title}</p>
      </div>
    );
  };
}

export default Achievement;

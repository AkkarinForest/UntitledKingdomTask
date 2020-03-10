import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import MacaronButton from "../../images/macaron-button.png";

@inject("CounterStore")
@observer
class CookieClicker extends Component {
  onClick = () => {
    const { increaseCounter, saveClickTime } = this.props.CounterStore;
    increaseCounter();
    saveClickTime();
  };

  render() {
    return (
      <div>
        <input
          className="clicker-macaron"
          type="image"
          src={MacaronButton}
          onClick={this.onClick}
          aria-label="Macaron button"
        />
      </div>
    );
  }
}

export default CookieClicker;

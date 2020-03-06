import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import CounterStore from "./stores/CounterStore.js";
import App from "./App";

const Root = (
  <Provider CounterStore={CounterStore}>
    <App />
  </Provider>
);
const rootElement = document.getElementById("root");

ReactDOM.render(Root, rootElement);

import "bulma/css/bulma.css";
import "react-time-picker/dist//TimePicker.css";
import "react-clock/dist/Clock.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./stores";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

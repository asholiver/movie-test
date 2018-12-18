import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Icons } from "./components";
import "./css/Resets.css";
import "./css/Settings.css";
import "./css/Keyframes.css";
import "./css/Helpers.css";
import App from "./containers/App";

ReactDOM.render(
  <Fragment>
    <Icons />
    <App />
  </Fragment>,
  document.getElementById("root")
);

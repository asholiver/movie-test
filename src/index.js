import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Icons } from "./elements";
import "./css/Resets.css";
import "./css/Settings.css";
import "./css/Keyframes.css";
import "./css/Helpers.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Fragment>
    <Icons />
    <App />
  </Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

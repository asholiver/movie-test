import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Icons } from "./elements";
import "./css/Helpers.css";
import "./css/Keyframes.css";
import "./css/Resets.css";
import "./css/Settings.css";
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

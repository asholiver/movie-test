import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Icons } from "./Elements";
import "./Css/Helpers.css";
import "./Css/Keyframes.css";
import "./Css/Resets.css";
import "./Css/Settings.css";
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

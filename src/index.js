import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./App/Root";
import store from "./App/store";
import { CssBaselinem } from "@material-ui/core";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

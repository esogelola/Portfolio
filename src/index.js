import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import App from "./app/App";

require("bootstrap");

ReactGA.initialize("UA-30881260-2");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));

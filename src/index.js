import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import App from "./app/App";

// General CSS for the entire application, nothing specific
import "./assets/css/fix.css";
import "./assets/css/app.css";

ReactGA.initialize("UA-30881260-2");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));

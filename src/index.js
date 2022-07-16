import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import App from "./app/App";
import { initializeApp } from "firebase/app";

require("bootstrap");
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkq7QV0mss5VIF60m_m4dGg70SQ9UXgeg",
  authDomain: "esogelola-portfolio-336f5.firebaseapp.com",
  projectId: "esogelola-portfolio-336f5",
  storageBucket: "esogelola-portfolio-336f5.appspot.com",
  messagingSenderId: "932380663329",
  appId: "1:932380663329:web:0fbea2d0b658bd864b4d60",
};
const app = initializeApp(firebaseConfig);
ReactGA.initialize("UA-30881260-2");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App app={app} />, document.getElementById("root"));

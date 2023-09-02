import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import App from "./App.tsx";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyCGkH6HMwgkGMr1PitQzRCc3lMWu-5s3Eg",
  authDomain: "esogelola-portfolio.firebaseapp.com",
  projectId: "esogelola-portfolio",
  storageBucket: "esogelola-portfolio.appspot.com",
  messagingSenderId: "69334616443",
  appId: "1:69334616443:web:8841c4fd61c1782d3c55de",
  measurementId: "G-17B0J660CG",
};

const application = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
getAnalytics(application);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

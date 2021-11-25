import React from "react";
// Components
import Header from "./components/header";
import Contact from "./components/contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Project from "./Pages/Project";
import Home from "./Pages/Home";
import About from "./Pages/About";

// JSON
import data from "./data/information.json";

import images from "../assets/images/projectImages";

import ScrollToTop from "./components/ScrollToTop.js";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header personalData={data} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="project/:projectId"
            element={<Project projects={data} projectImages={images} />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <Contact personalData={data} />
      </BrowserRouter>
    </>
  );
}

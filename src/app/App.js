import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ScrollToTop from "./ScrollToTop.js";

import "./app.css";

import biography from "./data/biography.json";
import projectData from "./data/projects.json";

import { Header, Footer } from "./components";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header socials={biography.socials} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                socials={biography.socials}
                projectData={projectData}
                experienceData={biography.experience}
              />
            }
          />

          <Route
            path="*"
            element={
              <Home
                socials={biography.socials}
                projectData={projectData}
                experienceData={biography.experience}
              />
            }
          />
        </Routes>
        <Footer socials={biography.socials} />
      </BrowserRouter>
    </>
  );
}

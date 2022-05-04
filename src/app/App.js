import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Project from "./Pages/Project";
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
            path="/:projectSlug"
            projectData={projectData}
            element={<Project projectData={projectData} />}
          />
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

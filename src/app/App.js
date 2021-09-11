import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Experience from "./components/experience";
// General CSS for the entire application, nothing specific
import "../assets/css/fix.css";
import "../assets/css/app.css";

import data from "./data/information.json";
import hero from "../assets/images/hero.png";
import images from "../assets/images/projectImages";

export default function App() {
  return (
    <>
      <Header personalData={data} />
      <Introduction personalData={data} heroImage={hero} />
      <Skills personalData={data} />
      <Experience personalData={data} />
      <Projects personalData={data} projectImages={images} />
      <Contact personalData={data} />
      <Footer personalData={data} />
    </>
  );
}

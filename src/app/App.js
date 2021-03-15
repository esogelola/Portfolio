import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Experience from "./components/Experience";
import "../assets/css/app.css";
export default function App() {
  return (
    <>
      <Header />
      <Introduction />

      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
}

import React from "react";
import { Container } from "react-bootstrap";
import "../components/introduction/introduction.css";
import Skills from "../components/skills/index";
import Experience from "../components/experience/index";

import data from "../data/biography.json";
function About({ personalData }) {
  return (
    <Container id="main" className=" about">
      <hr />
      <Skills personalData={data} />
      <hr />
      <Experience personalData={data} />
    </Container>
  );
}

export default About;

import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/images/hero.png";
import "../components/introduction/introduction.css";
import Skills from "../components/skills/index";
import Experience from "../components/experience/index";
import { ImLinkedin2, ImTwitter, ImGithub } from "react-icons/im";

import data from "../data/information.json";
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

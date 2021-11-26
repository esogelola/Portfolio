import React from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../../assets/images/hero.png";
import "../components/introduction/introduction.css";
import Skills from "../components/skills/index";
import Experience from "../components/experience/index";
import { ImLinkedin2, ImTwitter, ImGithub } from "react-icons/im";

import data from "../data/information.json";
function About({ personalData }) {
  return (
    <Container id="main" className=" about">
      <header>
        <Row>
          <a
            href="https://www.linkedin.com/in/emmanuelsogelola/"
            className="logo mx-auto rounded-circle bg-black"
            target="_blank"
            rel="noreferrer"
          >
            <span class="hero mx-auto">
              <img src={logo} alt="memoji" />
            </span>
          </a>
        </Row>

        <Row className="justify-content-md-center  text-center ">
          <h1 className="mb-0">Emmanuel Sogelola</h1>

          <ul className="list-inline mb-5 w-100">
            <li className="list-inline-item">
              <a
                href={personalData.main.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin2 className="mr-3" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href={personalData.main.socials.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <ImTwitter className="mr-3" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href={personalData.main.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <ImGithub />
              </a>
            </li>
          </ul>

          <p>
            A recent graduate of George Brown College with an Advanced Diploma
            in Computer Programmer Analyst with a personal interest in Software
            Engineering. I like to solve problems and fix errors and have
            consistently been a detail-oriented person that keeps tasks
            organized to maintain productivity. All my projects and
            accomplishments have contributed to my growing urge to progress as a
            professional developer.
          </p>
        </Row>
        <hr />
        <Skills personalData={data} />
        <hr />
        <Experience personalData={data} />
      </header>
    </Container>
  );
}

export default About;

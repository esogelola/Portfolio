import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../../assets/images/logo.png";
import "./introduction.css";
import { ImLinkedin2, ImTwitter, ImGithub, ImFileText } from "react-icons/im";

// import { IoSchoolSharp, IoCodeSlash } from "react-icons/io5";
// import { GiBookshelf } from "react-icons/gi";
// import { ImLinkedin2, ImTwitter, ImGithub } from "react-icons/im";

export default function Introduction({ personalData, heroImage }) {
  return (
    <Container id="main" fluid="lg">
      <header>
        <Row className="justify-content-md-center ">
          <Col md={4} lg={3} className="justify-content-center text-center">
            <a
              href="https://www.linkedin.com/in/emmanuelsogelola/"
              className="logo"
              target="_blank"
              rel="noreferrer"
            >
              <span className="symbol">
                <ScrollAnimation animateIn="fadeInDown">
                  <img src={logo} alt="memoji" className="hover mx-auto" />
                </ScrollAnimation>
                <span className="title">Emmanuel Sogelola</span>
              </span>
            </a>
          </Col>
          <Col md={6} lg={6}>
            <h1>A Software Engineer and Game Engine Enthusiast.</h1>

            <p>
              I am a third year <b>Software Engineering Technology</b> student
              at McMaster University. Currently a <b>Junior Developer Intern</b>{" "}
              @ InnovFin Consulting and incoming <b>Software Engineer Intern</b>{" "}
              @ Momentive.ai (formerly SurveyMonkey).
              <ul className="list-inline">
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
                    <ImGithub className="mr-3" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href={personalData.main.resumeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ImFileText />
                  </a>
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </header>
    </Container>
  );
}

import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../../assets/images/logo.png";
import "./introduction.css";

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
            <h1>
              A Software Engineer and Game Engine Enthusiast <br /> from
              Toronto.
            </h1>
            <p>
              I like to solve problems and fix errors and have consistently been
              detail-oriented. Keeping tasks organized to maintain productivity.
              All my projects and accomplishments have contributed to my growing
              urge to progress as a professional developer and soon CTO.
            </p>
          </Col>
        </Row>
      </header>
    </Container>
  );
}

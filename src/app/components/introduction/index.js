import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import logo from "../../../assets/images/logo.png";
import "./introduction.css";
import { ImLinkedin2, ImTwitter, ImGithub, ImFileText } from "react-icons/im";

// import { IoSchoolSharp, IoCodeSlash } from "react-icons/io5";
// import { GiBookshelf } from "react-icons/gi";
// import { ImLinkedin2, ImTwitter, ImGithub } from "react-icons/im";

export default function Introduction({ personalData, heroImage }) {
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <Container id="main" fluid="lg">
      <header>
        <Row className="justify-content-md-center ">
          <Col md={6} lg={3} className="justify-content-center text-center">
            <a
              href="https://www.linkedin.com/in/emmanuelsogelola/"
              className="logo"
              target="_blank"
              rel="noreferrer"
            >
              <span className="symbol">
                <img src={logo} alt="memoji" className="hover mx-auto" />
              </span>
            </a>
          </Col>
          <Col md={4} lg={4}>
            <h1>
              <span>
                Hello! <span className="underline"></span>
              </span>
            </h1>
            <p>
              I'm <b>Emmanuel Sogelola</b>, a {getAge("2000/10/22")} years old
              Software Engineer and Game Engine enthusiast.
            </p>
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

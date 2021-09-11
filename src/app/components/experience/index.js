import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ScrollAnimation from "react-animate-on-scroll";

import "./experience.css";

function Timeline({ education }) {
  const { years, title, content, program } = education;
  return (
    <div className="timeline-container">
      <div className="content">
        <span className="time">{years}</span>
        <h3 className="title mb-0">{title}</h3>
        <i className="subtitle mb-3">{program}</i>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default function Experience({ personalData }) {
  console.log(personalData);
  return (
    <>
      <Container className="experienceBackground" id="experience" fluid>
        <Container className="experienceSection">
          <Row data-aos="fade-up">
            <Col>
              <ScrollAnimation animateIn="fadeInDown">
                <h2 className="mb-2 float experienceHeading">Experience</h2>
                <p className="mb-5"></p>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <div className="timeline edu overflow-hidden">
                {personalData.main.education.map((education, num) => (
                  <Timeline
                    key={num}
                    education={education}
                    program={education.program}
                  />
                ))}
                <span className="line"></span>
              </div>
            </Col>
            <Col md="6">
              <div
                className="spacer d-md-none d-lg-none"
                data-height="30"
              ></div>
              <div className="timeline exp bg-white   overflow-hidden">
                {personalData.main.work.map((experience, num) => (
                  <Timeline key={num} education={experience} />
                ))}
                <span className="line"></span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

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
        <h4 className="title mb-0">{title}</h4>
        <i className="subtitle mb-3">{program}</i>
        <p>{content}</p>
      </div>
    </div>
  );
}
export default function Experience({ personalData }) {
  return (
    <>
      <Row data-aos="fade-up">
        <Col>
          <h2 className="mb-2  experienceHeading">Experience</h2>
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
          <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          <div className="timeline exp  overflow-hidden">
            {personalData.main.work.map((experience, num) => (
              <Timeline key={num} education={experience} />
            ))}
            <span className="line"></span>
          </div>
        </Col>
      </Row>
    </>
  );
}

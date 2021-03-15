import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ScrollAnimation from "react-animate-on-scroll";

import "../../assets/css/skills.css";

const educationData = [
  {
    id: 1,
    title: "Ontario Advanced Diploma",
    program: "Computer Programmer Analyst",
    years: "2018 - Present",
    content: "Achieving an Ontario Advanced Diploma at George Brown College ",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Leon's Furniture",
    years: "2017 - 2021",
    content:
      "Consult with delivery drivers for efficient loading and unloading ,Operate heavy machinery, such as forklifts, as needed. Organize loading/unloading zone for maximized efficiency.",
  },
  {
    id: 2,
    title: "Kindly Beast",
    years: "2019 - 2019",
    content:
      "Implemented an audio queue for a playable character using Unity & C#. Utilized SourceTree and Jira for workflow management. Shadows a Junior & Senior Developer Learned automation using the .Net Framework, Ruby on Rails & Fastlane.",
  },
];
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

export default function Experience() {
  return (
    <>
      <Container className="section experience-home" id="experience">
        <Container>
          <Row data-aos="fade-up">
            <Col>
              <ScrollAnimation animateIn="fadeInDown">
                <h2 className="mb-2 float">Experience</h2>
                <p className="mb-5"></p>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
                {educationData.map((education) => (
                  <Timeline
                    key={education.id}
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
              <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
                {experienceData.map((experience) => (
                  <Timeline key={experience.id} education={experience} />
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

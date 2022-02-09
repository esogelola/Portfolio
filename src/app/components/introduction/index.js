import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, useAccordionButton, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import "./introduction.css";
import {
  ImLinkedin2,
  ImTwitter,
  ImGithub,
  ImFileText,
  ImBook,
} from "react-icons/im";

// import { IoSchoolSharp, IoCodeSlash } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";

export default function Introduction({ personalData, heroImage }) {
  function ProjectItem({ title, tags, description, image, status }) {
    return (
      <li className="project-item-container  my-2">
        <div className="project-item">
          <div className="project-image-container  ">
            <img alt="logo" className="img" src={`assets/${image}`} />
          </div>
          <div className="project-item-content">
            <div className="project-item-title">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=fr.bdb.app"
              >
                {title}
              </a>
              <div className="project-tech-list">
                {tags &&
                  tags.map((tagName) => {
                    return <span className="project-tech-item">{tagName}</span>;
                  })}

                {status === 0 && (
                  <span class=" project-tech-item  bg-warning text-white">
                    In-progress
                  </span>
                )}
                {status === 1 && (
                  <span class=" project-tech-item  bg-danger text-white">
                    Scrapped
                  </span>
                )}
              </div>
            </div>

            <p className="project-item-description">{description}</p>
          </div>
        </div>
      </li>
    );
  }

  function CustomToggle({ children, eventKey, year }) {
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => "user as expanded" + { children }
    );

    return (
      <h1 type="button" className="toggleButton" onClick={decoratedOnClick}>
        <span>{children}</span>
      </h1>
    );
  }
  function ExperienceItem({ icon, linkTitle, link, content, first = false }) {
    return (
      <li className="experience-item-container">
        <div className="experience-item">
          <div className="experience-item-icon-container">
            <div className="experience-item-icon"></div>
            {icon}
            {!first && <div className="experience-item-line"></div>}
          </div>
          <div className="experience-item-content">
            {content}{" "}
            {link && (
              <a target="_blank" rel="noreferrer" href={link}>
                {linkTitle}{" "}
                <svg viewBox="0 0 24 24" focusable="false" class=" icon">
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </g>
                </svg>
              </a>
            )}
          </div>
        </div>
      </li>
    );
  }
  return (
    <Container id="main">
      <Row className="justify-content-md-center ">
        <Col md={4} className="memoji ">
          <img src="assets/logo.png" alt="memoji" className="hover " />
        </Col>
        <Col className="content">
          <h1>
            <span> Hello!</span>
          </h1>
          <p>
            My name is <b>Emmanuel Sogelola</b>, I'm a{" "}
            <b>Software Engineering Technology </b> student at McMaster
            University.
          </p>
          <p>
            Currently a <b>Junior Developer Intern</b> at{" "}
            <a href="https://innovfin.ca/" target="_blank" rel="noreferrer">
              InnovFin Consulting
            </a>
            . Incoming <b>Software Engineer Intern</b> at <b>Momentive.ai</b>.
          </p>
          <div className="personalLinks shadow">
            <ul className="list-inline">
              <div className="list-inline-item social-media-icon    bg-white rounded p-2">
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <ImLinkedin2 data-toggle="tooltip" title="LinkedIn" />
                  </a>
                </li>
              </div>
              <div className="list-inline-item social-media-icon    bg-white rounded p-2">
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <ImTwitter data-toggle="tooltip" title="Twitter" />
                  </a>
                </li>
              </div>
              <div className="list-inline-item social-media-icon    bg-white rounded p-2">
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <ImGithub data-toggle="tooltip" title="Github" />
                  </a>
                </li>
              </div>
              <div className="list-inline-item social-media-icon  shadow  bg-white rounded p-2">
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <ImFileText data-toggle="tooltip" title="Resume" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="experience" id="experience">
        <h1>
          <span> Experience</span>
        </h1>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <CustomToggle eventKey="0">2021</CustomToggle>
            <Accordion.Body>
              <ol className="experience-list-container">
                <ExperienceItem
                  content="Created an Account on "
                  icon={<ImGithub />}
                  link="#"
                  linkTitle="Github.com"
                />
                <ExperienceItem
                  content="Read 7 books"
                  icon={<ImBook />}
                  first={true}
                />
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <CustomToggle eventKey="1">2020</CustomToggle>
            <Accordion.Body>
              <ol className="experience-list-container">
                <ExperienceItem
                  content="Created an Account on "
                  icon={<ImGithub />}
                  link="#"
                  linkTitle="Github.com"
                />
                <ExperienceItem content="Read 7 books" icon={<ImBook />} />
                <ExperienceItem
                  content="Obtained a Computer Programming & Analysis diploma"
                  icon={<GiGraduateCap />}
                  first={true}
                />
              </ol>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row className="projects" id="projects">
        <h1>
          <span> Projects</span>
        </h1>
        <div className="project-list-container">
          <ol className="project-list">
            <ProjectItem
              status={0}
              image="test.png"
              description="An e-commerce website that allows user's to create, view and buy any product listed on the site."
              tags={[
                "react",
                "javascript",
                "stripe",
                "tailwindcss",
                "redux",
                "aws-amplify",
              ]}
              title="EMAZON"
            />
            <ProjectItem
              status={0}
              image="test.png"
              description="An e-commerce website that allows user's to create, view and buy any product listed on the site."
              tags={[
                "react",
                "javascript",
                "stripe",
                "tailwindcss",
                "redux",
                "aws-amplify",
              ]}
              title="EMAZON"
            />
            <ProjectItem
              status={1}
              image="test.png"
              description="An e-commerce website that allows user's to create, view and buy any product listed on the site."
              tags={[
                "react",
                "javascript",
                "stripe",
                "tailwindcss",
                "redux",
                "aws-amplify",
              ]}
              title="EMAZON"
            />
          </ol>
        </div>
      </Row>
      <Row className="contact" id="contact">
        <h1>
          <span> Contact Me</span>
        </h1>
      </Row>
    </Container>
  );
}

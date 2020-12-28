import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ScrollAnimation from "react-animate-on-scroll";

import "../../assets/css/project.css";

import Information from "../data/information.json";

export default function Projects() {
  const [filter, setFilter] = useState("");

  const lowercasedFilter = filter.toLowerCase();
  const filteredData =
    filter === ""
      ? Information.projects
      : Information.projects.filter((item) => {
          return item.filter.includes(lowercasedFilter);
        });

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleChange = (event) => {
    //setFilter(event.target.value);
    setFilter(event.target.attributes["data-filter"].value);
  };
  const Project = ({ project, delay }) => {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
      <ScrollAnimation animateIn="pulse" delay={delay} animateOnce={true}>
        <Card
          className="mb-3 portfolio-item shadow-lg rounded "
          onClick={() => openInNewTab(project.link)}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <Row noGutters="true">
            <Col md="4">
              <img
                src={`/static/project-images/${project.image}`}
                alt={project.name}
                width="100%"
                height="100%"
                style={{ width: "100%", height: "250px" }}
              />
            </Col>
            <Col md="8">
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  {project.icons.map((icon, num) => {
                    switch (icon.type) {
                      case "di":
                        return (
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id={"tooltip-top"}>{icon.name}</Tooltip>
                            }
                            key={num}
                          >
                            <i
                              className={`icon mr-3 devicon-${
                                icon.icon
                              }-plain ${hovered ? "colored" : "gray"}`}
                            ></i>
                          </OverlayTrigger>
                        );

                      case "si":
                        return (
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id={"tooltip-top"}>{icon.name}</Tooltip>
                            }
                            key={num}
                          >
                            <img
                              style={
                                hovered
                                  ? {
                                      filter: `${icon.color}`,
                                    }
                                  : { filter: "" }
                              }
                              key={num}
                              className={`icon  ${
                                hovered ? "colored" : "gray"
                              } mr-3`}
                              alt={`Icon - ${icon.name}`}
                              src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${icon.icon}.svg`}
                            />
                          </OverlayTrigger>
                        );

                      default:
                        throw new Error("Icon Type is not supported.");
                    }
                  })}
                </Card.Subtitle>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </ScrollAnimation>
    );
  };

  return (
    <Container className="section" id="projects">
      <Container>
        <Row>
          <Col lg="6">
            <ScrollAnimation animateIn="fadeInDown">
              <h2 className="mb-2 float">Projects</h2>
              <p className="mb-5"></p>
            </ScrollAnimation>
          </Col>
          <Col className="text-left text-lg-right" md="12" lg="6">
            <div id="filters" className="filters">
              <button
                data-filter=""
                className={lowercasedFilter === "" ? "active" : ""}
                onClick={handleChange}
              >
                All
              </button>
              <button
                href="#"
                data-filter="java"
                className={lowercasedFilter === "java" ? "active" : ""}
                onClick={handleChange}
              >
                Java
              </button>
              <button
                href="#"
                data-filter="web"
                className={lowercasedFilter === "web" ? "active" : ""}
                onClick={handleChange}
              >
                Web
              </button>
              <button
                href="#"
                data-filter="c"
                className={lowercasedFilter === "c" ? "active" : ""}
                onClick={handleChange}
              >
                C++/C#
              </button>
              <button
                href="#"
                data-filter="python"
                className={lowercasedFilter === "python" ? "active" : ""}
                onClick={handleChange}
              >
                Python
              </button>
            </div>
          </Col>
          <Col>
            {filteredData.length === 0 ? (
              <h5 className="text-muted">No project(s) to display</h5>
            ) : (
              filteredData.map((project, num) => {
                return (
                  <Project project={project} key={num} delay={num * 100} />
                );
              })
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

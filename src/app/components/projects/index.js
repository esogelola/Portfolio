import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ScrollAnimation from "react-animate-on-scroll";
import Project from "./Project";
import "./projects.css";
import Button from "react-bootstrap/Button";

export default function Projects({ personalData, projectImages }) {
  const [filter, setFilter] = useState("");

  const lowercasedFilter = filter.toLowerCase();
  const filteredData =
    filter === ""
      ? personalData.projects
      : personalData.projects.filter((item) => {
          return item.filter.includes(lowercasedFilter);
        });

  const handleChange = (event) => {
    //setFilter(event.target.value);
    setFilter(event.target.attributes["data-filter"].value);
  };

  return (
    <Container className="projectSection" id="projects" fluid>
      <Container>
        <Row>
          <Col lg="6">
            <ScrollAnimation animateIn="fadeInDown">
              <h2 className="mb-2 float projectHeading">Projects</h2>
              <p className="mb-5 text-danger">
                *Minor issue with projects, images do not match actual project
                right now.
              </p>
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
        </Row>
      </Container>
      <Row className="justify-content-center">
        {filteredData.length === 0 ? (
          <h5 className="text-muted">No project(s) to display</h5>
        ) : (
          filteredData.map((project, num) => {
            if (num < 6) {
              return (
                <Project
                  project={project}
                  key={num}
                  delay={num * 100}
                  projectImg={projectImages[num]}
                />
              );
            } else {
              return (
                <div className="projectLoadMoreWrapper">
                  <Button className="projectLoadMore" disabled>
                    Load More
                  </Button>
                </div>
              );
            }
          })
        )}
      </Row>
    </Container>
  );
}

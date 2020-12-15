import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/card";
import ScrollAnimation from "react-animate-on-scroll";

import "../../assets/css/project.css";

import Information from "../data/information.json";

import proj1 from "../../assets/images/twam_thumbnail.jpg";

import { DiAngularSimple } from "react-icons/di";

export default function Projects() {
  const [filter, setFilter] = useState(null);

  const handleClick = () => {};
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
              <button data-filter="*" className="active">
                All
              </button>
              <button href="#" data-filter=".java">
                Java
              </button>
              <button href="#" data-filter=".web, .asp, .django, .flask, .php">
                Web
              </button>
              <button href="#" data-filter=".C, .cpp, .csharp">
                C++/C#
              </button>
              <button href="#" data-filter=".py, .python">
                Python
              </button>
            </div>
          </Col>
          <Col>
            <Card className="mb-3 portfolio-item shine">
              <Row noGutters="true">
                <Col md="4">
                  <img src={proj1} />
                </Col>
                <Col md="8">
                  <Card.Body>
                    <Card.Title>Project 1</Card.Title>
                    <Card.Text>
                      It's a broader card with text below as a natural lead-in
                      to extra content. This content is a little longer.
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">
                      <DiAngularSimple className="icon" />
                    </Card.Subtitle>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

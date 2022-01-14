import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "./skills.css";
import Skill from "./Skill";

export default function Skills({ personalData }) {
  return (
    <Container id="skills" className=" mx-auto my-10 section">
      <Row data-aos="fade-up">
        <Col>
          <h2 className="mb-5  skillsHeading">
            <span>
              Skills <span className="underline"></span>
            </span>
          </h2>
        </Col>
      </Row>
      <Row>
        {personalData.skills.map((data, num) => {
          return (
            <Skill
              key={num}
              index={num}
              title={data[0]}
              description={data[1]}
              delay={num * 100}
            />
          );
        })}
      </Row>
    </Container>
  );
}

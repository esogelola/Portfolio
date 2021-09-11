import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ScrollAnimation from "react-animate-on-scroll";

import "./skills.css";
import Skill from "./Skill";
export default function Skills({ personalData }) {
  const tags = personalData.main.tags.map((tag) => {
    return "(" + tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")";
  });

  const wrapTag = (text) => {
    let regex = new RegExp(tags.join("|"), "gi");
    const textArray = text.split(regex);
    return textArray.map((str, num) => {
      if (regex.test(str)) {
        return <b key={num}>{str}</b>;
      }
      return str;
    });
  };

  return (
    <>
      <Container className="skillSection" id="skills">
        <Container>
          <Row data-aos="fade-up">
            <Col>
              <ScrollAnimation animateIn="fadeInDown">
                <h2 className="mb-2 float skillsHeading">Skills</h2>
                <p className="mb-5"></p>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            {personalData.skills.map((data, num) => {
              return (
                <Skill
                  key={num}
                  index={num}
                  title={data[1]}
                  description={data[2]}
                  delay={num * 100}
                  wrapTags={wrapTag}
                />
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}

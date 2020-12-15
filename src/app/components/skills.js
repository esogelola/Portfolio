import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ScrollAnimation from "react-animate-on-scroll";
import { GiBookPile } from "react-icons/gi";

import "../../assets/css/skills.css";
export default function skills() {
  return (
    <>
      <Container className="section skills-home" id="skills">
        <Container>
          <Row className="aos-init aos-animate" data-aos="fade-up">
            <Col>
              <h2 className="mb-2 float">Skills</h2>
              <p className="mb-5"></p>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <ScrollAnimation animateIn="fadeInLeft">
                <div className="skills-item mb-5" data-aos="fade-left">
                  <i>
                    <GiBookPile />
                  </i>

                  <h4 className="my-3">Language Proficiency</h4>
                  <p>
                    Specialized understanding of <b>Java</b> and a high
                    proficiency in other languages such as <b>C++</b>, <b>C#</b>{" "}
                    and <b>Python.</b>
                  </p>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

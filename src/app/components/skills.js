import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../assets/css/skills.css";
export default function skills() {
  return (
    <>
      <Container className="section skills-home" id="skills">
        <Container>
          <Row>
            <Col>
              <h2 className="mb-2 float">Skills</h2>
              <p className="mb-5"></p>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <div class="skills-item mb-5" data-aos="fade-left">
                <i class="ti-layout-media-right-alt"></i>
                <h4 class="my-3">Language Proficiency</h4>
                <p>
                  Specialized understanding of <b>Java</b> and a high
                  proficiency in other languages such as <b>C++</b>, <b>C#</b>{" "}
                  and <b>Python.</b>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

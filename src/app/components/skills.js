import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ScrollAnimation from "react-animate-on-scroll";
import { GiBookPile } from "react-icons/gi";

import "../../assets/css/skills.css";

import Information from "../data/information.json";

export default function skills() {
  const tags = Information.main.tags.map((tag) => {
    return tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  });

  function wrapTag(str) {
    const b = tags;

    return str.replace(new RegExp(b.join("|"), "g"), "Hi");
    //console.log(str);

    //console.log(str.replace(new RegExp(mapObj.join("|"), "g"), "hi"));
  }

  const Skill = ({ delay = 0, title = "", description = "" }) => {
    return (
      <Col lg="4" key>
        <ScrollAnimation animateIn="fadeInLeft">
          <div className="skills-item mb-5" data-aos="fade-left" delay={delay}>
            <i>
              <GiBookPile />
            </i>

            <h4 className="my-3">{title}</h4>
            <p>
              {/* Specialized understanding of <b>Java</b> and a high proficiency in
              other languages such as <b>C++</b>, <b>C#</b> and <b>Python.</b> */}
              {wrapTag(description)}
            </p>
          </div>
        </ScrollAnimation>
      </Col>
    );
  };
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
            {Information.skills.map((data, num) => {
              return <Skill key={num} title={data[0]} description={data[1]} />;
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}

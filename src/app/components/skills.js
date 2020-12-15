import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ScrollAnimation from "react-animate-on-scroll";
import { GiBookPile, GiStack, GiToolbox, GiGamepad } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { FaCloud } from "react-icons/fa";
import "../../assets/css/skills.css";

import Information from "../data/information.json";

//TODO: Replace all Tag words with <b>Tag</b>
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
  const icons = [
    <GiBookPile className="icon" />,
    <GiStack className="icon" />,
    <GiToolbox className="icon" />,
    <GoGraph className="icon" />,
    <GiGamepad className="icon" />,
    <FaCloud className="icon" />,
  ];

  const Skill = ({ index, delay = 0, title = "", description = "" }) => {
    return (
      <Col lg="4">
        <ScrollAnimation animateIn="fadeInLeft" delay={delay}>
          <div className="skills-item mb-5" delay={delay}>
            <i>{icons[index]}</i>

            <h4 className="my-3">{title}</h4>
            <p>{wrapTag(description)}</p>
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
              <ScrollAnimation animateIn="fadeInDown">
                <h2 className="mb-2 float">Skills</h2>
                <p className="mb-5"></p>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            {Information.skills.map((data, num) => {
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
      </Container>
    </>
  );
}

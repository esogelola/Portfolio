import React from "react";

import Col from "react-bootstrap/Col";

import ScrollAnimation from "react-animate-on-scroll";
import { GiBookPile, GiStack, GiToolbox, GiGamepad } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { FaCloud } from "react-icons/fa";

export default function Skill({
  index,
  delay = 0,
  title = "",
  description = "",
  wrapTags,
}) {
  const icons = [
    <GiBookPile className="icon" />,
    <GiStack className="icon" />,
    <GiToolbox className="icon" />,
    <GoGraph className="icon" />,
    <GiGamepad className="icon" />,
    <FaCloud className="icon" />,
  ];

  return (
    <Col lg="4">
      <ScrollAnimation animateIn="fadeInLeft" delay={delay} animateOnce={true}>
        <div className="skills-item mb-5">
          <i className="">{icons[index]}</i>

          <h4 className="my-1">{title}</h4>
          <p>{wrapTags(description)}</p>
        </div>
      </ScrollAnimation>
    </Col>
  );
}

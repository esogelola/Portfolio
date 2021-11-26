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
}) {
  const icons = [
    "📚",
    "🧩",
    "🧰",
    <GoGraph className="icon" />,
    <GiGamepad className="icon" />,
    <FaCloud className="icon" />,
  ];

  return (
    <ScrollAnimation
      animateIn="fadeInLeft"
      delay={delay}
      animateOnce={true}
      className="skills-item "
    >
      <span className="">{icons[index]}</span>

      <h5 className="my-3">{title}</h5>
      <p className="mb-0">{description}</p>
    </ScrollAnimation>
  );
}

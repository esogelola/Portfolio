import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

export default function Skill({
  index,
  delay = 0,
  title = "",
  description = "",
}) {
  const icons = ["📚", "🧩", "🧰"];

  return (
    <ScrollAnimation
      animateIn="fadeInLeft"
      delay={delay}
      animateOnce={true}
      className="skills-item "
    >
      <span className="">{icons[index]}</span>

      <h5 className="mb-0">{title}</h5>
      <p className="mb-0">{description}</p>
    </ScrollAnimation>
  );
}

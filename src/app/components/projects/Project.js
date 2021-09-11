import React from "react";

import Col from "react-bootstrap/Col";

import ScrollAnimation from "react-animate-on-scroll";
import "./projects.css";
import { AiOutlineLink } from "react-icons/ai";
import Image from "react-bootstrap/Image";
export default function Project({ project, delay, projectImg }) {
  //const [hovered, setHovered] = useState(false);
  //onst toggleHover = () => setHovered(!hovered);

  return (
    <ScrollAnimation animateIn="pulse" delay={delay} animateOnce={true}>
      <Col>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="projectImageLink"
        >
          <div className="portfolioItem">
            <div className="details">
              <span className="term">
                <em>{project.filter[0]}</em>
              </span>
              <h4 className="projectTitle">{project.name}</h4>
              <p>{project.description}</p>
              <span className="more-button">
                <AiOutlineLink />
              </span>
            </div>
            <div className="thumb">
              <Image
                src={projectImg.default}
                className="projectImage"
                alt=""
                loading="lazy"
              />
              <div className="mask"></div>
            </div>
          </div>
        </a>
      </Col>
    </ScrollAnimation>
  );
}

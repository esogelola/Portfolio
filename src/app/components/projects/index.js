import React from "react";

import Container from "react-bootstrap/Container";

import Project from "./Project";
import "./projects.css";

export default function Projects({ personalData }) {
  return (
    <Container className=" mx-auto my-10 section" id="projects">
      <h2 className="mb-5  skillsHeading">
        <span>
          Projects <span className="underline"></span>
        </span>
      </h2>
      <div className="tiles">
        {personalData.projects.map((project, num) => {
          return (
            <Project
              project={project}
              key={num}
              delay={num * 100}
              projectImg={`https://raw.githubusercontent.com/esogelola/Portfolio-React/main/src/assets/images/projectImages/${project.image}`}
            />
          );
        })}
      </div>
    </Container>
  );
}

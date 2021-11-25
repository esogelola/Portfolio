import React from "react";

import Container from "react-bootstrap/Container";

import Project from "./Project";
import "./projects.css";

export default function Projects({ personalData, projectImages }) {
  console.log(projectImages);

  return (
    <Container className=" mx-auto my-10" id="projects">
      <hr />
      <h2>Projects</h2>
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

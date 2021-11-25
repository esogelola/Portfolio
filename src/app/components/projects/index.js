import React, { useState } from "react";

import Container from "react-bootstrap/Container";

import Project from "./Project";
import "./projects.css";

export default function Projects({ personalData, projectImages }) {
  const [filter, setFilter] = useState("");
  console.log(projectImages);
  const lowercasedFilter = filter.toLowerCase();
  const filteredData =
    filter === ""
      ? personalData.projects
      : personalData.projects.filter((item) => {
          return item.filter.includes(lowercasedFilter);
        });

  const handleChange = (event) => {
    //setFilter(event.target.value);
    setFilter(event.target.attributes["data-filter"].value);
  };

  return (
    <Container className=" mx-auto my-10" id="projects">
      <hr />
      <h2>Projects</h2>
      <div className="tiles">
        {filteredData.map((project, num) => {
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

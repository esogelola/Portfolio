import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

function Project({ projects }) {
  let { projectId } = useParams();
  const [demoHTML, setDemoHTML] = useState("");
  const project = projects.projects.filter(
    (data) => data.github === projectId
  )[0];

  const fetchDemoHTML = async () => {
    fetch(
      `https://raw.githubusercontent.com/esogelola/Portfolio-React/main/src/assets/html/${projectId}_demo.html`
    )
      .then((res) => {
        if (res.status === 200) return res.text();

        return "Could not fetch github repository readme";
      })
      .then((data) => {
        setDemoHTML(data);
      });
  };

  useEffect(() => {
    fetchDemoHTML();
  });

  return (
    <Container id="main">
      <h1 className="mb-0">{project.title}</h1>
      <p>{project.subtitle}</p>
      <Image
        src={`https://raw.githubusercontent.com/esogelola/Portfolio-React/main/src/assets/images/projectImages/${project.image}`}
        fluid
        className="image"
        style={{ maxWidth: "1000px", maxHeight: "350px" }}
      />

      {parse(demoHTML)}
    </Container>
  );
}

export default Project;

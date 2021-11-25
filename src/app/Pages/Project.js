import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import pic13 from "../../assets/images/pic13.jpg";
function Project({ projects }) {
  let { projectId } = useParams();
  const [readme, setReadME] = useState("");
  const project = projects.projects.filter(
    (data) => data.github === projectId
  )[0];

  const fetchReadME = async () => {
    fetch(
      `https://raw.githubusercontent.com/esogelola/${projectId}/main/README.md`
    )
      .then((res) => {
        if (res.status === 200) return res.text();

        return "Could not fetch github repository readme";
      })
      .then((data) => {
        setReadME(data);
      });
  };
  useEffect(() => {
    fetchReadME();
    console.log(readme);
  }, []);

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

      <ReactMarkdown>{readme}</ReactMarkdown>
    </Container>
  );
}

export default Project;

import React from "react";
import { Container } from "react-bootstrap";
import {
  Projects,
  Experience,
  ContactForm,
  Introduction,
} from "../components/";
export default function Home({ socials, projectData, experienceData }) {
  return (
    <Container id="main">
      <Introduction socials={socials} />
      <Experience experienceData={experienceData} />
      <Projects projectData={projectData} />
      <ContactForm />
    </Container>
  );
}

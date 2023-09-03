import React from "react";
import {
  Projects,
  Experience,
  ContactForm,
  Introduction,
} from "../components/";
export default function Home({ socials, projectData, experienceData }) {
  return (
    <main className="container" id="main">
      <Introduction socials={socials} />
      <Experience experienceData={experienceData} />
      <Projects projectData={projectData} />
      <ContactForm />
    </main>
  );
}

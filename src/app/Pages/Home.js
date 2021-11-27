import React from "react";
import Introduction from "../components/introduction";
import Projects from "../components/projects";
import data from "../data/information.json";
import hero from "../../assets/images/hero.png";
import images from "../../assets/images/projectImages";

import Skills from "../components/skills/index";
import Experience from "../components/experience/index";

export default function Home() {
  return (
    <>
      <Introduction personalData={data} heroImage={hero} />
      <Skills personalData={data} />
      <Experience personalData={data} />
      <Projects personalData={data} projectImages={images} />
    </>
  );
}

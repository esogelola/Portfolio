import React from "react";
import Introduction from "../components/introduction";
import Projects from "../components/projects";

import data from "../data/information.json";
import hero from "../../assets/images/hero.png";
import images from "../../assets/images/projectImages";

export default function Home() {
  return (
    <>
      <Introduction personalData={data} heroImage={hero} />
      <Projects personalData={data} projectImages={images} />
    </>
  );
}

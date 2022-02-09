import React from "react";
import Introduction from "../components/introduction";
import Projects from "../components/projects";
import data from "../data/biography.json";

import Skills from "../components/skills/index";
import Experience from "../components/experience/index";

export default function Home() {
  return (
    <>
      <Introduction personalData={data} />
    </>
  );
}

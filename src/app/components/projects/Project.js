import React from "react";

import "./projects.css";

import { Link } from "react-router-dom";

export default function Project({ project, delay, projectImg }) {
  return (
    <article class={`style${Math.floor(Math.random() * 6 + 1)}`}>
      <span class="image">
        <img
          src={projectImg}
          alt=""
          style={{ maxWidth: "353", height: "326px" }}
        />
      </span>
      <Link to={`/project/${project.github}`}>
        <h2>{project.title}</h2>
        <div class="content">
          <p>{project.subtitle.slice(0, 150)}..</p>
        </div>
      </Link>
    </article>
  );
}

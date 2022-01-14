import React from "react";

import "./projects.css";

export default function Project({ project, delay, projectImg }) {
  return (
    <article className={`style${Math.floor(Math.random() * 6 + 1)}`}>
      <span className="image">
        <img
          src={projectImg}
          alt=""
          style={{ maxWidth: "353", height: "326px" }}
        />
      </span>
      <a href={`${project.link}`} target="_blank" rel="noreferrer">
        <h2>{project.title}</h2>
        <div className="content">
          <p>{project.subtitle.slice(0, 150)}</p>
        </div>
      </a>
    </article>
  );
}

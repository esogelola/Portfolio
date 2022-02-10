import React from "react";

import "./footer.css";
import { ImLinkedin2, ImTwitter, ImGithub, ImYoutube } from "react-icons/im";

export default function footer({ socials }) {
  return (
    <div className="d-flex p-2    footer ">
      <p className="mb-0  copyright">
        Copyrights © {new Date().getFullYear()}. Emmanuel Sogelola
      </p>
      <div className="">
        <a href={socials.linkedin}>
          <ImLinkedin2 />
        </a>
        <a href={socials.twitter}>
          <ImTwitter />
        </a>
        <a href={socials.github}>
          <ImGithub />
        </a>
        <a href={socials.youtube}>
          <ImYoutube />
        </a>
      </div>
    </div>
  );
}

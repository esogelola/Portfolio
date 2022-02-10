import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./footer.css";
import { ImLinkedin2, ImTwitter, ImGithub, ImYoutube } from "react-icons/im";

export default function footer() {
  return (
    <div className="d-flex p-2    footer ">
      <p className="mb-0  copyright">
        Copyrights © {new Date().getFullYear()}. Emmanuel Sogelola
      </p>
      <div className="">
        <a href="#">
          <ImLinkedin2 />
        </a>
        <a href="#">
          <ImTwitter />
        </a>
        <a href="#">
          <ImGithub />
        </a>
        <a href="#">
          <ImYoutube />
        </a>
      </div>
    </div>
  );
}

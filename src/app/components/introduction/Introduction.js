import React from "react";
import { Col } from "react-bootstrap";

import "./introduction.css";

import { ImLinkedin2, ImTwitter, ImGithub, ImFileText } from "react-icons/im";

export default function Introduction({ socials }) {
  return (
    <section className=" row justify-content-md-center ">
      <Col md={4} className="memoji ">
        <img src="assets/logo.png" alt="memoji" className="hover " />
      </Col>
      <Col className="content">
        <h1>
          <span> Hello!</span>
        </h1>
        <p>
          My name is <b>Emmanuel Sogelola</b>, I'm a{" "}
          <b>Software Engineering Technology </b> student at McMaster
          University.
        </p>
        <p>
          Currently a <b>Junior Developer Intern</b> at{" "}
          <a href="https://innovfin.ca/" target="_blank" rel="noreferrer">
            InnovFin Consulting
          </a>
          . Incoming <b>Software Engineer Intern</b> at <b>Momentive.ai</b>.
        </p>
        <div className="personalLinks shadow">
          <ul className="list-inline">
            <div className="list-inline-item social-media-icon    bg-white rounded p-2">
              <li>
                <a href={socials.linkedin} target="_blank" rel="noreferrer">
                  <ImLinkedin2 data-toggle="tooltip" title="LinkedIn" />
                </a>
              </li>
            </div>
            <div className="list-inline-item social-media-icon    bg-white rounded p-2">
              <li>
                <a href={socials.twitter} target="_blank" rel="noreferrer">
                  <ImTwitter data-toggle="tooltip" title="Twitter" />
                </a>
              </li>
            </div>
            <div className="list-inline-item social-media-icon    bg-white rounded p-2">
              <li>
                <a href={socials.github} target="_blank" rel="noreferrer">
                  <ImGithub data-toggle="tooltip" title="Github" />
                </a>
              </li>
            </div>
            <div className="list-inline-item social-media-icon  shadow  bg-white rounded p-2">
              <li>
                <a href={`/${socials.resume}`} target="_blank" rel="noreferrer">
                  <ImFileText data-toggle="tooltip" title="Resume" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </Col>
    </section>
  );
}

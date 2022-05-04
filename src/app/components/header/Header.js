import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ImFileText, ImGithub, ImYoutube } from "react-icons/im";

export default function Header({ socials }) {
  return (
    <header>
      <Navbar
        className="header-navigation shadow-sm  mb-5 bg-white "
        expand="md"
      >
        <Container>
          <Navbar.Brand>
            <span className="full-name">
              <h2>Emmanuel Sogelola</h2>
            </span>
            <span className="short-name">
              <h2>Emmanuel S</h2>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="header-navigation" />
          <Navbar.Collapse id="header-navigation">
            <Nav className="mx-auto">
              <Link smooth="true" to="/#about" className="nav-link rounded ">
                About
              </Link>
              <HashLink
                smooth="true"
                to="/#experience"
                className="nav-link rounded"
              >
                Experience
              </HashLink>
              <HashLink
                smooth="true"
                to="/#projects"
                className="nav-link rounded"
              >
                Projects
              </HashLink>
            </Nav>
            <Nav className="ml-auto nav-buttons">
              <a
                href={socials.youtube}
                className="nav-link rounded "
                target="_blank"
                rel="noreferrer"
                data-toggle="tooltip"
                title="Youtube"
              >
                <ImYoutube />
              </a>
              <a
                href={socials.github}
                className="nav-link rounded "
                target="_blank"
                rel="noreferrer"
                data-toggle="tooltip"
                title="github"
              >
                <ImGithub />
              </a>
              <a
                href={socials.resume}
                className="nav-link resumeLink"
                target="_blank"
                rel="noreferrer"
              >
                <ImFileText /> Resume
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ImFileText, ImGithub, ImYoutube, ImYoutube2 } from "react-icons/im";

export default function Header() {
  return (
    <Navbar className="header-navigation shadow-sm  mb-5 bg-white " expand="md">
      <Container>
        <Navbar.Brand>
          <span class="full-name">
            <h2>Emmanuel Sogelola</h2>
          </span>
          <span class="short-name">
            <h2>Emmanuel S</h2>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navigation" />
        <Navbar.Collapse id="header-navigation">
          <Nav className="mx-auto">
            <Link smooth to="/#skills" className="nav-link rounded ">
              About
            </Link>
            <HashLink smooth to="/#experience" className="nav-link rounded">
              Experience
            </HashLink>
            <HashLink smooth to="/#projects" className="nav-link rounded">
              Projects
            </HashLink>
          </Nav>
          <Nav className="ml-auto nav-buttons">
            <a
              href="https://github.com/esogelola"
              className="nav-link rounded "
              target="_blank"
              rel="noreferrer"
            >
              <ImYoutube />
            </a>
            <a
              href="https://github.com/esogelola"
              className="nav-link rounded "
              target="_blank"
              rel="noreferrer"
            >
              <ImGithub />
            </a>
            <a
              href="/EmmanuelSogelola-Resume.pdf"
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
  );
}

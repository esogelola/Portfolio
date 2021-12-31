import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ImFileText } from "react-icons/im";

export default function Header() {
  const [isSolid, setSolid] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      if (window.scrollY > 50) {
        setSolid(true);
      } else {
        setSolid(false);
      }
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollpos > currentScrollPos);
      setPrevScrollpos(currentScrollPos);
    });
  }, [prevScrollpos]);

  return (
    <Navbar
      className={`header-navigation  ${isSolid ? "solid" : ""} ${
        visible ? "nav-down" : "nav-up"
      }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">E/S</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navigation" />
        <Navbar.Collapse id="header-navigation">
          <Nav className="ml-auto">
            <HashLink smooth to="/#skills" className="nav-link">
              Skills
            </HashLink>
            <HashLink smooth to="/#experience" className="nav-link">
              Experience
            </HashLink>
            <HashLink smooth to="/#projects" className="nav-link">
              Projects
            </HashLink>
            <HashLink smooth to="#contact" className="nav-link">
              Contact
            </HashLink>
            <a
              href="/EmmanuelSogelola-Resume.pdf"
              className="nav-link"
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

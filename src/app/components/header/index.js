import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../assets/css/header.css";

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
      <Container fluid>
        <Navbar.Brand href="#">E/S</Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navigation" />
        <Navbar.Collapse id="header-navigation">
          <Nav className="ml-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

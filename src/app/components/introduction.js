import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typer from "./typer";
import "../../assets/css/introduction.css";

import { IoSchoolSharp, IoCodeSlash } from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";
export default function Introduction() {
  return (
    <>
      <Jumbotron id="home-jumbotron" className="section vertical-center">
        <Container fluid>
          <Row>
            <Col md="6">
              <h2 className="home-headline clip mb-0">Emmanuel Sogelola</h2>
              <h2 className="text-color">
                <b className="typewrite" data-period="2000"></b>
                <Typer
                  dataText={[
                    "Software Developer.",
                    "Game Developer.",
                    "Data Science Enthusiast.",
                  ]}
                />
              </h2>
              <p className="mt-3">
                <IoSchoolSharp className="icon" /> I'm currently a student at
                Georgebrown College studying Computer Programming.
                <br />
                <GiBookshelf className="icon" /> Proficient in Java, C++, C# and
                Python.
                <br />
                <IoCodeSlash className="icon" /> Occasionally developing web
                apps using various frameworks (Django/Flask, React, ASP.NET,
                PHP).
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

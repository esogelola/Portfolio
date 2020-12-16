import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Typer from "./typer";
import "../../assets/css/fix.css";
import "../../assets/css/introduction.css";

import { IoSchoolSharp, IoCodeSlash } from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";
import { ImLinkedin2, ImTwitter, ImGithub } from "react-icons/im";

import Information from "../data/information.json";

export default function Introduction() {
  return (
    <>
      <Jumbotron id="home-jumbotron" className="section vertical-center">
        <Container fluid>
          <Row>
            <Col md="6">
              <h2 className="home-headline clip mb-0">
                {Information.main.name}
              </h2>

              <Typer dataText={Information.main.titles} />

              <div className="mt-3 sub">
                <IoSchoolSharp className="icon" />
                {Information.main.description[0]}
                <br />
                <GiBookshelf className="icon" />
                {Information.main.description[1]}
                <br />
                <IoCodeSlash className="icon" />
                {Information.main.description[2]}
              </div>
              <div>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/emmanuelsogelola/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImLinkedin2 className="mr-3" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://twitter.com/_esog"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImTwitter className="mr-3" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/esogelola/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="6">
              <Image
                className="heading-img"
                src={process.env.PUBLIC_URL + "/static/main_computer.png"}
                alt="Emmanuel Sogelola, PNG Image"
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

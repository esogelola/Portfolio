import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Typer from "./typer";
import "../../assets/css/fix.css";
import "../../assets/css/introduction.css";
import Resume from "../../assets/Emmanuel-Sogelola-Resume.pdf";
import CoverLetter from "../../assets/E Sogelola - Cover Letter.pdf";
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
              <div className="mt-3">
                <blockquote
                  style={{
                    position: "relative",
                    background: "white",
                    borderRadius: "0% 0% 0% 0% / 0% 0% 0% 0%",
                    width: "45%",
                    boxShadow: "1px 1px rgba(0,0,0,.15)",
                    transition: " all .4s ease",
                  }}
                >
                  “How did it get so late so soon?” ― Dr. Seuss
                </blockquote>
              </div>
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
                <ul className="list-inline mt-0">
                  >{" "}
                  <li className="list-inline-item">
                    <a href={Resume} target="_blank" rel="noreferrer">
                      Resume
                    </a>
                  </li>
                  {" | "}
                  <li className="list-inline-item">
                    <a href={CoverLetter} target="_blank" rel="noreferrer">
                      Cover Letter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a
                      href={Information.main.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImLinkedin2 className="mr-3" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href={Information.main.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImTwitter className="mr-3" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href={Information.main.socials.github}
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

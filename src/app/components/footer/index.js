import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ImLinkedin2, ImTwitter, ImGithub } from "react-icons/im";

export default function footer({ personalData }) {
  return (
    <>
      <Container className="mb-2">
        <Row>
          <Col lg="6">
            <p className="mb-0">
              Copyrights © {new Date().getFullYear()}. Emmanuel Sogelola
            </p>
          </Col>
          <Col lg="6">
            <Container className="text-lg-right mt-5 mt-lg-0">
              <div>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a
                      href={personalData.main.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImLinkedin2 className="mr-3" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href={personalData.main.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImTwitter className="mr-3" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href={personalData.main.socials.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

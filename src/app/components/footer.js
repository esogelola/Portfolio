import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function footer() {
  return (
    <>
      <Container className="">
        <Row>
          <Col lg="6">
            <p className="mb-0">
              Copyrights © {new Date().getFullYear()}. Emmanuel Sogelola
            </p>
          </Col>
          <Col lg="6">
            <Container className="text-lg-right mt-5 mt-lg-0"></Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

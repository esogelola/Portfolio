import React /*, { useState }*/ from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ScrollAnimation from "react-animate-on-scroll";
import { FaEnvelope } from "react-icons/fa";
import "../../assets/css/contact.css";

export default function Contact() {
  return (
    <>
      <Container className="section" id="contact">
        <Container>
          <Row>
            <Col lg="6">
              <ScrollAnimation animateIn="fadeInDown">
                <h2 className="mb-2 float">Contact</h2>
                <p className="mb-5">
                  Leave a message below, I'd love to hear from you!
                </p>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
        <Container id="contactForm">
          <Form className="email" method="post" id="contactForm">
            <Form.Group className="label-floating">
              <Form.Label className="control-label" for="name">
                Name
              </Form.Label>
              <Form.Control type="text" name="name" id="name" required />
            </Form.Group>
            <Form.Group className="label-floating">
              <Form.Label className="control-label" for="email">
                Email
              </Form.Label>
              <Form.Control type="email" name="name" id="email" required />
            </Form.Group>
            <Form.Group className="label-floating">
              <Form.Label className="control-label" for="subject">
                Subject
              </Form.Label>
              <Form.Control type="text" name="subject" id="subject" required />
            </Form.Group>
            <Form.Group className="label-floating">
              <Form.Label className="control-label" for="message">
                Message
              </Form.Label>
              <Form.Control
                type="text"
                name="subject"
                id="subject"
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>
            <div class="form-submit mt-5">
              <button
                className="btn"
                type="submit"
                name="contactSubmit"
                id="form-submit"
                value="submit"
              >
                <FaEnvelope /> Send Message
              </button>
            </div>
          </Form>
        </Container>
      </Container>
    </>
  );
}

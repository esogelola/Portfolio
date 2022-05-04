import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

import "./contact.css";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};

function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    formErrors: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    "g-recaptcha-response": null,
  });

  const onCaptchaChange = (e) => {
    console.log(e);
    setState({ ...state, "g-recaptcha-response": e });
  };
  const toastifySuccess = () => {
    toast.success("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
    });
  };

  const toastifyFail = () => {
    toast.error("Form failed to send!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback fail",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(state) && state["g-recaptcha-response"] != null) {
      // Handle form validation success
      const { name, email, subject, message } = state;
      console.log(state);
      // Set template params
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        "g-recaptcha-response": state["g-recaptcha-response"],
      };
      emailjs.send(
        "service_0pmbezj",
        "template_unrmmu4",
        templateParams,
        "user_8QmgK0lXNagmhu2U9jtAT"
      );

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);

      toastifySuccess();
      resetForm();
    } else {
      // Handle form validation failure
      toastifyFail();
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  // Function to reset form
  const resetForm = () => {
    setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      formErrors: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    let formErrors = { ...state.formErrors };
    switch (name) {
      case "name":
        formErrors.name = value.length < 1 ? "Please enter your name." : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Please enter a valid email address.";
        break;
      case "subject":
        break;
      case "message":
        formErrors.message = value.length < 1 ? "Please enter a message" : "";
        break;
      default:
        break;
    }

    setState({ ...state, [name]: value, formErrors });
  };

  return (
    <section className=" row contactSection" id="contact">
      <h1>
        <span> Contact Me</span>
      </h1>
      <Form
        className="email contactForm"
        method="post"
        onSubmit={handleSubmit}
        id="contactForm"
      >
        <Form.Group className="label-floating">
          <Form.Label className="control-label" htmlFor="name">
            Name <span style={{ color: "red" }}>*</span>
          </Form.Label>
          {state.formErrors !== undefined &&
            state.formErrors.name.length > 0 && (
              <span className="errorMessage">{state.formErrors.name}</span>
            )}
          <Form.Control
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={handleChange}
            placeholder="John Doe"
            aria-required="true"
            required
          />
        </Form.Group>
        <Form.Group className="label-floating">
          <Form.Label className="control-label" htmlFor="email">
            Email <span style={{ color: "red" }}>*</span>
          </Form.Label>
          {state.formErrors !== undefined &&
            state.formErrors.email.length > 0 && (
              <span className="errorMessage">{state.formErrors.email}</span>
            )}
          <Form.Control
            type="email"
            name="email"
            id="email"
            value={state.email}
            onChange={handleChange}
            placeholder="john.doe@gmail.com"
            aria-required="true"
            required
          />
        </Form.Group>
        <Form.Group className="label-floating">
          <Form.Label className="control-label" htmlFor="subject">
            Subject
          </Form.Label>
          {state.formErrors !== undefined &&
            state.formErrors.subject.length > 0 && (
              <span className="errorMessage">{state.formErrors.subject}</span>
            )}
          <Form.Control
            type="text"
            name="subject"
            id="subject"
            value={state.subject}
            onChange={handleChange}
            placeholder=""
          />
        </Form.Group>
        <Form.Group className="label-floating">
          <Form.Label className="control-label" htmlFor="message">
            Message <span style={{ color: "red" }}>*</span>
          </Form.Label>
          {state.formErrors !== undefined &&
            state.formErrors.message.length > 0 && (
              <span className="errorMessage">{state.formErrors.message}</span>
            )}
          <Form.Control
            type="text"
            name="message"
            as="textarea"
            rows={3}
            id="message"
            value={state.message}
            onChange={handleChange}
            aria-required="true"
            required
          />
        </Form.Group>
        <ReCAPTCHA
          sitekey="6LdFy1wdAAAAAH_S_nybhqzvGPO2etVjYItY4zfr"
          onChange={onCaptchaChange}
        />

        <button
          className="btn-submit"
          type="submit"
          name="contactSubmit"
          id="form-submit"
          value="submit"
        >
          Send Message
        </button>
        <ToastContainer />
      </Form>
    </section>
  );
}

export default Contact;

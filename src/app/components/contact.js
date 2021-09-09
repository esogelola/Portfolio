import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
import ScrollAnimation from "react-animate-on-scroll";
// import { FaEnvelope } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "../../assets/css/contact.css";

// import emailjs from "emailjs-com";

// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // Validate form errors being empty
//   Object.values(formErrors).forEach((val) => {
//     val.length > 0 && (valid = false);
//   });

//   // Validate the form was filled out
//   Object.values(rest).forEach((val) => {
//     val === "" && (valid = false);
//   });

//   return valid;
// };

export default function Contact() {
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  //   formErrors: {
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   },
  //});
  // const toastifySuccess = () => {
  //   toast.success("Form sent!", {
  //     position: "bottom-right",
  //     autoClose: 5000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: false,
  //     className: "submit-feedback success",
  //   });
  // };

  // const toastifyFail = () => {
  //   toast.error("Form failed to send!", {
  //     position: "bottom-right",
  //     autoClose: 5000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: false,
  //     className: "submit-feedback fail",
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (formValid(state)) {
  //     // Handle form validation success
  //     const { name, email, subject, message } = state;

  //     // Set template params
  //     let templateParams = {
  //       name: name,
  //       email: email,
  //       subject: subject,
  //       message: message,
  //     };
  //     emailjs.send(
  //       "service_0pmbezj",
  //       "template_unrmmu4",
  //       templateParams,
  //       "user_8QmgK0lXNagmhu2U9jtAT"
  //     );

  //     console.log(`
  //       --SUBMITTING--
  //       Name: ${name}
  //       Email: ${email}
  //       Subject: ${subject}
  //       Message: ${message}
  //     `);

  //     toastifySuccess();
  //     resetForm();
  //   } else {
  //     // Handle form validation failure
  //     toastifyFail();
  //     console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
  //   }
  // };

  // Function to reset form
  // const resetForm = () => {
  //   setState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //     formErrors: {
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     },
  //   });
  // };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;

  //   let formErrors = { ...state.formErrors };
  //   switch (name) {
  //     case "name":
  //       formErrors.name = value.length < 1 ? "Please enter your name." : "";
  //       break;
  //     case "email":
  //       formErrors.email = emailRegex.test(value)
  //         ? ""
  //         : "Please enter a valid email address.";
  //       break;
  //     case "subject":
  //       formErrors.subject = value.length < 1 ? "Please enter a subject." : "";
  //       break;
  //     case "message":
  //       formErrors.message = value.length < 1 ? "Please enter a message" : "";
  //       break;
  //     default:
  //       break;
  //   }

  //   setState({ ...state, [name]: value, formErrors });
  // };

  return (
    <>
      <Container className="section" id="contact">
        <Container>
          <Row>
            <Col lg="6">
              <ScrollAnimation animateIn="fadeInDown">
                <h2 className="mb-2 float">Contact</h2>
                <p className="mb-5">
                  {/* Leave a message below, I'd love to hear from you! */}
                  The contact form has been disabled for the time being! You can
                  reach out to me @ emmanuelsogelola@gmail.com!
                </p>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
        <Container id="contactForm"></Container>
      </Container>
    </>
  );
}

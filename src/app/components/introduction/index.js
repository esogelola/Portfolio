import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "./introduction.css";

// import { IoSchoolSharp, IoCodeSlash } from "react-icons/io5";
// import { GiBookshelf } from "react-icons/gi";
// import { ImLinkedin2, ImTwitter, ImGithub } from "react-icons/im";

export default function Introduction({ personalData, heroImage }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <Jumbotron id="heroJumbotron" className="heroSection">
        <div className="heroBackground">
          <Container className="heroContainer" fluid>
            <div className="heroContent">
              <div className="heroHeadingWrapper">
                <h2 className="heroHeading clip mb-0">
                  {personalData.main.name}
                </h2>
                <h2 className="heroSubheading">Software Engineer</h2>
              </div>
              <p className="heroParagraph margin">
                a <strong>Software Engineer</strong> and{" "}
                <strong>Game Engine Enthusiast</strong> in Toronto.
                <br />I specialize in developing, testing and maintaining
                Software Solutions, while tinkering with game logic.
              </p>
              <Button
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/in/emmanuelsogelola/")
                }
                style={{ backgroundColor: "#715C8C" }}
              >
                Connect With Me
              </Button>
            </div>
            <Image
              src="https://assets.website-files.com/6035e7f3f25cec45fe78866f/6035e7f3f25cec4be8788692_Hero%20Accent%20Shapes.png"
              alt=""
              className="shapesAccent"
            />
            <Image
              className="headingImg"
              src={heroImage}
              alt="Emmanuel Sogelola, PNG Image"
            />
          </Container>
        </div>
      </Jumbotron>
    </>
  );
}

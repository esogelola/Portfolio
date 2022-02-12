import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { slugify } from "../helper/slugify";
import { BiArrowBack } from "react-icons/bi";
function Project({ projectData }) {
  const param = useParams();

  const projectInfo = projectData.filter((data) => {
    return slugify(data.title) === param.projectSlug;
  })[0];

  const parseBody = (data, index) => {
    if (data.type === "banner" && (data.image || data.youtube)) {
      const tags = projectInfo.tags;
      const status = projectInfo.status;
      const winner = projectInfo.winner;
      return (
        <Row className="banner" key={index}>
          <Col lg={6}>
            <p className="topheading">{data.content.topheading}</p>
            <h1 className="banner-heading">{data.content.heading}</h1>
            <p className="banner-subheading">{data.content.subheading}</p>
            <div>
              {data.links.map((links) => {
                return (
                  <span className="linkSpan">
                    <a
                      target="_blank"
                      className="link "
                      rel="noreferrer"
                      href={links.link}
                    >
                      {links.name}
                    </a>
                  </span>
                );
              })}
            </div>
            <div className="mb-5 mt-3" key={index}>
              {tags &&
                tags.map((tagName, index) => {
                  return (
                    <span className="project-tech-item" key={index}>
                      {tagName}
                    </span>
                  );
                })}

              {status === 0 && (
                <span className=" project-tech-item  bg-warning text-white">
                  In-progress
                </span>
              )}
              {status === 1 && (
                <span className=" project-tech-item  bg-danger text-white">
                  Scrapped
                </span>
              )}
              {winner && (
                <span className=" project-tech-item  winner-pill">winner</span>
              )}
            </div>
          </Col>
          <Col lg={6}>
            {data.image && !data.youtube && (
              <Image
                fluid={true}
                src={`assets/${param.projectSlug}/${data.image}`}
              />
            )}
            {data.youtube && !data.image && (
              <div controls className="embed-responsive embed-responsive-16by9">
                <iframe
                  src={data.youtube}
                  type="video/mp4"
                  className="embed-responsive-item"
                  title={data.title}
                  allowfullscreen
                ></iframe>
                <source src="movie.ogg" type="video/ogg" />
              </div>
            )}
            {data.youtube && data.image && (
              <div controls className="embed-responsive embed-responsive-16by9">
                <iframe
                  src={data.youtube}
                  type="video/mp4"
                  className="embed-responsive-item"
                  title={data.title}
                  allowfullscreen
                ></iframe>
                <source src="movie.ogg" type="video/ogg" />
              </div>
            )}
          </Col>
        </Row>
      );
    } else if (data.type === "title-and-text") {
      return (
        <Container className="" key={index}>
          <div className="dashes-to-title">
            <h2 className="title-and-text-title">{data.title}</h2>
          </div>
          {data.image && !data.youtube && (
            <Image
              fluid={true}
              src={`assets/${param.projectSlug}/${data.image}`}
              className="mb-5 border"
              alt={data.image}
            />
          )}
          {data.youtube && (
            <div
              controls
              className="embed-responsive embed-responsive-16by9 mb-5"
            >
              <iframe
                src={data.youtube}
                type="video/mp4"
                className="embed-responsive-item "
                title={data.title}
                allowfullscreen
              ></iframe>
            </div>
          )}
          <div className="d-flex flex-column justify-content-center flex-wrap">
            {data.content.map((content) => {
              return <p>{content}</p>;
            })}
          </div>
        </Container>
      );
    } else if (data.type === "text-left-image-right") {
      return (
        <Container className="my-5" key={index}>
          {data["section-title"] && (
            <div className="dashes-to-title">
              <h2 className="title-and-text-title">{data["section-title"]}</h2>
            </div>
          )}
          <Row>
            <Col lg={6}>
              <div className="d-flex flex-column justify-content-center flex-wrap">
                {data.title && <h3 className="h3-title">{data["title"]}</h3>}
                {data.content.map((content) => {
                  return <p>{content}</p>;
                })}
              </div>
            </Col>
            <Col lg={6}>
              {data.image && !data.youtube && (
                <Image
                  fluid={true}
                  src={`assets/${param.projectSlug}/${data.image}`}
                />
              )}
              {data.youtube && !data.image && (
                <div
                  controls
                  className="embed-responsive embed-responsive-16by9"
                >
                  <iframe
                    src={data.youtube}
                    type="video/mp4"
                    className="embed-responsive-item"
                    title={data.title}
                    allowfullscreen
                  ></iframe>
                </div>
              )}
              {data.youtube && data.image && (
                <div
                  controls
                  className="embed-responsive embed-responsive-16by9"
                >
                  <iframe
                    src={data.youtube}
                    type="video/mp4"
                    className="embed-responsive-item"
                    title={data.title}
                    allowfullscreen
                  ></iframe>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      );
    } else if (data.type === "text-right-image-left") {
      return (
        <Container className="my-5" key={index}>
          {data["section-title"] && (
            <div className="dashes-to-title">
              <h2 className="text-bold ">{data["section-title"]}</h2>
            </div>
          )}
          <Row>
            <Col lg={5}>
              {data.image && !data.youtube && (
                <Image
                  fluid={true}
                  src={`assets/${param.projectSlug}/${data.image}`}
                />
              )}
              {data.youtube && !data.image && (
                <div
                  controls
                  className="embed-responsive embed-responsive-16by9"
                >
                  <iframe
                    src={data.youtube}
                    type="video/mp4"
                    className="embed-responsive-item"
                    title={data.title}
                    allowfullscreen
                  ></iframe>
                  <source src="movie.ogg" type="video/ogg" />
                </div>
              )}
              {data.youtube && data.image && (
                <div
                  controls
                  className="embed-responsive embed-responsive-16by9"
                >
                  <iframe
                    src={data.youtube}
                    type="video/mp4"
                    className="embed-responsive-item"
                    title={data.title}
                    allowfullscreen
                  ></iframe>
                  <source src="movie.ogg" type="video/ogg" />
                </div>
              )}
            </Col>
            <Col lg={7}>
              {data.title && <h3 className="h3-title">{data["title"]}</h3>}
              <div className="d-flex flex-column justify-content-center flex-wrap">
                {data.content.map((content) => {
                  return <p>{content}</p>;
                })}
              </div>
            </Col>
          </Row>
        </Container>
      );
    }
  };

  const Body = ({ bodyData }) => {
    const bodyComponents = [];

    bodyData.forEach((element, index) => {
      bodyComponents.push(parseBody(element, index));
    });

    return bodyComponents.map((component) => {
      return component;
    });
  };
  return (
    <Container id="project-p" className="shadow p-5 mb-5 bg-white rounded ">
      <HashLink to="/#projects">
        <span>
          <BiArrowBack />{" "}
        </span>
        Back to Projects
      </HashLink>
      {!projectInfo && (
        <h1 className="text-danger">This project does not exist</h1>
      )}
      {projectInfo && (
        <div>
          <Body bodyData={projectInfo.body} />
        </div>
      )}
    </Container>
  );
}

export default Project;

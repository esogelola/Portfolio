import { Row } from "react-bootstrap";

import { ProjectItem } from "./ProjectItem";

const Projects = ({ projectData }) => {
  return (
    <Row className="projects" id="projects">
      <h1>
        <span> Projects</span>
      </h1>
      <div className="project-list-container">
        <ol className="project-list">
          {projectData.map((projectItem, index) => {
            return (
              <ProjectItem
                status={projectItem.status}
                image={projectItem.image}
                description={projectItem.subtitle}
                tags={projectItem.tags}
                title={projectItem.title}
                key={index}
                winner={projectItem.winner}
              />
            );
          })}
        </ol>
      </div>
    </Row>
  );
};

export default Projects;

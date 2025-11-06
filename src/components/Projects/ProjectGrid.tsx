import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../../types";
import projectData from "../../data/projects.json";

const ProjectGrid: React.FC = () => {
  const projects: Project[] = projectData as Project[];

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="font-mono text-2xl font-bold">Projects</h2>
        <p className="font-mono text-sm text-gray-600">
          Open source projects and experiments
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;


import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { Badge } from "../ui/Badge";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:shadow-md hover:border-gray-400 transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-mono text-xl font-semibold">{project.title}</h3>
        <Badge
          variant={project.status === "active" ? "default" : "secondary"}
          className="font-mono text-xs"
        >
          {project.status}
        </Badge>
      </div>

      {/* Description */}
      <p className="font-mono text-sm text-gray-600 mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="font-mono text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-200">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            Live
          </a>
        )}
        {project.devpostUrl && (
          <a
            href={project.devpostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <SiDevpost className="w-4 h-4" />
            Devpost
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;


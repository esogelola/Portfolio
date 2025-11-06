import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import ProjectGrid from "../components/Projects/ProjectGrid";
import { Project } from "../types";
import projectData from "../data/projects.json";

function Projects() {
  const projects: Project[] = projectData as Project[];

  // Filter projects that have video URLs
  const projectsWithVideos = projects.filter((p) => p.videoUrl);
  const hasVideos = projectsWithVideos.length > 0;

  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    hasVideos ? projectsWithVideos[0].videoUrl : ""
  );
  const [currentProject, setCurrentProject] = useState<Project | null>(
    hasVideos ? projectsWithVideos[0] : null
  );

  const handleProjectClick = (project: Project) => {
    if (project.videoUrl) {
      setCurrentVideoUrl(project.videoUrl);
      setCurrentProject(project);
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8 max-w-5xl">
          {/* Video Showcase Section - Only show if videos exist */}
          {hasVideos && (
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
                {/* Left Column: Video Display and Description */}
                <div className="flex flex-col w-full md:w-1/2 space-y-4">
                  {currentVideoUrl && (
                    <>
                      <iframe
                        width="100%"
                        height="315"
                        src={currentVideoUrl.replace(
                          "https://youtu.be/",
                          "https://www.youtube.com/embed/"
                        )}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>

                      {/* Skills Section */}
                      {currentProject && (
                        <div className="mt-4">
                          <h4 className="font-mono font-bold mb-2 text-sm">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {currentProject.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-200 rounded-md text-xs font-mono"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Description */}
                          <div className="text-gray-600 font-mono text-sm mb-4 overflow-y-auto max-h-[150px]">
                            {currentProject.description}
                          </div>

                          {/* Links */}
                          <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-200">
                            {currentProject.githubUrl && (
                              <a
                                href={currentProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-900 transition-colors"
                              >
                                <FaGithub className="w-4 h-4" />
                                Code
                              </a>
                            )}
                            {currentProject.liveUrl && (
                              <a
                                href={currentProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-900 transition-colors"
                              >
                                <FaExternalLinkAlt className="w-4 h-4" />
                                Live
                              </a>
                            )}
                            {currentProject.devpostUrl && (
                              <a
                                href={currentProject.devpostUrl}
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
                      )}
                    </>
                  )}
                </div>

                {/* Right Column: List of Projects with Videos */}
                <div className="flex flex-col w-full md:w-1/2 space-y-4 overflow-y-auto max-h-[600px]">
                  <h3 className="font-mono text-lg font-bold mb-2">
                    Featured Videos
                  </h3>
                  {projectsWithVideos.map((project) => (
                    <div
                      key={project.id}
                      className={`flex space-x-4 items-start p-4 bg-gray-50 border-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${
                        currentProject?.id === project.id
                          ? "border-emerald-600"
                          : "border-gray-200"
                      }`}
                      onClick={() => handleProjectClick(project)}
                    >
                      {project.imageUrl && (
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-20 h-20 object-cover rounded shadow-sm"
                        />
                      )}
                      <div className="flex flex-col space-y-1 w-full">
                        <h4 className="font-mono font-bold text-sm">
                          {project.title}
                        </h4>
                        <p className="text-gray-600 font-mono text-xs">
                          {project.shortDescription || project.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Project Grid Section */}
          <ProjectGrid />
        </main>
      </div>
    </div>
  );
}

export default Projects;

import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../../lib/content";

/**
 * ProjectsSection — "Selected work".
 *
 * Responsive grid of curated projects sourced from the content loader,
 * each rendered as a paper ProjectCard.
 */
export default function ProjectsSection() {
  const projects = getProjects();

  return (
    <section className="space-y-6">
      <SectionHeading
        id="projects"
        kicker="• SELECTED WORK"
        title="Projects"
      />
      {/* flex-wrap + justify-center keeps an odd trailing card centered
          instead of stranded in the left column */}
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <div key={project.id} className="w-full sm:w-[calc(50%-0.75rem)]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

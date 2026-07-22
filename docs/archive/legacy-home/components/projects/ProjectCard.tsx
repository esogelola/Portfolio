import type { IconType } from "react-icons";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaPhoneAlt,
  FaGamepad,
  FaComments,
  FaMicrophone,
  FaShoppingCart,
  FaBoxOpen,
  FaCube,
  FaRobot,
  FaBrain,
} from "react-icons/fa";
import Card from "../ui/Card";
import { Badge } from "../ui/Badge";
import ProjectThumb from "./ProjectThumb";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

/** Per-project tweaks for delicate line-art logos in the small tile. */
const LOGO_CLASS: Record<string, string> = {};

/** Per-project art-header treatment (object-fit + dark-mode handling). */
const ART: Record<string, { fit: string; dark: string }> = {
  // Tall, sparse ink drawing: mat it whole; invert so lines read on dark.
  solomon: { fit: "object-contain p-4", dark: "dark:[filter:grayscale(1)_contrast(1.12)_invert(0.92)]" },
  // Square self-contained illustration: fill the header; no invert.
  vibe: { fit: "object-cover", dark: "dark:opacity-90" },
};

/** Per-project icon for the mocked-UI thumbnail. */
const PROJECT_ICONS: Record<string, IconType> = {
  "bob-26": FaPhoneAlt,
  solomon: FaRobot,
  automaton: FaBrain,
  vibe: FaBrain,
  twam: FaGamepad,
  doodlecord: FaComments,
  interviewy: FaMicrophone,
  emazon: FaShoppingCart,
  pkghound: FaBoxOpen,
};

/**
 * ProjectCard — a single project on a paper surface.
 *
 * A mocked-UI thumbnail (faux app window + project icon) instead of a real
 * screenshot, then title, short description, tag chips, and a links row
 * (GitHub / Live / Video as available). Active projects carry a quiet pulsing
 * status dot.
 *
 * NOTE: prop API is intentionally `{ project: Project }` with a default
 * export — consumed by the ProjectsSection grid.
 */
function ProjectCard({ project }: ProjectCardProps) {
  const Icon = PROJECT_ICONS[project.icon ?? project.id] ?? FaCube;
  const isActive = project.status === "active";
  // Delicate line-art logos need extra contrast + framing to read at tile size;
  // bold brand marks (e.g. Munk) render as-is.
  const logoClass = LOGO_CLASS[project.id] ?? "";

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
      {project.artHeader ? (
        <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-hair bg-gradient-to-br from-neutral-50 to-neutral-100/60 dark:border-hair-dark dark:from-neutral-900 dark:to-neutral-950">
          <img
            src={project.artHeader}
            alt={`${project.title} artwork`}
            loading="lazy"
            className={`h-full w-full [filter:grayscale(1)_contrast(1.12)] transition-transform duration-500 group-hover:scale-[1.04] ${
              (ART[project.id] ?? { fit: "object-cover", dark: "" }).fit
            } ${(ART[project.id] ?? { fit: "object-cover", dark: "" }).dark}`}
          />
        </div>
      ) : (
        <ProjectThumb Icon={Icon} logoSrc={project.logo} logoClass={logoClass} />
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-sans text-lg font-semibold leading-tight text-ink dark:text-neutral-100">
            {project.title}
          </h3>
          {isActive && (
            <span className="mt-1.5 flex shrink-0 items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-security opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-security" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent-security">
                active
              </span>
            </span>
          )}
        </div>

        <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft dark:text-neutral-400">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono text-[11px]">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-ink-soft transition-colors hover:text-ink dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <FaGithub className="h-3.5 w-3.5" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-ink-soft transition-colors hover:text-ink dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <FaExternalLinkAlt className="h-3 w-3" />
              Live
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-ink-soft transition-colors hover:text-ink dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <FaPlay className="h-3 w-3" />
              Video
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;

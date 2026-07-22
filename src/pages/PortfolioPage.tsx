import { Link } from "react-router-dom";
import { FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";
import { FaCanadianMapleLeaf } from "react-icons/fa";

import NowPlaying from "../components/hero/NowPlaying";
import experience from "../data/experience.json";
import { companyImages } from "../lib/companyAssets";
import { getPosts, getProjects } from "../lib/content";
import type { BlogPost, Project } from "../types";

const dossierBanner = "/social-card.jpg";
const portrait = "/images/emmanuel-sogelola.jpg";

const interests = ["Security", "AI systems", "Finance", "Product"];

type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  logo: string;
  period: string;
  blurb: string;
};

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function PaperLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint dark:text-parchment-faint">
      {children}
    </span>
  );
}

function WritingLink({ post, children }: { post: BlogPost; children: React.ReactNode }) {
  if (post.local) {
    return (
      <Link to={`/writing/${post.id}`} className="group block">
        {children}
      </Link>
    );
  }

  return (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className="group block">
      {children}
    </a>
  );
}

function ProjectIndexCard({ project, index }: { project: Project; index: number }) {
  const destination = project.liveUrl ?? project.githubUrl ?? project.videoUrl;
  const artwork = project.artHeader ?? project.logo;

  const content = (
    <article className="group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-[1.2rem] border border-hair bg-paper-card shadow-sheet transition duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-hair-dark dark:bg-paper-dark-card dark:shadow-night-sheet dark:hover:shadow-night-lift">
      {artwork ? (
        <div className="relative h-28 overflow-hidden border-b border-hair bg-neutral-100 dark:border-hair-dark dark:bg-[#1d1c19]">
          <img
            src={artwork}
            alt={project.logo ? `${project.title} logo` : `${project.title} project artwork`}
            loading="lazy"
            decoding="async"
            className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${
              project.artHeader ? "object-cover" : "object-contain p-7"
            }`}
          />
          <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-black/35 px-2 py-1 font-mono text-[9px] tracking-[0.16em] text-white backdrop-blur">
            0{index + 1}
          </span>
        </div>
      ) : project.id === "automaton" ? (
        <div className="relative flex h-28 items-center overflow-hidden border-b border-hair bg-[#20201f] px-5 text-white dark:border-hair-dark dark:bg-[#1d1c19]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[length:14px_14px] opacity-40" />
          <div className="relative flex w-full items-center justify-between gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/60">
            {['reason', 'propose', 'verify', 'wait'].map((step, stepIndex) => (
              <div key={step} className="contents">
                <span className={step === 'wait' ? 'rounded-full border border-white/40 px-2.5 py-1 text-white' : ''}>{step}</span>
                {stepIndex < 3 && <span aria-hidden>→</span>}
              </div>
            ))}
          </div>
          <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/20 px-2 py-1 font-mono text-[9px] tracking-[0.16em] text-white">
            0{index + 1}
          </span>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-ink dark:text-parchment">
            {project.title}
          </h3>
          {destination && (
            <FiArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-faint transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink dark:text-parchment-faint dark:group-hover:text-parchment" />
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-parchment-soft">
          {project.shortDescription}
        </p>
        <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-5 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );

  return destination ? (
    <a href={destination} target="_blank" rel="noopener noreferrer" className="block h-full">
      {content}
    </a>
  ) : (
    content
  );
}

export default function PortfolioPage() {
  const posts = getPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const secondaryPosts = posts.filter((post) => post.id !== featured.id).slice(0, 3);
  const projects = getProjects();
  const roles = experience as ExperienceEntry[];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-28">
      <div className="grid items-start gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside id="profile" className="scroll-mt-24 space-y-4 lg:sticky lg:top-24">
          <section className="overflow-hidden rounded-[1.35rem] border border-hair bg-paper-card shadow-sheet dark:border-hair-dark dark:bg-paper-dark-card dark:shadow-night-sheet">
            <div className="relative h-20 overflow-hidden border-b border-hair dark:border-hair-dark">
              <img
                src={dossierBanner}
                alt=""
                aria-hidden
                width="1200"
                height="630"
                className="h-full w-full object-cover object-center contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="px-6 pb-6">
              <img
                src={portrait}
                alt="Emmanuel Sogelola"
                width="600"
                height="600"
                decoding="async"
                className="relative -mt-10 h-20 w-20 rounded-full border-[3px] border-paper-card bg-white object-cover object-center contrast-[1.03] ring-1 ring-hair dark:border-paper-dark-card dark:ring-hair-dark"
              />

              <PaperLabel>Field record</PaperLabel>
              <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink dark:text-parchment">
                Emmanuel
                <br />
                Sogelola
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-parchment-soft">
                Security engineer, founder, and builder of intelligence that reasons, then waits.
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-y border-hair py-5 dark:border-hair-dark">
                <div>
                  <dt><PaperLabel>Current</PaperLabel></dt>
                  <dd className="mt-1 text-sm font-medium dark:text-parchment">Twitch</dd>
                </div>
                <div>
                  <dt><PaperLabel>Based</PaperLabel></dt>
                  <dd className="mt-1 text-sm font-medium dark:text-parchment">Brooklyn, NY</dd>
                </div>
                <div>
                  <dt><PaperLabel>Study</PaperLabel></dt>
                  <dd className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium dark:text-parchment">
                    McMaster <FaCanadianMapleLeaf className="h-3 w-3 text-red-700" />
                  </dd>
                </div>
                <div>
                  <dt><PaperLabel>Building</PaperLabel></dt>
                  <dd className="mt-1 text-sm font-medium dark:text-parchment">Munk</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {interests.map((interest) => (
                  <span key={interest} className="rounded-full border border-hair px-2.5 py-1 font-mono text-[10px] text-ink-soft dark:border-hair-dark dark:text-parchment-soft">
                    {interest}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2">
                <a href="/documents/emmanuel-sogelola-resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-medium text-white transition hover:bg-ink-soft dark:bg-parchment dark:text-paper-dark dark:hover:bg-white">
                  <FiDownload className="h-3.5 w-3.5" /> Résumé
                </a>
                <a href="mailto:esogelola@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-hair px-4 py-2.5 text-xs font-medium text-ink transition hover:border-ink-faint dark:border-hair-dark dark:text-parchment-soft dark:hover:border-parchment-faint dark:hover:text-parchment">
                  <FiMail className="h-3.5 w-3.5" /> Say hello
                </a>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[1.1rem] border border-hair bg-paper-card px-4 py-3 shadow-sheet dark:border-hair-dark dark:bg-paper-dark-card dark:shadow-night-sheet">
            <div className="overflow-hidden">
              <NowPlaying />
            </div>
          </section>
        </aside>

        <main className="space-y-6">
          <section className="rounded-[1.35rem] border border-hair bg-paper-card p-6 shadow-sheet dark:border-hair-dark dark:bg-paper-dark-card dark:shadow-night-sheet sm:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <PaperLabel>From the desk of</PaperLabel>
                <h2 className="mt-3 max-w-2xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-ink dark:text-parchment sm:text-6xl">
                  I build at the edge of trust and autonomy.
                </h2>
              </div>
              <span className="hidden h-16 w-16 shrink-0 rotate-3 items-center justify-center rounded-full border border-dashed border-ink-faint font-mono text-[9px] uppercase leading-tight tracking-widest text-ink-faint sm:flex">
                human
                <br /> approved
              </span>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft dark:text-parchment-soft sm:text-lg">
              My work spans incident response, financial systems, and AI products. Across each field, trust must be earned, decisions must be legible, and authority must remain human.
            </p>
          </section>

          <div id="writing" className="scroll-mt-24">
            <WritingLink post={featured}>
              <article className="relative overflow-hidden rounded-[1.35rem] border border-hair bg-[#20201f] p-6 text-white shadow-sheet transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lift dark:border-hair-dark dark:bg-[#1d1c19] dark:text-parchment dark:shadow-night-sheet dark:group-hover:shadow-night-lift sm:p-9">
              <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[length:14px_14px] opacity-40" />
              <div className="relative max-w-2xl">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 dark:text-parchment-faint">
                  Featured dispatch · {featured.category}
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 dark:text-parchment-soft sm:text-base">
                  {featured.description}
                </p>
                <div className="mt-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/55 dark:text-parchment-faint">
                  <span>{formatDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                  <FiArrowUpRight className="ml-auto h-5 w-5 text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
              </article>
            </WritingLink>
          </div>

          <section className="grid gap-6 md:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-[1.35rem] border border-hair bg-paper-card p-6 shadow-sheet dark:border-hair-dark dark:bg-paper-dark-card dark:shadow-night-sheet sm:p-8">
              <div className="flex items-end justify-between border-b border-hair pb-4 dark:border-hair-dark">
                <div>
                  <PaperLabel>Selected writing</PaperLabel>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight dark:text-parchment">Reading list</h2>
                </div>
                <span className="font-mono text-[10px] text-ink-faint">03 notes</span>
              </div>
              <div className="divide-y divide-hair dark:divide-hair-dark">
                {secondaryPosts.map((post, index) => (
                  <WritingLink key={post.id} post={post}>
                    <div className="flex gap-4 py-5">
                      <span className="font-mono text-[10px] text-ink-faint">0{index + 1}</span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold leading-snug text-ink transition group-hover:text-ink-soft dark:text-parchment dark:group-hover:text-white">
                          {post.title}
                        </h3>
                        <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-ink-faint">
                          {post.category} · {post.readTime}
                        </p>
                      </div>
                      <FiArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </WritingLink>
                ))}
              </div>
            </div>

            <div id="experience" className="scroll-mt-24 rounded-[1.35rem] border border-hair bg-paper-card p-6 shadow-sheet dark:border-hair-dark dark:bg-paper-dark-card dark:shadow-night-sheet sm:p-8">
              <PaperLabel>Training grounds</PaperLabel>
              <h2 className="mt-2 text-2xl font-bold tracking-tight dark:text-parchment">Experience</h2>
              <div className="mt-5 space-y-5">
                {roles.map((role) => {
                  const logo = companyImages[role.logo];
                  return (
                    <div key={role.id} className="grid grid-cols-[36px_1fr] gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-hair bg-white p-1.5 dark:border-hair-dark dark:bg-paper-dark-raised">
                        {logo && <img src={logo} alt="" className="h-full w-full object-contain" />}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold leading-tight dark:text-parchment">{role.role}</h3>
                        <p className="mt-1 text-xs text-ink-soft dark:text-parchment-soft">{role.company}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="projects" className="scroll-mt-24 pt-4">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <PaperLabel>Working index</PaperLabel>
                <h2 className="mt-2 text-3xl font-bold tracking-tight dark:text-parchment">Selected projects</h2>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">Active files</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectIndexCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

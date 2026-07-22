import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaTwitter, FaCanadianMapleLeaf } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FiMail } from "react-icons/fi";

import Card from "../ui/Card";
import NowPlaying from "./NowPlaying";
import banner from "../../assets/images/gallery/photo_2.jpeg";

const INTERESTS = ["Security", "AI Systems", "Finance", "Product"];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/emmanuelsogelola", Icon: AiFillLinkedin },
  { label: "GitHub", href: "https://github.com/esogelola", Icon: FaGithub },
  { label: "X", href: "https://x.com/esogelola", Icon: FaTwitter },
  { label: "Substack", href: "https://substack.com/@esogelola", Icon: SiSubstack },
  { label: "Email", href: "mailto:esogelola@gmail.com", Icon: FiMail },
];

/**
 * Hero — the founder ID card.
 *
 * A real cover photo banner with the headshot overlapping it (the LinkedIn
 * read), then a clean credential block: identity, a mono details strip,
 * interests, socials and now-playing. Monochrome by default — the human is
 * the focal point, not decoration.
 */
export default function Hero() {
  return (
    <Card className="overflow-hidden p-0">
      {/* cover banner */}
      <div className="relative h-28 w-full sm:h-40">
        <img
          src={banner}
          alt=""
          className="h-full w-full object-cover object-[center_62%] [filter:grayscale(1)_contrast(1.02)]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="absolute right-4 top-4 rounded-full bg-black/35 px-2 py-0.5 font-mono text-[10px] tracking-[0.18em] text-white/90 backdrop-blur-sm">
          ID 073283160
        </span>
      </div>

      <div className="px-6 pb-7 sm:px-9 sm:pb-9">
        {/* headshot overlapping the banner — relative z-10 so it paints above
            the (positioned) banner instead of being clipped under it */}
        <div className="relative z-10 -mt-14 flex items-end justify-between sm:-mt-16">
          <img
            src="/avatars/cheshire.jpg"
            alt="Emmanuel Sogelola — Cheshire cat avatar"
            className="h-28 w-28 rounded-full border-4 border-paper-card bg-paper-card object-cover object-center shadow-float ring-1 ring-hair [filter:grayscale(1)_contrast(1.05)] dark:border-paper-dark-card dark:bg-paper-dark-card dark:ring-hair-dark sm:h-32 sm:w-32"
          />
          <div className="mb-1 flex items-center gap-1">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-black/5 hover:text-ink dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-neutral-100"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* identity */}
        <div className="mt-4 flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-ink dark:text-neutral-50 sm:text-[2.5rem] sm:leading-[1.05]">
              Emmanuel Sogelola
            </h1>
            <span className="rounded border border-hair px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint dark:border-hair-dark dark:text-neutral-500">
              SEC1
            </span>
          </div>
          <p className="font-sans text-sm text-ink-soft dark:text-neutral-400 sm:text-base">
            Security Engineer @{" "}
            <a
              href="https://twitch.tv"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline decoration-ink-faint underline-offset-2 transition-colors hover:decoration-ink dark:text-neutral-100"
            >
              Twitch
            </a>{" "}
            <span className="text-ink-faint">·</span> Founder &amp; Techno Optimist
          </p>
        </div>

        {/* positioning */}
        <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-ink-soft dark:text-neutral-300">
          Building provenance-first, human-in-the-loop intelligence — systems that
          reason and wait.
        </p>

        {/* details strip */}
        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-hair pt-5 dark:border-hair-dark">
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint dark:text-neutral-500">
              Location
            </span>
            <span className="font-sans text-sm text-ink dark:text-neutral-200">
              Brooklyn, NY
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint dark:text-neutral-500">
              Education
            </span>
            <span className="group inline-flex items-center gap-1.5 font-sans text-sm text-ink dark:text-neutral-200">
              McMaster
              <FaCanadianMapleLeaf className="h-3 w-3 text-ink-faint transition-transform duration-500 group-hover:rotate-[360deg] group-hover:text-red-600" />
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint dark:text-neutral-500">
              Focus
            </span>
            <span className="font-sans text-sm text-ink dark:text-neutral-200">
              Security · AI
            </span>
          </div>
        </div>

        {/* interests + now playing */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {INTERESTS.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-hair px-2.5 py-1 font-mono text-[11px] text-ink-soft dark:border-hair-dark dark:text-neutral-400"
            >
              {interest}
            </span>
          ))}
        </div>

        <div className="mt-5 border-t border-hair pt-4 dark:border-hair-dark">
          <NowPlaying />
        </div>
      </div>
    </Card>
  );
}

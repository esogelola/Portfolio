import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/emmanuelsogelola", Icon: AiFillLinkedin },
  { label: "GitHub", href: "https://github.com/esogelola", Icon: FaGithub },
  { label: "X", href: "https://x.com/esogelola", Icon: FaTwitter },
  { label: "Substack", href: "https://substack.com/@esogelola", Icon: SiSubstack },
  { label: "Email", href: "mailto:esogelola@gmail.com", Icon: FiMail },
];

/**
 * Minimal site footer rendered on every route.
 *
 * Name, the social + email icons, a copyright line, and a quiet mono sign-off.
 * Sits at the bottom of the flex column so it pins to the page bottom. Hair
 * border up top; light/dark via tokens.
 */
export default function Footer() {
  return (
    <footer className="mt-auto border-t border-hair dark:border-hair-dark">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        {/* Identity */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="font-sans text-sm font-semibold text-ink dark:text-parchment">
            Emmanuel Sogelola
          </span>
          <span className="font-mono text-[11px] text-ink-faint">
            © 2026 Emmanuel Sogelola
          </span>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-1">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-black/5 hover:text-ink dark:text-parchment-faint dark:hover:bg-parchment/10 dark:hover:text-parchment"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>

        {/* Sign-off */}
        <span className="font-mono text-[11px] tracking-wide text-ink-faint">
          Built in the open.
        </span>
      </div>
    </footer>
  );
}

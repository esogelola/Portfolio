import Card from "../ui/Card";
import { companyImages } from "../../lib/companyAssets";

interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  logo: string;
  period: string;
  blurb: string;
  accent: "security" | "finance" | "product" | "ml";
}

/**
 * ExperienceCard — a single "Training Grounds" entry.
 *
 * Clean paper surface: the company logo, role @ company, a mono period chip
 * and a one-line blurb. Reads like a stamped credential, not a résumé bullet.
 */
export default function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const logo = companyImages[entry.logo];

  return (
    <Card className="group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-hair bg-white p-1.5 dark:border-hair-dark dark:bg-neutral-900">
          {logo ? (
            <img
              src={logo}
              alt={`${entry.company} logo`}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          ) : (
            <span
              className={`h-2.5 w-2.5 rounded-full bg-ink-faint dark:bg-neutral-600`}
              aria-hidden
            />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-sans text-base font-semibold leading-tight text-ink dark:text-neutral-100">
              {entry.role}
              <span className="text-ink-faint dark:text-neutral-500"> @ </span>
              <span className="text-ink-soft dark:text-neutral-300">
                {entry.company}
              </span>
            </h3>
            <span className="shrink-0 rounded-full border border-hair px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-faint dark:border-hair-dark dark:text-neutral-500">
              {entry.period}
            </span>
          </div>

          <p className="mt-2 flex items-start gap-2 font-sans text-sm leading-relaxed text-ink-soft dark:text-neutral-400">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint dark:bg-neutral-600`}
              aria-hidden
            />
            {entry.blurb}
          </p>
        </div>
      </div>
    </Card>
  );
}

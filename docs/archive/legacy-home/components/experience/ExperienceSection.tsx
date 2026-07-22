import SectionHeading from "../ui/SectionHeading";
import ExperienceCard from "./ExperienceCard";
import experience from "../../data/experience.json";

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
 * ExperienceSection — "The Training Grounds".
 *
 * Renders the curated company history (Twitch first, by data order) as a
 * stacked column of credential cards under the section heading.
 */
export default function ExperienceSection() {
  const entries = experience as ExperienceEntry[];

  return (
    <section className="space-y-6">
      <SectionHeading
        id="experience"
        kicker="• THE TRAINING GROUNDS"
        title="Experience"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {entries.map((entry) => (
          <ExperienceCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}

import Hero from "../components/hero/Hero";
import WritingSection from "../components/writing/WritingSection";
import ExperienceSection from "../components/experience/ExperienceSection";
import ProjectsSection from "../components/projects/ProjectsSection";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-20 px-4 pb-24">
      <section className="pt-2">
        <Hero />
      </section>
      <WritingSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

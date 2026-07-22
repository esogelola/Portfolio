import { useMemo, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import FeaturedArticle from "./FeaturedArticle";
import ArticleCard from "./ArticleCard";
import { getPosts, getFeaturedPost } from "../../lib/content";
import type { Category } from "../../types";

type Filter = Category | "All";

const FILTERS: Filter[] = [
  "All",
  "Security",
  "Finance",
  "Machine Learning",
  "Product Design",
];

/**
 * WritingSection — the "Writing & Research" block.
 *
 * Shows the single featured post in the headline FeaturedArticle treatment
 * (always visible, never filtered out), then the remaining posts in a
 * responsive grid of state-aware ArticleCards. A mono pill row filters the
 * grid by category; a live count reports how many cards are shown.
 */
export default function WritingSection() {
  const [filter, setFilter] = useState<Filter>("All");

  const featured = getFeaturedPost();
  const rest = useMemo(
    () => getPosts().filter((p) => !p.featured),
    []
  );

  const filtered = useMemo(
    () => (filter === "All" ? rest : rest.filter((p) => p.category === filter)),
    [filter, rest]
  );

  return (
    <section className="space-y-8">
      <SectionHeading
        id="writing"
        kicker="• WRITING"
        title="Writing & Research"
        subtitle="Essays, theses, and field notes on security, AI, and the systems we let act on our behalf."
      />

      {featured && <FeaturedArticle post={featured} />}

      {/* filter pills */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  active
                    ? "bg-ink text-paper-card dark:bg-neutral-100 dark:text-paper-dark"
                    : "border border-hair bg-transparent text-ink-soft hover:border-ink-faint hover:text-ink dark:border-hair-dark dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-neutral-200"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
        <p className="font-mono text-[11px] text-ink-faint dark:text-neutral-500">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </p>
      </div>

      {/* grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="py-10 text-center font-mono text-sm text-ink-faint dark:text-neutral-500">
          Nothing here yet in {filter}.
        </p>
      )}
    </section>
  );
}

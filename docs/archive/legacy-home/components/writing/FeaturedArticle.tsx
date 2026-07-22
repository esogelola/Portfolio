import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Card from "../ui/Card";
import { Badge } from "../ui/Badge";
import type { BlogPost } from "../../types";

interface FeaturedArticleProps {
  post: BlogPost;
}

const CATEGORY_CHIP =
  "bg-transparent text-ink-soft ring-1 ring-hair dark:text-neutral-300 dark:ring-hair-dark";

const typeLabels: Record<BlogPost["type"], string> = {
  article: "Article",
  thesis: "Thesis",
  essay: "Essay",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * FeaturedArticle — the headline treatment for the single featured post.
 *
 * A larger, two-column paper card: a left rail of mono metadata and the
 * accent-keyed category, and a right column with a big title, the full
 * description, and a single clear call to read. Local essays read on-site
 * ("Read essay →"); external ones jump to Substack ("Read on Substack →").
 */
export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  const isLocal = !!post.local;
  const ctaLabel = isLocal ? "Read essay" : "Read on Substack";

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    isLocal ? (
      <Link to={`/writing/${post.id}`} className="group block">
        {children}
      </Link>
    ) : (
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {children}
      </a>
    );

  return (
    <Wrapper>
      <Card className="overflow-hidden p-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
        <div className="grid gap-6 p-7 sm:p-9 md:grid-cols-[200px_1fr] md:gap-10">
          {/* left rail — meta */}
          <div className="flex flex-col gap-4 border-b border-hair pb-5 dark:border-hair-dark md:border-b-0 md:border-r md:pb-0 md:pr-8">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint dark:text-neutral-500">
              Featured
            </p>
            <Badge
              variant="none"
              className={`w-fit font-mono text-[10px] uppercase tracking-wider ${CATEGORY_CHIP}`}
            >
              {post.category}
            </Badge>
            <dl className="mt-1 space-y-3 font-mono text-[11px] text-ink-soft dark:text-neutral-400">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-faint dark:text-neutral-600">
                  Type
                </dt>
                <dd className="mt-0.5">{typeLabels[post.type]}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-faint dark:text-neutral-600">
                  Published
                </dt>
                <dd className="mt-0.5">{formatDate(post.date)}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-faint dark:text-neutral-600">
                  Read
                </dt>
                <dd className="mt-0.5">{post.readTime}</dd>
              </div>
            </dl>
          </div>

          {/* right column — headline */}
          <div className="flex flex-col">
            <h3 className="font-sans text-2xl font-bold leading-tight tracking-tight text-ink transition-colors group-hover:text-ink-soft dark:text-neutral-50 dark:group-hover:text-white sm:text-3xl">
              {post.title}
            </h3>
            <p className="mt-4 max-w-prose font-sans text-[15px] leading-relaxed text-ink-soft dark:text-neutral-300">
              {post.description}
            </p>
            <span className="mt-7 inline-flex items-center gap-1.5 font-mono text-sm font-medium text-ink dark:text-neutral-100">
              {ctaLabel}
              <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Card>
    </Wrapper>
  );
}

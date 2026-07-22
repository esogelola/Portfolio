import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "../ui/Card";
import { Badge } from "../ui/Badge";
import type { BlogPost } from "../../types";

interface ArticleCardProps {
  post: BlogPost;
}

/**
 * Category chip — monochrome. A quiet outlined label, no per-category color;
 * the category name carries the meaning, not a hue.
 */
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

/** The shared inner body — identical across the link / non-link variants. */
function CardBody({ post, interactive }: { post: BlogPost; interactive: boolean }) {
  const isSoon = post.state === "soon";
  return (
    <Card
      className={`flex h-full flex-col p-5 transition-all duration-200 ${
        interactive
          ? "group-hover:-translate-y-0.5 group-hover:border-hair group-hover:shadow-lg dark:group-hover:border-neutral-600"
          : ""
      } ${isSoon ? "opacity-60" : ""}`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <Badge
          variant="none"
          className={`font-mono text-[10px] uppercase tracking-wider ${CATEGORY_CHIP}`}
        >
          {post.category}
        </Badge>
        {isSoon ? (
          <span className="inline-flex items-center rounded-full bg-ink-faint/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-faint dark:bg-white/5 dark:text-neutral-500">
            Coming soon
          </span>
        ) : interactive ? (
          <FiArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint transition-colors group-hover:text-ink dark:text-neutral-500 dark:group-hover:text-neutral-200" />
        ) : null}
      </div>

      <h3
        className={`font-sans text-base font-semibold leading-snug tracking-tight text-ink line-clamp-2 dark:text-neutral-100 ${
          interactive ? "transition-colors group-hover:text-ink-soft dark:group-hover:text-white" : ""
        }`}
      >
        {post.title}
      </h3>

      <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft line-clamp-3 dark:text-neutral-400">
        {post.description}
      </p>

      <div className="mt-auto flex items-center gap-2 pt-5 font-mono text-[11px] text-ink-faint dark:text-neutral-500">
        <span className="uppercase tracking-wider">{typeLabels[post.type]}</span>
        <span aria-hidden>·</span>
        <span>{formatDate(post.date)}</span>
        <span aria-hidden>·</span>
        <span>{post.readTime}</span>
      </div>
    </Card>
  );
}

/**
 * ArticleCard — state-aware writing card.
 *
 *  • live & !local → external link to the Substack url (new tab)
 *  • local         → internal Link to the on-site reader at /writing/:id
 *  • soon          → not a link; muted "Coming soon" pill + reduced opacity
 */
export default function ArticleCard({ post }: ArticleCardProps) {
  if (post.state === "soon") {
    return (
      <div className="block h-full" aria-disabled>
        <CardBody post={post} interactive={false} />
      </div>
    );
  }

  if (post.local) {
    return (
      <Link to={`/writing/${post.id}`} className="group block h-full">
        <CardBody post={post} interactive />
      </Link>
    );
  }

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <CardBody post={post} interactive />
    </a>
  );
}

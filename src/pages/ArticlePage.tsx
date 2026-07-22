import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPosts } from "../lib/content";
import vishing from "../content/blogs/vishing-at-scale.md?raw";
import type { BlogPost } from "../types";

/**
 * Raw markdown for on-site (`local`) essays, imported via Vite's `?raw`
 * loader so the content is bundled at build time. Keyed by post id; extend
 * this map as more local essays are added.
 */
const localMarkdown: Record<string, string> = {
  "vishing-at-scale": vishing,
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function stripMarkdownMasthead(markdown: string): string {
  const lines = markdown.split("\n");
  let bodyStart = 0;

  if (lines[bodyStart]?.startsWith("# ")) bodyStart += 1;
  while (lines[bodyStart]?.trim() === "") bodyStart += 1;
  if (lines[bodyStart]?.startsWith("### ")) bodyStart += 1;
  while (lines[bodyStart]?.trim() === "") bodyStart += 1;
  if (/^_Published on .+_$/.test(lines[bodyStart] ?? "")) bodyStart += 1;
  while (lines[bodyStart]?.trim() === "") bodyStart += 1;

  return lines.slice(bodyStart).join("\n");
}

/**
 * ArticlePage — on-site reader for local essays.
 *
 * Reads `:id` from the route (react-router v5), resolves the matching local
 * post and its raw markdown, and renders it in a readable prose container:
 * a mono small-caps meta header (title / date / read time) above a sans body.
 * Unknown or non-local ids redirect home.
 *
 * Wired at /writing/:id in Wave 9 — not routed here.
 */
export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();

  const post: BlogPost | undefined = getPosts().find((p) => p.id === id);
  const raw = id ? localMarkdown[id] : undefined;

  if (!post || !post.local || !raw) {
    return <Navigate to="/" replace />;
  }

  const articleBody = stripMarkdownMasthead(raw);

  return (
    <article className="mx-auto max-w-2xl px-4 pb-24 pt-2">
      {/* meta header — mono small-caps */}
      <header className="mb-10 border-b border-hair pb-8 dark:border-hair-dark">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint dark:text-neutral-500">
          {post.category} · {post.type}
        </p>
        <h1 className="mt-4 font-sans text-3xl font-bold leading-tight tracking-tight text-ink dark:text-neutral-50 sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-faint dark:text-neutral-500">
          <span>{formatDate(post.date)}</span>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* body — sans prose */}
      <div
        className="
          font-sans text-[16px] leading-[1.75] text-ink-soft dark:text-neutral-300
          [&_h1]:mt-12 [&_h1]:font-sans [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-ink dark:[&_h1]:text-neutral-100
          [&_h2]:mt-10 [&_h2]:font-sans [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink dark:[&_h2]:text-neutral-100
          [&_h3]:mt-8 [&_h3]:font-mono [&_h3]:text-sm [&_h3]:font-medium [&_h3]:uppercase [&_h3]:tracking-wider [&_h3]:text-ink-faint
          [&_p]:mt-5
          [&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_a]:decoration-ink-faint [&_a]:underline-offset-2 hover:[&_a]:decoration-ink dark:[&_a]:text-neutral-100
          [&_strong]:font-semibold [&_strong]:text-ink dark:[&_strong]:text-neutral-100
          [&_em]:italic
          [&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-hair [&_blockquote]:pl-4 [&_blockquote]:italic dark:[&_blockquote]:border-hair-dark
          [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-1.5
          [&_code]:rounded [&_code]:bg-black/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em] dark:[&_code]:bg-white/10
          [&_hr]:my-10 [&_hr]:border-hair dark:[&_hr]:border-hair-dark
        "
      >
        <ReactMarkdown>{articleBody}</ReactMarkdown>
      </div>
    </article>
  );
}

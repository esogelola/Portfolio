interface SectionHeadingProps {
  id: string;
  kicker?: string;
  title: string;
  subtitle?: string;
}

/**
 * SectionHeading — anchor-targetable section header.
 *
 * Mono uppercase kicker (e.g. "• WRITING") sitting above a bold Geist title
 * title, with an optional softer subtitle. The wrapper carries the `id`
 * and `scroll-mt-24` so smooth-scroll anchor nav lands below the fixed
 * header without clipping the kicker.
 */
export default function SectionHeading({
  id,
  kicker,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-24">
      {kicker && (
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint">
          {kicker}
        </p>
      )}
      <h2 className="mt-2 font-sans text-2xl font-bold tracking-tight text-ink dark:text-neutral-100 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-ink-soft dark:text-neutral-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

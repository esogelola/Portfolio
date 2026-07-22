/**
 * DragonBand — a full-width personality moment on the About page.
 *
 * Emmanuel's own persona panel (the gear-crowned figure facing the dragon),
 * rendered as a wide grayscale "printed page", paired with a thesis caption in
 * his voice. Quiet, not loud — a field note pinned to the page. Light/dark aware.
 *
 * The image lives in /public and is served at the site root.
 */
export default function DragonBand() {
  return (
    <section className="w-full overflow-hidden rounded-2xl border border-hair bg-paper-card shadow-sheet dark:border-hair-dark dark:bg-paper-dark-card dark:shadow-night-sheet">
      {/* The panel — full width, grayscale "printed" treatment */}
      <div className="bg-neutral-100 dark:bg-neutral-900/50">
        <img
          src="/art/dragon.jpg"
          alt="A gear-crowned figure shelters with a book as a dragon looms, a sword struck into the ground"
          className="h-auto w-full object-contain [filter:grayscale(1)_contrast(1.04)]"
          loading="lazy"
        />
      </div>

      {/* The caption — author's voice */}
      <div className="flex flex-col gap-3 border-t border-hair p-7 dark:border-hair-dark sm:p-9">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
          • Field notes
        </span>
        <p className="font-sans text-xl font-extrabold leading-snug tracking-tight text-ink dark:text-neutral-50 sm:text-2xl">
          The Automaton reasons. The human strikes.
        </p>
        <p className="max-w-2xl font-sans text-sm leading-relaxed text-ink-soft dark:text-neutral-300">
          Bounded intelligence: the machine prepares the blow — computing, weighing,
          waiting — but the human chooses to land it. Provenance over autonomy; the
          last decision stays ours.
        </p>
      </div>
    </section>
  );
}

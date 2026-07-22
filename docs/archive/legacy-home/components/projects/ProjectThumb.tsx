import type { IconType } from "react-icons";

/**
 * ProjectThumb — a clean "mocked UI" preview in place of a real screenshot.
 *
 * A faux app window (chrome dots + address pill) over an icon/logo tile and a
 * few skeleton rows. When `logoSrc` is given (a real product logo) it fills the
 * tile; otherwise the project's generic `Icon` carries the identity.
 */
export default function ProjectThumb({
  Icon,
  logoSrc,
  logoClass = "",
}: {
  Icon?: IconType;
  logoSrc?: string;
  logoClass?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-hair bg-gradient-to-br from-neutral-50 to-neutral-100/60 dark:border-hair-dark dark:from-neutral-900 dark:to-neutral-950">
      {/* faux window chrome */}
      <div className="flex items-center gap-1.5 px-4 pt-4">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/20" />
        <span className="ml-2 h-3 flex-1 max-w-[140px] rounded-full bg-ink-faint/15" />
      </div>

      {/* mock content */}
      <div className="flex items-center gap-4 px-5 py-6">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-paper-card shadow-paper ring-1 ring-hair transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105 dark:bg-paper-dark-card dark:ring-hair-dark">
          {logoSrc ? (
            <img src={logoSrc} alt="" className={`h-full w-full object-cover ${logoClass}`} loading="lazy" />
          ) : Icon ? (
            <Icon className="h-7 w-7 text-ink dark:text-neutral-100" />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <span className="h-2.5 w-3/4 rounded-full bg-ink-faint/25" />
          <span className="h-2.5 w-1/2 rounded-full bg-ink-faint/15" />
          <span className="h-2.5 w-2/3 rounded-full bg-ink-faint/15" />
        </div>
      </div>
    </div>
  );
}

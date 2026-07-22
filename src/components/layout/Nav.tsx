import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "../layout/ThemeToggle";

type NavItem = {
  label: string;
  /** section id on "/" to smooth-scroll to (anchor item) */
  anchor?: string;
  /** scroll window to top instead of a section */
  top?: boolean;
};

const ITEMS: NavItem[] = [
  { label: "Profile", anchor: "profile", top: true },
  { label: "Writing", anchor: "writing" },
  { label: "Experience", anchor: "experience" },
  { label: "Projects", anchor: "projects" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const onHome = location.pathname === "/";

  const [active, setActive] = useState<string>(onHome ? "Profile" : "");
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; visible: boolean }>({
    left: 0,
    width: 0,
    visible: false,
  });

  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Document title (replaces old <Helmet> behavior).
  useEffect(() => {
    const suffix = "Emmanuel Sogelola";
    if (location.pathname === "/about") {
      document.title = `About | ${suffix}`;
    } else if (location.pathname.startsWith("/writing/")) {
      document.title = `Writing | ${suffix}`;
    } else if (location.pathname === "/") {
      document.title = suffix;
    } else {
      document.title = `Not found | ${suffix}`;
    }
  }, [location.pathname]);

  // Keep the active label in sync with the current route.
  useEffect(() => {
    if (location.pathname === "/") setActive("Profile");
    else setActive("");
  }, [location.pathname]);

  // Compute the sliding pill from the active item's geometry.
  useLayoutEffect(() => {
    const el = active ? itemRefs.current[active] : null;
    const container = containerRef.current;
    if (!el || !container) {
      setPillStyle((p) => ({ ...p, visible: false }));
      return;
    }
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setPillStyle({
      left: elRect.left - containerRect.left,
      width: elRect.width,
      visible: true,
    });
  }, [active, location.pathname]);

  // Recompute pill on resize.
  useEffect(() => {
    const onResize = () => {
      const el = active ? itemRefs.current[active] : null;
      const container = containerRef.current;
      if (!el || !container) return;
      const elRect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setPillStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
        visible: true,
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  const goAnchor = (item: NavItem) => {
    setActive(item.label);
    const run = () => {
      if (item.top) window.scrollTo({ top: 0, behavior: "smooth" });
      else if (item.anchor) scrollToSection(item.anchor);
    };
    if (onHome) {
      run();
    } else {
      // Navigate home first, then scroll after the route renders.
      navigate("/");
      // Defer to next frame(s) so the target sections exist.
      requestAnimationFrame(() => requestAnimationFrame(run));
    }
  };

  const itemClass = (label: string) =>
    `relative z-10 flex items-center justify-center rounded-full px-2.5 py-1.5 font-sans text-[12px] font-medium tracking-tight transition-colors duration-200 sm:px-3.5 sm:text-[13px] ${
      active === label
        ? "text-ink dark:text-parchment"
        : "text-ink-soft hover:text-ink dark:text-parchment-faint dark:hover:text-parchment-soft"
    }`;

  return (
    <nav className="flex justify-center">
      <div className="flex items-center gap-1 rounded-pill border border-hair bg-paper-card/75 px-1.5 py-1 shadow-lift backdrop-blur-md dark:border-hair-dark dark:bg-paper-dark-card dark:shadow-night-lift">
        <div ref={containerRef} className="relative flex items-center gap-0.5">
          {/* sliding active pill */}
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 rounded-full bg-black/[0.06] transition-all duration-300 ease-out dark:bg-parchment/[0.07]"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
              opacity: pillStyle.visible ? 1 : 0,
            }}
          />

          {ITEMS.map((item) => {
            return (
              <button
                key={item.label}
                type="button"
                ref={(node) => {
                  itemRefs.current[item.label] = node;
                }}
                className={itemClass(item.label)}
                onClick={() => goAnchor(item)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <span aria-hidden className="mx-0.5 h-4 w-px bg-hair dark:bg-hair-dark" />
        <ThemeToggle />
      </div>
    </nav>
  );
}

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-black/5 dark:text-parchment-soft dark:hover:bg-parchment/10 sm:h-9 sm:w-9"
    >
      {theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
    </button>
  );
}

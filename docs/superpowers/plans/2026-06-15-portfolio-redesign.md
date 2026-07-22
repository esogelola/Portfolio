# Portfolio Redesign ("Paper Founder") Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. For the *visual* construction of components (Tasks in Phases 3–7, 9), ALSO invoke **frontend-design:frontend-design** — this plan locks structure/props/content/acceptance; that skill drives the aesthetic polish.

**Goal:** Redesign the existing React portfolio into a crisp, founder-grade "Paper Founder" site (keeping its paper/ID-card soul) while modernizing the codebase and updating content.

**Architecture:** Single-scroll home (`Hero → Writing → Experience → Selected work`) + a personal `/about` page, on a cleaned React 18 + Vite + Tailwind base. Router upgraded to v6, Firebase removed, dual Inter/PT-Mono type system, light/dark via Tailwind `class` strategy, feature-folder component structure, file-based typed content.

**Tech Stack:** React 18, TypeScript, Vite 4, Tailwind 3, `react-router-dom` v6, `react-icons`, Playwright (verification only).

**Testing note (adaptation):** This is a static personal site; most tasks are visual/structural and are gated by `npm run build` (tsc+vite) green, `npm run lint` clean, and **on-disk Playwright screenshots** (light+dark, mobile+desktop). Genuine logic (Spotify now-playing fetch+fallback, content-data integrity) gets real unit tests with Vitest. We do NOT fabricate unit tests for pure-presentational JSX.

**Spec:** `docs/superpowers/specs/2026-06-15-portfolio-redesign-design.md`

---

## File Structure (target)

```
src/
  main.tsx                      # MODIFY: drop Firebase init
  App.tsx                       # MODIFY: router v6, routes /, /about, *
  index.css                     # MODIFY: dual fonts, dark-mode vars, dot-grid both themes
  lib/
    spotify.ts                  # CREATE: now-playing fetch + fallback (tested)
    spotify.test.ts             # CREATE
    content.ts                  # CREATE: typed loaders + data integrity test target
    content.test.ts             # CREATE
  types/index.ts                # MODIFY: extend Project/BlogPost (status "draft"|"live", featured)
  data/
    blogs.json                  # MODIFY: real posts only + drafted essay + Automaton II placeholder
    projects.json               # MODIFY: curated set, imported asset keys (not /src paths)
    experience.json             # CREATE: Training Grounds entries
  content/blogs/
    vishing-at-scale.md         # CREATE: drafted BoB-26 essay (his voice)
  context/ThemeProvider.tsx     # CREATE: light/dark context + persistence
  components/
    layout/Nav.tsx              # MODIFY/REWRITE: anchor-scroll nav + theme toggle, v6, bugfix
    layout/Footer.tsx           # CREATE
    layout/ThemeToggle.tsx      # CREATE
    ui/Card.tsx                 # CREATE: shared paper card primitive (1px border + soft shadow)
    ui/Badge.tsx                # MODIFY: dark-mode variants
    ui/SectionHeading.tsx       # CREATE
    ui/MetaRow.tsx              # CREATE: LABEL + value columns (Siddharth-style)
    Hero/Hero.tsx               # CREATE
    Hero/OrbitalAvatar.tsx      # CREATE: circular avatar + rotating orbital text
    Hero/NowPlaying.tsx         # CREATE: Spotify element (uses lib/spotify)
    Writing/WritingSection.tsx  # CREATE (supersedes Blog/BlogSection)
    Writing/FeaturedArticle.tsx # CREATE
    Writing/ArticleCard.tsx     # CREATE (supersedes Blog/BlogCard)
    Experience/ExperienceSection.tsx  # CREATE
    Experience/ExperienceCard.tsx     # CREATE
    Projects/ProjectsSection.tsx      # CREATE (supersedes pages/Projects + ProjectGrid)
    Projects/ProjectCard.tsx          # MODIFY/REWRITE
    About/AboutPage.tsx               # MODIFY (from pages/About): bio fix, dragon band
    About/DragonBand.tsx              # CREATE: manga panel + thesis caption
    About/PhotoSlideshow.tsx          # KEEP (move under About/)
  pages/Home.tsx                # MODIFY: compose sections
assets/images/manga/dragon-slayer.png  # CREATE: user-provided panel
```

**Deletions (Phase 1):** `pages/ProjectsTBD.tsx`, `pages/Experience.tsx`, `pages/Projects.tsx` (logic folds into `Projects/ProjectsSection.tsx`), `components/Home/{Moma,Biography,Experiences,SocialCard,SocialCard.css,SpotifyCard,SpotifyCard.css,About,Projects}.tsx`, `components/DancingIcon.tsx`, `components/DancingIcon.css`, `components/Experimental/{Card,BackCard}.tsx` (Card content migrates to Hero), `components/Blog/{BlogCard,BlogSection}.tsx` (after Writing built), `components/Projects/ProjectGrid.tsx`, unused `animations/*.json`, `src/index.d.ts` (if unreferenced). **Verify each is unimported before deleting.**

---

## Phase 0 — Branch & baseline

### Task 0: Confirm branch and green baseline

**Files:** none

- [ ] **Step 1:** Confirm on branch `redesign/paper-founder` (created during brainstorming).

Run: `git branch --show-current`
Expected: `redesign/paper-founder`

- [ ] **Step 2:** Install deps and confirm the current app builds before changes.

Run: `npm install && npm run build`
Expected: build succeeds (this is the baseline; if it fails, fix the import/asset error first and commit separately).

- [ ] **Step 3:** Add Vitest + Playwright as dev deps (test tooling only).

Run: `npm install -D vitest @playwright/test && npx playwright install chromium`
Expected: installs succeed.

- [ ] **Step 4:** Add test scripts to `package.json` `scripts`:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 5:** Commit.

```bash
git add package.json package-lock.json
git commit -m "chore: add vitest + playwright for redesign verification"
```

---

## Phase 1 — Cleanup & foundation

### Task 1: Remove Firebase

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/components/Nav.tsx` (temporary — fully rewritten in Phase 8; here just remove firebase so build stays green)

- [ ] **Step 1:** Replace `src/main.tsx` entirely with (no Firebase, no hard-coded config):

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 2:** In `src/components/Nav.tsx`, remove the three Firebase lines: the `import { getAnalytics, logEvent } from "firebase/analytics";`, the `const analytics = getAnalytics();`, and the `logEvent(analytics, "nav_click", { page_title: currentItem });` call inside the effect. (Nav is rewritten in Phase 8; this just unblocks the build.)

- [ ] **Step 3:** Uninstall the dependency.

Run: `npm uninstall firebase`
Expected: removed from `package.json`.

- [ ] **Step 4:** Verify build is green.

Run: `npm run build`
Expected: success, no firebase references.

- [ ] **Step 5:** Commit.

```bash
git add -A
git commit -m "refactor: remove Firebase SDK and hard-coded analytics config"
```

### Task 2: Delete dead code

**Files:** deletions listed below.

- [ ] **Step 1:** Verify each target is unimported. For every file below, confirm no other file imports it.

Run:
```bash
for f in ProjectsTBD Experience Moma Biography Experiences SocialCard DancingIcon; do
  echo "== $f =="; grep -rn "$f" src --include=*.tsx --include=*.ts | grep -v -E "Home/$f|pages/$f|components/$f|DancingIcon\." ; done
echo "== animations =="; grep -rn "musicNote" src --include=*.tsx
```
Expected: no live imports (only self-references). If anything IS imported, stop and resolve before deleting.

- [ ] **Step 2:** Delete unused files.

```bash
git rm src/pages/ProjectsTBD.tsx \
  src/components/Home/Moma.tsx src/components/Home/Biography.tsx \
  src/components/Home/Experiences.tsx src/components/Home/SocialCard.tsx \
  src/components/Home/SocialCard.css src/components/Home/SpotifyCard.tsx \
  src/components/Home/SpotifyCard.css src/components/Home/About.tsx \
  src/components/Home/Projects.tsx src/components/DancingIcon.tsx \
  src/components/DancingIcon.css \
  src/animations/musicNote1.json src/animations/musicNote2.json \
  src/animations/musicNote3.json src/animations/musicNote4.json
```

- [ ] **Step 3:** Remove the now-unused `ProjectsTBD` import + `isProjectsTBD` branch from `src/App.tsx` (the `<Route path="/projects">` becomes just `<Projects />`). Keep `Experience` import for now (removed in Phase 8).

- [ ] **Step 4:** Verify build is green.

Run: `npm run build`
Expected: success.

- [ ] **Step 5:** Commit.

```bash
git add -A
git commit -m "chore: delete unused pages, Home subcomponents, and animations"
```

### Task 3: Design tokens, dual fonts, dark mode in Tailwind + CSS

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/index.css`

- [ ] **Step 1:** Replace `tailwind.config.js` with (adds `darkMode: 'class'`, font families, paper/ink semantic colors, soft shadow; keeps existing rotateY plugin):

```js
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": { transform: "rotateY(180deg)" },
  });
});
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"PT Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        paper: { DEFAULT: "#f9f9f1", card: "#ffffff", dark: "#0e0e10", "dark-card": "#161618" },
        ink: { DEFAULT: "#1a1a1a", soft: "#525252", faint: "#8a8a8a" },
        accent: {
          security: "#059669", // emerald-600
          ml: "#7c3aed",       // purple-600
          finance: "#d97706",  // amber-600
          product: "#2563eb",  // blue-600
        },
      },
      boxShadow: { paper: "0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)" },
      borderColor: { hair: "#e5e5e0", "hair-dark": "#2a2a2e" },
    },
  },
  plugins: [rotateY],
};
```

- [ ] **Step 2:** Replace `src/index.css` with (imports Inter + PT Mono, dot-grid for both themes, dark base):

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=PT+Mono&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { --dot-bg: #f9f9f1; --dot-color: rgba(0,0,0,0.10); --dot-space: 22px; --dot-size: 1px; }
.dark { --dot-bg: #0e0e10; --dot-color: rgba(255,255,255,0.07); }

body {
  font-family: "Inter", system-ui, sans-serif;
  color: #1a1a1a;
  background:
    linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
    linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
    var(--dot-color);
}
.dark body { color: #ededed; }
html { scroll-behavior: smooth; }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-thumb { background-color: #bcc3c8; border-radius: 5px; }
.dark ::-webkit-scrollbar-thumb { background-color: #3a3a3e; }
```

- [ ] **Step 3:** Verify build + that dev server renders the dot-grid.

Run: `npm run build`
Expected: success.

- [ ] **Step 4:** Commit.

```bash
git add tailwind.config.js src/index.css
git commit -m "feat: design tokens — dual Inter/PT-Mono fonts, dark mode, paper palette"
```

### Task 4: Theme provider + toggle

**Files:**
- Create: `src/context/ThemeProvider.tsx`
- Create: `src/components/layout/ThemeToggle.tsx`

- [ ] **Step 1:** Create `src/context/ThemeProvider.tsx`:

```tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
```

- [ ] **Step 2:** Create `src/components/layout/ThemeToggle.tsx`:

```tsx
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/10"
    >
      {theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
    </button>
  );
}
```

- [ ] **Step 3:** Wrap the app: in `src/App.tsx`, import `ThemeProvider` and wrap the returned tree's outermost element with `<ThemeProvider>…</ThemeProvider>`.

- [ ] **Step 4:** Verify build green.

Run: `npm run build`
Expected: success.

- [ ] **Step 5:** Commit.

```bash
git add -A
git commit -m "feat: theme provider + toggle (persisted light/dark)"
```

---

## Phase 2 — Content layer

### Task 5: Extend types

**Files:** Modify `src/types/index.ts`

- [ ] **Step 1:** Update `BlogPost` and `Project` interfaces (add `featured?`, `status` adds `"draft"|"live"|"soon"`, add `local?` for on-site essays; `Project.image?` becomes an import key). Append/replace the interfaces with:

```ts
export type Category = "Security" | "Product Design" | "Finance" | "Machine Learning";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: Category;
  date: string;            // ISO yyyy-mm-dd
  readTime: string;
  url: string;             // external (substack) or "" when local
  type: "article" | "thesis" | "essay";
  state: "live" | "soon";  // "soon" => Automaton II placeholder, not linked
  featured?: boolean;      // exactly one featured
  markdownFile?: string;   // present for on-site essays
  local?: boolean;         // true => route to on-site reader, not external url
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  image?: string;          // key resolved via an imported asset map (NOT a /src path)
  imageUrl?: string;        // DEPRECATED compat (legacy ProjectCard/pages/Projects); removed in Wave 9
  devpostUrl?: string;      // DEPRECATED compat (legacy ProjectCard/pages/Projects); removed in Wave 9
  status: "active" | "completed";
}
```

> **AMENDMENT (2026-06-15, codified from Wave 3 defect):** Changing the shared
> `BlogPost`/`Project` types breaks legacy consumers (`Blog/BlogCard.tsx`,
> `Projects/ProjectCard.tsx`, `pages/Projects.tsx`) that are not deleted until Wave 9,
> turning `tsc` red across the middle waves. To keep `npm run build` green wave-to-wave:
> (a) `Project` retains `imageUrl?`/`devpostUrl?` as **deprecated-optional** (above) until
> the legacy files are removed in Wave 9; (b) **Wave 3's whitelist is expanded to include
> `src/components/Blog/BlogCard.tsx`** for a one-line compat edit — replace the obsolete
> `project: "Project"` entry in `typeLabels` with `essay: "Essay"` (the new `type` union).
> These deprecated fields + the BlogCard label are cleaned up when legacy files are deleted
> in Wave 9 (Task 22).

- [ ] **Step 2:** Remove the now-unused `BlogMetadata` interface (was duplicate of BlogPost).
- [ ] **Step 3:** `npm run build` — expect type errors in files still using old shapes; those files are replaced in later tasks. To keep build green now, this task is committed together with Task 6/7 data. Skip standalone build; proceed.
- [ ] **Step 4:** Commit with Task 6 & 7 (data must match types). Do not commit alone.

### Task 6: Curate writing data + drafted essay

**Files:**
- Modify: `src/data/blogs.json`
- Create: `src/content/blogs/vishing-at-scale.md`
- Keep: `src/content/blogs/automaton-i-the-philosophy.md`
- Delete: the 6 placeholder markdown files with `url:"#"` (adversarial-ml, api-security-fintech, defi-security-audit, realtime-threat-detection, zero-trust-architecture, design-systems-scale)

- [ ] **Step 1:** Replace `src/data/blogs.json` with the curated, real set (one `featured`):

```json
[
  {
    "id": "automaton-1",
    "title": "Automaton I: The Philosophy",
    "description": "On automata, artificial minds, and why the future of AI should wait for us. The case for bounded intelligence that computes, reasons, and waits for human validation.",
    "category": "Machine Learning",
    "date": "2025-12-22",
    "readTime": "15 min",
    "url": "https://esogelola.substack.com/p/automaton-i-the-philosophy",
    "type": "essay",
    "state": "live",
    "featured": true,
    "markdownFile": "automaton-i-the-philosophy.md"
  },
  {
    "id": "fas-field",
    "title": "Financial Advisory at Scale: In the Field",
    "description": "A continuation of the Cansbridge thesis — what encoding empathy into financial advice looks like in practice, from real advisory workflows.",
    "category": "Finance",
    "date": "2026-03-22",
    "readTime": "12 min",
    "url": "https://esogelola.substack.com/p/financial-advisory-at-scale-in-the-field",
    "type": "article",
    "state": "live"
  },
  {
    "id": "fas-empathy",
    "title": "Financial Advisory at Scale: Can Empathy Be Encoded?",
    "description": "A Cansbridge Scholar thesis on improving consumer financial literacy through personalized, human-centered financial advice and management.",
    "category": "Finance",
    "date": "2025-10-22",
    "readTime": "12 min",
    "url": "https://esogelola.substack.com/p/financial-advisory-at-scale",
    "type": "thesis",
    "state": "live"
  },
  {
    "id": "vishing-at-scale",
    "title": "Vishing at Scale: What a Phone Call Can Still Take From You",
    "description": "Lessons from building BoB-26, an LLM-driven voice-phishing demonstrator for the DEF CON Social Engineering Village — and why the human voice is the last unpatched endpoint.",
    "category": "Security",
    "date": "2026-06-15",
    "readTime": "11 min",
    "url": "",
    "type": "essay",
    "state": "live",
    "local": true,
    "markdownFile": "vishing-at-scale.md"
  },
  {
    "id": "automaton-2",
    "title": "Automaton II: The System",
    "description": "What to build instead of agents — components of a bounded automaton, where reasoning lives, and where authority explicitly does not. In progress.",
    "category": "Machine Learning",
    "date": "2026-07-01",
    "readTime": "—",
    "url": "",
    "type": "essay",
    "state": "soon"
  }
]
```

- [ ] **Step 2:** Delete the 6 placeholder essays.

```bash
git rm src/content/blogs/adversarial-ml.md src/content/blogs/api-security-fintech.md \
  src/content/blogs/defi-security-audit.md src/content/blogs/realtime-threat-detection.md \
  src/content/blogs/zero-trust-architecture.md src/content/blogs/design-systems-scale.md
```

- [ ] **Step 3:** Draft `src/content/blogs/vishing-at-scale.md` in Emmanuel's voice (measured, essayistic, short declarative lines, a cultural touchstone, principle-driven — matching `automaton-i-the-philosophy.md`). Anchor it to BoB-26 (Twilio + Claude Haiku + ElevenLabs vishing demonstrator for DEF CON SE Village) and the broader social-engineering thesis. Frontmatter-free markdown, same shape as the Automaton file (H1 title, italic subtitle, `_Published on June 15, 2026_`, section H2s, closing pointer). ~1,100–1,400 words. Keep it defensive/educational in framing (why the voice channel is hard to defend, what bounded-automaton thinking implies for trust), no operational attacker playbook. End with: `_Part of an ongoing series on social engineering and the security of human-facing AI._`

  **Acceptance:** file exists, reads in his voice, never claims Synchronized, contains no step-by-step attacker instructions.

- [ ] **Step 4:** Commit Tasks 5+6 together.

```bash
git add src/types/index.ts src/data/blogs.json src/content/blogs/
git commit -m "content: curate writing to real posts + drafted BoB-26 essay; extend types"
```

### Task 7: Curate projects data + asset map + experience data

**Files:**
- Modify: `src/data/projects.json`
- Create: `src/data/experience.json`
- Create: `src/lib/projectAssets.ts`

- [ ] **Step 1:** Replace `src/data/projects.json` (drop Munk; curated public set; `image` is a key, not a path):

```json
[
  {
    "id": "bob-26",
    "title": "BoB-26",
    "shortDescription": "LLM-driven vishing demonstrator (DEF CON SE Village)",
    "description": "A research demonstrator for the DEF CON Social Engineering Village: an LLM-driven voice-phishing proof-of-concept built with Twilio, Claude, and ElevenLabs, with a live emotion-event dashboard. Built to show why the voice channel remains hard to defend.",
    "tags": ["Python", "Flask", "Claude", "Twilio", "Security"],
    "status": "active"
  },
  {
    "id": "twam",
    "title": "TWAM — The World and Magic",
    "shortDescription": "A multiplayer RPG written entirely in Java",
    "description": "A multiplayer role-playing game built from scratch in Java with a Gradle build — combat, world state, and networking. The nerdy long-game project.",
    "tags": ["Java", "Gradle", "Game Dev"],
    "githubUrl": "https://github.com/esogelola/twam",
    "status": "completed"
  },
  {
    "id": "doodlecord",
    "title": "Doodlecord",
    "shortDescription": "Peer-to-peer instant messaging",
    "description": "A fun, simple instant-messaging web app for real-time peer-to-peer chat with friends.",
    "tags": ["React", "Socket.io", "Node.js", "Express"],
    "githubUrl": "https://github.com/esogelola/doodlecord",
    "videoUrl": "https://youtu.be/OC8NDyvXMnc",
    "image": "doodlecord",
    "status": "completed"
  },
  {
    "id": "interviewy",
    "title": "Interviewy",
    "shortDescription": "Practice your interview skills, anytime",
    "description": "Gives jobseekers an accessible environment to practice interview skills on their own schedule. Built at DeltaHacks 2022.",
    "tags": ["React", "Node.js", "Express", "MongoDB"],
    "githubUrl": "https://github.com/faizahsayyid/deltahacks2022",
    "videoUrl": "https://youtu.be/nF7yuNg_zWE",
    "image": "Interviewy",
    "status": "completed"
  },
  {
    "id": "emazon",
    "title": "Emazon",
    "shortDescription": "An e-commerce storefront",
    "description": "An e-commerce site where users can create, view, and buy any product listed on the platform.",
    "tags": ["React", "Node.js", "Express", "MongoDB"],
    "githubUrl": "https://github.com/esogelola/emazon",
    "image": "emazon",
    "status": "completed"
  },
  {
    "id": "pkghound",
    "title": "PKGHound",
    "shortDescription": "A Product-Hunt-style package finder",
    "description": "An Ionic React project built to resemble Product Hunt, for discovering the best packages.",
    "tags": ["React", "Ionic", "Node.js", "Express"],
    "githubUrl": "https://github.com/esogelola/pkg-hound-ionic",
    "videoUrl": "https://youtu.be/IR5_rTCi-Bo",
    "image": "pkghound",
    "status": "completed"
  }
]
```

- [ ] **Step 2:** Create `src/lib/projectAssets.ts` (resolves image keys to real imported assets so they survive the production build):

```ts
import doodlecord from "../assets/images/projects/doodlecord.jpg";
import Interviewy from "../assets/images/projects/Interviewy.png";
import emazon from "../assets/images/projects/emazon.png";
import pkghound from "../assets/images/projects/pkghound.png";

export const projectImages: Record<string, string> = {
  doodlecord, Interviewy, emazon, pkghound,
};
```

- [ ] **Step 3:** Create `src/data/experience.json` (Training Grounds; logos already in `assets/images/companies/`):

```json
[
  { "id": "twitch", "role": "Security Engineer", "company": "Twitch / Amazon", "logo": "twitch_logo.jpeg", "period": "Present", "blurb": "SIRT engineering — incident response, Python runbooks, and detections across a shifting threat landscape.", "accent": "security" },
  { "id": "wealthsimple", "role": "Software Engineer", "company": "Wealthsimple", "logo": "wealthsimple_logo.png", "period": "Prior", "blurb": "Fiduciary-grade financial product engineering and secure backend systems.", "accent": "finance" },
  { "id": "zendesk", "role": "Software Engineer", "company": "Zendesk", "logo": "zendesk_logo.svg", "period": "Prior", "blurb": "Backend and product engineering at scale.", "accent": "product" },
  { "id": "momentive", "role": "Software Engineer", "company": "SurveyMonkey / Momentive", "logo": "SurveyMonkey_Logo.png", "period": "Prior", "blurb": "Product and platform engineering.", "accent": "product" }
]
```

- [ ] **Step 4:** Create `src/lib/companyAssets.ts` mirroring `projectAssets.ts` for the four company logos (import each from `../assets/images/companies/<file>` and export `companyImages: Record<string,string>` keyed by the `logo` filename).

- [ ] **Step 5:** Commit.

```bash
git add src/data/projects.json src/data/experience.json src/lib/projectAssets.ts src/lib/companyAssets.ts
git commit -m "content: curate projects (drop Munk) + experience data + asset maps"
```

### Task 8: Content loaders with integrity tests

**Files:**
- Create: `src/lib/content.ts`
- Create: `src/lib/content.test.ts`

- [ ] **Step 1:** Write `src/lib/content.test.ts` (real, meaningful tests):

```ts
import { describe, it, expect } from "vitest";
import { getPosts, getFeaturedPost, getProjects } from "./content";

describe("content integrity", () => {
  it("has exactly one featured post", () => {
    expect(getPosts().filter((p) => p.featured)).toHaveLength(1);
    expect(getFeaturedPost()).toBeTruthy();
  });
  it("never exposes a stealth company", () => {
    const blob = JSON.stringify([...getPosts(), ...getProjects()]).toLowerCase();
    expect(blob).not.toContain("synchronized");
    expect(blob).not.toContain("munk");
  });
  it("live posts have a url; soon posts do not link out", () => {
    for (const p of getPosts()) {
      if (p.state === "live" && !p.local) expect(p.url).toMatch(/^https?:\/\//);
      if (p.state === "soon") expect(p.url).toBe("");
    }
  });
  it("local essays carry a markdown file", () => {
    for (const p of getPosts()) if (p.local) expect(p.markdownFile).toBeTruthy();
  });
});
```

- [ ] **Step 2:** Run test — expect failure (module missing).

Run: `npm test -- content`
Expected: FAIL (`getPosts` not found).

- [ ] **Step 3:** Implement `src/lib/content.ts`:

```ts
import { BlogPost, Project } from "../types";
import blogs from "../data/blogs.json";
import projects from "../data/projects.json";

export const getPosts = (): BlogPost[] => blogs as BlogPost[];
export const getFeaturedPost = (): BlogPost | undefined => getPosts().find((p) => p.featured);
export const getProjects = (): Project[] => projects as Project[];
```

- [ ] **Step 4:** Run test — expect pass.

Run: `npm test -- content`
Expected: PASS (4 tests).

- [ ] **Step 5:** Commit.

```bash
git add src/lib/content.ts src/lib/content.test.ts
git commit -m "feat: typed content loaders with integrity tests (no stealth co, one featured)"
```

---

## Phase 3 — Spotify now-playing (logic-first)

### Task 9: Spotify now-playing fetch + fallback (tested)

**Files:**
- Create: `src/lib/spotify.ts`
- Create: `src/lib/spotify.test.ts`

**Design:** A true live now-playing needs a Spotify refresh token. For a static GitHub-Pages build we read public config from Vite env (`VITE_SPOTIFY_*`); when absent or nothing is playing, return a curated fallback track so the UI is always cohesive and never broken.

- [ ] **Step 1:** Write `src/lib/spotify.test.ts`:

```ts
import { describe, it, expect, vi } from "vitest";
import { parseNowPlaying, FALLBACK_TRACK } from "./spotify";

describe("parseNowPlaying", () => {
  it("returns fallback when payload is empty (204 / nothing playing)", () => {
    expect(parseNowPlaying(null)).toEqual(FALLBACK_TRACK);
  });
  it("maps a playing item to a Track", () => {
    const payload = {
      is_playing: true,
      item: { name: "Flim", artists: [{ name: "Aphex Twin" }],
        external_urls: { spotify: "https://open.spotify.com/track/x" } },
    };
    expect(parseNowPlaying(payload)).toEqual({
      isLive: true, title: "Flim", artist: "Aphex Twin",
      url: "https://open.spotify.com/track/x",
    });
  });
  it("falls back when is_playing is false", () => {
    expect(parseNowPlaying({ is_playing: false, item: null })).toEqual(FALLBACK_TRACK);
  });
});
```

- [ ] **Step 2:** Run — expect FAIL (module missing).

Run: `npm test -- spotify`
Expected: FAIL.

- [ ] **Step 3:** Implement `src/lib/spotify.ts`:

```ts
export interface Track { isLive: boolean; title: string; artist: string; url: string; }

export const FALLBACK_TRACK: Track = {
  isLive: false,
  title: "Flim",
  artist: "Aphex Twin",
  url: "https://open.spotify.com/track/2Hb8eqygyTQinJChM4S2qX",
};

export function parseNowPlaying(payload: any): Track {
  if (!payload || payload.is_playing !== true || !payload.item) return FALLBACK_TRACK;
  const item = payload.item;
  return {
    isLive: true,
    title: item.name,
    artist: (item.artists ?? []).map((a: any) => a.name).join(", "),
    url: item.external_urls?.spotify ?? FALLBACK_TRACK.url,
  };
}

// Network fetch is best-effort; any failure resolves to the fallback.
export async function fetchNowPlaying(): Promise<Track> {
  const token = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN as string | undefined;
  if (!token) return FALLBACK_TRACK;
  try {
    const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 204 || !res.ok) return FALLBACK_TRACK;
    return parseNowPlaying(await res.json());
  } catch {
    return FALLBACK_TRACK;
  }
}
```

- [ ] **Step 4:** Run — expect PASS (3 tests).

Run: `npm test -- spotify`
Expected: PASS.

- [ ] **Step 5:** Commit.

```bash
git add src/lib/spotify.ts src/lib/spotify.test.ts
git commit -m "feat: spotify now-playing parser with graceful curated fallback (tested)"
```

---

## Phase 4 — UI primitives

### Task 10: Shared paper Card, MetaRow, SectionHeading; Badge dark-mode

**Files:**
- Create: `src/components/ui/Card.tsx`, `src/components/ui/SectionHeading.tsx`, `src/components/ui/MetaRow.tsx`
- Modify: `src/components/ui/Badge.tsx`

> Invoke **frontend-design:frontend-design** for the visual quality of these primitives. Contracts below are fixed.

- [ ] **Step 1:** `src/components/ui/Card.tsx` — props `{ children, className?, as? }`. Renders a paper card: `bg-paper-card dark:bg-paper-dark-card border border-hair dark:border-hair-dark rounded-xl shadow-paper`. One responsibility: the surface.

- [ ] **Step 2:** `src/components/ui/SectionHeading.tsx` — props `{ id, kicker?, title, subtitle? }`. Mono uppercase `kicker` (e.g. `• WRITING`), bold sans `title`, optional `subtitle`. Sets `id` + `scroll-mt-24` for anchor nav.

- [ ] **Step 3:** `src/components/ui/MetaRow.tsx` — props `{ items: { label: string; value: ReactNode }[] }`. Siddharth-style responsive columns: mono uppercase `faint` label above each value. Wraps on mobile.

- [ ] **Step 4:** Modify `src/components/ui/Badge.tsx`: add `dark:` variants to each style (e.g. secondary → `dark:bg-neutral-800 dark:text-neutral-200`) and keep the existing API.

- [ ] **Step 5:** `npm run build` — expect success.

- [ ] **Step 6:** Commit.

```bash
git add src/components/ui
git commit -m "feat: ui primitives — Card, SectionHeading, MetaRow; Badge dark mode"
```

---

## Phase 5 — Hero

### Task 11: OrbitalAvatar

**Files:** Create `src/components/Hero/OrbitalAvatar.tsx`

- [ ] **Step 1:** Implement a circular avatar with rotating orbital text. Props `{ src: string; alt: string; labels: string[] }`. Center photo in a circular frame; render `labels` around the ring as SVG `<textPath>` on a circle, slowly rotating via CSS `@keyframes spin` on the SVG (respect `prefers-reduced-motion`: pause). Labels for this site: `["provenance over autonomy", "human-in-the-loop", "dragon slayer", "security minded"]`. Use `font-mono text-[10px] tracking-wide` for the ring text; colors cycle through the four accent tokens.

  **Acceptance:** photo centered & circular; ring text legible; rotation pauses under reduced-motion; works light+dark.

- [ ] **Step 2:** `npm run build` — expect success.

- [ ] **Step 3:** Commit.

```bash
git add src/components/Hero/OrbitalAvatar.tsx
git commit -m "feat: orbital rotating-text avatar (reduced-motion aware)"
```

### Task 12: NowPlaying component

**Files:** Create `src/components/Hero/NowPlaying.tsx`

- [ ] **Step 1:** Implement: on mount, `fetchNowPlaying()` from `lib/spotify`; render a quiet inline line: green Spotify dot + `Now Playing` (or `On repeat` when `!isLive`) + ` — <title> · <artist>`, linking to `track.url`. `font-mono text-xs text-ink-soft`. Never renders a broken/empty state (fallback guarantees a track).

  **Acceptance:** always shows a track; label switches Live/On-repeat; opens Spotify in new tab.

- [ ] **Step 2:** `npm run build` — expect success.

- [ ] **Step 3:** Commit.

```bash
git add src/components/Hero/NowPlaying.tsx
git commit -m "feat: cohesive now-playing line (live + on-repeat fallback)"
```

### Task 13: Hero composition

**Files:** Create `src/components/Hero/Hero.tsx`

- [ ] **Step 1:** Compose the hero inside a `Card`. Left: `OrbitalAvatar` (headshot `assets/images/about/headshot.jpeg`) + social icons row (LinkedIn `linkedin.com/in/emmanuelsogelola`, GitHub `github.com/esogelola`, X `x.com/esogelola`, Substack `substack.com/@esogelola`, email `mailto:esogelola@gmail.com`). Right: big bold sans name "Emmanuel Sogelola"; role line **"Security Engineer @ Twitch · Founder, building in stealth"** (Twitch links to twitch.tv, "Founder" not linked); `MetaRow` with `LOCATION Brooklyn, NY` · `EDUCATION McMaster` · `FOCUS Security · AI`; a one-line positioning sentence drawn from his bio ("Building provenance-first, human-in-the-loop intelligence — systems that reason and wait."); then `<NowPlaying />`. Preserve subtle ID-card easter eggs: a mono `ID 073283160`, a `SEC1` badge, the maple-leaf hover by McMaster.

  **Acceptance:** matches §5.1; no Synchronized; responsive (stacks on mobile); light+dark clean. Use **frontend-design** for polish.

- [ ] **Step 2:** `npm run build` — expect success.

- [ ] **Step 3:** Commit.

```bash
git add src/components/Hero/Hero.tsx
git commit -m "feat: hero card — orbital avatar, identity, meta row, now-playing"
```

---

## Phase 6 — Writing

### Task 14: ArticleCard + FeaturedArticle

**Files:** Create `src/components/Writing/ArticleCard.tsx`, `src/components/Writing/FeaturedArticle.tsx`

- [ ] **Step 1:** `ArticleCard` (props `{ post: BlogPost }`): paper `Card`, category `Badge` (accent by category), title, description (clamped), footer with type label · formatted date · readTime. Behaviour by state: `live` non-local → external link; `local` → internal link to `/writing/:id` reader; `soon` → not a link, shows a muted `Coming soon` pill, reduced opacity. (Supersedes old `Blog/BlogCard.tsx`.)

- [ ] **Step 2:** `FeaturedArticle` (props `{ post: BlogPost }`): larger 2-column treatment for the featured Automaton I — big title, full description, `Read on Substack →`.

- [ ] **Step 3:** `npm run build` — expect success.

- [ ] **Step 4:** Commit.

```bash
git add src/components/Writing/ArticleCard.tsx src/components/Writing/FeaturedArticle.tsx
git commit -m "feat: writing cards — featured + state-aware article card"
```

### Task 15: WritingSection with filter

**Files:** Create `src/components/Writing/WritingSection.tsx`

- [ ] **Step 1:** Compose: `SectionHeading id="writing" kicker="• WRITING" title="Writing & Research"`. Render `getFeaturedPost()` via `FeaturedArticle`; render the rest in a responsive grid via `ArticleCard`. Keep the category-filter pills (All / Security / Finance / Machine Learning / Product Design) from the old `BlogSection`, restyled with tokens; filter excludes the featured post from the grid. Show a result count.

  **Acceptance:** featured shows once; filter works; `soon` post visible but unlinked; counts correct.

- [ ] **Step 2:** `npm run build` — expect success.

- [ ] **Step 3:** Commit.

```bash
git add src/components/Writing/WritingSection.tsx
git commit -m "feat: writing section — featured + filterable grid"
```

### Task 16: On-site essay reader route

**Files:** Create `src/components/Writing/ArticleReader.tsx`; add dep `react-markdown`

- [ ] **Step 1:** `npm install react-markdown` and import the local essay markdown via Vite `?raw` (`import vishing from "../../content/blogs/vishing-at-scale.md?raw"`). Map `id → raw` for `local` posts.

- [ ] **Step 2:** `ArticleReader`: reads `:id` param, looks up the local post + raw markdown, renders with `react-markdown` inside a readable prose container (mono small-caps meta header, sans body). 404 to home if id unknown. Used by route `/writing/:id` (wired in Phase 8).

  **Acceptance:** `/writing/vishing-at-scale` renders the essay; unknown id redirects home.

- [ ] **Step 3:** `npm run build` — expect success.

- [ ] **Step 4:** Commit.

```bash
git add -A
git commit -m "feat: on-site markdown reader for local essays"
```

---

## Phase 7 — Experience & Projects

### Task 17: Experience section

**Files:** Create `src/components/Experience/ExperienceCard.tsx`, `src/components/Experience/ExperienceSection.tsx`

- [ ] **Step 1:** `ExperienceCard` (props `{ entry }` from `experience.json`): paper `Card`, company logo (resolved via `companyImages[entry.logo]`), role @ company, period chip, one-line blurb, accent dot by `entry.accent`. "Training Grounds" feel.

- [ ] **Step 2:** `ExperienceSection`: `SectionHeading id="experience" kicker="• THE TRAINING GROUNDS" title="Experience"`; map `experience.json` to cards in a stacked/grid layout.

  **Acceptance:** four entries render with logos; Twitch first; light+dark clean.

- [ ] **Step 3:** `npm run build` — expect success.

- [ ] **Step 4:** Commit.

```bash
git add src/components/Experience
git commit -m "feat: experience section — Training Grounds cards"
```

### Task 18: Projects section

**Files:** Create `src/components/Projects/ProjectsSection.tsx`; rewrite `src/components/Projects/ProjectCard.tsx`

- [ ] **Step 1:** Rewrite `ProjectCard` (props `{ project: Project }`): paper `Card`; optional image via `projectImages[project.image]` (only when key present); title, shortDescription, tag chips; links row (GitHub / Live / Video as available) using `react-icons`. Status dot for `active`.

- [ ] **Step 2:** `ProjectsSection`: `SectionHeading id="projects" kicker="• SELECTED WORK" title="Projects"`; responsive grid over `getProjects()`. (Supersedes `pages/Projects.tsx` + `Projects/ProjectGrid.tsx`; the old YouTube-iframe showcase is dropped in favor of per-card video links.)

  **Acceptance:** six curated projects; Munk absent; images load in production build (asset map, not `/src` paths).

- [ ] **Step 3:** `npm run build` — expect success.

- [ ] **Step 4:** Commit.

```bash
git add src/components/Projects
git commit -m "feat: projects section — curated grid with build-safe asset imports"
```

---

## Phase 8 — Nav, routing, home composition

### Task 19: Rewrite Nav (router v6 + anchor scroll + theme toggle)

**Files:**
- Upgrade dep: `react-router-dom` v6
- Create: `src/components/layout/Nav.tsx` (replaces `src/components/Nav.tsx`)

- [ ] **Step 1:** Upgrade router.

Run: `npm install react-router-dom@6 && npm uninstall @types/react-router-dom`
Expected: v6 installed (v6 ships its own types).

- [ ] **Step 2:** Create `src/components/layout/Nav.tsx`: a centered pill nav with links Home · Writing · Experience · Projects · About + `<ThemeToggle/>`. On `/`, Writing/Experience/Projects are smooth-scroll anchors (`scrollIntoView` to section ids); About is a route (`/about`); Home scrolls to top. When not on `/`, anchor links first navigate to `/` then scroll. Use `useNavigate`/`useLocation` (v6). Keep the sliding active-pill affordance but compute it from the active link. Fix the old duplicate-key bug (no repeated `About`). Replace `<Helmet>` title with a `useEffect` document.title (drop `react-helmet`).

  **Acceptance:** all five items work from `/` and `/about`; active state correct; theme toggle present; no console errors.

- [ ] **Step 3:** `git rm src/components/Nav.tsx src/utils/ScrollToTop.tsx` (v6 handles via a small inline scroll-restoration if needed) — only after Nav/App updated.

- [ ] **Step 4:** `npm run build` — expect success.

- [ ] **Step 5:** Commit.

```bash
git add -A
git commit -m "feat: router v6 nav — anchor scroll + theme toggle; drop helmet/ScrollToTop"
```

### Task 20: Rewrite App routing + Home composition

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/pages/About.tsx` → move to `src/components/About/AboutPage.tsx`

- [ ] **Step 1:** Rewrite `src/App.tsx` with v6 `BrowserRouter`/`Routes`/`Route`, wrapped in `ThemeProvider`:

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import AboutPage from "./components/About/AboutPage";
import ArticleReader from "./components/Writing/ArticleReader";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <header className="mx-auto mt-6 mb-10 w-full max-w-4xl px-4">
            <Nav />
          </header>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/writing/:id" element={<ArticleReader />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
```

- [ ] **Step 2:** Rewrite `src/pages/Home.tsx` to compose the scroll:

```tsx
import Hero from "../components/Hero/Hero";
import WritingSection from "../components/Writing/WritingSection";
import ExperienceSection from "../components/Experience/ExperienceSection";
import ProjectsSection from "../components/Projects/ProjectsSection";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-20 px-4 pb-24">
      <section className="pt-2"><Hero /></section>
      <WritingSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}
```

- [ ] **Step 3:** Move `pages/About.tsx` to `components/About/AboutPage.tsx`; fix content: location **Brooklyn, NY** (not Toronto); **remove the Munk sentence** and any DeFi/stealth specifics — rewrite that clause to "designing financial planning and advisory workflows, and exploring fiduciary design at Wealthsimple." Keep the photo flip, birthday confetti, and PhotoSlideshow. Update import paths for the moved file. Move `components/About/PhotoSlideshow.tsx` + `PhotoModal.tsx` stay under `About/`.

- [ ] **Step 4:** `npm run build` — expect success.

- [ ] **Step 5:** Commit.

```bash
git add -A
git commit -m "feat: v6 app routing + composed home scroll; About bio fix (Brooklyn, no Munk)"
```

### Task 21: Footer + DragonBand on About

**Files:** Create `src/components/layout/Footer.tsx`, `src/components/About/DragonBand.tsx`; add `assets/images/manga/dragon-slayer.png`

- [ ] **Step 1:** Place the user-provided manga panel at `src/assets/images/manga/dragon-slayer.png`. (If not yet provided, leave a clearly-labeled placeholder import and note it in the PR.)

- [ ] **Step 2:** `DragonBand`: full-width band on `/about` — the manga panel (grayscale, subtle border) with an overlaid/adjacent caption in his voice: **"The Automaton reasons. The human strikes."** + a one-line gloss tying to the thesis. Render it into `AboutPage` below the photos.

- [ ] **Step 3:** `Footer`: minimal — name, the four social icons, `© 2026 Emmanuel Sogelola`, a tiny mono line "Built in the open." Lives on every route.

  **Acceptance:** dragon band reads as a tasteful personality moment, not loud; footer consistent light+dark.

- [ ] **Step 4:** `npm run build` — expect success.

- [ ] **Step 5:** Commit.

```bash
git add -A
git commit -m "feat: about dragon-slayer personality band + site footer"
```

### Task 22: Final dead-code sweep

**Files:** deletions

- [ ] **Step 1:** Grep for any remaining unused legacy files now superseded.

Run:
```bash
for f in Blog/BlogCard Blog/BlogSection Projects/ProjectGrid Experimental/Card Experimental/BackCard pages/Experience pages/Projects; do
  echo "== $f =="; grep -rn "$(basename $f)" src --include=*.tsx --include=*.ts | grep import; done
```
Expected: no live imports for superseded files.

- [ ] **Step 2:** `git rm` the confirmed-unused: `src/components/Blog/BlogCard.tsx`, `src/components/Blog/BlogSection.tsx`, `src/components/Projects/ProjectGrid.tsx`, `src/components/Experimental/Card.tsx`, `src/components/Experimental/BackCard.tsx`, `src/pages/Experience.tsx`, `src/pages/Projects.tsx`, and `src/index.d.ts` if unreferenced.

- [ ] **Step 3:** `npm run build && npm run lint` — expect both green.

- [ ] **Step 4:** Commit.

```bash
git add -A
git commit -m "chore: remove superseded legacy components and pages"
```

---

## Phase 9 — Verification

### Task 23: Lint, typecheck, content tests green

**Files:** none

- [ ] **Step 1:** Run the full gate.

Run: `npm run build && npm run lint && npm test`
Expected: tsc clean, eslint 0 warnings, all Vitest tests pass.

- [ ] **Step 2:** Fix any failures inline; commit fixes with message `fix: <what>`.

### Task 24: Playwright evidence screenshots (on disk)

**Files:** Create `e2e/screenshots.spec.ts`, `playwright.config.ts`

- [ ] **Step 1:** Add `playwright.config.ts` with a `webServer` running `npm run dev` (port 5173) and a chromium project.

- [ ] **Step 2:** Write `e2e/screenshots.spec.ts` capturing full-page PNGs to `docs/superpowers/evidence/` for: `/` and `/about`, at viewports 390×844 and 1280×900, in **both** themes (toggle via clicking the theme button or seeding `localStorage.theme`). Filenames like `home-desktop-dark.png`.

```ts
import { test } from "@playwright/test";
const pages = [["/", "home"], ["/about", "about"]] as const;
const sizes = [[390, 844, "mobile"], [1280, 900, "desktop"]] as const;
const themes = ["light", "dark"] as const;
for (const [path, name] of pages)
  for (const [w, h, sz] of sizes)
    for (const theme of themes)
      test(`${name}-${sz}-${theme}`, async ({ page }) => {
        await page.addInitScript((t) => localStorage.setItem("theme", t), theme);
        await page.setViewportSize({ width: w, height: h });
        await page.goto(path);
        await page.waitForLoadState("networkidle");
        await page.screenshot({ path: `docs/superpowers/evidence/${name}-${sz}-${theme}.png`, fullPage: true });
      });
```

- [ ] **Step 3:** Run captures.

Run: `npx playwright test`
Expected: 8 screenshots written under `docs/superpowers/evidence/`.

- [ ] **Step 4:** Review every screenshot for: no broken images, no overflow, no Synchronized/Munk text, nav/anchor correctness, dark-mode legibility, dragon band tasteful. Note issues and fix before proceeding.

- [ ] **Step 5:** Commit evidence + configs.

```bash
git add e2e playwright.config.ts docs/superpowers/evidence package.json
git commit -m "test: playwright evidence screenshots (light/dark, mobile/desktop)"
```

### Task 25: Finalize

- [ ] **Step 1:** Invoke **superpowers:finishing-a-development-branch** to choose merge/PR. Default: open a PR from `redesign/paper-founder` summarizing the redesign, with before/after screenshots from `docs/superpowers/evidence/`.

- [ ] **Step 2:** Surface the two human follow-ups in the PR description: (a) Emmanuel's final read of `vishing-at-scale.md` before it's truly public; (b) provide/confirm the dragon-slayer panel asset and a real Spotify token (or accept the on-repeat fallback).

---

## Self-review notes (author)

- **Spec coverage:** Identity §2 → Task 13; IA §3 → Tasks 19–21; design system §4 → Tasks 3,4,10; hero §5.1 → Tasks 11–13; now-playing §5.1 → Tasks 9,12; writing §5.2 → Tasks 6,14–16; experience §5.3 → Tasks 7,17; projects §5.4 → Tasks 7,18; about/dragon §5.5 → Tasks 20–21; cleanup §6 → Tasks 1,2,22; tech §7 → Tasks 1,3,4,19,20; verification §8 → Tasks 23,24; resolved §10 (Spotify+essay) → Tasks 6,9,12. No gaps.
- **No fabricated tests:** real tests only where logic exists (content integrity, spotify parser); visual tasks gated by build/lint/screenshots — stated up front.
- **Type consistency:** `BlogPost`/`Project` (Task 5) used identically by `content.ts` (8), cards (14,18), reader (16); `Track` (9) used by NowPlaying (12); asset maps `projectImages`/`companyImages` defined (7) before use (17,18).
```

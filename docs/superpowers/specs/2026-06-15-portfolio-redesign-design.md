# Portfolio Redesign — "Paper Founder"

_Design spec · 2026-06-15 · Emmanuel Sogelola portfolio (`~/dev/Portfolio`)_

## 1. Goal

Redesign and clean up the existing portfolio into a crisp, founder-grade personal site
that keeps its paper/ID-card personality while reading clean and intentional. Modernize the
codebase, cut dead code, and update content to reflect who Emmanuel is today: a security
engineer at Twitch and a (stealth) founder with an active body of writing.

Visual north stars (provided as references):
- **Nadia Susanto** — circular avatar with orbital rotating text, "Training Grounds"
  experience cards, warm/playful labels.
- **Siddharth Meena** — clean `LABEL` info columns, now-playing line, tech-stack grid,
  subtle grid paper texture, light/dark toggle, big bold name.
- **Dragon-slayer manga panel** — the nerdy soul; a tiny king reading a tome while a dragon
  roars. Personality injection.

## 2. Identity & tone

- Headline identity: **"Security Engineer @ Twitch · Founder, building in stealth."**
- Founder weight is carried by the **Automaton thesis** and the **writing**, never by naming
  or linking Synchronized. (Synchronized = stealth; keep it off the public site.)
- Voice for any drafted copy/essays: measured, essayistic, principle-driven, short
  declarative lines for emphasis, cultural touchstones (per `automaton-i-the-philosophy.md`).

## 3. Information architecture

Collapse the current multi-page router into one clean scroll plus a deeper personal page.

- **`/` (home)** — single vertical scroll:
  `Hero card → Writing → Experience → Selected work → footer`.
  Nav = smooth-scroll anchors: Home · Writing · Experience · Projects · About.
- **`/about`** — the personal/nerdy room: longer bio, photo gallery, now-playing, and the
  **dragon-slayer manga moment** (panel + caption tying to the thesis, e.g.
  _"The Automaton reasons. The human strikes."_). Personality concentrates here so home
  stays founder-crisp.
- **404** — kept, cleaned.

## 4. Design system

- **Surface**: paper aesthetic retained — `#f9f9f1` dot-grid background, white cards.
  Crisper than today: 1px borders + soft shadow (replace chunky 2px borders).
- **Type (dual system)**:
  - Display/headings/name → **Inter** (already imported), large + bold.
  - Labels / meta / `ID` / tags / badges → **PT Mono** (keeps the ID-card DNA).
- **Color**: grayscale paper base + existing accent set —
  emerald = Security, purple = Machine Learning, amber = Finance, blue = Product Design.
  Restrained; accents only on tags/filters.
- **Light/dark toggle** (Tailwind `darkMode: 'class'` + a toggle in nav). Dark mode leans
  into the B&W manga vibe.
- Tokens centralized in `tailwind.config` theme (colors, fonts, radius, shadow) rather than
  ad-hoc utility soup.

## 5. Sections

### 5.1 Hero card (evolves the existing `IDCard`)
- Circular avatar with **Nadia-style orbital rotating text**; nerdy-founder labels:
  _"provenance over autonomy" · "human-in-the-loop" · "dragon slayer" · "security minded."_
- Big bold name; role line (identity from §2).
- Siddharth-style meta row (mono labels):
  `LOCATION Brooklyn, NY · EDUCATION McMaster · FOCUS Security / AI`.
- Social row: LinkedIn · GitHub · X · Substack · email.
- Retain charming ID-card flourishes as subtle easter eggs: ID number, `SEC1` badge,
  maple-leaf hover.
- **Now Playing (Spotify)** integrated cohesively as a quiet meta line in the hero
  (Siddharth-style: `● Now Playing — <track> · <artist>`), echoed on `/about`. Approach:
  Spotify Web API "currently playing" via a lightweight client-credentials/refresh-token
  fetch; graceful fallback to a curated "on repeat" track when nothing is live (so the
  static GitHub-Pages build never shows a broken element). Reuse/replace existing
  `components/Home/SpotifyCard.tsx`.

### 5.2 Writing (focal point)
- Featured **Automaton I** large; remaining posts in a clean grid with the existing
  category filter (reused, simplified).
- **Content**: remove the 6 placeholder `#` articles. Show only real + drafted pieces:
  1. _Automaton I: The Philosophy_ — Dec 22, 2025 — Machine Learning — [live]
  2. _Financial Advisory at Scale: Can Empathy Be Encoded?_ — Oct 22, 2025 — Finance — [live]
  3. _Financial Advisory at Scale: In the Field_ — Mar 22, 2026 — Finance — [live]
  4. **New drafted essay (in his voice)** — social engineering / "vishing at scale",
     anchored to BoB-26 — Security — [essay hosted on-site as markdown]
  5. _Automaton II_ — marked **in progress / coming soon** (not ghostwritten).

### 5.3 Experience — "Training Grounds" cards
- Logo + role + one line each: **Twitch** (Security Engineer) · **Wealthsimple** ·
  **Zendesk** · **SurveyMonkey / Momentive**. Logos already in `assets/images/companies/`.

### 5.4 Selected work (curated)
- **Drop Munk** (stealth / munkfinancial). Curated public set:
  **TWAM** (Java RPG, public on GitHub), **BoB-26** (DEF CON SE Village vishing
  demonstrator — OK to feature), **Doodlecord**, **Interviewy**, **Emazon**, **PKGHound**.
- Fix asset paths (import assets; drop `/src/assets/...` string paths).

### 5.5 About page personality band
- Dragon-slayer manga panel + thesis caption. Photo gallery (existing `gallery/`), bio,
  optional music/now-playing.

## 6. Codebase cleanup

- **Router** `react-router-dom` v5 → v6; routes reduced to `/`, `/about`, `*`.
- **Firebase**: remove the `firebase` dependency (currently used only for GA analytics in
  `main.tsx` + `Nav.tsx`). Replace with a lightweight analytics snippet (or drop). Removes a
  heavy dependency and the hard-coded config from source.
- **Delete dead code**: `pages/ProjectsTBD.tsx`, `pages/Experience.tsx` (folded into home),
  unused `components/Home/*` (`Moma`, `Biography`, `Experiences`, `SocialCard`,
  `DancingIcon`), unused `animations/*.json`, `index.d.ts` if unreferenced. Verify each is
  unimported before deletion.
- **Restructure** into feature folders: `components/{Hero,Writing,Experience,Projects,About,ui}`.
- **Bug fixes**: `Nav.tsx` duplicate `About: aboutRef` object key; `projects.json` build-breaking
  `/src/assets/...` paths.
- **Content layer**: keep typed `data/{blogs,projects}.json` + `content/blogs/*.md`, cleaned.
- **Quality gate**: `tsc` build green, `eslint` clean (max-warnings 0 per existing script).

## 7. Tech changes summary

Router v6 · remove Firebase · Tailwind theme tokens + `darkMode: 'class'` · Inter + PT Mono
type system · feature-folder restructure · fixed asset imports · dead-code deletion ·
new on-site essay (markdown) · light/dark toggle component.

## 8. Verification

Static personal site — no heavy unit suite. Acceptance:
- `npm run build` (tsc + vite) succeeds; `npm run lint` passes with 0 warnings.
- Dev server runs; **Playwright screenshots** captured at mobile (~390px) and desktop
  (~1280px) for `/` and `/about`, saved to disk as evidence, light and dark.
- Manual check: nav anchors scroll correctly; no broken images; no `#` dead links;
  Synchronized/Munk absent from public copy.

## 9. Out of scope

- Writing Automaton II (Emmanuel authors his own sequel; site shows a placeholder).
- Naming or linking Synchronized anywhere public.
- Migrating off Vite/React (hybrid modernize, not a rewrite).
- A CMS or backend; content stays file-based.

## 10. Resolved decisions

- **Now Playing (Spotify)**: included, integrated cohesively per §5.1 (live fetch +
  graceful curated fallback).
- **Drafted BoB-26 essay**: approved to draft in his voice and publish on-site; Emmanuel
  retains final read before it ships.

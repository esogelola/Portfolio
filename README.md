# Emmanuel Sogelola — Portfolio

A personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Run the production and regression checks with:

```bash
npm run build
npm test
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Editorial portfolio home |
| `/layout-lab` | Legacy preview URL; redirects home |
| `/about` | Personal profile and photo gallery |
| `/writing/:id` | Individual writing pages |

## Project structure

```text
src/
├── assets/
│   ├── audio/          # Bundled music
│   └── images/
│       ├── artwork/    # Illustrations and visual treatments
│       ├── brand/      # Company and organization marks
│       ├── gallery/    # Personal gallery photography
│       ├── originals/  # Source images retained for future edits
│       └── portraits/  # Profile photography
├── components/         # Reusable, feature-grouped UI
├── content/            # Published local writing
├── data/               # Portfolio content and metadata
├── lib/                # Content and asset helpers
└── pages/              # Route-level screens

public/
├── art/                # Directly served large-format artwork
├── avatars/            # Directly served avatars
├── documents/          # Resume and downloadable files
└── projects/           # Project card imagery
```

Design explorations, unpublished writing, and superseded assets live in
`docs/archive/`. They remain available as project history without being shipped
in the production bundle.

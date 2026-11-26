# MSV Goat Farm Website (Theni, Tamil Nadu)

Static website for **MSV Goat Farm** built with **Astro**, **Tailwind CSS**, **TypeScript**, and **Lucide Icons**, configured for **Cloudflare Pages** (`npm run build` -> `dist`).

## Prerequisites

- **Node.js:** `24.18.0` (pinned in `.node-version`)
- **npm:** `11.x` (with `package-lock.json` committed)

## Local Setup & Commands

```sh
npm ci          # Clean install from package-lock.json
npm run dev     # Start local Astro dev server
npm run build   # Build static production site to dist/
npm run preview # Preview built dist/ output locally
```

## Cloudflare Pages Deployment Settings

- **Framework preset:** `Astro`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Production branch:** `main`
- **Environment variable:** `NODE_VERSION=24.18.0`

## Production Domain & Optional Owner Updates

- **Configured production URL:** `https://msvgoatfarm.pages.dev` (in `astro.config.mjs` and `public/robots.txt`)
- **Confirmed WhatsApp & telephone:** `+91 95246 95724` (in `src/content/settings/site.json`)
- **Optional remaining details (kept disabled until supplied):**
  1. Street address, Google Maps link, visiting hours, and email in `src/content/settings/site.json` (set corresponding `*Confirmed` flags to `true` only when confirmed).
  2. Confirmed records in `src/content/breeds/`, `src/content/goats/`, and `src/content/services/`.

## Asset Separation

- `reference-assets/` — Original uploaded farm photographs and source logo kept locally and excluded via `.gitignore` (never copied into `public/` or `dist/`).
- `public/images/` — Optimised WebP/PNG web assets and AI-generated showcase photography.

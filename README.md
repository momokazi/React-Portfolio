# Portfolio — Husnain Momin

Personal portfolio site. React + TypeScript + Vite, styled with Tailwind in a
neo-brutalist direction: thick ink borders, hard offset shadows, flat saturated
colour blocks, stepped transitions rather than eased ones.

Live at [momin.dev](https://github.com/momokazi) · deployed on Vercel from `main`.

## Running it

Requires Node 18+.

```bash
npm install
npm run dev
```

Other scripts:

| Command           | Does                                  |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Dev server on :5173                   |
| `npm run build`   | Typecheck (`tsc`) then bundle to `dist/` |
| `npm run preview` | Serve the built `dist/` locally       |

## Environment

The chat widget calls the Gemini API. Set `API_KEY` in `.env.local`:

```
API_KEY=your_gemini_key
```

Without it the widget still renders and tells visitors it is offline.

> **Note:** `vite.config.ts` inlines `API_KEY` into the client bundle via
> `define`, so the key ships to the browser and is readable by anyone who opens
> devtools. Restrict the key to this domain in Google AI Studio, or move the
> call behind a serverless function, before treating it as private.

## Layout

```
components/
  ui/            Design-system primitives (Button, Card, Badge, Field, Ticker…)
  *.tsx          Page and section components
context/         Theme provider (light/dark, persisted to localStorage)
lib/utils.ts     cn() — clsx + tailwind-merge
services/        Gemini client for the chat widget
styles/          Tailwind entry + CSS custom properties
constants.ts     All site content — projects, skills, experience, bio
```

Content lives in `constants.ts`. Editing a project or job there updates every
page that renders it; no copy is hardcoded in components.

## Design tokens

Colours are CSS custom properties in `styles/globals.css` so light and dark
share one set of utility classes:

- `--paper` / `--surface` — backgrounds
- `--ink` — text and borders (flips to cream in dark mode)
- `--shadow` — the hard drop-shadow colour, same flip

Accents (`flame`, `acid`, `sky`, `grape`, `rose`, `mint`) stay saturated in both
themes on purpose. Shadow utilities: `shadow-brutal`, `-md`, `-lg`, `-xl`.

## Deployment

Vercel builds `main` on push. `vercel.json` rewrites all paths to `index.html`
so client-side routes resolve on hard refresh.

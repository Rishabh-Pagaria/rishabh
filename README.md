# brewcase ☕▲ — Freelance Software & AI Studio

The marketing site + portfolio for **brewcase**, the freelance software & AI studio of **Rishabh Pagaria**. Positioned to win freelance work: clear services, real outcomes, an honest process, and strong SEO. Warm copper/amber theme derived from the brewcase cup logo, with a contrasting teal accent.

## Highlights

- **Freelance-first structure** — Hero → Services → Work → Process → Skills → About → CTA → Contact.
- **Conversion-focused** — availability badge, trust bar, a bold CTA band, and a "Start a project" brief form.
- **SEO-ready** — descriptive title/meta/keywords, canonical URL, Open Graph + Twitter cards, `ProfessionalService` JSON-LD structured data, `robots.txt`, and `sitemap.xml`.
- **Tasteful motion** — scroll-reveal choreography, animated count-up stats, a typing role rotator, pointer-tracked project cards, a skills marquee, and a cursor spotlight. Nothing gratuitous; all reduced-motion aware.
- **⌘K command palette** for keyboard-first navigation and a persisted **light / dark** theme.
- **Resilient contact form** — posts to the API, and falls back to the visitor's email client if the API is offline.

## Structure

- `frontend/` — Vite + React 19 + TypeScript. Content lives in `src/data/portfolio.ts`; components stay presentational.
- `backend/` — Express (ESM) API serving site content and receiving project inquiries.

## Run it

```bash
# frontend — http://localhost:5173
cd frontend && npm install && npm run dev

# backend — http://localhost:5000
cd backend && npm install && npm run dev
```

The site renders fully from local data, so the backend is optional in dev — it's only needed for the contact form to persist inquiries.

## API

- `GET /api/health`
- `GET /api/profile` · `GET /api/services` · `GET /api/process` · `GET /api/projects` · `GET /api/skills` · `GET /api/contact`
- `POST /api/messages` — `{ name, email, message }`

Point the frontend at a deployed API with `VITE_API_URL` (defaults to `http://localhost:5000/api`).

## Build & deploy

```bash
cd frontend
npm run build     # type-check + production build → dist/
npm run deploy    # build + publish to GitHub Pages (base: /rishabhv2/)
```

> Keep `backend/src/data/portfolio.js` and `frontend/src/data/portfolio.ts` in sync — they hold the same content for the API and the UI.

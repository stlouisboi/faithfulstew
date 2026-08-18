# The Faithful Steward — PRD

## Problem statement
Repository `stlouisboi/faithfulstew` (deploys to faithfulstew.vercel.app) was a single-file
Vite/React landing page for the Christian business book *Kingdom Before Company* by Vince Lawrence.
Goal: turn the brand landing page into a proper V1 "book-and-workbook conversion system"
(reader → Decision Test → email list → book → workbook) WITHOUT overbuilding into a platform.

## User choices (locked)
- Deploy target: **static site on Vercel** (repo stays Vite at root).
- Email list: **MailerLite** (via Vercel serverless function `/api/subscribe`).
- Transactional/delivery email: **Resend** (via `/api/stripe-webhook`).
- Workbook checkout: **Stripe Payment Link** + single Vercel webhook function (Option 1).
- Book: sold on Amazon; site shows "Buy on Amazon / Kindle" links (Coming Soon until KDP live).
- Workbook ($27 digital) sold direct on site; shows "Coming Soon" until payment link + fillable PDF ready.

## Architecture
- **Frontend:** Vite + React 18 (JS), react-router-dom, Tailwind, framer-motion (`motion/react`),
  react-helmet-async for SEO. Structure: `src/{components,pages,data,lib}`.
- **Serverless (Vercel, prod-only):** `api/subscribe.js` (MailerLite), `api/stripe-webhook.js`
  (Stripe signature verify → Resend delivery). `vercel.json` SPA rewrite excludes `/api/`.
- **Env:** client `VITE_STRIPE_PAYMENT_LINK`; server `MAILERLITE_API_KEY`,
  `MAILERLITE_GROUP_*`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `RESEND_API_KEY`,
  `SENDER_EMAIL`, `WORKBOOK_DOWNLOAD_URL`. See `.env.example`.
- Editable content constants in `src/lib/site.js` (prices, Amazon URLs, contact email, payment link).

## Implemented (2026-06-18)
- Multi-page routing with V1 nav: Home, Book, Decision Test, Workbook, About, Resources, Contact
  + footer legal (Privacy, Terms & License, Disclaimer) + payment success/cancel + 404.
- **Home:** hero, tension, 7-lens framework, book teaser, final CTA.
- **Book page:** real cover, back-cover headline, description, who it's/isn't for, Amazon buy
  buttons (Coming Soon), workbook cross-sell.
- **Decision Test:** interactive 7-question quiz (one per framework lens), scored client-side,
  reveals the reader's "biggest tension" + MailerLite email capture with business-stage.
- **Workbook page:** generated 3D mockup, $27, Coming Soon (payment link gated by env),
  launch-list capture, personal-use license note.
- **About Vince** (headshot), **Resources**, **Contact**, legal pages.
- SEO/OG meta per page + social share card image. Reusable ShareWidget.
- Assets in `public/`: book-cover.png, vince-lawrence.png, workbook-mockup.jpg, og-share-card.jpg.
- Verified by testing agent: 100% frontend pass (all routes, nav, quiz flow, Coming Soon states).

## Not built (deferred / by design)
- P1: Live Amazon buy links (add URLs to `src/lib/site.js` when KDP live).
- P1: Real workbook checkout (set `VITE_STRIPE_PAYMENT_LINK` + Stripe webhook + fillable PDF).
- P1: Wire MailerLite/Resend keys as Vercel env vars (functions ready, keys pending).
- P2: FAQ, Author story deep page, analytics.
- Later: Podcast/speaking, blog. Do NOT build: login, member dashboard, course, community, AI adviser.

## Deploy notes
Built & previewed on Emergent via `vite` dev server on port 3000. Production deploy is the user's
own GitHub → Vercel. Serverless functions (`/api/*`) run only on Vercel, not in this preview.

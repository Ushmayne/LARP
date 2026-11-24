# larp

Know ball in 5 minutes. Larp helps people act like they know a topic when they don't (yet).

A **pack** is a five-minute read on a fandom (sports, shows, games, music, anything) with the names, slang, hot takes and deep cuts real fans use. A **vibe check** at the end tells you whether you'd pass as a real fan. Anyone can **write a pack**.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) with React 19 and TypeScript
- [Supabase Auth](https://supabase.com/docs/guides/auth) for OAuth sign-in (Google and GitHub)
- Plain CSS with design tokens (`app/globals.css`), Fredoka and Inter via `next/font`
- [Lucide](https://lucide.dev) line icons

## Getting started

Requires Node 18.18 or newer (built on Node 22).

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase keys (see below)
npm run dev                  # http://localhost:3000
```

No Supabase keys yet? `npm run dev` still works: the sign-in page shows a **Continue as test user** button so you can see the member pages. That button and its route only exist in development; production builds ignore them.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload on port 3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run typecheck` | TypeScript check, no output |

## Sign-in setup (Supabase + Google/GitHub)

The landing page (`/`) is public. Everything else needs sign-in.

1. Create a project at [supabase.com](https://supabase.com).
2. Copy `.env.example` to `.env.local` and fill in the project URL and publishable (anon) key from **Project Settings → API**. Never put the service-role key in this file.
3. In Supabase, **Authentication → URL Configuration**:
   - Site URL: `http://localhost:3000` (your real domain in production)
   - Redirect URLs: add `http://localhost:3000/auth/callback` and `https://your-domain/auth/callback`
4. In **Authentication → Sign In / Providers**, turn on:
   - **Google:** create an OAuth client in Google Cloud Console (APIs & Services → Credentials → OAuth client ID → Web application). Set the authorized redirect URI to the callback URL Supabase shows on its Google provider page (`https://<project-ref>.supabase.co/auth/v1/callback`). Paste the client ID and secret into Supabase.
   - **GitHub:** create an OAuth App (GitHub → Settings → Developer settings → OAuth Apps) with that same Supabase callback URL. Paste the client ID and secret into Supabase.
5. Restart `npm run dev`.

### How the gating works

- `middleware.ts` refreshes the Supabase session and redirects signed-out visitors from member pages to `/login?next=…`.
- `app/(members)/layout.tsx` checks the session again on the server before any member page renders.
- `/auth/callback` finishes the OAuth flow and only redirects to paths on this site.
- `/auth/signout` is POST-only.

## Pages

| Route | Access | What it is |
| --- | --- | --- |
| `/` | Public | Landing page |
| `/login` | Public | Sign in with Google or GitHub |
| `/topics` | Members | Browse and search topics |
| `/topics/[slug]` | Members | A topic and its packs |
| `/packs/[slug]` | Members | A pack, laid out as a cheat sheet |
| `/packs/[slug]/vibe-check` | Members | The vibe check quiz |
| `/write` | Members | Write a pack (drafts save in the browser) |

## Project structure

```
app/
  page.tsx                 landing page
  login/                   sign-in page
  auth/                    OAuth callback, sign-out, dev-only test sign-in
  (members)/               everything behind sign-in
    topics/  packs/  write/
  globals.css              all styles and design tokens
components/                header, footer, sign-in buttons, quiz, composer…
lib/
  content.ts               topics and packs (placeholder data)
  auth.ts                  getViewer / requireViewer
  supabase/                Supabase config and server client
middleware.ts              session refresh and route gating
inspo/                     brand guide and app icon
PRODUCT.md                 product context: users, voice, principles, decisions
DESIGN.md                  design system: palette, type, components
```

## Content

All topics and packs live in `lib/content.ts` and are **placeholder content**: three full sample packs (NBA, The Office, Elden Ring) and a few topics with no packs yet. They're labelled as placeholder on the site. Nothing is stored in a database yet.

## Design

- `inspo/brandguide.txt` is the binding brand guide (Pink Pop palette, contrast rules, type, logo).
- `DESIGN.md` documents the design system as built.
- `PRODUCT.md` holds product context and the decisions made so far.

## Status

Done:
- Landing page, sign-in, topics, topic pages, packs, vibe check, write-a-pack composer
- OAuth sign-in via Supabase (needs your keys to go live)

Not built yet:
- A database for packs (planned: Supabase Postgres). Packs are hardcoded for now.
- Submitting a pack. The button is shown but switched off until review and moderation are decided.

Still open (see `PRODUCT.md`):
- How curation and moderation work
- Monetization, if any
- Whether vibe check results can be shared

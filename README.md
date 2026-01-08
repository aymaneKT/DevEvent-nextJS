# DevEvent (Next.js)

DevEvent is a full-stack web app built with Next.js (App Router) and TypeScript. The UI lives in the `app/` directory, while the backend is exposed through Route Handlers (HTTP endpoints) defined in `app/api/**/route.ts`.

## What this project is about

This project provides a practical Next.js baseline that includes:
a frontend (pages, layouts, reusable UI components),
a set of server-side API endpoints shipped within the same app,
a clean structure to keep UI, business logic, and data access separated.

If you’re looking for the endpoints, start from `app/api/` and follow the `route.ts` files.

## Tech stack & structure

Core technologies:
Next.js (App Router), React, TypeScript.

Styling:
PostCSS pipeline (often Tailwind CSS if configured).

UI:
`components/` (reusable UI components).

Utilities/services:
`lib/`.

Static assets:
`public/`.

Database-related resources:
`DataBase/`.

High-level structure:

.
├─ app/                  # routing, pages, layouts, (and API in app/api)
├─ components/           # reusable UI components
├─ lib/                  # helpers, services, data access, utils
├─ DataBase/             # DB resources (schema/seed/config, if present)
├─ public/               # static assets
├─ next.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
└─ package.json

## Requirements

Recommended:
Node.js LTS and a package manager (npm/pnpm/yarn/bun).

## Local setup

Install dependencies:
npm install

Run in development:
npm run dev

Then open:
http://localhost:3000

## Environment variables

Create a `.env.local` file at the project root if the app or API routes require configuration (DB, API keys, etc.).

Example (adjust to your needs):
DATABASE_URL="..."
# SOME_API_KEY="..."

If you’re unsure which env vars are needed, search for `process.env.` usage in `app/` and `lib/`.

## API endpoints (Route Handlers)

Next.js App Router endpoints are defined in `app/api/**/route.ts`.

Rule of thumb:
the folder path under `app/api` becomes the URL,
the exported functions (GET, POST, PUT, PATCH, DELETE, ...) define supported HTTP methods.

Endpoint documentation template:

Endpoint: /api/...
Methods: GET
Description: ...
Request: query/headers
Response: JSON

Endpoint: /api/...
Methods: POST
Description: ...
Request: JSON body
Response: JSON

Quick test example (adjust to real routes):
curl -i http://localhost:3000/api/health

## Suggested conventions

Keep route naming consistent (singular/plural resources).
Validate inputs server-side before touching the database.
Return consistent JSON errors with proper HTTP status codes.

## Build & deploy

Build:
npm run build

Start (production locally):
npm run start

Recommended deployment:
Vercel (or any Next.js-compatible platform).

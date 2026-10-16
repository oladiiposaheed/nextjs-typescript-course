// ==========================================
// Lesson 3.1: How App Router Works
// ==========================================
//
// RULE 1: Folder name = URL path
//   app/about/page.tsx  →  /about
//
// RULE 2: page.tsx = the page for that URL
//   Without page.tsx, no URL is created
//
// RULE 3: Special files
//   page.tsx       → the page content
//   layout.tsx     → wraps pages
//   loading.tsx    → loading state
//   error.tsx      → error state
//   not-found.tsx  → 404 page
//   route.ts       → API endpoint
//
// EXAMPLE STRUCTURE:
//   app/
//   ├── page.tsx              → /
//   ├── about/page.tsx        → /about
//   └── chapter-03/page.tsx   → /chapter-03
//
// This file is a note — no code to run.
# Chapter 0 Mini Project — Multi-Page Site

A simple Next.js site practicing:

- File-based routing
- Root layout
- Navigation with Link
- Dynamic routes

## Pages

| URL      | File                   |
| -------- | ---------------------- |
| /        | app/page.tsx           |
| /about   | app/about/page.tsx     |
| /contact | app/contact/page.tsx   |
| /post/1  | app/post/[id]/page.tsx |

## What This Demonstrates

1. Each folder in app/ = a route
2. layout.tsx wraps all pages
3. Link component navigates between pages
4. [id] captures dynamic URL values
5. async/await params in Next.js 16

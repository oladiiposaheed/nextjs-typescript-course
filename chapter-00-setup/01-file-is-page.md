# Concept 1: File is Page

## The Rule

The file structure in `app/` determines the URL.
No routing code needed.

## Examples

app/page.tsx → /
app/about/page.tsx → /about
app/contact/page.tsx → /contact

## page.tsx Must Have

- A default export
- A React component that returns JSX

## Pattern

export default function PageName() {
return <div>Content</div>;
}

## Key Points

- Folder name = URL path
- File must be named "page.tsx"
- Component name doesn't matter
- No React Router needed

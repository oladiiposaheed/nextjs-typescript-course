# Lesson 3.3: Dynamic Routes

A dynamic route uses square brackets `[id]` in the folder name.
It matches ANY value in that URL position.

## Example

| File                         | Matches                                         |
| ---------------------------- | ----------------------------------------------- |
| `app/products/page.tsx`      | `/products`                                     |
| `app/products/[id]/page.tsx` | `/products/1`, `/products/2`, `/products/apple` |

One file. Many URLs.

## The Key Rule

The folder `[id]` is a **placeholder**. Whatever value the user visits becomes `params.id`.

## In Next.js 16

`params` is a Promise. You must `await` it.

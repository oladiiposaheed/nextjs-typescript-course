# Lesson 3.5: Catch-All Routes

`[...slug]` catches ANY number of URL segments.

## Example

| URL                 | params.slug            |
| ------------------- | ---------------------- |
| `/docs/intro`       | `['intro']`            |
| `/docs/react/hooks` | `['react', 'hooks']`   |
| `/docs/a/b/c/d`     | `['a', 'b', 'c', 'd']` |

## Difference

- `[id]` — matches ONE segment
- `[...slug]` — matches MANY segments

The value is always an ARRAY.

# Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

Built with Next.js (App Router) + TypeScript + Tailwind CSS. No other
runtime dependencies. Each chapter is a real route under `app/course/[slug]`,
with content sourced from `content/*.tsx` (localized EN/FR/AR block data) and
metadata in `lib/chapters.ts`.

## Languages

The course supports English, French, and Arabic (switcher in the sidebar).
Layout direction always stays left-to-right — only the Arabic text itself
reads right-to-left, and C keywords / function names / code are never
translated. See `lib/i18n.tsx` and `components/Prose.tsx`.

## C example programs

`public/c-examples/` contains 10 standalone, compilable `.c` files — real
programs with their own `main()`, commented throughout in English — served
as static files at `/c-examples/<filename>.c` and listed on the **Examples**
page (linked in the sidebar). See `public/c-examples/README.md` for details
on each file.

## Adding or editing content

To add or edit a chapter:
1. Add its metadata to `lib/chapters.ts`.
2. Add a matching file in `content/`, exporting a default `Block[]` array
   (see `lib/blocks.ts` for the shape).
3. Register it in `content/index.tsx`.

To add another example file, drop it in `public/c-examples/` and add an
entry to `lib/examples.ts`.

---

Created by **Nour Yahyaoui** — [github.com/Nour-yahyaoui](https://github.com/Nour-yahyaoui)

# Editing this site

Everything you will normally want to change lives in `src/content`.
You should not need to touch a component to update copy, links, or ordering.

## Where things live

```
src/
├── content/              ← EDIT THESE. All copy, links, and data.
│   ├── site.ts             name, role, location, email, nav, social links
│   ├── hero.ts             headline, summary, credentials, portrait
│   ├── stats.ts            the number band under the hero
│   ├── projects.ts         selected work entries
│   ├── experience.ts       career timeline
│   ├── skills.ts           technical range, grouped
│   ├── articles.ts         writing and talks
│   ├── testimonials.ts     recommendations
│   └── contact.ts          contact panel + form endpoint
│
├── types/content.ts      shape of every content file (build fails on typos)
├── styles/
│   ├── tokens.css          colors, fonts, spacing, shadows — change once, applies everywhere
│   └── global.css          resets and base element styles
│
├── components/
│   ├── ui/                 reusable primitives (Button, Section, Tag, Icon, Reveal…)
│   ├── layout/             Header, Footer
│   └── sections/           one folder-level file per page section
│
├── hooks/                  useInView, useCountUp, useScrollSpy
└── App.tsx                 section order only
```

Each component has a matching `.module.css` file next to it. Styles are scoped
to that component, so editing `Hero.module.css` cannot break the footer.

## Common edits

**Change your name, title, or social links**
`src/content/site.ts`

**Add a project**
Append an object to the array in `src/content/projects.ts`. Give it a unique
`id`. Add `href` if it should link somewhere; leave it out and the row renders
as plain text.

**Add a nav item**
Add to `site.nav` in `src/content/site.ts`. The `href` must match a section `id`
used in `App.tsx` (e.g. `#work`). Scroll-spy highlighting is automatic.

**Reorder or remove a section**
`src/App.tsx`. Move or delete the component. Nothing else needs to change.

**Change the color scheme or fonts**
`src/styles/tokens.css`. For example, change `--color-accent` and every button,
link hover, and underline updates with it.

**Swap the portrait**
Replace `src/assets/hero.png`, or point `hero.portrait.src` at a different file.
Keep the `alt` text descriptive.

**Turn on the contact form**
By default the form opens the visitor's mail client. To receive submissions
instead, set `formEndpoint` in `src/content/contact.ts` to a form service URL
(Formspree, Basin, or your own API). It POSTs JSON with `name`, `email`,
`subject`, and `message`.

## Before publishing

- Replace the placeholder quotes in `src/content/testimonials.ts` with real
  recommendations and real names.
- Point `src/content/articles.ts` at your actual published posts.
- Add an `og-image.png` (1200×630) to `public/` for link previews, or update the
  `og:image` URL in `index.html`.

## Commands

```bash
npm run dev       # local dev server with hot reload
npm run build     # type-check and build to dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

`npm run build` runs TypeScript first, so a mistyped field in a content file
fails the build instead of shipping.

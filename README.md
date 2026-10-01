# Zohaib Ali — Portfolio

Personal portfolio for **Zohaib Ali** — AI × Immersive Technologist.

Live URL: `https://zohaibaliqureshi15.github.io`

---

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for UI motion
- **@react-three/fiber** + **three** for the live hero scene (iridescent shader, cursor parallax)
- **MDX** (via `next-mdx-remote`) for `/notes`

---

## Develop

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy

The site is configured as a static Next.js export and deploys to GitHub Pages from
the `main` branch through `.github/workflows/deploy-pages.yml`.

Repository: `zohaibaliqureshi15/zohaibaliqureshi15.github.io`

No environment variables are required.

---

## Where things live

| Area | Path |
|------|------|
| Hero (3D scene) | `components/hero/` |
| HUD chrome (nav, cursor, status pill) | `components/chrome/` |
| Home page sections | `components/sections/` |
| Project data | `lib/projects.ts` |
| Experience & capabilities | `lib/experience.ts` |
| Showreel clip list | `lib/reel.ts` |
| MDX notes | `content/notes/*.mdx` |
| Static assets | `public/` |

## Editing content

- **Projects**: edit `lib/projects.ts`. Set `featured: true` to surface on the home page.
- **Experience timeline**: `lib/experience.ts`.
- **Notes**: add MDX files to `content/notes/`. Frontmatter required: `title`, `description`, `date` (ISO), optional `tags`.
- **Resume**: replace `public/resume.pdf`.
- **Showreel**: drop new MP4s into `public/reel/`, then add an entry in `lib/reel.ts`.

## Asset hosting note

The `public/reel/` directory ships with ~255MB of video. For Vercel deploy, that's
within Hobby-tier limits but eats bandwidth. For production, consider moving large
videos to **Cloudflare R2**, **Mux**, or **Vercel Blob** and updating `lib/reel.ts`
sources to the external URL.

## Notes on the hero

The hero is a live Three.js scene with a custom iridescent shader (fresnel + 3D
noise displacement). It auto-disables on devices with `prefers-reduced-motion`,
falling back to a static iridescent gradient. The custom cursor only activates on
fine-pointer devices.

---

© Zohaib Ali. Built with care.

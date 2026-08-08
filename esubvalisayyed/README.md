# Sayyed Vali — Portfolio

Senior Full Stack Engineer & Tech Lead portfolio. React + TypeScript + Vite + Tailwind CSS v4 + Three.js, with Motion animations and a light/dark theme.

## Features

- Animated hero with a 3D WebGL visual (Three.js)
- Projects, About (with career timeline), Tech Stack, Services, Education, Testimonials and Contact sections
- Theme toggle (dark/light) with CSS-variable theming and accent color picker
- SEO meta tags, Open Graph and JSON-LD structured data

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script       | Description                    |
| ------------ | ------------------------------ |
| `npm run dev`| Start the Vite dev server      |
| `npm run build` | Production build            |
| `npm run preview` | Preview the production build |
| `npm run lint` | Type-check with `tsc --noEmit` |

## Environment

| Variable | Description |
| -------- | ----------- |
| `APP_URL` | Production URL, used for `og:url`/`og:image` meta tags. Falls back to `window.location.origin` when unset. |

## Contact form

The form posts to [Web3Forms](https://web3forms.com). Create an access key with recipient
`Sayyed.vali@gmail.com` and paste it into `WEB3FORMS_ACCESS_KEY` in `src/components/ContactSection.tsx`.
No domain verification or server required.

## Deploy to Vercel

1. Push this repo to GitHub
2. In Vercel: **Add New Project** → import the repo
3. Framework preset: **Vite** (auto-detected)
4. Leave build settings as defaults (`npm run build`, output `dist`)
5. Optional: set the `APP_URL` environment variable to the production domain

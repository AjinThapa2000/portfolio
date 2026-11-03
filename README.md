# Dinesh Thapa — Portfolio (React + Vite)

An interactive, single-page portfolio built with React and Vite. Dark/light theme toggle,
scroll-spy navigation, animated stat counters, a typewriter hero, filterable project grid,
and a copy-to-clipboard contact card.

## ✨ Features

- **Scroll-spy navigation** — the active nav link updates as you scroll
- **Dark / light theme toggle** — remembers your choice via `localStorage`
- **Typewriter effect** in the hero, cycling through role titles
- **Animated counters** for the stats and experience numbers
- **Filterable project grid** — filter by category (Client Site, React, JavaScript, API…)
- **Copy-to-clipboard** email button with a toast confirmation
- **Scroll-reveal animations** on every section (respects `prefers-reduced-motion`)
- Fully responsive, with a working mobile nav
- Zero UI dependencies — hand-rolled hooks, no animation or icon libraries required

## 🧱 Tech stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) — dev server & build tool
- Plain CSS with custom properties (no Tailwind/UI kit — easy to restyle)

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## 📦 Deploying

**Vercel**
1. Push this repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new) — it auto-detects Vite, no config needed
3. Deploy

**Netlify**
1. Push to GitHub, then "Add new site → Import an existing project"
2. Build command: `npm run build` · Publish directory: `dist`

**GitHub Pages (already set up in this repo)**
This repo includes a ready-to-go GitHub Actions workflow at `.github/workflows/deploy.yml`
that builds the app with Vite and deploys the compiled output — not the raw source — every
time you push to `main`.

1. Push this repo to GitHub
2. In the repo, go to **Settings → Pages**
3. Under **Build and deployment → Source**, choose **GitHub Actions** (not "Deploy from a branch")
4. Push to `main` (or re-run the workflow from the **Actions** tab) — your site will be live at
   `https://<your-username>.github.io/<repo-name>/`

> ⚠️ **If your repo name isn't `portfolio`**, open `vite.config.js` and change
> `base: '/portfolio/'` to `base: '/<your-repo-name>/'`, otherwise the page will load
> blank — the CSS/JS files won't be found at the right path.

> ⚠️ **Never commit `node_modules`.** If GitHub Pages "Source" is set to "Deploy from a
> branch", it just serves your raw files as-is (including uncompiled `.jsx` files), which
> is why you'd see a blank page — the browser can't run JSX directly. The Actions workflow
> above avoids this by actually running `npm run build` first.

## ✏️ Customizing

All the content lives in one place:

- **`src/data/data.js`** — your name, bio links, experience, skills and projects. Edit this
  file and everything on the page updates — no need to touch component files for text changes.
- **`src/assets/`** — photos and project screenshots (swap files, keep the same names, or
  update the `import` paths in `Hero.jsx`, `About.jsx`, and `Projects.jsx`).
- **`public/Dinesh_Thapa_CV.docx`** — swap in a new CV export; the "Download CV" button on the
  About section links straight to this file.
- **`src/index.css`** — design tokens (`--accent`, `--amber`, `--bg`, fonts, radius…) are all
  CSS variables at the top of the file, split between the `:root`/`[data-theme='dark']` and
  `[data-theme='light']` blocks.

### Adding a project

Add an entry to the `projects` array in `src/data/data.js`, drop the image into `src/assets/`,
then import it and add it to the `IMAGES` map at the top of `src/components/Projects.jsx`.

## 📁 Project structure

```
├── public/
│   ├── favicon.svg
│   └── Dinesh_Thapa_CV.docx
├── src/
│   ├── assets/            # photos & project screenshots
│   ├── components/        # one component per section + shared Icons.jsx
│   ├── data/data.js        # all editable content lives here
│   ├── hooks/              # useReveal, useActiveSection, useCountUp, useTypewriter, useTheme
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```
Live preview: https://ajinthapa2000.github.io/portfolio/

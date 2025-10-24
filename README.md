# Interactive Portfolio — Uttkarsh Singh

>A minimal, glass-themed React + Vite portfolio showcasing projects, experience, and animated tech icons.

Lightweight, TypeScript-ready, and optimized for quick local development and GitHub Pages deployment.

## Features
- Vite + React + TypeScript scaffold
- Glassmorphism UI with dark/pure-black background
- Animated tech bubbles background and floating icons
- Experience, Projects, Videos, Contact sections (YouTube hover interaction)

## Quick start
1. Clone the repo

```bash
git clone <your-repo-url>
cd web
```

2. Install dependencies

```bash
npm install
```

3. Run dev server (local)

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

5. Preview production build locally

```bash
npm run preview
```

## Deploy to GitHub Pages

Two simple options — pick one.

Option A — gh-pages (quick, client-side only)
1. Install gh-pages as a dev dep:

```bash
npm install --save-dev gh-pages
```
2. Add these scripts to `package.json` (example):

```json
"scripts": {
	"build": "vite build",
	"predeploy": "npm run build",
	"deploy": "gh-pages -d dist"
}
```
3. Run:

```bash
npm run deploy
```
This publishes the `dist/` folder to the `gh-pages` branch which GitHub Pages can serve.

Option B — GitHub Actions (recommended for CI)
1. Create a workflow (e.g. `.github/workflows/deploy.yml`) that runs `npm ci`, `npm run build`, and pushes `dist/` to `gh-pages` or uses the `peaceiris/actions-gh-pages` action. This automatically deploys on push to `main`.

Tip: set the repository Pages source to the `gh-pages` branch (or `gh-pages` / `docs` folder if you choose differently) in your repository Settings → Pages.

## Troubleshooting
- If CSS/Tailwind isn't applied: ensure `postcss.config.cjs` includes the Tailwind plugin and `@tailwind` directives are present in `src/index.css`.
- If assets (images) 404: place them in `public/` and reference them with `/path.png`.

## Notes
- This project is optimized for local dev with Vite (fast HMR). For GitHub Pages, the build output (`dist/`) is static and ready to publish.
- For accessibility, consider enabling reduced-motion fallbacks for animated elements.

---

If you want, I can add a ready-to-use GitHub Actions workflow file in this repo (CI + Pages deploy). Would you like that? 

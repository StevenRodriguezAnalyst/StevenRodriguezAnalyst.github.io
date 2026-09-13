# Steven Rodriguez — Portfolio

A static React, Vite, and TypeScript portfolio. No backend or environment variables are needed.

## Local development

Install Node.js 20.19+ or 22.12+ and pnpm, then run:

```sh
pnpm install
pnpm dev
```

## Edit content

Personal content, social links, skills, experience, and projects live in `src/data/portfolio.ts`. The section layout is in `src/main.tsx`; design tokens and responsive styles are in `src/style.css`. Update `index.html` when changing page title or metadata.

Projects summarize work documented in the supplied résumé. Update their questions, methods, results, and tools in the content file. The project figures are summary diagrams; the processing-time chart normalizes the documented 70% decrease to a baseline of 100. Update the figures alongside project data. Case studies expand with native accessible disclosure controls.

## Résumé and contact

The source résumé is `Resume/Steven Rodriguez Resume.docx`. The site serves an exact download copy at `public/resume.docx`; `public/resume.pdf` and `public/resume-preview.webp` are derived previews. `public/resume.html` provides an in-site preview with PDF and Word downloads, avoiding dependence on new-tab PDF viewers. When updating the source, regenerate these preview assets and the accessible transcript in the preview page together. The PDF conversion uses slightly tighter line spacing to keep the final bullet on the same page; the original Word document is unchanged.

Set `resumeAvailable` in the content file to enable the buttons. Set `email` and `github` to enable those contact links. Empty values retain their coming-soon state.

## Build and deploy for free

```sh
pnpm build
```

The finished static site is in `dist/`. Use build command `pnpm build` and output directory `dist` with Cloudflare Pages, Netlify, or Vercel. No server runtime is required. Hosting platform free-tier terms may vary.

For GitHub Pages under a repository subpath, build with `pnpm exec vite build --base=/YOUR-REPOSITORY/` after running `pnpm exec tsc`; update the favicon URL to be relative. Upload `dist/` with GitHub’s Pages artifact workflow. Set the Pages source to GitHub Actions. For a custom domain or root user site, the default base works.

## Design and accessibility

Responsive layouts, mobile navigation, semantic sections, a skip link, visible keyboard focus, native case-study disclosures, and reduced-motion support are included. Fonts load from Google Fonts with local fallbacks. No animation or icon library is required. The GitHub link remains unset until a real profile is supplied.

Source references: the supplied website brief and https://www.linkedin.com/in/steven-rodriguez-data-analyst (public preview and user screenshots), plus the supplied résumé. The résumé preview and downloads preserve the supplied document’s text, including its existing placeholder bullet.

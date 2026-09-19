# Kritika Srivastava — Portfolio

A software-engineering portfolio featuring SignalForge, ReEntry and production Android work at Microsoft. Dark-first, responsive and accessible, with a printable résumé and a small interactive terminal.

**Stack:** Next.js App Router, TypeScript, Tailwind CSS, Motion and Lucide React. Server components by default; no backend or external font requests.

## Development

Requires Node.js 20.9+ (Node.js 22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000. The résumé is at `/resume/`; use the browser Print command to save a PDF.

## Verification and build

```bash
npm run lint
npm run typecheck
npm run build
```

The production build generates `out/` with `/portfolio` as its base path. This directory is a static export, not a Node server; `next start` is not used.

## GitHub Pages

Live site: https://kritikaa-srivastavaa.github.io/portfolio/

In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**. The included workflow installs from the lockfile, lints, builds and deploys `out/` on pushes to `main` or `master`, or manual dispatch. No hosting subscription or secrets are required. Publishing still requires pushing these changes; this implementation does not do that automatically. Update `next.config.ts` and metadata if the repository path or domain changes.

Static export and base-path setup follow the [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports) and [basePath documentation](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath).

## Structure

- `app/` — page, metadata, global design system and printable résumé
- `components/` — mobile navigation, selective motion and terminal
- `lib/content.ts` — profile, projects, experience themes and skills
- `public/` — SVG favicon
- `.github/workflows/deploy.yml` — Pages build and deployment

Edit portfolio facts in `lib/content.ts` and narrative copy in `app/page.tsx`. Project visuals are native CSS/SVG illustrations; the ReEntry panel is labeled as a concept preview. Additional projects intentionally omit repository links because none were available in the original repository.

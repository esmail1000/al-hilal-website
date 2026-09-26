# Al-Hilal website

Bilingual (Arabic/English) Next.js 16 App Router site for Al-Hilal's building material products, company profile, product specifications, project references and quote preparation.

## Run locally

```bash
npm ci
npm run dev
npm run lint
npm run build
```

Visit `/ar` or `/en`; `/` redirects to Arabic. The product catalogue uses dimensions and specifications transcribed from pages 4–6 of the supplied company profile. Client and project relationships were confirmed by the owner. See [CONTENT_GAPS.md](CONTENT_GAPS.md) for information required before public launch.

## Configuration

The optional `NEXT_PUBLIC_SITE_URL` must be the approved public origin, such as `https://example.com`, with no trailing path. If absent, canonical links and organization URLs are omitted and robots disallow indexing. The site has no external database, email transport, or quote submission backend. The quotation form prepares an inquiry that the visitor can copy or share; it does not pretend to send it.

The supplied logo is under `public/brand/logo/`; the two GLB files are under `public/models/products/`. The meshopt decoder used by these models is self-hosted under `public/vendor/`. The re-supplied home artwork, product close-up and production footage are under `public/images/`; images and silent video copies are optimized for the website, with video playback deferred until needed. Projects remain text-only because project photographs were not supplied.

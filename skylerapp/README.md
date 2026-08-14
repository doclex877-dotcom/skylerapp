# Skyler — TikTok Video Downloader

Brand: pink/violet blob mascot on a dark, bold Gen-Z palette. No login, no app, paste a link and go.

**Pivoted from a YouTube Shorts downloader to TikTok** after YouTube's SABR streaming rollout
made reliable extraction an ongoing, unwinnable arms race for a free/DIY tool. TikTok has no
equivalent anti-bot streaming protocol — extraction is a much shallower, more stable problem.

## Stack
- Next.js 16 (App Router) + Tailwind v4
- `@tobyg74/tiktok-api-dl` for extraction — wraps three independent backends (TikTok's own API,
  plus SSSTik and MusicalDown mirrors as fallback), tried in order
- Self-hosted fonts via `@fontsource` (Fredoka + Plus Jakarta Sans)
- Deploys free on Vercel's Hobby tier

## Local dev
```bash
npm install
npm run dev
```

## How it works
- `POST /api/info` — takes `{ url }`, tries extraction backends v1 → v2 → v3 in order, returns
  title/thumbnail/available downloads (video with watermark removed, plus audio-only)
- `GET /api/download?url=...&kind=video|audio&title=...` — proxy-streams the file with a
  forced-download header. The `url` param is restricted to an allowlist of trusted CDN hosts
  (see `ALLOWED_DOWNLOAD_HOSTS` in `lib/tiktok.ts`) — this matters because the route would
  otherwise be an open proxy for arbitrary URLs (SSRF risk).

Extraction logic lives in `lib/tiktok.ts`. If downloads start failing, check whether
`@tobyg74/tiktok-api-dl` has a newer version first (`npm outdated @tobyg74/tiktok-api-dl`).

## Known limitation
This repo was built and build-verified in a sandboxed environment without network access to
tiktok.com or any of the mirror CDN domains, so **the extraction flow itself must be
smoke-tested live after deploy**, not just the build. Test with a few different TikTok links
(including at least one `vt.tiktok.com` short link) before considering this solved.

## AdSense
- `public/ads.txt` is pre-filled with your existing publisher ID
- `components/AdSlot.tsx` has placeholder slots sized so real ad units can drop in later
- Wait for a clean AdSense review before relying on this — see the legal note below

## Legal note
This is the same category of tool as SnapTik/SSSTik: not illegal to run, but against TikTok's
Terms of Service for the redistribution use case (personal-use downloading is much lower risk —
see `/guides/is-it-legal-to-download-tiktok-videos`). Expect occasional takedown notices and be
ready to rotate domains if it ever comes to that.

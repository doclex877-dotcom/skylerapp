import Tiktok from "@tobyg74/tiktok-api-dl";

// Domains we trust enough to proxy-fetch from. The download route only
// ever fetches a URL if its hostname matches one of these -- without
// this allowlist, the download route would be an open proxy for
// arbitrary URLs (SSRF risk), since the URL itself is passed as a
// query param.
const ALLOWED_DOWNLOAD_HOSTS = [
  "tiktokcdn.com",
  "tiktokcdn-us.com",
  "tiktokcdn-eu.com",
  "tiktokv.com",
  "tiktokv.us",
  "muscdn.com",
  "ibytedtos.com",
  "ibyteimg.com",
  "ssstik.io",
  "tikcdn.io",
  "musicaldown.com",
  "tikwm.com",
  "byteoversea.com",
];

export function isAllowedDownloadUrl(rawUrl: string): boolean {
  try {
    const { hostname } = new URL(rawUrl);
    return ALLOWED_DOWNLOAD_HOSTS.some(
      (host) => hostname === host || hostname.endsWith(`.${host}`)
    );
  } catch {
    return false;
  }
}

export function isTikTokUrl(rawUrl: string): boolean {
  try {
    const { hostname } = new URL(rawUrl.trim());
    const host = hostname.replace(/^www\./, "");
    return (
      host === "tiktok.com" ||
      host.endsWith(".tiktok.com") ||
      host === "vt.tiktok.com" ||
      host === "vm.tiktok.com"
    );
  } catch {
    return false;
  }
}

export interface DownloadOption {
  label: string;
  url: string;
  kind: "video" | "audio";
}

export interface TikTokInfo {
  title: string;
  author: string;
  thumbnail: string | null;
  durationSeconds: number;
  downloads: DownloadOption[];
}

// The library wraps three independent backends. If TikTok's own API
// (v1) gets rate-limited or changes shape, v2/v3 (community mirror
// sites) act as a fallback -- similar spirit to the client-fallback
// approach we used for YouTube, but each of these is a fully separate,
// independently-maintained extraction path rather than the same
// protocol under different disguises, so they don't all break at once.
const VERSIONS = ["v1", "v2", "v3"] as const;

export async function getTikTokInfo(url: string): Promise<TikTokInfo> {
  let lastError: unknown = null;

  for (const version of VERSIONS) {
    try {
      const res = await Tiktok.Downloader(url, { version });

      if (res.status !== "success" || !res.result) {
        lastError = new Error(res.message || `${version} returned no result`);
        continue;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const r = res.result as any;
      const downloads: DownloadOption[] = [];

      if (version === "v1") {
        const hd = r.videoHD as string | undefined;
        const sd = (r.videoSD || r.video?.playAddr?.[0]) as string | undefined;
        if (hd && isAllowedDownloadUrl(hd)) downloads.push({ label: "HD, no watermark", url: hd, kind: "video" });
        if (sd && sd !== hd && isAllowedDownloadUrl(sd))
          downloads.push({ label: "SD, no watermark", url: sd, kind: "video" });
        if (!downloads.length && r.direct && isAllowedDownloadUrl(r.direct)) {
          downloads.push({ label: "Video, no watermark", url: r.direct, kind: "video" });
        }
        const audio = r.music?.playUrl?.[0] as string | undefined;
        if (audio && isAllowedDownloadUrl(audio)) downloads.push({ label: "Audio (MP3)", url: audio, kind: "audio" });
      } else if (version === "v2") {
        const vid = (r.video?.playAddr?.[0] || r.direct) as string | undefined;
        if (vid && isAllowedDownloadUrl(vid)) downloads.push({ label: "Video, no watermark", url: vid, kind: "video" });
        const audio = r.music?.playUrl?.[0] as string | undefined;
        if (audio && isAllowedDownloadUrl(audio)) downloads.push({ label: "Audio (MP3)", url: audio, kind: "audio" });
      } else if (version === "v3") {
        const hd = r.videoHD as string | undefined;
        const sd = r.videoSD as string | undefined;
        if (hd && isAllowedDownloadUrl(hd)) downloads.push({ label: "HD, no watermark", url: hd, kind: "video" });
        if (sd && sd !== hd && isAllowedDownloadUrl(sd))
          downloads.push({ label: "SD, no watermark", url: sd, kind: "video" });
        if (r.music && typeof r.music === "string" && isAllowedDownloadUrl(r.music)) {
          downloads.push({ label: "Audio (MP3)", url: r.music, kind: "audio" });
        }
      }

      if (!downloads.length) {
        lastError = new Error(`${version} returned no usable download URLs`);
        continue;
      }

      return {
        title: r.desc || "TikTok video",
        author: r.author?.nickname || "Unknown",
        thumbnail:
          r.video?.cover?.[0] || r.video?.originCover?.[0] || r.video?.dynamicCover?.[0] || null,
        durationSeconds: r.video?.duration || 0,
        downloads,
      };
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("NO_RESULT");
}

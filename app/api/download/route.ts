import { NextRequest, NextResponse } from "next/server";
import { isAllowedDownloadUrl } from "@/lib/tiktok";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  const targetUrl = req.nextUrl.searchParams.get("url");
  const kind = req.nextUrl.searchParams.get("kind") === "audio" ? "audio" : "video";
  const title = req.nextUrl.searchParams.get("title") ?? "skyler-tiktok";

  if (!targetUrl) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  if (!isAllowedDownloadUrl(targetUrl)) {
    return NextResponse.json({ error: "That download source isn't recognized." }, { status: 400 });
  }

  try {
    const upstream = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
        Accept: "*/*",
      },
      redirect: "follow",
    });

    if (!upstream.ok || !upstream.body) {
      throw new Error(`Upstream responded ${upstream.status}`);
    }

    const safeTitle =
      title
        .replace(/[^a-z0-9-_ ]/gi, "")
        .trim()
        .slice(0, 60) || "skyler-tiktok";

    const ext = kind === "audio" ? "mp3" : "mp4";
    const mimeType =
      upstream.headers.get("content-type") ?? (kind === "audio" ? "audio/mpeg" : "video/mp4");

    return new NextResponse(upstream.body, {
      headers: {
        "Content-Type": mimeType,
        "Content-Disposition": `attachment; filename="${safeTitle}.${ext}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("download route failed:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "Download failed. The link may have expired — try fetching it again." },
      { status: 500 }
    );
  }
}

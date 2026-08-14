import { NextRequest, NextResponse } from "next/server";
import { isTikTokUrl, getTikTokInfo } from "@/lib/tiktok";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Paste a TikTok link first." }, { status: 400 });
    }

    if (!isTikTokUrl(url.trim())) {
      return NextResponse.json(
        { error: "That doesn't look like a valid TikTok link." },
        { status: 400 }
      );
    }

    const info = await getTikTokInfo(url.trim());

    if (!info.downloads.length) {
      return NextResponse.json(
        { error: "Couldn't find a downloadable version of that video." },
        { status: 404 }
      );
    }

    return NextResponse.json(info);
  } catch (err) {
    console.error(
      "info route failed:",
      err instanceof Error ? { name: err.name, message: err.message, stack: err.stack } : err
    );
    return NextResponse.json(
      { error: "Couldn't process that link. It may be private, deleted, or region-locked." },
      { status: 500 }
    );
  }
}

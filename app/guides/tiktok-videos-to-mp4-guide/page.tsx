import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import { guides } from "@/lib/guides";

const meta = guides.find((g) => g.slug === "tiktok-videos-to-mp4-guide")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <GuideLayout title={meta.title} dek={meta.dek}>
      <p>
        Every TikTok downloader, including this one, hands back an MP4. Understanding what&apos;s
        actually happening behind that download button explains both why it works and what to
        expect from the result.
      </p>

      <h2>Where the watermark actually comes from</h2>
      <p>
        TikTok generates a video file, then composites its logo and the creator&apos;s username
        onto a copy specifically for in-app sharing and the app&apos;s own save feature. That
        watermarked version isn&apos;t the only file that exists on TikTok&apos;s servers &mdash;
        their internal systems also reference a clean, pre-watermark render used for things like
        their web player and internal previews. A downloader&apos;s job is to ask for that
        specific version instead of the one meant for sharing.
      </p>

      <h2>Why MP4 specifically</h2>
      <p>
        MP4 is a container format &mdash; it bundles a video track and audio track together, the
        same way a folder holds files. TikTok serves its videos in MP4 (H.264 video, AAC audio)
        by default because it&apos;s universally compatible: it plays natively on iPhone, Android,
        Windows, and Mac without needing a separate conversion step. There&apos;s no re-encoding
        happening when you download &mdash; you&apos;re getting a copy of the same file format
        TikTok&apos;s servers already generated.
      </p>

      <h2>HD vs SD options</h2>
      <p>
        When a downloader offers more than one quality, it&apos;s usually surfacing two different
        versions TikTok itself generated at upload time. HD is worth taking when it&apos;s
        offered; SD exists mainly as a fallback for when the HD version isn&apos;t available for
        a particular video, which happens occasionally with older or lower-engagement posts.
      </p>

      <h2>MP4 vs MP3</h2>
      <p>
        If you only want the sound &mdash; a trending audio clip, for instance &mdash; that&apos;s
        a separate extraction that keeps just the audio track and discards the video entirely,
        saved as MP3. It&apos;s a different file, not a smaller version of the same MP4.
      </p>
    </GuideLayout>
  );
}

import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import { guides } from "@/lib/guides";

const meta = guides.find((g) => g.slug === "how-to-download-tiktok-videos-on-android")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <GuideLayout title={meta.title} dek={meta.dek}>
      <p>
        Android&apos;s file handling makes this a little more forgiving than iOS, and TikTok&apos;s
        native save option works fine here too &mdash; it&apos;s just watermarked. Here are the
        three approaches worth knowing, fastest first.
      </p>

      <h2>1. Browser method (fastest, watermark-free)</h2>
      <ol>
        <li>In the TikTok app, tap Share on the video and hit Copy Link.</li>
        <li>Open Chrome and go to skylerai.xyz.</li>
        <li>Paste the link, tap Grab it, then tap a &ldquo;no watermark&rdquo; download option.</li>
        <li>Chrome saves it to your Downloads folder with a notification when it&apos;s done.</li>
      </ol>
      <p>
        From Downloads, a long-press and &ldquo;Move to&rdquo; will drop it into your Gallery
        alongside your camera photos.
      </p>

      <h2>2. TikTok&apos;s built-in save (watermarked)</h2>
      <p>
        If the watermark genuinely doesn&apos;t matter for what you&apos;re doing &mdash; saving
        for personal rewatching, say &mdash; the native Share &rarr; Save Video option in the app
        is the fastest possible path, no browser required.
      </p>

      <h2>3. File manager cleanup</h2>
      <p>
        Whichever method you use, it&apos;s worth checking your file manager&apos;s Downloads
        folder occasionally. Android doesn&apos;t auto-sort video downloads the way it does
        camera photos, so they pile up unsorted until you move them.
      </p>

      <h2>Why quality can vary</h2>
      <p>
        The resolution you get back reflects what the original upload quality was. Most TikToks
        download in the same quality you&apos;d see in the app, though very old or
        low-engagement videos occasionally cap out lower.
      </p>
    </GuideLayout>
  );
}

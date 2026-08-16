import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import { guides } from "@/lib/guides";

const meta = guides.find((g) => g.slug === "how-to-save-tiktok-videos-on-iphone")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <GuideLayout title={meta.title} dek={meta.dek}>
      <p>
        TikTok does have a native &ldquo;Save video&rdquo; option in its share sheet, so this one
        isn&apos;t about finding a missing feature the way YouTube is. The catch is what that
        native save actually gives you: a copy with TikTok&apos;s logo and the creator&apos;s
        username burned into the corner of the frame. Fine for reposting back to TikTok, less
        fine for anywhere else.
      </p>

      <h2>Why the watermark matters</h2>
      <p>
        If you&apos;re saving a clip for yourself, sending it to a friend outside the app, or
        editing it into something else, that stamped-on watermark is baked permanently into the
        video &mdash; there&apos;s no cropping it out without also cutting off part of the frame.
        A clean extraction skips that step entirely by pulling the version TikTok&apos;s own
        servers generate before the watermark gets composited on for in-app sharing.
      </p>

      <h2>The actual steps</h2>
      <ol>
        <li>
          Open the video in the TikTok app, tap the <strong>Share</strong> arrow, and choose{" "}
          <strong>Copy Link</strong>.
        </li>
        <li>
          Open Safari and go to <strong>skylerai.xyz</strong>.
        </li>
        <li>Paste the link and tap Grab it.</li>
        <li>
          Once the preview loads, you&apos;ll see one or more download options labeled
          &ldquo;no watermark.&rdquo; Tap one, and iOS will ask where to save &mdash; choose{" "}
          <strong>Save to Files</strong> or let it drop into Photos if you&apos;ve allowed that.
        </li>
      </ol>

      <h2>If the video opens instead of downloading</h2>
      <p>
        Safari occasionally tries to play an MP4 inline instead of downloading it. If that
        happens, press and hold on the video once it&apos;s playing and choose{" "}
        <strong>Download Linked File</strong>. It&apos;ll land in your Files app under Downloads,
        and from there a long-press and Share &rarr; Save Video moves it into Photos.
      </p>

      <h2>A note on file size</h2>
      <p>
        TikToks are short and compressed for mobile, so most downloads land well under 20MB
        &mdash; you can save a lot of them before it makes a dent in your storage.
      </p>
    </GuideLayout>
  );
}

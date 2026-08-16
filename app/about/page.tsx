import type { Metadata } from "next";
import StaticPageLayout from "@/components/StaticPageLayout";

export const metadata: Metadata = {
  title: "About — Skyler",
  description: "What Skyler is, who built it, and why it exists.",
};

export default function AboutPage() {
  return (
    <StaticPageLayout title="About Skyler">
      <p>
        Skyler is a small, free tool for one job: paste a TikTok link, get back a clean MP4, no
        watermark. No account, no app install, no upsells.
      </p>

      <h2>Why we built it</h2>
      <p>
        TikTok&apos;s own save button works fine, but it stamps its logo and the creator&apos;s
        username permanently onto the video. That&apos;s reasonable for TikTok&apos;s own
        purposes, but it leaves a gap for the very ordinary case of wanting a clean copy of
        something you&apos;ve already watched — a recipe, a workout clip, a joke you want to
        show a friend later without the branding. Skyler fills that specific gap.
      </p>

      <h2>How it works, briefly</h2>
      <p>
        When you paste a link, Skyler asks TikTok&apos;s own servers for the version of the video
        made before the watermark gets added, and hands it back to you as a direct download.
        There&apos;s no re-encoding and nothing stored on our end after your download finishes.
      </p>

      <h2>Who&apos;s behind it</h2>
      <p>
        Skyler is built and maintained independently, not affiliated with TikTok, ByteDance, or
        any of their subsidiaries. It&apos;s one of several small web tools we run — the kind
        of project that exists because it was useful to build, and we figured other people would
        find it useful too.
      </p>

      <p>
        Questions, bug reports, or takedown requests? Head to the{" "}
        <a href="/contact">contact page</a>.
      </p>
    </StaticPageLayout>
  );
}

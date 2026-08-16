import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import { guides } from "@/lib/guides";

const meta = guides.find((g) => g.slug === "is-it-legal-to-download-tiktok-videos")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <GuideLayout title={meta.title} dek={meta.dek}>
      <p>
        This deserves a straight answer, not a vague &ldquo;consult a lawyer&rdquo; shrug. Two
        separate things are at play here: TikTok&apos;s Terms of Service, and copyright law.
        They&apos;re not the same, and mixing them up is where most confusion comes from.
      </p>

      <h2>TikTok&apos;s Terms of Service</h2>
      <p>
        TikTok&apos;s terms don&apos;t prohibit saving a video for personal use — in fact,
        TikTok itself has a built-in save button. What their terms do restrict is stripping
        attribution, watermarks, or branding for redistribution, and commercial use of
        creators&apos; content without permission. Using a third-party tool to get a
        watermark-free copy for private, personal use sits in a much lower-risk zone than the
        native save-and-repost pattern the terms are actually aimed at.
      </p>

      <h2>Copyright law</h2>
      <p>
        Separately, the video itself is copyrighted the moment it&apos;s created, owned by
        whoever made it. Copyright law generally cares far more about what you <em>do</em> with a
        copy than the act of making one. Keeping a personal copy of something you have permission
        to view, purely for your own private use, sits in a very different place than
        re-uploading it, selling it, or passing someone else&apos;s work off as your own.
      </p>
      <p>
        Many countries recognize some form of &ldquo;fair use&rdquo; or &ldquo;fair
        dealing&rdquo; exception that can cover commentary, criticism, or personal archiving,
        though the exact scope varies by country and by case. We&apos;re not lawyers and this
        isn&apos;t legal advice for your specific situation &mdash; if it matters for something
        high-stakes, that&apos;s worth a real conversation with someone qualified.
      </p>

      <h2>The practical line most people draw</h2>
      <ul>
        <li>
          <strong>Generally low-risk:</strong> saving a TikTok for yourself, to rewatch offline,
          or to keep before it gets taken down.
        </li>
        <li>
          <strong>Clearly risky:</strong> re-uploading someone else&apos;s video to another
          platform without permission or credit, stripping their branding and passing it off as
          your own content, or using it commercially.
        </li>
        <li>
          <strong>Your own content:</strong> downloading your own TikToks watermark-free is
          unambiguously fine — it&apos;s your video, and many creators do this specifically to
          repost clean cuts elsewhere.
        </li>
      </ul>

      <h2>Bottom line</h2>
      <p>
        Downloading for personal use or for reposting your own content is what the vast majority
        of people use tools like this for, and it&apos;s the lowest-risk end of the spectrum. The
        moment a downloaded video gets reposted as someone else&apos;s original work or used
        commercially without permission, that&apos;s where real exposure starts.
      </p>
    </GuideLayout>
  );
}

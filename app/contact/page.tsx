import type { Metadata } from "next";
import StaticPageLayout from "@/components/StaticPageLayout";

export const metadata: Metadata = {
  title: "Contact \u2014 Skyler",
  description: "Get in touch about bugs, takedown requests, or anything else.",
};

export default function ContactPage() {
  return (
    <StaticPageLayout title="Contact">
      <p>
        For bug reports, takedown requests, copyright concerns, or anything else, reach out at:
      </p>

      <p>
        <a href="mailto:hello@skylerai.xyz" className="text-lime font-medium text-lg no-underline">
          hello@skylerai.xyz
        </a>
      </p>

      <h2>Copyright / takedown requests</h2>
      <p>
        Skyler doesn&apos;t host or store any video files \u2014 it fetches directly from TikTok
        at the moment you request a download and doesn&apos;t keep a copy afterward. If
        you&apos;re a rights holder with a concern about a specific video, the fastest path is
        usually TikTok&apos;s own copyright tools, since that&apos;s where the actual video is
        hosted. That said, if you believe this site itself needs to change something, email us
        and we&apos;ll respond promptly.
      </p>

      <h2>Response time</h2>
      <p>We aim to reply within a few business days.</p>
    </StaticPageLayout>
  );
}

import type { Metadata } from "next";
import StaticPageLayout from "@/components/StaticPageLayout";

export const metadata: Metadata = {
  title: "Terms of Use \u2014 Skyler",
  description: "The rules for using Skyler.",
};

export default function TermsPage() {
  return (
    <StaticPageLayout title="Terms of Use" updated="August 2026">
      <p>
        By using skylerai.xyz (&ldquo;Skyler&rdquo;), you agree to the terms below. If you
        don&apos;t agree, please don&apos;t use the site.
      </p>

      <h2>What Skyler is</h2>
      <p>
        Skyler is a free tool that lets you fetch a downloadable, watermark-free copy of a public
        TikTok video by pasting its link. It is provided for personal, non-commercial use.
      </p>

      <h2>No affiliation</h2>
      <p>
        Skyler is not affiliated with, endorsed by, or connected to TikTok, ByteDance Ltd., or any
        of their subsidiaries. &ldquo;TikTok&rdquo; is a trademark of ByteDance Ltd., referenced
        here only to describe what this tool does.
      </p>

      <h2>Your responsibility</h2>
      <p>
        You&apos;re responsible for how you use anything you download through Skyler. That
        includes making sure you have the right to save and use a given video \u2014 generally
        fine for personal, private use; a problem if you re-upload, redistribute, or monetize
        someone else&apos;s work without their permission. See our{" "}
        <a href="/guides/is-it-legal-to-download-tiktok-videos">
          guide on the legal side of this
        </a>{" "}
        for more detail. Skyler does not review or moderate what videos get downloaded and takes
        no responsibility for how a download is subsequently used.
      </p>

      <h2>Prohibited use</h2>
      <p>You agree not to use Skyler to:</p>
      <ul>
        <li>Download content you don&apos;t have the right to save or reuse</li>
        <li>Automate, scrape, or bulk-download at a scale beyond normal personal use</li>
        <li>Attempt to disrupt, overload, or reverse-engineer the service</li>
        <li>Use the tool for any unlawful purpose</li>
      </ul>

      <h2>No warranty</h2>
      <p>
        Skyler is provided &ldquo;as is,&rdquo; with no guarantee it will always work, be
        available, or return the quality you expect \u2014 TikTok can change how their platform
        works at any time, which may break functionality here without notice.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, Skyler and its operators aren&apos;t liable for any
        damages arising from your use of the site, including lost data, lost time, or any
        consequences of content you download through it.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. Continued use of Skyler after a change means
        you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Reach out at <a href="mailto:hello@skylerai.xyz">hello@skylerai.xyz</a>.
      </p>
    </StaticPageLayout>
  );
}

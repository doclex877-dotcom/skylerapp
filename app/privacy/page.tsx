import type { Metadata } from "next";
import StaticPageLayout from "@/components/StaticPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Skyler",
  description: "How Skyler handles your data.",
};

export default function PrivacyPage() {
  return (
    <StaticPageLayout title="Privacy Policy" updated="August 2026">
      <p>
        This policy explains what happens to your data when you use skylerai.xyz (&ldquo;Skyler,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;). We&apos;ve tried to write it in plain language rather
        than dense legal boilerplate.
      </p>

      <h2>What we don&apos;t collect</h2>
      <p>
        Skyler doesn&apos;t require an account, so we don&apos;t collect your name, email, or any
        login credentials. We don&apos;t ask for your TikTok username or password, and we never
        touch your TikTok account in any way — we only read publicly available video data,
        the same as anyone opening the video in a browser.
      </p>
      <p>
        We don&apos;t store the links you paste or the videos you download after your session
        ends. There&apos;s no download history saved anywhere on our end.
      </p>

      <h2>What gets processed to make the site work</h2>
      <ul>
        <li>
          <strong>The link you paste</strong> is sent to our server so we can fetch that
          video&apos;s information from TikTok. It&apos;s used for that single request and not
          retained afterward.
        </li>
        <li>
          <strong>Standard server logs</strong> (IP address, browser type, timestamp) are
          generated automatically by our hosting provider, Vercel, as part of normal web traffic
          handling and basic security monitoring. These are not used to build a profile of you.
        </li>
      </ul>

      <h2>Advertising</h2>
      <p>
        Skyler shows ads served by Google AdSense to keep the tool free. Google and its
        advertising partners may use cookies or similar technology to show ads based on your
        visits to this and other sites. You can learn more about how Google uses this data and
        manage your ad personalization settings at{" "}
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
          Google&apos;s Ads Policy page
        </a>
        .
      </p>

      <h2>Cookies</h2>
      <p>
        Beyond what AdSense sets for ad delivery, Skyler itself doesn&apos;t use cookies to track
        you across visits. Your browser may still cache assets like images and fonts locally for
        performance — that&apos;s standard browser behavior, not tracking.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        Skyler is not directed at children under 13, and we don&apos;t knowingly collect personal
        information from children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, we&apos;ll update the date at the top of this page. Continued use
        of the site after a change means you accept the updated policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach out at{" "}
        <a href="mailto:hello@skylerai.xyz">hello@skylerai.xyz</a>.
      </p>
    </StaticPageLayout>
  );
}

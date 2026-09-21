import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import { stories } from "@/lib/stories";

const meta = stories.find((s) => s.slug === "youtube-story")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <StoryLayout
      meta={meta}
      lessons={[
        "The original idea can be completely wrong and it still doesn't matter, if the underlying tool you built is genuinely useful for something else.",
        "They launched something rough (a dating site nobody wanted) fast, watched what happened, and pivoted within about two months instead of grinding on a dead idea for years.",
        "Sometimes the biggest platform in the world starts with the lowest-stakes possible test video — an 18-second clip of a guy at the zoo.",
      ]}
    >
      <p>
        YouTube&apos;s logo and trademark were registered on Valentine&apos;s Day, 2005. That
        wasn&apos;t a coincidence — the original idea was a video dating site.
      </p>

      <h2>Three PayPal guys with an idea that didn&apos;t work</h2>
      <p>
        Chad Hurley, Steve Chen, and Jawed Karim met working at PayPal, and left after eBay&apos;s
        acquisition made them comfortable enough to take a swing at something new. Operating out
        of Hurley&apos;s garage, they built a site where people could upload video introductions
        of themselves to find dates. Reportedly, they even offered a cash reward on Craigslist to
        anyone willing to upload a dating video, just to get some content on the site.
      </p>
      <p>
        Almost nobody bit. The dating angle flopped within a couple of months.
      </p>

      <h2>The pivot: forget the dating part, keep the video part</h2>
      <p>
        Here&apos;s the part worth sitting with: the founders didn&apos;t have a good dating
        product. What they had was a genuinely good tool for uploading and sharing video easily,
        at a moment (2005) when broadband was just barely becoming common enough to make that
        practical. So they dropped the dating framing entirely and repositioned the same
        underlying tool as a place to upload and share any video at all.
      </p>
      <p>
        On April 23, 2005, Karim uploaded the platform&apos;s first video — himself, at the
        San Diego Zoo, talking about elephants for 18 seconds. It&apos;s still on YouTube today,
        with hundreds of millions of views, which is a fairly absurd legacy for what was
        basically a test upload.
      </p>

      <h2>From garage to $1.65 billion in about 20 months</h2>
      <p>
        The public beta launched in May 2005. Growth was fast enough, and expensive enough
        (bandwidth for video is not cheap), that by November 2006 — barely a year and a half
        after that zoo video — Google bought the company for $1.65 billion in stock. At the
        time it was Google&apos;s largest acquisition ever.
      </p>
      <p>
        Every video you download through a tool like this one exists because three guys built a
        dating site nobody wanted, and had the sense to notice what was actually working
        underneath it.
      </p>
    </StoryLayout>
  );
}

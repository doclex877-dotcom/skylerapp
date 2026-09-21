import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import { stories } from "@/lib/stories";

const meta = stories.find((s) => s.slug === "snapchat-story")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <StoryLayout
      meta={meta}
      lessons={[
        "Get co-founder agreements in writing, early, before anything is worth fighting over. This one dispute reportedly cost well over $100 million to resolve, in large part because nothing was written down at the start.",
        "Turning down a massive buyout offer (Snapchat said no to roughly $3 billion from Facebook) takes real conviction in where you think the thing is headed — and it doesn't always pay off, but here it did.",
        "A disappearing-photo joke between friends, taken seriously by just one of them, became a public company. Ideas are genuinely cheap; the follow-through is what's rare.",
      ]}
    >
      <p>
        This one comes with a warning label: unlike the others on this list, parts of
        Snapchat&apos;s founding story were genuinely disputed in court, not just remembered
        differently by different people over time. We&apos;re sticking to what both sides agree
        happened.
      </p>

      <h2>Three fraternity brothers at Stanford</h2>
      <p>
        Evan Spiegel, Bobby Murphy, and Reggie Brown were Stanford students and fraternity
        brothers. In spring 2011, the idea of an app for sending photos that automatically
        disappeared came up among the group. That summer, the three of them worked out of
        Spiegel&apos;s father&apos;s house near Santa Monica, building an early version they
        called Picaboo — Spiegel as CEO, Murphy writing the code, Brown handling marketing.
      </p>

      <h2>Where the story splits</h2>
      <p>
        What happened next depends on who&apos;s telling it. Brown later said he came up with the
        core idea and was pushed out once the app started gaining traction. Spiegel and Murphy&apos;s
        side disputed how much of a &ldquo;founder&rdquo; Brown really was, though Spiegel had, at
        earlier points, credited Brown with the idea in emails to press. In 2013, Brown filed a
        lawsuit claiming a one-third ownership stake in what was, by then, a company valued in
        the billions.
      </p>
      <p>
        The case dragged on for over a year, through funding rounds and Snapchat turning down a
        reported $3 billion acquisition offer from Facebook in the middle of it. It was eventually
        settled on confidential terms, though it was widely reported at the time to be worth
        somewhere around $157.5 million.
      </p>

      <h2>What actually survived all of that</h2>
      <p>
        Whatever really happened in that Santa Monica house in 2011, the product itself kept
        growing through the entire dispute — through a lawsuit, through a massive rejected
        buyout, through a very public and very messy few years. Snapchat went public in 2017 at a
        $31 billion valuation. The disappearing-photo idea, whoever it truly belonged to, turned
        out to be worth fighting over.
      </p>
    </StoryLayout>
  );
}

import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import StoryAside from "@/components/StoryAside";
import StorySources from "@/components/StorySources";
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
      image="/stories/snapchat-story.svg"
      lessons={[
        "Get co-founder agreements in writing, early, before anything is worth fighting over. This dispute reportedly cost well over $100 million to resolve, in large part because nothing was written down at the start.",
        "Turning down a massive buyout offer (Snapchat said no to roughly $3 billion from Facebook) takes real conviction in where you think the thing is headed — and it doesn't always pay off, but here it did.",
        "A disappearing-photo joke between friends, taken seriously by just one of them, became a public company. Ideas are genuinely cheap; the follow-through is what's rare.",
      ]}
    >
      <p>
        This one comes with a warning label, upfront: unlike the others on this list, parts of
        Snapchat's founding story were genuinely disputed in an actual courtroom, not just
        remembered differently by different people years later. We're sticking to what both sides
        agree actually happened.
      </p>

      <h2>Three fraternity brothers at Stanford</h2>
      <p>
        Evan Spiegel, Bobby Murphy, and Reggie Brown were Stanford students and fraternity
        brothers. In spring 2011, the idea of an app for sending photos that automatically
        disappeared came up among the group. That summer, the three of them worked out of
        Spiegel's father's house near Santa Monica, building an early version they called Picaboo
        — Spiegel as CEO, Murphy writing the code, Brown handling marketing.
      </p>

      <StoryAside>
        "Picaboo." As in peek-a-boo. That was the actual working name before somebody, mercifully,
        changed it. Every billion-dollar company has an embarrassing early name it would rather
        you forget, and this is a genuinely strong contender for worst one.
      </StoryAside>

      <h2>Where the story splits</h2>
      <p>
        What happened next depends entirely on who's telling it. Brown later said he came up with
        the core idea and was pushed out once the app started gaining real traction. Spiegel and
        Murphy's side disputed how much of a "founder" Brown really was — though Spiegel had, at
        earlier points, credited Brown with the idea in emails to the press. In 2013, Brown filed
        a lawsuit claiming a one-third ownership stake in what was, by then, a company valued in
        the billions.
      </p>
      <p>
        The case dragged on for over a year, through funding rounds and Snapchat turning down a
        reported $3 billion acquisition offer from Facebook right in the middle of it all. It was
        eventually settled on confidential terms, though it was widely reported at the time to be
        worth somewhere around $157.5 million.
      </p>

      <StoryAside>
        how could a dispute between three former friends end up costing over a hundred and
        fifty million dollars to settle? Because nobody wrote anything down when the company
        was worth nothing, and by the time it mattered, everyone's memory of who-said-what-to-whom
        conveniently supported their own side. Write things down. Seriously.
      </StoryAside>

      <h2>What actually survived all of that</h2>
      <p>
        Whatever really happened in that Santa Monica house in 2011, the product itself kept
        growing straight through the entire dispute — through a lawsuit, through a massive
        rejected buyout, through a few very public, very messy years. Snapchat went public in
        2017 at a $31 billion valuation. The disappearing-photo idea, whoever it truly belonged
        to, turned out to be worth fighting over.
      </p>

      <StorySources
        sources={[
          { label: "Evan Spiegel — Biography.com", url: "https://www.biography.com/business-leaders/evan-spiegel" },
          { label: "Timeline of Snapchat — Wikipedia", url: "https://en.wikipedia.org/wiki/Timeline_of_Snapchat" },
          { label: "The Snapchat Lawsuit — TechCrunch", url: "https://techcrunch.com/2013/03/07/snapchat-lawsui/." },
          { label: "Snapchat Settles Lawsuit With Reggie Brown — TechCrunch", url: "https://techcrunch.com/?p=1055949" },
        ]}
      />
    </StoryLayout>
  );
}

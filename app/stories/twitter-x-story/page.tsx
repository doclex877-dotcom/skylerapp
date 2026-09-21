import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import { stories } from "@/lib/stories";

const meta = stories.find((s) => s.slug === "twitter-x-story")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <StoryLayout
      meta={meta}
      lessons={[
        "When your main product gets wiped out by a bigger competitor (Odeo's podcasting tool basically died the day iTunes added podcasts), the side experiments your team was already tinkering with can become the real business.",
        "A tight constraint can be the whole idea. Twitter's 140-character limit wasn't a compromise — it came from SMS's character limit, and that constraint is what made it different from everything else.",
        "Being written out of the story is a real risk when there's no clear agreement on roles from day one. Noah Glass helped build the thing and barely got mentioned publicly for years.",
      ]}
    >
      <p>
        Twitter almost didn&apos;t happen, because the company that built it was actually trying
        to build something else entirely: a podcasting platform that Apple casually destroyed a
        few months later by adding podcasts directly into iTunes.
      </p>

      <h2>A podcast company with a dying product</h2>
      <p>
        Noah Glass started a company called Odeo in 2005, with early investment from Evan
        Williams, who&apos;d recently sold Blogger to Google and had money to spend. Williams
        brought in his former Google colleague Biz Stone, and the team hired a developer named
        Jack Dorsey. Odeo built a podcasting platform — right up until Apple launched
        podcast support built into iTunes and made a standalone podcasting startup mostly
        pointless overnight.
      </p>

      <h2>The hackathon idea that wasn&apos;t supposed to be the main event</h2>
      <p>
        With Odeo&apos;s main product effectively dead, Williams asked the team to pitch new
        ideas. Dorsey had one: a way to send a short update about what you were doing right now,
        over SMS, to a group of people at once. Glass liked it enough to champion it internally
        and reportedly spent a day in the dictionary looking for the right name, landing on
        &ldquo;twitter&rdquo; — defined as a short burst of inconsequential information, or
        the chirp of a bird. Close enough.
      </p>
      <p>
        On March 21, 2006, Dorsey sent the first message on the platform: &ldquo;just setting up
        my twttr.&rdquo; The 140-character limit wasn&apos;t an aesthetic choice — it came
        directly from SMS&apos;s 160-character limit, with 20 characters reserved for a username.
      </p>

      <h2>The founder who got left out of the story</h2>
      <p>
        Twitter grew slowly at first, then exploded after a strong showing at the SXSW conference
        in 2007. Somewhere in that stretch, Williams pushed Glass out of the company entirely, and
        for years the popular telling of Twitter&apos;s founding barely mentioned him — Dorsey
        was usually credited as the sole inventor. Glass stayed mostly silent about his role until
        speaking publicly about it years later.
      </p>
      <p>
        Twitter (now X, after Elon Musk&apos;s 2022 acquisition and rebrand) grew out of a company
        that was, by most measures, failing at the thing it actually set out to build. The
        internal side-project born from that failure is the one that changed how the internet
        talks to itself.
      </p>
    </StoryLayout>
  );
}

import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import StoryAside from "@/components/StoryAside";
import StorySources from "@/components/StorySources";
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
      image="/stories/twitter-x-story.svg"
      lessons={[
        "When your main product gets wiped out by a bigger competitor (Odeo's podcasting tool basically died the day iTunes added podcasts), the side experiments your team was already tinkering with can become the real business.",
        "A tight constraint can be the whole idea. Twitter's 140-character limit wasn't a compromise — it came from SMS's character limit, and that constraint is what made it different from everything else.",
        "Being written out of the story is a real risk when there's no clear agreement on roles from day one. Noah Glass helped build the thing and barely got mentioned publicly for years.",
      ]}
    >
      <p>
        Twitter almost didn't happen, because the company that built it was actually trying to
        build something else entirely: a podcasting platform that Apple casually destroyed a few
        months later by adding podcasts directly into iTunes.
      </p>

      <StoryAside>
        one of the biggest platforms on the internet exists because Apple accidentally killed a
        podcast app. Nobody planned this. There was no grand strategy meeting where someone said
        "let's invent short-form status updates." It was a company watching its actual product
        die in real time and scrambling for literally anything else to build.
      </StoryAside>

      <h2>A podcast company with a dying product</h2>
      <p>
        Noah Glass started a company called Odeo in 2005, with early investment from Evan
        Williams, who'd recently sold Blogger to Google and had money to spend. Williams brought
        in his former Google colleague Biz Stone, and the team hired a developer named Jack
        Dorsey. Odeo built a podcasting platform — right up until Apple launched podcast support
        built directly into iTunes and made a standalone podcasting startup mostly pointless
        overnight.
      </p>

      <h2>The hackathon idea that wasn't supposed to be the main event</h2>
      <p>
        With Odeo's main product effectively dead, Williams asked the team to pitch new ideas.
        Dorsey had one: a way to send a short update about what you were doing right now, over
        SMS, to a group of people at once. Glass liked it enough to champion it internally, and
        reportedly spent an entire day in the dictionary looking for the right name, landing on
        "twitter" — defined as a short burst of inconsequential information, or the chirp of a
        bird. Close enough.
      </p>
      <p>
        On March 21, 2006, Dorsey sent the first message on the platform: "just setting up my
        twttr." The 140-character limit was not an aesthetic choice — it came directly from SMS's
        160-character limit, with 20 characters reserved for a username.
      </p>

      <StoryAside>
        what does "a short burst of inconsequential information" even mean as a company
        mission statement? And yet — that is genuinely a more honest description of most of the
        internet's output than any actual mission statement any tech company has ever written.
        Respect for the accuracy.
      </StoryAside>

      <h2>The founder who got left out of the story</h2>
      <p>
        Twitter grew slowly at first, then exploded after a strong showing at the SXSW conference
        in 2007. Somewhere in that stretch, Williams pushed Glass out of the company entirely, and
        for years the popular telling of Twitter's founding barely mentioned him — Dorsey was
        usually credited as the sole inventor. Glass stayed mostly quiet about his role until
        speaking publicly about it years later.
      </p>
      <p>
        Twitter — now X, after Elon Musk's 2022 acquisition and rebrand — grew out of a company
        that was, by most measures, actively failing at the thing it set out to build. The
        internal side-project born from that failure is the one that changed how the internet
        talks to itself.
      </p>

      <StorySources
        sources={[
          { label: "History of Twitter — Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_Twitter" },
          { label: "Twitter, Inc. — Wikipedia", url: "https://en.wikipedia.org/wiki/Twitter,_Inc." },
          { label: "The Class Of 2006: Twitter — Zamzar Blog", url: "https://blog.zamzar.com/2019/06/19/the-class-of-2006-twitter/" },
        ]}
      />
    </StoryLayout>
  );
}

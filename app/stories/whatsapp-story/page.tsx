import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import StoryAside from "@/components/StoryAside";
import StorySources from "@/components/StorySources";
import { stories } from "@/lib/stories";

const meta = stories.find((s) => s.slug === "whatsapp-story")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <StoryLayout
      meta={meta}
      image="/stories/whatsapp-story.svg"
      lessons={[
        "Getting rejected from the \"obvious\" path (a job at Facebook) is what freed them up to build the thing Facebook eventually needed to buy.",
        "They refused to compromise on the one rule that seemed like bad business — no ads — and that discipline is exactly what made the product good enough to be worth $19 billion.",
        "The full-circle ending wasn't luck. It was years of staying stubborn about what they wouldn't build, even when it would've been easier to give in.",
      ]}
    >
      <p>
        This one has the best plot twist of the bunch. Two guys applied for jobs at Facebook.
        Facebook said no. A few years later, Facebook paid $19 billion for the company those two
        guys built instead.
      </p>

      <StoryAside>
        how do you get rejected by a company and then somehow end up richer than most of the
        people who work there? You build something so good the same company has no choice but
        to come back with a check that has ten zeros on it. That's genuinely the whole story.
      </StoryAside>

      <h2>Two rejects, one friendship</h2>
      <p>
        Jan Koum immigrated from Ukraine to California at sixteen. His family relied on food
        stamps for a while; he swept floors at a grocery store and eventually talked his way into
        an internship testing security systems. He met Brian Acton at Yahoo in the late '90s,
        where the two of them bonded over a shared, no-nonsense approach to actually getting
        things done instead of talking about getting things done.
      </p>
      <p>
        Both left Yahoo in 2007, took a year off to travel, and then — like a lot of people
        figuring out their next move — applied for jobs. Both got turned down by Facebook. Acton
        got turned down by Twitter too, for good measure. He posted about it publicly at the
        time, more or less shrugging the whole thing off.
      </p>

      <h2>The idea that came out of the rejection</h2>
      <p>
        In January 2009, Koum bought an iPhone and started thinking hard about what the still-new
        App Store made possible. He built the first version of WhatsApp not long after. Acton
        joined him, and the two of them built the app around one stubborn principle, reportedly
        written on a note Koum kept taped up as a reminder: no ads, no games, no gimmicks. Just
        messaging that worked and didn't spy on you.
      </p>
      <p>
        That reads like a nice value statement now. At the time, it was a genuinely risky call —
        "no ads" is not usually how you build a business worth billions of dollars. It is exactly
        how they built theirs.
      </p>

      <StoryAside>
        "no ads, no games" sounds like a nice little mission statement until you remember this
        is literally how most tech companies make their money. Betting the entire business on
        refusing to do that is either insane or genius, and it turns out it can be both at once.
      </StoryAside>

      <h2>The full-circle ending</h2>
      <p>
        WhatsApp grew fast — hundreds of millions of users within a few years, on a product that
        barely made any money by design. Facebook came calling, and this time it was not a
        rejection letter. In 2014, Facebook bought WhatsApp for approximately $19 billion.
      </p>
      <p>
        Koum chose where to sign the deal on purpose: a building a few blocks from WhatsApp's
        offices that used to be the welfare office where, years earlier, he'd stood in line for
        food stamps. Some people who get rejected quietly reapply somewhere else. These two just
        made Facebook come crawling back to them, with a bigger check.
      </p>

      <StorySources
        sources={[
          { label: "How Jan Koum Built WhatsApp — Forbes", url: "https://www.forbes.com/sites/parmyolson/2019/12/23/exclusive-the-rags-to-riches-tale-of-how-jan-koum-built-whatsapp-into-facebooks-new-19-billion-baby/" },
          { label: "Brian Acton on #DeleteFacebook — Forbes", url: "https://www.forbes.com/sites/parmyolson/2018/09/26/exclusive-whatsapp-cofounder-brian-acton-gives-the-inside-story-on-deletefacebook-and-why-he-left-850-million-behind/" },
          { label: "WhatsApp Founders Include Facebook Reject — NBC News", url: "https://www.nbcnews.com/tech/internet/whatsapp-founders-include-facebook-reject-ukrainian-immigrant-n34541" },
        ]}
      />
    </StoryLayout>
  );
}

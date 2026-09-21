import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
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
      lessons={[
        "Getting rejected from the “obvious” path (a job at Facebook) is what freed them up to build the thing Facebook eventually needed to buy.",
        "They refused to compromise on the one rule that seemed like bad business — no ads — and that discipline is exactly what made the product good enough to be worth $19 billion.",
        "The full-circle ending wasn't luck. It was years of staying stubborn about what they wouldn't build, even when it would've been easier to give in.",
      ]}
    >
      <p>
        This one has the best plot twist of the three. Two guys applied for jobs at Facebook.
        Facebook said no. A few years later, Facebook paid $19 billion for the company those two
        guys built instead.
      </p>

      <h2>Two rejects, one friendship</h2>
      <p>
        Jan Koum immigrated from Ukraine to California at 16. His family got by on food stamps
        for a while; he swept floors at a grocery store and later talked his way into an
        internship testing security systems. He met Brian Acton at Yahoo in the late &apos;90s,
        where the two of them bonded over a shared, no-nonsense approach to getting things done.
      </p>
      <p>
        Both left Yahoo in 2007, took a year off to travel, and then — like a lot of people
        figuring out their next move — applied for jobs. Both got turned down by Facebook.
        Acton got turned down by Twitter too, for good measure. He posted about it publicly at
        the time, more or less shrugging it off as one of those things.
      </p>

      <h2>The idea that came out of the rejection</h2>
      <p>
        In January 2009, Koum bought an iPhone and started thinking about what the still-new App
        Store made possible. He built the first version of WhatsApp not long after. Acton joined
        him, and the two of them built the app around one stubborn principle, reportedly written
        on a note Koum kept taped up as a reminder: no ads, no games, no gimmicks. Just messaging
        that worked and didn&apos;t spy on you.
      </p>
      <p>
        That sounds like a nice value statement now. At the time, it was a genuinely risky call
        — &ldquo;no ads&rdquo; is not usually how you build a business worth billions of
        dollars. It&apos;s exactly how they built theirs.
      </p>

      <h2>The full-circle ending</h2>
      <p>
        WhatsApp grew fast — hundreds of millions of users within a few years, on a product
        that barely made any money by design. Facebook came calling, and this time it wasn&apos;t
        a rejection letter. In 2014, Facebook bought WhatsApp for approximately $19 billion.
      </p>
      <p>
        Koum chose where to sign the deal on purpose: a building a few blocks from WhatsApp&apos;s
        offices that used to be the welfare office where, years earlier, he&apos;d stood in line
        for food stamps. Some ex-Facebook rejects reapply. These two just made Facebook come to
        them instead.
      </p>
    </StoryLayout>
  );
}

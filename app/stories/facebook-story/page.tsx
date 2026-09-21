import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import { stories } from "@/lib/stories";

const meta = stories.find((s) => s.slug === "facebook-story")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <StoryLayout
      meta={meta}
      lessons={[
        "The embarrassing side project that almost got him kicked out ended up being the practice round for the real idea.",
        "Facebook didn't launch to everyone on day one — it launched to one campus, worked there, then expanded. Small and working beats big and empty.",
        "The $500,000 that changed everything came from one person who believed it early, not from a big institutional round. Sometimes it just takes one yes.",
      ]}
    >
      <p>
        Before there was a Facebook, there was almost an expulsion. Nineteen-year-old Mark
        Zuckerberg built something called Facemash — a site where Harvard students could
        rate classmates&apos; photos against each other. It spread across campus overnight, it
        was controversial, and the university shut it down within days. Zuckerberg was hauled in
        front of the administrative board and genuinely thought he might get sent home.
      </p>

      <h2>From a prank to a real idea</h2>
      <p>
        He didn&apos;t get expelled. And the mess of Facemash left him with a question worth
        keeping: what if there was a real, sanctioned version of a place where students could
        build a profile and connect — not rank each other, just exist online together?
      </p>
      <p>
        On February 4, 2004, working out of Kirkland House dorm room H33 with roommates Eduardo
        Saverin, Dustin Moskovitz, Andrew McCollum, and Chris Hughes, Zuckerberg launched
        &ldquo;TheFacebook.&rdquo; Within 24 hours, hundreds of Harvard students had signed up.
        Within a month, thousands had.
      </p>

      <h2>The part people skip: it launched small, on purpose</h2>
      <p>
        TheFacebook didn&apos;t try to be for everyone from day one. It started as
        Harvard-only, then expanded to other Ivy League schools, then to most universities in the
        US and Canada. Each step only happened once the previous one was actually working. That
        restraint is easy to miss looking back, because the version of Facebook you know now is
        the opposite of small.
      </p>

      <h2>The dorm room to Palo Alto</h2>
      <p>
        Zuckerberg dropped out during his sophomore year and moved the operation to Palo Alto,
        California, working out of a rented house with his co-founders. Early investor Peter
        Thiel put in $500,000, which is the kind of number that sounds small next to what
        Facebook became, but was the vote of confidence that let the team open the platform
        beyond college campuses — first to high schools, then to anyone over 13.
      </p>

      <h2>Where it landed</h2>
      <p>
        By 2006, Facebook had outgrown &ldquo;college directory&rdquo; entirely. It went on to
        become the company now known as Meta, which also owns Instagram and — relevant to
        our next story — WhatsApp. Zuckerberg still occasionally goes back to that old dorm
        room. He&apos;s said it&apos;s where a lot of the important stuff in his life happened,
        which tracks, since he also met his wife at Harvard.
      </p>
    </StoryLayout>
  );
}

import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import StoryAside from "@/components/StoryAside";
import StorySources from "@/components/StorySources";
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
      image="/stories/facebook-story.svg"
      lessons={[
        "The embarrassing side project that almost got him kicked out ended up being the practice round for the real idea.",
        "Facebook didn't launch to everyone on day one — it launched to one campus, worked there, then expanded. Small and working beats big and empty.",
        "The $500,000 that changed everything came from one person who believed it early, not from a big institutional round. Sometimes it just takes one yes.",
      ]}
    >
      <p>
        Before there was a Facebook, there was almost an expulsion. Nineteen-year-old Mark
        Zuckerberg built something called Facemash — a site where Harvard students could rate
        classmates' photos against each other. It spread across campus overnight, it was
        genuinely controversial, and the university shut it down within days.
      </p>

      <StoryAside>
        how does a guy get one prank site shut down by the entire university and then, what,
        two years later launch the biggest social network on the planet? Turns out almost
        getting expelled is not actually a career-ender if the thing you build next is good
        enough. Noted.
      </StoryAside>

      <h2>From a prank to a real idea</h2>
      <p>
        Zuckerberg was hauled in front of the administrative board and, by his own account,
        genuinely thought he might get sent home. He didn't. And the mess of Facemash left him
        with a much better question: what if there was a real, sanctioned version of that same
        idea — not ranking classmates against each other, just letting them build a profile and
        exist online together?
      </p>
      <p>
        On February 4, 2004, working out of Kirkland House dorm room H33 with roommates Eduardo
        Saverin, Dustin Moskovitz, Andrew McCollum, and Chris Hughes, Zuckerberg launched
        "TheFacebook." Within 24 hours, hundreds of Harvard students had signed up. Within a
        month, thousands had.
      </p>

      <h2>The part people skip: it launched small, on purpose</h2>
      <p>
        TheFacebook did not try to be for everyone from day one. It started Harvard-only, then
        expanded to other Ivy League schools, then to most universities across the US and Canada.
        Each step only happened once the previous one was actually working. That restraint is
        easy to miss looking back, because the version of Facebook everyone knows now is the
        exact opposite of small.
      </p>

      <StoryAside>
        that's a genuinely useful thing to steal for literally any project — don't try to be
        for everyone on day one. Nail one tiny, specific audience first and let it prove itself
        before you go wide. It's less exciting than "launching worldwide," but it's the actual
        playbook that worked here.
      </StoryAside>

      <h2>Dorm room to Palo Alto</h2>
      <p>
        Zuckerberg dropped out during his sophomore year and moved the operation to Palo Alto,
        California, working out of a rented house with his co-founders. Early investor Peter
        Thiel put in $500,000 — a number that sounds almost small next to what Facebook became,
        but was the actual vote of confidence that let the team open the platform beyond college
        campuses, first to high schools, then to anyone over 13.
      </p>

      <h2>Where it landed</h2>
      <p>
        By 2006, Facebook had outgrown "college directory" entirely. It went on to become Meta,
        which also owns Instagram and, relevant to our next story, WhatsApp. Zuckerberg still
        occasionally visits that old dorm room. He's said it's where a lot of the important stuff
        in his life happened, which tracks, since he also met his wife at Harvard, at a party he
        was thrown after almost getting kicked out over Facemash. The prank that nearly ended his
        college career also, somehow, indirectly got him a wife. Life is genuinely unfair
        sometimes.
      </p>

      <StorySources
        sources={[
          { label: "Mark Zuckerberg: The Architect of Social Media — Quartr", url: "https://quartr.com/insights/business-philosophy/mark-zuckerberg-the-architect-of-social-media" },
          { label: "Mark Zuckerberg returns to Harvard dorm room — CNBC", url: "https://www.cnbc.com/2017/05/25/mark-zuckerberg-returns-to-the-harvard-dorm-where-facebook-was-born.html" },
          { label: "Zuckerberg's Harvard commencement speech account — CBS News", url: "https://www.cbsnews.com/news/mark-zuckerberg-returns-to-harvard-to-deliver-commencement-speech" },
        ]}
      />
    </StoryLayout>
  );
}

import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import StoryAside from "@/components/StoryAside";
import StorySources from "@/components/StorySources";
import { stories } from "@/lib/stories";

const meta = stories.find((s) => s.slug === "instagram-story")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <StoryLayout
      meta={meta}
      image="/stories/instagram-story.svg"
      lessons={[
        "Look at what people actually do with your product, not what you designed it to do. The check-ins were the plan; the photos were the reality.",
        "Cutting features is a real skill, not a failure. Removing almost everything from Burbn is what made Instagram work.",
        "A good name matters more than founders like to admit. \"Burbn\" never had a shot at becoming a verb the way \"Instagram\" did.",
      ]}
    >
      <p>
        Before Instagram was a photo app, it was a bourbon-themed check-in app that let you earn
        points for hanging out with your friends. No, that is not a typo. Bourbon. The whiskey.
      </p>

      <StoryAside>
        what the hell does bourbon have to do with photo sharing? Nothing! That's the point.
        Founder Kevin Systrom just really liked bourbon, named the app after it, and the actual
        product had almost nothing to do with drinking. Startup names are wild sometimes.
      </StoryAside>

      <h2>The app that tried to do absolutely everything</h2>
      <p>
        Kevin Systrom, a Stanford grad who'd interned at the company that became Twitter and
        later worked at Google, spent nights and weekends building a side project called Burbn.
        Burbn let you check in at locations, make plans with friends, earn points for showing up,
        and — almost as an afterthought — post photos. It was Foursquare plus a to-do list plus a
        loyalty program plus a camera, all crammed into one app.
      </p>
      <p>
        Somehow, this Frankenstein of a product landed him $500,000 in seed funding anyway. He
        brought on a Stanford classmate, Mike Krieger, to help actually build the thing properly.
      </p>

      <h2>The feature nobody asked for turned out to be the only one people wanted</h2>
      <p>
        Once Burbn had real users, Systrom and Krieger did something a lot of founders are too
        stubborn to do: they looked at what people were actually doing instead of defending their
        own roadmap. Almost nobody was checking in anywhere. Almost everybody was using the
        photo-sharing button and ignoring the rest entirely.
      </p>

      <StoryAside>
        how could he do that — spend months building a five-feature app and then just delete
        four of the features? Because he wasn't precious about his own idea. That's genuinely
        rarer than it sounds. Most people would rather keep pushing the thing they built than
        admit the users found something better inside it.
      </StoryAside>

      <p>
        So they stripped everything else out. Gone were check-ins, gone were points, gone was
        most of Burbn entirely. What was left was a fast, simple way to take a photo, slap a
        filter on it, and share it. They renamed it Instagram — a mashup of "instant" and
        "telegram" — and launched it in October 2010.
      </p>

      <h2>From two guys in a room to a billion-dollar acquisition</h2>
      <p>
        It grew absurdly fast for an app with basically one feature. By April 2012, with a team
        of just thirteen people, Instagram was acquired by Facebook for roughly a billion dollars
        in cash and stock. Systrom and Krieger stayed on for years running it inside Facebook
        (later Meta) before eventually leaving to build other things — Krieger, notably, now
        works at Anthropic, the company behind the AI powering a chunk of the internet's current
        obsession.
      </p>
      <p>
        The app now built around Stories, Reels, and Shopping started life as a bloated check-in
        app that nobody particularly loved. The version that won was the one they had the
        discipline to cut down to almost nothing.
      </p>

      <StorySources
        sources={[
          { label: "Kevin Systrom — Wikipedia", url: "https://en.wikipedia.org/wiki/Kevin_Systrom" },
          { label: "Mike Krieger — Wikipedia", url: "https://en.wikipedia.org/wiki/Mike_Krieger" },
          {
            label: "5 Lessons From Instagram's Path to Startup Bliss — Inc.",
            url: "https://www.inc.com/guadalupe-gonzalez/how-instagram-was-created-kevin-systrom-mike-krieger.html",
          },
        ]}
      />
    </StoryLayout>
  );
}

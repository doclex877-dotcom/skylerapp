import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
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
      lessons={[
        "Look at what people actually do with your product, not what you designed it to do. The check-ins were the plan; the photos were the reality.",
        "Cutting features is a real skill, not a failure. Removing almost everything from Burbn is what made Instagram work.",
        "A good name matters more than founders like to admit. “Burbn” never had a shot at being a verb the way “Instagram” did.",
      ]}
    >
      <p>
        Before Instagram was a photo app, it was a bourbon-themed check-in app that let you earn
        points for hanging out with your friends. No, really.
      </p>

      <h2>The app that tried to do everything</h2>
      <p>
        Kevin Systrom, a Stanford grad who&apos;d interned at the company that became Twitter and
        later worked at Google, spent his nights and weekends building a side project called
        Burbn — named after his fondness for bourbon. Burbn let you check in at locations,
        make plans with friends, earn points, and post photos. It was Foursquare plus a to-do
        list plus a camera, all at once.
      </p>
      <p>
        It landed him $500,000 in seed funding anyway. He brought on a Stanford classmate, Mike
        Krieger, to help build it out properly.
      </p>

      <h2>The feature nobody asked for turned out to be the only one people wanted</h2>
      <p>
        Once Burbn had real users, Systrom and Krieger did something a lot of founders are too
        attached to their original vision to do: they looked at the actual usage data instead of
        their own roadmap. Almost nobody was checking in anywhere. Almost everybody was using the
        photo-sharing button.
      </p>
      <p>
        So they stripped everything else out. Gone were check-ins, gone were points, gone was
        most of Burbn entirely. What was left was a simple, fast way to take a photo, apply a
        filter, and share it. They renamed it Instagram — a mashup of &ldquo;instant&rdquo;
        and &ldquo;telegram&rdquo; — and launched it in October 2010.
      </p>

      <h2>From two guys to a billion-dollar acquisition</h2>
      <p>
        It grew absurdly fast for an app with basically one feature. By April 2012, with a team
        of just 13 people, Instagram was acquired by Facebook for roughly a billion dollars in
        cash and stock. Systrom and Krieger stayed on for years running it inside Facebook (later
        Meta) before eventually leaving to build other things.
      </p>
      <p>
        The app that&apos;s now built around Stories, Reels, and Shopping started as a
        bloated check-in app nobody particularly loved. The version that won was the one they
        had the discipline to cut down to almost nothing.
      </p>
    </StoryLayout>
  );
}

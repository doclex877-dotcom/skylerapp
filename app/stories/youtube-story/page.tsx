import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import StoryAside from "@/components/StoryAside";
import StorySources from "@/components/StorySources";
import { stories } from "@/lib/stories";

const meta = stories.find((s) => s.slug === "youtube-story")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <StoryLayout
      meta={meta}
      image="/stories/youtube-story.svg"
      lessons={[
        "The original idea can be completely wrong and it still doesn't matter, if the underlying tool you built is genuinely useful for something else.",
        "They launched something rough (a dating site nobody wanted) fast, watched what happened, and pivoted within about two months instead of grinding on a dead idea for years.",
        "Sometimes the biggest platform in the world starts with the lowest-stakes possible test video — an 18-second clip of a guy at the zoo.",
      ]}
    >
      <p>
        YouTube's logo and trademark were registered on Valentine's Day, 2005. That was not a
        coincidence. The original idea was a video dating site.
      </p>

      <StoryAside>
        wait, WHAT? Yes. The platform you use to watch three-hour video essays about lawnmower
        history started life as a place to upload a video of yourself so strangers could decide
        if they wanted to date you. Absolutely nobody could have predicted where this ends up.
      </StoryAside>

      <h2>Three PayPal guys with an idea that just did not work</h2>
      <p>
        Chad Hurley, Steve Chen, and Jawed Karim met working at PayPal, and left after eBay's
        acquisition made them comfortable enough to take a real swing at something new. Operating
        out of Hurley's garage — because of course it was a garage — they built a site where
        people could upload video introductions of themselves to find dates. Reportedly, they
        even offered a cash reward on Craigslist to anyone willing to upload a dating video, just
        to get some actual content onto the site.
      </p>
      <p>
        Almost nobody bit. Turns out "please film yourself talking to a webcam so strangers can
        judge your face" is a hard sell even by 2005 internet standards. The dating angle flopped
        within a couple of months.
      </p>

      <h2>The pivot: forget the dating part, keep the video part</h2>
      <p>
        Here's the part worth sitting with: the founders never had a good dating product. What
        they had, underneath the failed dating framing, was a genuinely good tool for uploading
        and sharing video easily — at a moment when broadband internet was juuust starting to
        become common enough to make that practical. So they dropped the dating angle completely
        and repositioned the exact same tool as a place to upload and share any video at all.
      </p>
      <p>
        On April 23, 2005, Karim uploaded the platform's first video: himself, at the San Diego
        Zoo, talking about elephants, for eighteen seconds. It is, unbelievably, still on YouTube
        today, sitting at several hundred million views.
      </p>

      <StoryAside>
        an eighteen-second clip of a guy standing near elephants, saying not much, has more
        views than most people's entire life output of content will ever get. There is
        genuinely no justice in the algorithm and there never was.
      </StoryAside>

      <h2>From garage to $1.65 billion in about twenty months</h2>
      <p>
        The public beta launched in May 2005. Growth was fast — and expensive, since video
        bandwidth in 2005 was not cheap — enough that by November 2006, barely a year and a half
        after that zoo video, Google bought the whole company for $1.65 billion in stock. At the
        time, it was Google's largest acquisition ever, for a company that started its life as a
        video dating site with basically zero users.
      </p>
      <p>
        Every clip you're pulling off this site right now exists because three guys built
        something nobody wanted, noticed what people actually did with it anyway, and had the
        sense to just build that instead.
      </p>

      <StorySources
        sources={[
          { label: "YouTube — Wikipedia", url: "https://en.wikipedia.org/wiki/YouTube" },
          { label: "YouTube — Britannica", url: "https://www.britannica.com/topic/YouTube" },
          { label: "Jawed Karim — Wikipedia", url: "https://en.wikipedia.org/wiki/Jawed_Karim" },
          {
            label: "18 Months That Changed the Internet — Sequoia Capital",
            url: "https://sequoiacap.com/podcast/crucible-moments-youtube",
          },
        ]}
      />
    </StoryLayout>
  );
}

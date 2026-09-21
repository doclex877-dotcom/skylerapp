import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import { stories } from "@/lib/stories";

const meta = stories.find((s) => s.slug === "tiktok-bytedance-story")!;

export const metadata: Metadata = {
  title: `${meta.title} — Skyler`,
  description: meta.dek,
};

export default function Page() {
  return (
    <StoryLayout
      meta={meta}
      lessons={[
        "The failed first attempt wasn't wasted — it's usually where you learn the thing that makes the second attempt work.",
        "You don't need a wildly original idea. Toutiao wasn't a new concept (news apps existed); it just did the sorting better than anyone else bothered to.",
        "Sometimes your biggest hit isn't the thing you set out to build. Zhang was running a news app. The short-video app was originally just... another product in the lineup.",
      ]}
    >
      <p>
        Quick trivia for you, since you&apos;re here on a TikTok tool: the guy who built the
        company behind it didn&apos;t start out trying to make a video app at all. His first
        real company flopped. His second one was a news app. TikTok almost happened as a side
        quest.
      </p>

      <h2>Attempt one: a real estate search engine</h2>
      <p>
        Zhang Yiming grew up in Fujian, China, studied microelectronics and software engineering
        at Nankai University, and spent his early career bouncing around tech jobs —
        including a stint at a travel site that got bought out from under him. His first real
        swing as a founder was a property search engine he built with a friend. It didn&apos;t
        take off. Most first companies don&apos;t.
      </p>

      <h2>Attempt two: teaching a machine to read the news for you</h2>
      <p>
        In 2012, Zhang tried again — this time with an app called Toutiao (&ldquo;Today&apos;s
        Headlines&rdquo;), which used machine learning to figure out what news you&apos;d
        actually want to read instead of showing everyone the same front page. This was a bigger
        deal than it sounds now: algorithmic, personalized feeds weren&apos;t the default yet.
        Toutiao picked up over 13 million daily users within two years and pulled in serious
        investor money, Sequoia Capital included.
      </p>

      <h2>The pivot nobody saw coming</h2>
      <p>
        Here&apos;s the part that matters: Zhang&apos;s company, ByteDance, wasn&apos;t betting
        the whole business on video. Toutiao was already working. But the team could see
        short-form video becoming a real behavior shift, so in 2016 they launched a second
        product — Douyin — built for China, full-screen, and using the same
        recommendation engine that made Toutiao good at guessing what people wanted to see.
      </p>
      <p>
        Douyin took off fast. In 2017 and 2018, ByteDance bought a US lip-sync app called
        Musical.ly for somewhere in the neighborhood of a billion dollars and merged it into an
        international version of Douyin. That international version is the app you&apos;re
        currently using this site to download videos from: TikTok.
      </p>

      <h2>What happened after it got big</h2>
      <p>
        TikTok didn&apos;t just become popular, it became a geopolitical headache —
        governments in multiple countries have raised concerns about data and ownership, which is
        a genuinely unusual problem for a video app to have. Zhang stepped down as CEO in 2021,
        staying on as a shareholder while new leadership took over the day-to-day. As of recent
        reporting he still holds a meaningful stake in a company now valued in the tens of
        billions.
      </p>
      <p>
        Not bad, for a guy whose first company was a property search site nobody used.
      </p>
    </StoryLayout>
  );
}

import type { Metadata } from "next";
import StoryLayout from "@/components/StoryLayout";
import StoryAside from "@/components/StoryAside";
import StorySources from "@/components/StorySources";
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
      image="/stories/tiktok-bytedance-story.svg"
      lessons={[
        "The failed first attempt wasn't wasted — it's usually where you learn the thing that makes the second attempt work.",
        "You don't need a wildly original idea. Toutiao wasn't a new concept (news apps existed); it just did the sorting better than anyone bothered to.",
        "Sometimes your biggest hit isn't the thing you set out to build. Zhang was running a news app. The short-video app was originally just another product in the lineup.",
      ]}
    >
      <p>
        Quick trivia for you, since you're sitting on a TikTok tool right now: the guy who built
        the company behind it didn't set out to make a video app at all. His first real company
        flopped. His second one was a news app. TikTok almost happened as a side quest to a side
        quest.
      </p>

      <h2>Attempt one: a real estate search engine (yes, really)</h2>
      <p>
        Zhang Yiming grew up in Fujian, China, studied microelectronics and software engineering
        at Nankai University, and spent his twenties bouncing around tech jobs — including a
        stint at a travel site called Kuxun that got quietly bought out from under him by
        TripAdvisor. His first real swing as a founder was a property search engine he built with
        a friend, 99fang.com.
      </p>
      <p>It didn't take off. Nobody talks about it. You've never heard of it. That's the point.</p>

      <StoryAside>
        a real estate search site. In China. In the 2000s. Not exactly the origin story you'd
        guess for the guy behind a 1.9-billion-user video empire, but that's kind of the whole
        lesson here — nobody's first swing is the one that works.
      </StoryAside>

      <h2>Attempt two: teaching a machine to read the news for you</h2>
      <p>
        In 2012, Zhang tried again — this time with an app called Toutiao ("Today's Headlines"),
        which used machine learning to guess what news you'd actually want to read instead of
        showing everyone the identical front page. This was a bigger deal than it sounds now:
        algorithmic, personalized feeds weren't the default yet, and building one that actually
        worked was a genuine technical flex. Toutiao picked up over 13 million daily users within
        two years and pulled in real investor money, Sequoia Capital included.
      </p>

      <h2>The pivot nobody saw coming</h2>
      <p>
        Here's the part that matters: ByteDance wasn't betting the whole business on video.
        Toutiao was already working fine on its own. But the team could see short-form video
        becoming a real behavior shift — people wanted things faster, shorter, more disposable —
        so in September 2016 they launched a second product: Douyin. Built for China, full-screen,
        running on the same recommendation engine that made Toutiao good at guessing what people
        wanted.
      </p>
      <p>
        Douyin took off scary-fast. In 2017 and 2018, ByteDance bought a US lip-sync app called
        Musical.ly for somewhere around a billion dollars (reports vary between roughly $800
        million and $1 billion depending who you ask) and merged it into an international version
        of Douyin. That international version is the app you're currently using this site to pull
        videos off: TikTok.
      </p>

      <StoryAside>
        so the actual TikTok app — the one on your phone right now — is technically the
        offspring of a Chinese news-reading algorithm and a defunct lip-syncing app for
        teenagers. Nobody plans a company history that makes sense in hindsight. It just happens
        and then someone writes a Wikipedia page about it later.
      </StoryAside>

      <h2>What happened after it got big</h2>
      <p>
        TikTok didn't just become popular, it became a genuine geopolitical headache — multiple
        governments have raised serious concerns about data access and ownership, which is a
        wild problem for a video app to have. Zhang stepped down as CEO in 2021, staying on as a
        shareholder while new leadership took the wheel day-to-day. Legal filings from 2024
        suggest he still holds roughly a fifth of the company, which, at ByteDance's current
        valuation, is not a small fifth.
      </p>
      <p>
        Not bad, for a guy whose first company was a property listings site literally nobody
        used.
      </p>

      <StorySources
        sources={[
          { label: "Zhang Yiming — Wikipedia", url: "https://en.wikipedia.org/wiki/Zhang_Yiming" },
          { label: "ByteDance — Wikipedia", url: "https://en.wikipedia.org/wiki/ByteDance" },
          {
            label: "TikTok founder Zhang Yiming becomes Asia's 2nd richest billionaire — VnExpress",
            url: "https://e.vnexpress.net/news/business/billionaires/tiktok-founder-zhang-yiming-becomes-asia-s-2nd-richest-billionaire-5081526.html",
          },
          {
            label: "Founder Story: Zhang Yiming of TikTok — Frederick AI",
            url: "https://www.frederick.ai/blog/zhang-yiming-tiktok",
          },
        ]}
      />
    </StoryLayout>
  );
}

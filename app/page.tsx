import Link from "next/link";
import DownloaderForm from "@/components/DownloaderForm";
import FAQSection from "@/components/FAQSection";
import AdSlot from "@/components/AdSlot";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { guides } from "@/lib/guides";
import { stories } from "@/lib/stories";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-noise">
      <SiteHeader />

      <main className="flex-1">
        <section className="px-4 pt-10 pb-6 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold max-w-2xl mx-auto leading-tight">
            Grab any <span className="text-pink">TikTok</span>, no cap
          </h1>
          <p className="text-text-dim mt-4 max-w-md mx-auto">
            Paste the link, Skyler does the rest. No app, no login, no watermark.
          </p>
        </section>

        <section className="px-4 pb-10">
          <DownloaderForm />
        </section>

        <AdSlot label="below-tool" height={100} />

        <section className="max-w-3xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { title: "Paste", desc: "Copy the video link from the TikTok app or site." },
            { title: "Grab", desc: "Skyler strips the watermark and fetches the clean version." },
            { title: "Save", desc: "Download the MP4 straight to your device." },
          ].map((step, i) => (
            <div key={step.title}>
              <div className="w-10 h-10 rounded-full bg-violet/20 border border-violet/40 flex items-center justify-center mx-auto mb-3 font-display text-lime">
                {i + 1}
              </div>
              <h3 className="font-display font-medium mb-1">{step.title}</h3>
              <p className="text-text-dim text-sm">{step.desc}</p>
            </div>
          ))}
        </section>

        <div id="faq">
          <FAQSection />
        </div>

        <section className="max-w-2xl mx-auto px-4 py-10">
          <h2 className="font-display text-2xl font-semibold text-center mb-6">Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {guides.slice(0, 4).map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="bg-panel border border-white/10 rounded-xl p-4 hover:border-pink/40 transition"
              >
                <h3 className="font-display font-medium text-sm leading-snug">{g.title}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/guides" className="text-lime text-sm font-medium hover:underline">
              See all guides &rarr;
            </Link>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-4 py-10">
          <h2 className="font-display text-2xl font-semibold text-center mb-2">Stories</h2>
          <p className="text-text-dim text-sm text-center mb-6">
            How TikTok, Facebook, and WhatsApp actually got started.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {stories.slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                href={`/stories/${s.slug}`}
                className="bg-panel border border-white/10 rounded-xl p-4 hover:border-pink/40 transition"
              >
                <p className="text-lime font-display text-xs uppercase tracking-wide mb-1">
                  {s.founded}
                </p>
                <h3 className="font-display font-medium text-sm leading-snug">{s.title}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/stories" className="text-lime text-sm font-medium hover:underline">
              See all stories &rarr;
            </Link>
          </div>
        </section>

        <AdSlot label="above-footer" height={100} />
      </main>

      <SiteFooter />
    </div>
  );
}

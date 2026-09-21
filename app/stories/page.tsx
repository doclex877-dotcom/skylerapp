import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { stories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Stories — Skyler",
  description: "How TikTok, Facebook, and WhatsApp actually got started — with the parts that get cut from the highlight reel.",
};

export default function StoriesIndex() {
  return (
    <div className="flex flex-col flex-1 bg-noise">
      <SiteHeader />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-10 w-full">
        <h1 className="font-display text-4xl font-semibold">Stories</h1>
        <p className="text-text-dim mt-3">
          How the apps you use every day actually got started — the messy parts included.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {stories.map((s) => (
            <Link
              key={s.slug}
              href={`/stories/${s.slug}`}
              className="block bg-panel border border-white/10 rounded-2xl p-5 hover:border-pink/40 transition"
            >
              <p className="text-lime font-display text-xs uppercase tracking-wide mb-1">
                Founded {s.founded}
              </p>
              <h2 className="font-display text-xl font-semibold">{s.title}</h2>
              <p className="text-text-dim mt-2 text-sm">{s.dek}</p>
              <span className="text-lime text-xs mt-3 inline-block font-medium">
                {s.minutes} min read
              </span>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides \u2014 Skyler",
  description: "Everything you need to know about saving and downloading TikTok videos.",
};

export default function GuidesIndex() {
  return (
    <div className="flex flex-col flex-1 bg-noise">
      <SiteHeader />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-10 w-full">
        <h1 className="font-display text-4xl font-semibold">Guides</h1>
        <p className="text-text-dim mt-3">
          Short, practical reads on saving TikTok videos \u2014 no fluff.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="block bg-panel border border-white/10 rounded-2xl p-5 hover:border-pink/40 transition"
            >
              <h2 className="font-display text-xl font-semibold">{g.title}</h2>
              <p className="text-text-dim mt-2 text-sm">{g.dek}</p>
              <span className="text-lime text-xs mt-3 inline-block font-medium">
                {g.minutes} min read
              </span>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import AdSlot from "./AdSlot";
import Mascot from "./Mascot";
import { StoryMeta } from "@/lib/stories";

export default function StoryLayout({
  meta,
  children,
  lessons,
  image,
}: {
  meta: StoryMeta;
  children: React.ReactNode;
  lessons: string[];
  image?: string;
}) {
  return (
    <div className="flex flex-col flex-1 bg-noise">
      <SiteHeader />
      <main className="flex-1 px-4">
        <article className="max-w-2xl mx-auto py-6">
          <Link href="/stories" className="text-sm text-text-dim hover:text-lime transition">
            &larr; All stories
          </Link>

          <p className="text-lime font-display text-sm mt-4 tracking-wide uppercase">
            Founded {meta.founded}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mt-2 leading-tight">
            {meta.title}
          </h1>
          <p className="text-text-dim mt-3 text-lg">{meta.dek}</p>

          {image && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={image}
              alt={meta.title}
              className="w-full rounded-2xl mt-6 border border-white/10"
            />
          )}

          <div className="mt-8 prose prose-invert prose-headings:font-display prose-headings:font-semibold prose-a:text-lime prose-strong:text-text max-w-none">
            {children}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-panel border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Mascot state="happy" size={48} />
              <p className="font-display text-lg">Skyler's Take</p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {lessons.map((lesson, i) => (
                <li key={i} className="flex gap-2.5 text-sm">
                  <span className="text-lime font-display flex-shrink-0">{i + 1}.</span>
                  <span className="text-text-dim">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <AdSlot label="in-story" height={100} />
      </main>
      <SiteFooter />
    </div>
  );
}

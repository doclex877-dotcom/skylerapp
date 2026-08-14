import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import AdSlot from "./AdSlot";

export default function GuideLayout({
  title,
  dek,
  children,
}: {
  title: string;
  dek: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1 bg-noise">
      <SiteHeader />
      <main className="flex-1 px-4">
        <article className="max-w-2xl mx-auto py-6">
          <Link href="/guides" className="text-sm text-text-dim hover:text-lime transition">
            &larr; All guides
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            {title}
          </h1>
          <p className="text-text-dim mt-3 text-lg">{dek}</p>

          <div className="mt-8 prose prose-invert prose-headings:font-display prose-headings:font-semibold prose-a:text-lime prose-strong:text-text max-w-none">
            {children}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-panel border border-white/10 text-center">
            <p className="font-display text-lg mb-3">Ready to grab a Short?</p>
            <Link
              href="/"
              className="inline-block bg-lime text-bg font-display font-semibold px-6 py-3 rounded-xl hover:brightness-95 active:scale-95 transition"
            >
              Try the downloader
            </Link>
          </div>
        </article>
        <AdSlot label="in-guide" height={100} />
      </main>
      <SiteFooter />
    </div>
  );
}

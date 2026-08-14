import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function StaticPageLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1 bg-noise">
      <SiteHeader />
      <main className="flex-1 px-4">
        <article className="max-w-2xl mx-auto py-6">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">{title}</h1>
          {updated && <p className="text-text-dim mt-2 text-sm">Last updated {updated}</p>}
          <div className="mt-8 prose prose-invert prose-headings:font-display prose-headings:font-semibold prose-a:text-lime prose-strong:text-text max-w-none">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

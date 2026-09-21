import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="max-w-5xl w-full mx-auto px-4 py-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <span className="font-display font-semibold text-xl">skyler</span>
        <span className="w-2 h-2 rounded-sm bg-lime" />
      </Link>
      <nav className="text-sm text-text-dim flex items-center gap-6">
        <Link href="/guides" className="hover:text-text transition">
          Guides
        </Link>
        <Link href="/stories" className="hover:text-text transition">
          Stories
        </Link>
        <Link href="/#faq" className="hover:text-text transition">
          FAQ
        </Link>
      </nav>
    </header>
  );
}

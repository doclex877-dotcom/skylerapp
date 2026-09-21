export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center text-text-dim text-sm">
      <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-4">
        <a href="/about" className="hover:text-text transition">
          About
        </a>
        <a href="/guides" className="hover:text-text transition">
          Guides
        </a>
        <a href="/stories" className="hover:text-text transition">
          Stories
        </a>
        <a href="/contact" className="hover:text-text transition">
          Contact
        </a>
        <a href="/privacy" className="hover:text-text transition">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-text transition">
          Terms of Use
        </a>
      </nav>
      <p>Skyler isn&apos;t affiliated with TikTok or ByteDance. For personal use only.</p>
      <p className="mt-1">&copy; {new Date().getFullYear()} skylerai.xyz</p>
    </footer>
  );
}

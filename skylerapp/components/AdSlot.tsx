/**
 * Placeholder ad slot. Once the site is approved for AdSense, swap the
 * contents of this div for your <ins class="adsbygoogle"> unit and call
 * (adsbygoogle = window.adsbygoogle || []).push({}) after mount.
 *
 * Keeping these as named, sized slots now means you can drop real units
 * in later without reflowing the layout.
 */
export default function AdSlot({ label = "ad", height = 100 }: { label?: string; height?: number }) {
  return (
    <div
      className="w-full max-w-2xl mx-auto my-8 rounded-xl border border-dashed border-white/15 flex items-center justify-center text-text-dim text-xs uppercase tracking-wide"
      style={{ height }}
      data-ad-slot={label}
    >
      ad slot &mdash; {label}
    </div>
  );
}

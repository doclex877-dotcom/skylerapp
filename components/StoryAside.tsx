export default function StoryAside({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 bg-violet/10 border-l-4 border-lime rounded-r-xl px-5 py-4">
      <p className="text-sm text-text m-0">
        <span className="font-display text-lime font-semibold">Hold up — </span>
        {children}
      </p>
    </div>
  );
}

interface Source {
  label: string;
  url: string;
}

export default function StorySources({ sources }: { sources: Source[] }) {
  return (
    <div className="not-prose mt-8 pt-6 border-t border-white/10">
      <p className="text-text-dim text-xs uppercase tracking-wide font-display mb-3">Sources</p>
      <ul className="flex flex-col gap-1.5">
        {sources.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim text-sm hover:text-lime transition underline decoration-white/20 underline-offset-2"
            >
              {s.label} &#8599;
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

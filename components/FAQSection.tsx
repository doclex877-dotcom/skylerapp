const faqs = [
  {
    q: "Is this free to use?",
    a: "Yep, 100% free, no sign-up, no limits on how many videos you grab.",
  },
  {
    q: "Do I need to install an app?",
    a: "No. It runs in your browser on any phone, tablet, or computer.",
  },
  {
    q: "Does it actually remove the watermark?",
    a: "Yes \u2014 you get the clean version TikTok generates internally, with no username or logo overlay.",
  },
  {
    q: "What quality do downloads come in?",
    a: "We pull the highest quality available for that video, usually HD, no watermark.",
  },
  {
    q: "Is it safe?",
    a: "We never ask for your TikTok login, and we don't store the videos you download on our servers.",
  },
  {
    q: "Can I download private videos?",
    a: "No \u2014 only public TikToks can be fetched, same as anything you could already watch without logging in.",
  },
];

export default function FAQSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="font-display text-3xl font-semibold text-center mb-8">Questions, answered</h2>
      <div className="flex flex-col gap-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group bg-panel border border-white/10 rounded-xl p-4 open:border-pink/40"
          >
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center gap-4">
              {f.q}
              <span className="text-lime font-display transition group-open:rotate-45">+</span>
            </summary>
            <p className="text-text-dim mt-3 text-sm leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

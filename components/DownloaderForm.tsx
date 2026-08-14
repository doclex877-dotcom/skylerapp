"use client";

import { useState } from "react";
import Mascot from "./Mascot";

interface DownloadOption {
  label: string;
  url: string;
  kind: "video" | "audio";
}

interface TikTokInfo {
  title: string;
  author: string;
  thumbnail: string | null;
  durationSeconds: number;
  downloads: DownloadOption[];
}

export default function DownloaderForm() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [info, setInfo] = useState<TikTokInfo | null>(null);

  const mascotState =
    status === "loading" ? "thinking" : status === "done" ? "happy" : status === "error" ? "sad" : "idle";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;

    setStatus("loading");
    setError("");
    setInfo(null);

    try {
      const res = await fetch("/api/info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Try another link.");
        setStatus("error");
        return;
      }

      setInfo(data);
      setStatus("done");
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex justify-center mb-6">
        <Mascot state={mascotState} size={128} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 bg-panel p-3 rounded-2xl border border-white/10 shadow-xl"
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a TikTok link\u2026"
          className="flex-1 bg-transparent px-4 py-3 rounded-xl text-text placeholder:text-text-dim outline-none"
          aria-label="TikTok link"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-lime text-bg font-display font-semibold px-6 py-3 rounded-xl hover:brightness-95 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? "Grabbing\u2026" : "Grab it"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-4 text-center text-pink font-medium animate-bounce-in">{error}</p>
      )}

      {status === "done" && info && (
        <div className="mt-8 bg-bg-soft border border-white/10 rounded-2xl p-5 animate-bounce-in">
          <div className="flex gap-4 items-start">
            {info.thumbnail && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={info.thumbnail}
                alt={info.title}
                width={110}
                height={110}
                className="rounded-xl object-cover flex-shrink-0"
              />
            )}
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-lg leading-snug line-clamp-2">
                {info.title}
              </h3>
              <p className="text-text-dim text-sm mt-1">@{info.author}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            {info.downloads.map((d) => (
              <a
                key={d.url}
                href={`/api/download?url=${encodeURIComponent(d.url)}&kind=${d.kind}&title=${encodeURIComponent(
                  info.title
                )}`}
                className="flex items-center justify-between bg-panel hover:bg-violet/30 transition rounded-xl px-4 py-3 border border-white/10"
              >
                <span className="font-medium">
                  {d.label} <span className="text-text-dim text-sm">{d.kind === "audio" ? "MP3" : "MP4"}</span>
                </span>
                <span className="text-lime font-display text-sm">Download &darr;</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

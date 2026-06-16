"use client";

import { CometCard } from "@/components/ui/comet-card";
import { ArrowUpRight } from "lucide-react";

interface FeaturedItem {
  name: string;
  code: string;
  tagline: string;
  image: string;
  url: string;
}

const featuredItems: FeaturedItem[] = [
  {
    name: "Cursor Editor",
    code: "#CURSOR",
    tagline: "The AI-first code editor fork of VS Code.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    url: "https://cursor.com",
  },
  {
    name: "Bolt.new",
    code: "#BOLT",
    tagline: "Fullstack sandbox running directly in the browser.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop",
    url: "https://bolt.new",
  },
  {
    name: "v0 by Vercel",
    code: "#V0",
    tagline: "Generative UI system producing React and Tailwind code.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
    url: "https://v0.dev",
  },
  {
    name: "Lovable.dev",
    code: "#LOVABLE",
    tagline: "Conversational builder for production-ready web apps.",
    image: "https://images.unsplash.com/photo-1618005198143-d56653df28d6?q=80&w=600&auto=format&fit=crop",
    url: "https://lovable.dev",
  },
  {
    name: "Windsurf",
    code: "#WINDSURF",
    tagline: "Context-aware agentic coding powered by Cascade.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
    url: "https://windsurf.com",
  },
  {
    name: "Claude Code",
    code: "#CLAUDE",
    tagline: "Anthropic's terminal agent that reads and writes code.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop",
    url: "https://claude.com/product/claude-code",
  },
];

export default function FeaturedCards() {
  return (
    <section className="relative w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight italic font-heading">
            Featured Environments
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm">
            Hover over the cards below to see the interactive 3D refraction effect. Click to visit the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 w-full max-w-4xl mx-auto">
          {featuredItems.map((item) => (
            <CometCard key={item.name} className="w-full flex justify-center">
            <button
              type="button"
              onClick={() => window.open(item.url, "_blank", "noopener,noreferrer")}
              className="flex w-full max-w-sm cursor-pointer flex-col items-stretch rounded-[20px] border border-white/5 bg-[#141515] p-3 text-left transition-colors hover:border-white/10 shadow-xl"
              aria-label={`Visit ${item.name}`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px]">
                <img
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  alt={`${item.name} screenshot`}
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              <div className="mt-4 px-2 flex flex-col gap-1">
                <div className="flex items-center justify-between font-mono text-white">
                  <span className="text-sm font-semibold tracking-tight flex items-center gap-1.5">
                    {item.name}
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
                  </span>
                  <span className="text-xs text-white/30">{item.code}</span>
                </div>
                <p className="text-xs text-white/60 font-body leading-relaxed mt-1">
                  {item.tagline}
                </p>
              </div>
            </button>
          </CometCard>
        ))}
        </div>
      </div>
    </section>
  );
}

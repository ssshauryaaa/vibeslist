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
    name: "Aceternity UI",
    code: "#ACETERNITY",
    tagline: "200+ free animated React & Next.js components built with Tailwind CSS and Framer Motion.",
    image: "https://ui.aceternity.com/banner.png",
    url: "https://ui.aceternity.com/components",
  },
  {
    name: "MotionSites",
    code: "#MOTION",
    tagline: "Premium AI design prompts, hero sections, animated backgrounds and templates.",
    image: "https://storage.googleapis.com/gpt-engineer-file-uploads/OzagiQ9ZfuQNatpgQBgKibiYrtm2/social-images/social-1772948036264-1social.webp",
    url: "https://motionsites.ai",
  },
  {
    name: "Componentry",
    code: "#COMPONENTRY",
    tagline: "Free, open-source animated React primitives with copy-paste code and Framer Motion.",
    image: "https://www.componentry.fun/opengraph-image",
    url: "https://www.componentry.fun/docs",
  },
];

export default function FeaturedCards() {
  return (
    <section className="relative w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight italic font-heading">
            Design Resources
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm">
            Curated component libraries and design tools to supercharge your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 w-full max-w-5xl mx-auto">
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

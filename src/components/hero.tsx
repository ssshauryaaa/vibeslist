"use client";

import { motion } from 'motion/react';
import SectionEyebrow from '@/components/shared/section-eyebrow';
import ExternalLinkButton from '@/components/shared/external-link-button';
import { Search, Plus } from 'lucide-react';
import type { Tool } from '@/types/tool';
import { tools } from '@/data/tools';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Hero({ searchQuery, onSearchChange }: HeroProps) {
  const categories = [...new Set(tools.flatMap(tool => [tool.category]))];

  const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, #0B1020 0%, #2A1B5C 12.5%, #C9B8FF 32.5%, #7C5CFF 50%, #2A1B5C 67.5%, #0B1020 87.5%, #0B1020 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    filter: 'url(#grain-noise)',
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto px-6 pt-20 md:pt-32 pb-16 text-center flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionEyebrow label="A living, hand-curated list" tag={`${tools.length} tools`} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95]"
      >
        Find your{' '}
        <span
          className="animate-shiny"
          style={gradientStyle}
        >
          Vibe
        </span>{' '}
        coding stack.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 text-white/60 max-w-lg text-base md:text-lg leading-[1.6]"
      >
        A no-nonsense, manually-checked directory of AI code editors, agentic coders, and prompt-to-app builders — what they do, what they cost, and what they actually look like.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 flex flex-col items-center gap-6 w-full max-w-md"
      >
        {/* Search bar */}
        <div className="liquid-glass rounded-full px-5 py-3 flex items-center gap-3 w-full">
          <Search className="w-5 h-5 text-white/60" />
          <input
            type="text"
            placeholder="Search tools, tags, categories..."
            className="bg-transparent outline-none text-sm w-full placeholder:text-white/40"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              onClick={() => {
                // In a real app, this would activate the tab
                console.log(`Filter by category: ${category}`);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex items-center gap-4"
      >
        <ExternalLinkButton label="Browse the list" href="#tools" />
        <button
          className="rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 flex items-center gap-2 transition-colors"
        >
          Suggest a tool
          <Plus className="w-4 h-4" />
        </button>
      </motion.div>
    </motion.section>
  );
}

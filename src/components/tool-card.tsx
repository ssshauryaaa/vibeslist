"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { ImageOff, ArrowUpRight } from 'lucide-react';
import type { Tool } from '@/types/tool';

// Variants for motion animation
const cardVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

interface ToolCardProps {
  tool: Tool;
  onClick?: () => void;
}

export default function ToolCard({ tool, onClick }: ToolCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Check if tool is new (added within last 14 days)
  const isNew = () => {
    const addedDate = new Date(tool.addedAt);
    const today = new Date();
    const diffTime = today.getTime() - addedDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 14;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="liquid-glass rounded-2xl overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Screenshot */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-white/5 relative">
        {(tool.screenshot && tool.screenshot !== '') ? (
          <img
            src={tool.screenshot}
            alt={`${tool.name} screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-white/[0.04] to-white/[0.01] flex items-center justify-center">
            <ImageOff className="w-6 h-6 text-white/60" />
          </div>
        )}

        {/* Pricing badge (top-right) */}
        <Badge
          variant="secondary"
          className="absolute top-2 right-2 text-xs bg-black/50 backdrop-blur-md border border-white/10"
        >
          {tool.pricing}
        </Badge>

        {/* New badge (top-left) */}
        {isNew() && (
          <Badge
            className="absolute top-2 left-2 text-xs bg-brand text-white"
          >
            New
          </Badge>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Logo and name row */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            {(tool.logo && tool.logo !== '') ? (
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="w-6 h-6 rounded-md object-cover"
              />
            ) : (
              <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-xs font-semibold">
                {tool.name.charAt(0)}
              </div>
            )}
            <h3 className="text-base font-semibold">{tool.name}</h3>
          </div>
          <ArrowUpRight
            className={`text-white/30 group-hover:text-white transition-colors ${
              isHovered ? 'translate-x-[2px]' : ''
            }`}
          />
        </div>

        {/* Tagline */}
        <p className="mt-1 text-sm text-white/60 line-clamp-2">{tool.tagline}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-white/50 px-2 py-1 rounded-full border border-white/10 bg-white/[0.02]"
            >
              {tag}
            </span>
          ))}
          {tool.tags.length > 3 && (
            <span
              className="text-[11px] text-white/50 px-2 py-1 rounded-full border border-white/10 bg-white/[0.02]"
            >
              +{tool.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from 'motion/react';
import SectionEyebrow from '@/components/shared/section-eyebrow';
import ExternalLinkButton from '@/components/shared/external-link-button';
import type { Tool } from '@/types/tool';
import { tools } from '@/data/tools';

export default function FeaturedStrip() {
  const featuredTools = tools.filter(tool => tool.featured);

  if (featuredTools.length === 0) return null;

  return (
    <motion.section
      className="max-w-6xl mx-auto px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionEyebrow label="Featured this week" />

      <div className="mt-6 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {featuredTools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass rounded-xl p-4 flex-shrink-0 w-64 flex flex-col items-center"
          >
            {(tool.logo ? (
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="w-10 h-10 mb-3 object-contain"
              />
            ) : (
              <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center mb-3">
                {tool.name.charAt(0)}
              </div>
            ))}
            <h3 className="text-base font-semibold text-center mb-1">{tool.name}</h3>
            <p className="text-sm text-white/60 text-center mb-3">{tool.tagline}</p>
            <ExternalLinkButton
              label="Visit"
              href={tool.url}
              className="px-4 py-2 text-xs"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import type { Tool } from '@/types/tool';
import { Link2, Check, X } from 'lucide-react';
import ExternalLinkButton from '@/components/shared/external-link-button';
import ToolMockup, { getBrandSolidGradient } from '@/components/tool-mockup';

// Copy to clipboard utility
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy: ', err);
    return false;
  }
};

interface ToolDialogProps {
  tool: Tool;
  onOpenChange: (open: boolean) => void;
}

export default function ToolDialog({ tool, onOpenChange }: ToolDialogProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(window.location.origin + `?tool=${tool.id}`);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto liquid-glass max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border-none p-0 relative"
      >
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Large screenshot */} 
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/5 border-b border-white/5">
          {(tool.screenshot && tool.screenshot !== '' && !imageError) ? (
            <img
              src={tool.screenshot}
              alt={`${tool.name} screenshot`}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <ToolMockup
              name={tool.name}
              category={tool.category}
              url={tool.url}
              tagline={tool.tagline}
            />
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            {(tool.logo && tool.logo !== '' && !logoError) ? (
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="w-8 h-8 rounded-md object-cover"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className={`w-8 h-8 rounded-md bg-gradient-to-tr ${getBrandSolidGradient(tool.name)} flex items-center justify-center text-sm font-bold text-white shadow-sm`}>
                {tool.name.charAt(0)}
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold">{tool.name}</h3>
              <div className="flex gap-2 mt-1">
                <span
                  className="text-xs bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-2 py-0.5"
                >
                  {tool.category}
                </span>
                <span
                  className="text-xs bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-2 py-0.5"
                >
                  {tool.pricing}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-white/70 leading-[1.6] mt-4">{tool.description}</p>
          
          {/* Tags (all, not truncated) */}
          {tool.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-white/50 px-2 py-1 rounded-full border border-white/10 bg-white/[0.02]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-t border-white/10">
          <ExternalLinkButton 
            label={`Visit ${tool.name}`} 
            href={tool.url}
          />
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 border border-white/15 text-white text-sm font-medium px-4 py-3 hover:bg-white/5 transition-colors"
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4" /> Link copied!
              </>
            ) : (
              <>
                <Link2 className="w-4 h-4" /> Copy link
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

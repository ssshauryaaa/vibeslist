"use client"

import FeaturedStrip from '@/components/featured-strip';
import ToolsDirectory from '@/components/tools-directory';
import CtaFooter from '@/components/cta-footer';
import FeaturedCards from '@/components/featured-cards';
import { PixelCanvas } from '@/components/ui/pixel-canvas';

export default function Home() {
  return (
    <>
      <CtaFooter />
      
      <div className="relative w-full overflow-hidden bg-[#070707] border-t border-white/5">
        <PixelCanvas
          variant="glow"
          colors={["#e879f9", "#a78bfa", "#38bdf8", "#22d3ee"]}
          gap={8}
          speed={0.015}
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <FeaturedCards />
          <FeaturedStrip />
          <ToolsDirectory />
        </div>
      </div>
    </>
  );
}
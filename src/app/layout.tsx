import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import AnimatedBackground from '@/components/animated-background';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vibes.List',
  description: 'A curated, manually-maintained list of "vibe coding" tools (AI coding assistants, AI app builders, AI IDEs, agentic coders, prompt-to-app tools, etc.)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white`}>
        {/* SVG Noise Filter */}
        <svg className="absolute w-0 h-0">
          <filter id="grain-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </svg>

        {/* Global Background Layers */}
        <div className="fixed inset-0 pointer-events-none z-0 aria-hidden">
          {/* Animated gradient mesh */}
          <AnimatedBackground />

          {/* Subtle full-screen grid pattern overlay */}
          <div className="absolute inset-0 -z-0 overflow-hidden">
            <div className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '64px 64px',
                opacity: 0.3,
                maskImage: `radial-gradient(circle at center, transparent 0%, black 20%)`,
                maskSize: '200% 200%',
                maskPosition: 'center',
              }}
            />
          </div>

          {/* Hidden-on-mobile fixed vertical guide lines */}
          <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
          <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />
        </div>

        {/* Page Content */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
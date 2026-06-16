"use client";

import { motion } from "motion/react";
import type { ToolCategory } from "@/types/tool";

interface ToolMockupProps {
  name: string;
  category: ToolCategory;
  url: string;
  tagline: string;
}

// Deterministic gradients based on name hash
export function getBrandGradient(name: string) {
  const gradients = [
    "from-pink-500/20 via-purple-500/10 to-transparent",
    "from-violet-500/20 via-indigo-500/10 to-transparent",
    "from-cyan-500/20 via-blue-500/10 to-transparent",
    "from-emerald-500/20 via-teal-500/10 to-transparent",
    "from-amber-500/20 via-orange-500/10 to-transparent",
    "from-rose-500/20 via-red-500/10 to-transparent",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
}

export function getBrandSolidGradient(name: string) {
  const gradients = [
    "from-pink-500 to-purple-600",
    "from-violet-500 to-indigo-600",
    "from-cyan-500 to-blue-600",
    "from-emerald-500 to-teal-600",
    "from-amber-500 to-orange-600",
    "from-rose-500 to-red-600",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
}

export function getBrandColor(name: string) {
  const colors = [
    "#ec4899", // pink
    "#8b5cf6", // violet
    "#06b6d4", // cyan
    "#10b981", // emerald
    "#f59e0b", // amber
    "#f43f5e", // rose
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export default function ToolMockup({ name, category, url, tagline }: ToolMockupProps) {
  const brandGradient = getBrandGradient(name);
  const brandColor = getBrandColor(name);

  // Render content based on category
  const renderMockupContent = () => {
    switch (category) {
      case "AI Code Editors":
      case "Agentic Coders":
      case "Code Assistants":
        return (
          // IDE Editor Shell
          <div className="flex h-full w-full bg-[#101010] text-[9px] font-mono text-white/40 select-none">
            {/* Sidebar */}
            <div className="w-16 border-r border-white/5 bg-[#0b0b0b] p-1.5 flex flex-col gap-1.5 shrink-0">
              <div className="text-[7px] uppercase font-semibold text-white/20 tracking-wider mb-1">Explorer</div>
              <div className="flex items-center gap-1 text-white/50"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" /> index.ts</div>
              <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded bg-blue-500/40" /> styles.css</div>
              <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded bg-purple-500/40" /> config.json</div>
            </div>
            
            {/* Main Editor */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#0d0d0d]">
              {/* Tab Bar */}
              <div className="h-5 border-b border-white/5 bg-[#090909] flex items-center px-2 gap-1 text-[8px]">
                <span className="text-white/60 bg-[#0d0d0d] px-2 py-0.5 border-t border-purple-500/80 rounded-t flex items-center gap-1">
                  index.ts <span className="text-white/20">×</span>
                </span>
              </div>
              
              {/* Code text lines */}
              <div className="p-2 flex flex-col gap-1 overflow-hidden font-mono text-white/30">
                <div className="text-purple-400/80">import <span className="text-blue-400">{"{ useState }"}</span> from <span className="text-emerald-400">"react"</span>;</div>
                <div className="text-purple-400/80">import <span className="text-blue-400">{"{ agent }"}</span> from <span className="text-emerald-400">"@/core"</span>;</div>
                <div className="mt-1 text-white/20">// Initialize {name} agent</div>
                <div><span className="text-purple-400/80">const</span> <span className="text-blue-400">run =</span> <span className="text-yellow-400/80">async</span> () =&gt; {"{"}</div>
                <div className="pl-3 text-purple-400/80">await <span className="text-yellow-400/80">agent</span>.execute({"{"}</div>
                <div className="pl-6 text-white/40">prompt: <span className="text-emerald-400">"Build dynamic UI..."</span></div>
                <div className="pl-3">{"});"}</div>
                <div>{"};"}</div>
              </div>
            </div>

            {/* AI Panel */}
            <div className="w-24 border-l border-white/5 bg-[#090909] p-1.5 flex flex-col gap-1.5 shrink-0">
              <div className="text-[7px] uppercase font-semibold text-white/20 tracking-wider flex justify-between items-center">
                <span>AI Chat</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              
              {/* Chat bubbles */}
              <div className="flex-1 flex flex-col gap-1.5 overflow-hidden mt-1">
                <div className="bg-white/5 rounded p-1 text-[7px] text-white/70">
                  <span className="font-semibold text-white/30 block mb-0.5">User</span>
                  Refactor the layout component
                </div>
                <div className="bg-purple-900/10 border border-purple-500/20 rounded p-1 text-[7px] text-white/80">
                  <span className="font-semibold text-purple-400/60 block mb-0.5">{name}</span>
                  Refactoring... Generated layout.tsx successfully.
                </div>
              </div>
            </div>
          </div>
        );

      case "Prompt-to-App":
      case "No-Code AI Builders":
        return (
          // App Generation Shell
          <div className="flex flex-col h-full w-full bg-[#0a0a0a] text-[9px] font-sans text-white/50 select-none p-2 gap-2 justify-between">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded bg-purple-500" />
                <span className="text-[8px] font-semibold text-white/70">Generation Workspace</span>
              </div>
              <div className="flex items-center gap-1 text-[7px] bg-white/5 px-1.5 py-0.5 rounded text-white/40">
                <span>React + Vite</span>
              </div>
            </div>

            {/* Generated Mock Interface */}
            <div className="flex-1 border border-white/5 bg-[#101010] rounded p-2 flex flex-col gap-1.5 justify-center items-center">
              <div className="w-full flex items-center justify-between">
                <div className="h-2 w-8 bg-white/10 rounded" />
                <div className="flex gap-1">
                  <div className="h-2 w-4 bg-white/10 rounded" />
                  <div className="h-2 w-4 bg-white/10 rounded" />
                </div>
              </div>
              <div className="w-full border border-white/5 bg-[#0c0c0c] rounded p-1.5 flex flex-col gap-1 items-center justify-center text-center">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 mb-1" />
                <div className="h-2 w-16 bg-white/15 rounded" />
                <div className="h-1 w-24 bg-white/5 rounded mt-0.5" />
              </div>
            </div>

            {/* Input Prompt bar */}
            <div className="flex items-center gap-1 bg-[#121212] border border-white/10 rounded-full px-2 py-1">
              <span className="text-[7px] text-white/20 select-none">✨ Prompt:</span>
              <div className="flex-1 text-[8px] text-white/80 overflow-hidden whitespace-nowrap text-ellipsis">
                "Create a SaaS dashboard with interactive analytics charts"
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
            </div>
          </div>
        );

      case "Design-to-Code":
        return (
          // Design to Code Split Screen
          <div className="flex h-full w-full bg-[#0d0d0d] text-[9px] font-mono select-none">
            {/* Design Panel */}
            <div className="flex-1 bg-[#131313] p-2 flex flex-col gap-1.5 border-r border-white/5">
              <div className="text-[7px] font-semibold text-white/30 uppercase tracking-wider mb-0.5">Design Sandbox</div>
              
              {/* Design Canvas Element */}
              <div className="flex-1 border border-dashed border-white/10 rounded flex flex-col items-center justify-center p-2 relative bg-[#1c1c1c]/30">
                <div className="w-16 h-10 border border-purple-500/40 bg-purple-500/5 rounded flex flex-col justify-between p-1.5">
                  <div className="flex gap-1 justify-between">
                    <span className="w-2 h-2 rounded-full bg-purple-500/50" />
                    <span className="w-4 h-1 bg-white/20 rounded" />
                  </div>
                  <div className="w-full h-2 bg-purple-500/20 rounded" />
                </div>
                <span className="absolute top-1 left-1 text-[6px] text-purple-400 bg-purple-950/40 border border-purple-500/30 px-1 rounded">HeroSection</span>
              </div>
            </div>

            {/* Code Output Panel */}
            <div className="flex-1 bg-[#090909] p-2 flex flex-col gap-1.5">
              <div className="text-[7px] font-semibold text-white/30 uppercase tracking-wider mb-0.5">Generated Code</div>
              
              {/* Syntax Highlighting */}
              <div className="flex-1 flex flex-col gap-1 overflow-hidden font-mono text-[7px] text-white/20">
                <div><span className="text-blue-400">export default function</span> <span className="text-yellow-400">Hero</span>() {"{"}</div>
                <div className="pl-2">return (</div>
                <div className="pl-4 text-purple-400">&lt;<span className="text-blue-400">section</span> <span className="text-cyan-400">className</span>=<span className="text-emerald-400">"relative"</span>&gt;</div>
                <div className="pl-6 text-purple-400">&lt;<span className="text-blue-400">div</span> <span className="text-cyan-400">className</span>=<span className="text-emerald-400">"container"</span>&gt;</div>
                <div className="pl-8 text-purple-400">&lt;<span className="text-blue-400">h1</span>&gt;Stunning Design&lt;/<span className="text-blue-400">h1</span>&gt;</div>
                <div className="pl-6 text-purple-400">&lt;/<span className="text-blue-400">div</span>&gt;</div>
                <div className="pl-4 text-purple-400">&lt;/<span className="text-blue-400">section</span>&gt;</div>
                <div className="pl-2">);</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        );

      case "Dev Tools & Infra":
      default:
        return (
          // Terminal/Logs shell
          <div className="flex flex-col h-full w-full bg-[#08090a] text-[9px] font-mono text-emerald-400/90 select-none p-2 gap-1.5">
            {/* Header */}
            <div className="flex items-center gap-1.5 border-b border-white/5 pb-1 text-white/30 text-[8px]">
              <span className="w-1.5 h-1.5 rounded bg-emerald-500/50" />
              <span>terminal</span>
              <span className="text-white/10">|</span>
              <span>deploy-logs</span>
            </div>

            {/* Terminal Lines */}
            <div className="flex-1 flex flex-col gap-0.5 overflow-hidden">
              <div className="text-white/30">$ npm run deploy</div>
              <div className="text-white/60">ℹ  Analyzing project structure...</div>
              <div>✔  Created optimized production build</div>
              <div>✔  Assets uploaded (2.4 MB)</div>
              <div className="text-white/60">ℹ  Deploying to Edge network...</div>
              <div className="text-cyan-400">✔  Deployment successful!</div>
              <div className="text-white/30">$ curl {url}</div>
              <div className="text-white/70">HTTP/1.1 200 OK</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-full bg-[#0c0c0d] flex flex-col overflow-hidden">
      {/* Decorative Brand Gradient underlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${brandGradient} opacity-50 z-0`} />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px] z-0" />
      
      {/* Browser Chrome Header */}
      <div className="relative z-10 h-6 border-b border-white/5 bg-black/30 backdrop-blur-sm px-2 flex items-center justify-between shrink-0">
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
        </div>
        <div className="bg-white/5 border border-white/5 text-[7px] text-white/30 px-3 py-0.5 rounded-full max-w-[120px] overflow-hidden whitespace-nowrap text-ellipsis font-mono">
          {url.replace("https://", "")}
        </div>
        <div className="w-5" />
      </div>

      {/* Content Space */}
      <div className="relative z-10 flex-1 overflow-hidden p-1.5">
        <div className="w-full h-full rounded-lg border border-white/5 overflow-hidden shadow-inner bg-black/20">
          {renderMockupContent()}
        </div>
      </div>

      {/* Overlay brand logo mark & title */}
      <div className="absolute bottom-1 right-2 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 text-[8px] font-mono text-white/80">
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: brandColor }} />
        <span>{name} mockup</span>
      </div>
    </div>
  );
}

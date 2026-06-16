"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import type { Tool } from "@/types/tool";
import { tools } from "@/data/tools";
import ToolCard from "@/components/tool-card";
import ToolDialog from "@/components/tool-dialog";
import SectionEyebrow from "@/components/shared/section-eyebrow";

const categories: string[] = [
  "AI Code Editors",
  "Agentic Coders",
  "Prompt-to-App",
  "Code Assistants",
  "Design-to-Code",
  "No-Code AI Builders",
  "Dev Tools & Infra",
];

export default function ToolsDirectory() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((tool) =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (activeTab !== "All") {
      filtered = filtered.filter((tool) => tool.category === activeTab);
    }

    return filtered;
  }, [activeTab, searchQuery, tools]);

  const lastUpdatedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <motion.section
        id="tools"
        className="max-w-6xl mx-auto px-6 py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionEyebrow label="The directory" tag={`Updated ${lastUpdatedDate}`} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            Every tool,{' '}
            <br />
            one place.
          </h2>
          <p className="mt-4 text-white/60 max-w-md">
            Browse by category, or search above. Click any card to see a full screenshot and notes.
          </p>

          {/* Search bar */}
          <div className="mt-6 liquid-glass rounded-full px-5 py-3 flex items-center gap-3 w-full max-w-xl">
            <input
              type="text"
              placeholder="Search tools, tags, categories..."
              className="bg-transparent outline-none text-sm w-full placeholder:text-white/40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="liquid-glass rounded-full p-1 inline-flex gap-1 overflow-x-auto mb-4">
            <button
              onClick={() => setActiveTab("All")}
              className={`px-4 py-2 text-sm text-white/60 ${activeTab === "All"
                ? "bg-white text-black font-medium"
                : "hover:bg-white/10 hover:text-white"
              } transition-colors whitespace-nowrap`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 text-sm text-white/60 ${activeTab === category
                  ? "bg-white text-black font-medium"
                  : "hover:bg-white/10 hover:text-white"
                } transition-colors whitespace-nowrap`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onClick={() => {
                  setSelectedTool(tool);
                  setDialogOpen(true);
                }}
              />
            ))
          ) : (
            <div className="col-span-3 liquid-glass rounded-2xl p-10 text-center text-white/50 text-sm">
              No tools match your search yet. Try a different term or category.
            </div>
          )}
        </motion.div>
      </motion.section>

      {/* Dialog */}
      {selectedTool && dialogOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 cursor-pointer"
          onClick={() => {
            setSelectedTool(null);
            setDialogOpen(false);
          }}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl cursor-default">
            <ToolDialog
              tool={selectedTool}
              onOpenChange={(open) => {
                if (!open) {
                  setSelectedTool(null);
                  setDialogOpen(false);
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
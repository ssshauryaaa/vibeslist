export interface Tool {
  id: string;            // slug, e.g. "cursor"
  name: string;          // "Cursor"
  url: string;           // "https://cursor.com"
  tagline: string;       // short one-liner
  description: string;   // 2-4 sentence description
  category: ToolCategory;
  tags: string[];        // e.g. ["IDE", "Autocomplete", "Agent mode"]
  pricing: "Free" | "Freemium" | "Paid" | "Open Source";
  screenshot: string;    // path under /public/screenshots/{id}.png
  logo?: string;         // optional path under /public/logos/{id}.png
  featured?: boolean;    // shows in hero "featured" strip
  addedAt: string;       // ISO date, used for "New" badge + sorting
}

export type ToolCategory =
  | "AI Code Editors"
  | "Agentic Coders"
  | "Prompt-to-App"
  | "Code Assistants"
  | "Design-to-Code"
  | "No-Code AI Builders"
  | "Dev Tools & Infra";

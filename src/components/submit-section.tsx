"use client";

import { motion } from 'motion/react';
import { useState } from 'react';

export default function SubmitSection() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For now, just log to console or send to API
    console.log('Submitting tool:', { name, url, description });
    
    // In a real app, this would be:
    // await fetch('/api/submit', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, url, description })
    // });
    
    // Reset form
    setName('');
    setUrl('');
    setDescription('');
    setIsSubmitting(false);
    
    // Show success message (could use a toast or similar)
    alert('Thank you for your submission! We\'ll review it soon.');
  };

  return (
    <motion.section
      id="submit"
      className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden">
        {/* Faint radial glow overlay */}
        <div className="absolute inset-0 -z-0"
          style={{
            background: 'radial-gradient(600px circle at 50% 0%, rgba(124,92,255,0.18), transparent 70%)',
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Know a tool<br />
            we&apos;re missing?
          </h2>
          <p className="mt-4 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            This list is hand-checked, so submissions take a little time to review — but we read every one.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="tool-name" className="block text-sm font-medium text-white/70">
                Tool name
              </label>
              <input
                id="tool-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter tool name"
                className="w-full liquid-glass rounded-full px-5 py-3 text-white outline-none placeholder:text-white/40"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="tool-url" className="block text-sm font-medium text-white/70">
                Tool URL
              </label>
              <input
                id="tool-url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full liquid-glass rounded-full px-5 py-3 text-white outline-none placeholder:text-white/40"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="tool-description" className="block text-sm font-medium text-white/70">
                Why is this tool great?
              </label>
              <textarea
                id="tool-description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell us what makes this tool special..."
                className="w-full liquid-glass rounded-full px-5 py-3 text-white outline-none placeholder:text-white/40"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${isSubmitting ? 'opacity-50' : ''}`}
            >
              {isSubmitting ? (
                <span className="animate-spin w-4 h-4" />
              ) : (
                <>
                  Send suggestion
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

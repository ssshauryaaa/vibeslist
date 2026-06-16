"use client";

import React, { useState } from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ArrowUpRight } from "lucide-react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setSending(false);
    }
  };

  const inputClasses =
    "w-full bg-white/[0.04] border border-white/10 rounded-md px-2.5 py-1.5 text-[10px] text-white placeholder:text-white/20 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-4 py-6">
        <div className="w-10 h-10 mb-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-sm font-semibold text-white mb-1">Message sent!</h3>
        <p className="text-white/40 text-[10px] max-w-[200px] leading-relaxed mb-3">
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
          }}
          className="text-[10px] text-white/50 border border-white/10 rounded-full px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 w-full">
      {/* Header */}
      <div className="text-center mb-1">
        <h2 className="text-xs font-semibold text-white tracking-tight leading-tight">
          Send us a message
        </h2>
        <p className="text-white/45 text-[8.5px] mt-0.5">
          We&apos;d love to hear from you.
        </p>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-0.5">
          <label htmlFor="screen-name" className="text-[8px] text-white/30 tracking-widest uppercase pl-0.5">Name</label>
          <input id="screen-name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" className={inputClasses} />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="screen-email" className="text-[8px] text-white/30 tracking-widest uppercase pl-0.5">Email</label>
          <input id="screen-email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@email.com" className={inputClasses} />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-0.5">
        <label htmlFor="screen-message" className="text-[8px] text-white/30 tracking-widest uppercase pl-0.5">Message</label>
        <textarea
          id="screen-message"
          name="message"
          required
          rows={2}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you're thinking..."
          className={`${inputClasses} resize-none`}
        />
      </div>
      {/* Error Message */}
      {errorMsg && (
        <p className="text-[9px] text-red-400 text-center font-medium animate-pulse">
          {errorMsg}
        </p>
      )}

      {/* Submit with Moving Border */}
      <MovingBorderButton
        type="submit"
        disabled={sending}
        borderRadius="0.375rem"
        duration={3000}
        containerClassName="w-full h-8 text-[10px] font-semibold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        borderClassName="bg-[radial-gradient(#a855f7_45%,transparent_65%)]"
        className="bg-gradient-to-r from-[#1b0d38]/95 via-[#13092b]/95 to-[#0b051f]/95 border border-white/10 text-white font-semibold shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.2)] hover:from-[#25124c] hover:via-[#1a0c3c] hover:to-[#11072b] transition-all duration-300 active:scale-[0.98]"
      >
        <span className="flex items-center justify-center gap-1.5">
          {sending ? (
            <>
              <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowUpRight className="h-3 w-3" />
            </>
          )}
        </span>
      </MovingBorderButton>

      {/* Footer info */}
      <div className="flex items-center justify-center gap-3 text-[8px] text-white/20 mt-3.5">
        <div className="flex items-center gap-1">
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          shauryaa104@gmail.com
        </div>
        <span className="text-white/10">|</span>
        <div className="flex items-center gap-1">
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          New Delhi, IND
        </div>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#020202]">
      {/* Full-page animated beams background — dimmed for darker feel */}
      <BackgroundBeams className="fixed inset-0 z-0 opacity-60" />

      {/* MacBook Scroll — no title, smaller, centered */}
      <MacbookScroll
        title={null}
        showGradient={false}
        size="small"
      >
        <div className="flex flex-col items-center justify-center min-h-full w-full">
          <ContactForm />
        </div>
      </MacbookScroll>

      {/* Bottom spacer */}
      <div className="h-20" />
    </div>
  );
}

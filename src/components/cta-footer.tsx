"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Hls from "hls.js";

const CtaFooter = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, []);

  return (
    <section className="relative min-h-screen py-32 px-6 md:px-16 lg:px-24 text-center overflow-hidden">
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: '200px', background: 'linear-gradient(to top, black, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-[calc(100vh-16rem)] flex flex-col justify-between gap-12">
        {/* Top: Header & Description */}
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] max-w-3xl mx-auto mb-4">
            Your next AI coding tool starts here.
          </h2>
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mx-auto">
            Explore the directory. See what AI&#8209;powered coding can do. No commitment, no pressure. Just possibilities.
          </p>
        </div>

        {/* Bottom: Buttons */}
        {/* <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={() => {
                const el = document.getElementById("tools");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#tools";
                }
              }}
              className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body cursor-pointer"
            >
              Explore Tools
              <ArrowUpRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => window.location.href = "/contact"}
              className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors font-body cursor-pointer"
            >
              Submit a Tool
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CtaFooter;
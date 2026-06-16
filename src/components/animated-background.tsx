"use client";

import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-0 -z-0 blur-[120px] opacity-20"
        style={{
          background: `radial-gradient(circle at 20% 30%, #7C5CFF 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, #22D3EE 0%, transparent 50%)`,
        }}
        whileInView={{ x: [-40, 40], y: [-40, 40] }}
        viewport={{ once: false }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
    </div>
  );
}

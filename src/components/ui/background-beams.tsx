"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const paths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
      "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
      "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
      "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
      "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
      "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
    ];
    return (
      <div
        className={cn(
          "absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px]",
          className,
        )}
      >
        <svg
          className="pointer-events-none absolute z-0 h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={paths.join(" ")}
            stroke="url(#paint0_radial_242_278)"
            strokeOpacity="0.06"
            strokeWidth="0.5"
          ></path>

          {paths.map((path, index) => (
            <React.Fragment key={`path-group-${index}`}>
              {/* Blur Bloom Path */}
              <motion.path
                d={path}
                stroke={`url(#linearGradient-${index})`}
                strokeOpacity="0.18"
                strokeWidth="4"
              />
              {/* Bright Core Path */}
              <motion.path
                d={path}
                stroke={`url(#linearGradient-${index})`}
                strokeOpacity="0.85"
                strokeWidth="0.8"
              />
            </React.Fragment>
          ))}
          <defs>
            {paths.map((_path, index) => (
              <motion.linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                initial={{
                  x1: "0%",
                  x2: "0%",
                  y1: "0%",
                  y2: "0%",
                }}
                animate={{
                  x1: ["0%", "100%"],
                  x2: ["0%", "95%"],
                  y1: ["0%", "100%"],
                  y2: ["0%", `${93 + Math.random() * 8}%`],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: Math.random() * 10,
                }}
              >
                <stop stopColor="#ffffff" stopOpacity="0"></stop>
                <stop stopColor="#ffffff" stopOpacity="0.8"></stop>
                <stop offset="32.5%" stopColor="#ffffff" stopOpacity="0.9"></stop>
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0"></stop>
              </motion.linearGradient>
            ))}

            <radialGradient
              id="paint0_radial_242_278"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
            >
              <stop offset="0.0666667" stopColor="#ffffff"></stop>
              <stop offset="0.243243" stopColor="#ffffff"></stop>
              <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  },
);

BackgroundBeams.displayName = "BackgroundBeams";

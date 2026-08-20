"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/**
 * Garis Senyuman — a thin teal arc that draws itself as the visitor scrolls,
 * completing into a smile near the CTA. Reduced-motion: renders fully drawn.
 */
export function SmileArc() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const raw = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.6 });
  const pathLength = reduce ? 1 : raw;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 h-full w-[min(92vw,1200px)] z-0 select-none"
    >
      <svg
        viewBox="0 0 1200 4000"
        preserveAspectRatio="none"
        className="h-full w-full opacity-60"
        fill="none"
      >
        <motion.path
          d="M 100 80 C 480 320, 720 520, 620 900 C 520 1280, 160 1420, 300 1900 C 430 2340, 880 2380, 940 2820 C 985 3160, 700 3480, 480 3620 C 380 3690, 300 3720, 260 3740"
          stroke="var(--color-accent)"
          strokeOpacity="0.18"
          strokeWidth="10"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <motion.path
          d="M 100 80 C 480 320, 720 520, 620 900 C 520 1280, 160 1420, 300 1900 C 430 2340, 880 2380, 940 2820 C 985 3160, 700 3480, 480 3620 C 380 3690, 300 3720, 260 3740"
          stroke="var(--color-accent)"
          strokeOpacity="0.35"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}

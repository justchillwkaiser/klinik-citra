"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Soft word-by-word reveal for the hero headline.
 * Reduced-motion: renders instantly, no animation.
 */
export function HeroReveal({ text, className = "" }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          aria-hidden="true"
          className="inline-block will-change-transform"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.08 + i * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}

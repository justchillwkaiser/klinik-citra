"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Subtle page transition: short fade+rise on every route change.
 * Reduced-motion: renders instantly with no animation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

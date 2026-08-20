"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Count-up number when it enters the viewport.
 * Reduced-motion: shows the final value immediately.
 */
export function StatCount({
  value,
  suffix = "",
  duration = 1.2,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      // Reduced-motion: jump straight to the final value via rAF to avoid
      // synchronous setState inside the effect body.
      const rafId = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(rafId);
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("ms-MY")}
      {suffix}
    </span>
  );
}

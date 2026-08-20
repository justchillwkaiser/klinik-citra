"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Star, Users } from "@phosphor-icons/react";

/**
 * Hero visual: "Arch Gerbang Senyuman".
 * The frame is a rounded arch (dental arch / smile silhouette) rather than a
 * generic blob. The image sits inside in duotone teal so it never fights the
 * palette. The smile-arc line visually exits the arch's curve on scroll.
 */
export function HeroVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <div
      ref={wrapRef}
      className="relative flex items-center justify-center px-6 pt-2 pb-8 md:p-12 bg-cream overflow-hidden"
    >
      {/* Ambient halo behind the arch */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[70%] aspect-square rounded-full bg-accent-soft/60 blur-3xl" />
      </div>

      <motion.figure
        style={{ y }}
        className="relative w-[72%] max-w-[380px] md:max-w-[420px] md:mr-6"
      >
        {/* Arch frame */}
        <div
          className="relative aspect-[3/4] overflow-hidden border border-line shadow-2xl"
          style={{
            borderRadius: "999px 999px 24px 24px",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=1000&auto=format&fit=crop&q=80"
            alt="Doktor pergigian Klinik Citra sedang merawat pesakit dengan berhati-hati"
            fill
            priority
            sizes="(max-width: 768px) 78vw, 40vw"
            className="object-cover object-[50%_35%]"
          />
          {/* Duotone grade: teal shadows, cream highlights */}
          <div
            aria-hidden="true"
            className="absolute inset-0 mix-blend-multiply"
            style={{
              background:
                "linear-gradient(180deg, rgba(13,110,95,0.10) 0%, rgba(13,110,95,0.22) 55%, rgba(10,90,78,0.38) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 60% at 50% 0%, rgba(250,248,245,0.18) 0%, transparent 55%)",
            }}
          />
          {/* Inner arch hairline for a finished, framed feel */}
          <div
            aria-hidden="true"
            className="absolute inset-3 border border-white/40"
            style={{ borderRadius: "999px 999px 18px 18px" }}
          />
        </div>

        {/* Stat panel: structured, bottom-centre, overlaps the arch base */}
        <div className="relative z-10 mx-auto -mt-10 w-[92%] rounded-2xl border border-line bg-surface/95 backdrop-blur-sm shadow-xl">
          <div className="grid grid-cols-2 divide-x divide-line">
            <div className="flex items-center gap-3 px-5 py-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft">
                <Star size={18} weight="fill" className="text-accent" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-taupe-faint">
                  Rating Pesakit
                </p>
                <p className="text-base font-bold text-accent leading-tight">4.9/5.0</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft">
                <Users size={18} weight="fill" className="text-accent" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-taupe-faint">
                  Pesakit Dilayan
                </p>
                <p className="text-base font-bold text-accent leading-tight">5,000+</p>
              </div>
            </div>
          </div>
        </div>
      </motion.figure>
    </div>
  );
}

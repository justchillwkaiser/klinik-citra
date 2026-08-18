"use client";

import { useEffect, useRef } from "react";
import { Star, User } from "@phosphor-icons/react";

export function HeroParallax() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (imageRef.current) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            imageRef.current.style.transform = `scale(1.1) translateY(${rate}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative w-[90%] h-[85%] overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-cream">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80"
          alt="Klinik pergigian moden"
          className="w-full h-full object-cover scale-110 transition-transform duration-100"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent" />
      </div>

      <div className="absolute bottom-10 right-10 flex flex-col gap-2 z-10">
        <div className="flex items-center gap-2.5 px-3 py-2.5 bg-white/85 backdrop-blur-sm rounded-lg border border-white/50">
          <div className="w-8 h-8 bg-accent-soft rounded-md grid place-items-center">
            <Star size={16} weight="fill" className="text-accent" />
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-taupe-faint">
              Rating Pesakit
            </p>
            <p className="text-sm font-bold text-accent">4.9/5.0</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-2.5 bg-white/85 backdrop-blur-sm rounded-lg border border-white/50">
          <div className="w-8 h-8 bg-accent-soft rounded-md grid place-items-center">
            <User size={16} weight="fill" className="text-accent" />
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-taupe-faint">
              Pesakit Dilayan
            </p>
            <p className="text-sm font-bold text-accent">5,000+</p>
          </div>
        </div>
      </div>
    </>
  );
}

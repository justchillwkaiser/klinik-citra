import { Star } from "lucide-react";

/* Rating stars — $star color, used in hero trust, rating summary and review cards */

export function Stars({ size = 16, count = 5 }: { size?: number; count?: number }) {
  return (
    <div className="flex items-center" style={{ gap: size >= 20 ? 4 : 3 }} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="fill-star text-star" />
      ))}
    </div>
  );
}

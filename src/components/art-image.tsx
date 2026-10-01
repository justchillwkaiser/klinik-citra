import Image from "next/image";

/* Photography — one consistent photo per slot across mobile / tablet / desktop.
   Requires a positioned parent (relative) because next/image uses fill. */

export function ArtImage({
  alt,
  src,
  className = "",
  priority = false,
  sizes = "100vw",
}: {
  alt: string;
  src: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}

import { Phone } from "lucide-react";
import { ButtonPrimary, ExternalButton } from "@/components/button";

/* M Sticky CTA — persistent booking bar on mobile (klinikcitra.pen) */

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2.5 border-t border-border bg-surface px-4 py-3 md:hidden">
      <ExternalButton
        href="tel:+6052558899"
        variant="secondary"
        fullWidth
        icon={<Phone size={18} className="text-primary" aria-hidden="true" />}
      >
        Panggil
      </ExternalButton>
      <ButtonPrimary href="/booking" fullWidth>
        Tempah temujanji
      </ButtonPrimary>
    </div>
  );
}

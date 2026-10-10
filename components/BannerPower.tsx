import Image from "next/image";

/* ==========================================================================
   BANNER — "Drones Solutions for the Power Transmission Infrastructure"

   Photography variant: the banner is a single prepared PNG that already
   contains the tri-colour diagonal backdrop, the headline with its cyan
   accent, the rule and the sub-copy. Nothing here draws text or wedges —
   the image IS the banner.

   Server component — no state. The whole card is a single link (href is a
   placeholder "#" for now) and the image zooms slightly on hover. Render it
   wherever it fits; it sizes itself to its container.

   The PNG is 1040x313 (3.32:1) and is rendered at its intrinsic aspect
   ratio, so the card's height comes from the image. That is why CARD has
   no min-height: a min-height taller than the image would leave a white
   strip beneath it.
   ========================================================================== */

/* The card IS the link (`group`, so the whole banner is one hit area) and
   keeps the rounded corners, shadow and entry animation the rest of the page
   expects. overflow-hidden clips the image to the radius — which is also what
   keeps the hover zoom inside the frame instead of spilling over the sections
   either side. `block` because the element is now an <a>: an inline anchor
   wrapping a block image would leave a baseline gap underneath. */
const CARD =
  "group relative block [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] overflow-hidden rounded-lg bg-white shadow-[0_12px_32px_rgba(10,25,45,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1cbbe3]";

/* Block-level so the image takes the full card width without an inline-image
   baseline gap; h-auto keeps the 3.32:1 ratio at every width.

   HOVER: group-hover:scale-105 grows the image inside the clipped card, and
   transition-transform eases it in and back out. transform-gpu avoids the
   blur a composited scale can pick up mid-animation. */
const BANNER =
  "block h-auto w-full transition-transform duration-300 ease-out transform-gpu group-hover:scale-105";

/* Real intrinsic dimensions above are what reserve the layout box before
   the file decodes — no cumulative layout shift. sizes lets the optimizer
   pick a candidate close to the rendered width instead of always serving
   the full-size file. */
const SIZES = "(max-width: 860px) 100vw, 92vw";

/**
 * Image banner for power-transmission marketing blocks — clickable, zoom on hover.
 * Self-contained: export and render it anywhere inside a padded container.
 */
export default function BannerPower() {
  return (
    <a
      href="/industries"
      className={CARD}
      aria-label="Explore drone solutions for power transmission infrastructure"
    >
      <Image
        src="/media/Banner.png"
        alt="Drone solutions for the power transmission infrastructure — aerial stringing, pulling and material movement for transmission projects."
        width={1040}
        height={313}
        sizes={SIZES}
        className={BANNER}
      />
    </a>
  );
}

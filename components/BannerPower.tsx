import Image from "next/image";

/* ==========================================================================
   BANNER — "Drones Solutions for the Power Transmission Infrastructure"

   Photography variant: the banner is a single prepared image that already
   contains the tri-colour diagonal backdrop, the headline with its cyan
   accent, the rule and the sub-copy. Nothing here draws text or wedges —
   the image IS the banner.

   Server component — no state. The whole card is a single link and the
   image zooms slightly on hover. Render it wherever it fits; it sizes
   itself to its container.

   The image is 2672x1024 (2.61:1). It fills the card's full width and its
   height follows from that ratio, so it is shown whole — never cropped —
   with no white space at either end.
   ========================================================================== */

/* The card IS the link (`group`, so the whole banner is one hit area) and
   keeps the rounded corners, shadow and entry animation the rest of the page
   expects. overflow-hidden clips the image to the radius, which also keeps
   the hover zoom inside the frame. `block` because the element is an <a>:
   an inline anchor wrapping a block image would leave a baseline gap. */
const CARD =
  "group relative block [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] overflow-hidden rounded-lg bg-white shadow-[0_12px_32px_rgba(10,25,45,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1cbbe3]";

/* w-full stretches the image across the whole card and h-auto lets the
   height follow the 2.61:1 source, so nothing is cropped and no white
   shows at the sides.

   HOVER: group-hover:scale-105 grows the image inside the clipped card, and
   transition-transform eases it in and back out. transform-gpu avoids the
   blur a composited scale can pick up mid-animation.

   If the banner gets too tall on wide screens, swap this for the capped
   version, which crops a little off the top and bottom instead:

   "block h-[clamp(220px,26vw,420px)] w-full object-cover object-center transition-transform duration-300 ease-out transform-gpu group-hover:scale-105" */
const BANNER =
  "block h-auto w-full transition-transform duration-300 ease-out transform-gpu group-hover:scale-105";

/* Real intrinsic dimensions reserve the layout box before the file decodes,
   so there is no cumulative layout shift. The image spans the full width of
   its container, so sizes tells the optimizer to pick a full-width candidate. */
const SIZES = "100vw";

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
        src="/image.png"
        alt="Drone solutions for the power transmission infrastructure — aerial stringing, pulling and material movement for transmission projects."
        width={2672}
        height={1024}
        sizes={SIZES}
        className={BANNER}
      />
    </a>
  );
}
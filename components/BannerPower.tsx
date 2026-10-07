import Button from "./ui/Button";

/* ==========================================================================
   BANNER — "Drones Solutions for the Power Transmission Infrastructure"

   Basic variant: no photography, just the tri-colour diagonal backdrop, the
   headline and the CTA. The three wedges are the reference's shapes recoloured
   to the site palette:

     bright red  -> #1cbbe3  (accent band, same family as --cyan)
     dark red    -> #204392
     black       -> #0f52a3

   Server component — no state. Render it wherever it fits; it sizes itself
   to its container.
   ========================================================================== */

/* The card fills its container; min-h gives the diagonal zone and the text
   something to sit in, and relaxes on mobile where the layout stacks. */
const CARD =
  "relative animate-hh-fade overflow-hidden rounded-lg bg-white shadow-[0_12px_32px_rgba(10,25,45,0.12)] min-h-[clamp(340px,30vw,460px)] max-[860px]:min-h-0";

/* Diagonals: three full-card layers, each carved with clip-path. Percentages
   are of the whole card, so the sweep scales with the banner. Three parallel
   bands leaning left as they descend, stepping right in colour depth. Hidden
   on mobile, where the stacked layout has no diagonal zone. */
const WEDGE_BASE = "pointer-events-none absolute inset-0 max-[860px]:hidden";

/* Accent band, anchored to the left edge — the front, brightest shape. */
const WEDGE_ACCENT = `${WEDGE_BASE} bg-[#1cbbe3] [clip-path:polygon(0_0,26%_0,14%_100%,0_100%)]`;

/* Mid band: parallel to the accent and touching its right edge (26/14), so
   the two read as one stepped diagonal. */
const WEDGE_MID = `${WEDGE_BASE} bg-[#204392] [clip-path:polygon(26%_0,42%_0,30%_100%,14%_100%)]`;

/* Deep band: closes the sweep at 54% and hands over to the white content
   area. */
const WEDGE_DARK = `${WEDGE_BASE} bg-[#0f52a3] [clip-path:polygon(42%_0,54%_0,42%_100%,30%_100%)]`;

/* Content track. Starts clear of the wedges (58%) on desktop, full width on
   mobile. text-[#0f52a3] is on the WRAPPER, not the heading: the global h1–h6
   rule in globals.css forces `color: inherit` unlayered, so a colour utility
   on the h2 itself would lose — inheritance from this div is what makes the
   headline navy. The accent span is not a heading, so its own colour utility
   applies normally. */
const CONTENT =
  "relative z-10 ml-[58%] w-[42%] flex flex-col justify-center gap-[clamp(18px,2.2vw,30px)] py-[clamp(44px,5vw,72px)] pl-[clamp(16px,2vw,28px)] pr-[clamp(24px,3vw,48px)] text-[#0f52a3] max-[860px]:ml-0 max-[860px]:w-full max-[860px]:px-[clamp(20px,5vw,32px)] max-[860px]:py-[clamp(36px,7vw,52px)]";

/* Sized from the root ramp (this component may be rendered outside any
   section's type overrides). uppercase matches the reference's treatment. */
const HEADLINE =
  "m-0 text-[length:calc(var(--fs-h2)*1.1)] uppercase leading-[1.12]";

const ACCENT = "text-[#1cbbe3]";

const CTA = "mt-[clamp(4px,0.5vw,8px)] self-start";

/**
 * Diagonal colour banner for power-transmission marketing blocks.
 * Self-contained: export and render it anywhere inside a padded container.
 */
export default function BannerPower() {
  return (
    <div className={CARD}>
      {/* Diagonal backdrop */}
      <div className={WEDGE_MID} aria-hidden="true" />
      <div className={WEDGE_ACCENT} aria-hidden="true" />
      <div className={WEDGE_DARK} aria-hidden="true" />

      {/* Headline + CTA */}
      <div className={CONTENT}>
        <h2 className={HEADLINE}>
          Drones Solutions for the{" "}
          <span className={ACCENT}>Power Transmission Infrastructure</span>
        </h2>

        <Button href="#industries" tone="onLight" size="lg" withArrow className={CTA}>
          Explore More
        </Button>
      </div>
    </div>
  );
}

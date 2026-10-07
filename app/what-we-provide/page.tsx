import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";

import {
  Bullet,
  Bullets,
  ClosingCTA,
  PageHero,
  Section,
} from "./ui";

export const metadata: Metadata = {
  title: "What We Provide | Drone Products & Services | Himalayan Haulers",
  description:
    "Two ways to work with Himalayan Haulers: buy a Freightor heavy-lift drone, or hire drones with crews through Drone as a Service.",
};

/* ==========================================================================
   /what-we-provide — the hub for the two detail pages.

   Three parts, in the order a visitor needs them:

     1. A hero that states the fork itself. The headline is the page's own
        subline promoted to display size — "own them, or hire the capability"
        was already the sentence explaining what this route is, so it now does
        the work of a headline instead of sitting under a generic one.
     2. The two routes as full-width alternating bands rather than two equal
        cards side by side. The old pair was the generic two-box grid; stacked
        and mirrored, each route gets a whole row, a whole photograph, and its
        own surface tone, and the eye reads them one at a time instead of
        comparing two boxes.
     3. The ClosingCTA both detail pages already end with, so the route lands
        on a next step instead of stopping dead above the footer.
   ========================================================================== */

/* Same type ramp as the detail pages: stepped up from the site root by
   per-level multipliers, scoped here so nothing outside this route resizes. */
const SECTION =
  "bg-white text-ink animate-hh-fade py-[length:var(--section-pad)] [--fs-h2:calc(var(--fs-h2)*1.6)] [--fs-lead:calc(var(--fs-lead)*1.45)] [--fs-h3:calc(var(--fs-h3)*1.35)] [--fs-body:calc(var(--fs-body)*1.18)] [--fs-small:calc(var(--fs-small)*1.2)]";

/** Navy underline link used inside the closing panel's contact line. */
const CONTACT_LINK =
  "text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-cyan hover:decoration-cyan";

/* ---- The two route bands ---------------------------------------------------
   Grid, not flex: the 38% track is the photograph and the 1fr track is the
   copy, and mirroring the tracks per band is what puts the photo on the right
   for the second one without a second set of rules.

   min-h gives the photograph a box to fill. On desktop the row's height is
   set by whichever track is taller; without it a short copy block would
   collapse the photo to a sliver. Collapses to one column at 860px, where
   the min-h goes too so a phone never gets a band taller than its content. */
const BAND =
  "group relative isolate grid grid-cols-[minmax(0,38%)_minmax(0,1fr)] min-h-[clamp(300px,26vw,420px)] overflow-hidden rounded-lg border shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.06)] transition-[border-color,box-shadow,transform] duration-300 motion-safe:hover:-translate-y-0.5 max-[860px]:min-h-0 max-[860px]:grid-cols-[minmax(0,1fr)]";

const BAND_LIGHT = `${BAND} border-blue/10 bg-white text-ink hover:border-cyan/50 hover:shadow-[0_4px_8px_rgba(10,25,45,0.05),0_20px_44px_rgba(10,25,45,0.1)]`;

const BAND_DARK = `${BAND} border-white/12 bg-blue text-white hover:border-cyan/50 hover:shadow-[0_4px_8px_rgba(10,25,45,0.05),0_20px_44px_rgba(10,25,45,0.12)]`;

/* `order`, not an explicit grid-column: a col-start survives the collapse to
   a single column and would throw the photo into an implicit second track.
   Order works in both layouts, so the photograph stays first in the DOM —
   correct reading order, correct order on a phone — and only moves to the
   right on desktop where the band is mirrored. */
const PHOTO_FIRST = "order-1";
const PHOTO_SECOND = "order-2 max-[860px]:order-1";
const TEXT_FIRST = "order-1 max-[860px]:order-2";
const TEXT_SECOND = "order-2 max-[860px]:order-1";

/* ---- The "/" cut ----------------------------------------------------------
   Every diagonal on this site leans the same way — the home page's wedge
   banner and the WhatWeProvide section both run top-right down to
   bottom-left. This is that line, and unlike there it is doing a job: it
   separates the photograph from the words about it.

   The seam and the image share one slope (both lose 12% of the track across
   the height) and differ only by `inset`, so the cyan band riding the cut is
   the same width at the top as at the bottom. Insets are percentages of the
   photo track, and both tracks are 38% of the same container, so the two
   bands' cuts come out parallel.

   The values go in as custom properties rather than into `clip-path`
   directly, because a clip-path in an inline style cannot be turned off at a
   breakpoint — and on a phone there is no second track for the cut to lean
   into, so the mask has to disappear entirely. */
const cut = (side: "left" | "right", inset: number) =>
  side === "left"
    ? `polygon(0 0, ${100 - inset}% 0, ${88 - inset}% 100%, 0 100%)`
    : `polygon(${12 + inset}% 0, 100% 0, 100% 100%, ${inset}% 100%)`;

const cutVars = (side: "left" | "right") =>
  ({
    "--seam": cut(side, 0),
    "--img": cut(side, 3),
  }) as CSSProperties;

/* The cyan band. Clipped to the full cut and painted UNDER the image, so the
   only part of it that survives is the 3% strip along the diagonal. */
const SEAM =
  "pointer-events-none absolute inset-0 bg-cyan [clip-path:var(--seam)] max-[860px]:hidden";

/* The image layer: same box, clipped 3% tighter on the cut side. */
const PHOTO_MASK =
  "absolute inset-0 overflow-hidden [clip-path:var(--img)] max-[860px]:[clip-path:none]";

/* Fills its cell and drifts in on hover — the same motion the home page's
   Industries cards use, so a photograph behaves the same way everywhere on
   the site. object-position is per photograph rather than left at centre:
   both source images are portrait-ish and the subject sits high in the frame,
   so a centred crop of a 1980x3520 frame would cut the drone straight out. */
const PHOTO =
  "h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 motion-reduce:transition-none";

const PHOTO_CELL =
  "relative min-w-0 max-[860px]:aspect-[16/10] max-[860px]:min-h-0 max-[860px]:w-full";

const CONTENT =
  "relative z-10 flex min-w-0 flex-col justify-center gap-[clamp(12px,1.4vw,18px)] p-[clamp(22px,3vw,48px)] max-[860px]:p-[clamp(20px,5vw,28px)]";

/* Kicker. Cyan on navy clears 5:1; on white it is 2.7:1, so the light band
   takes the same muted navy the home section's light half uses. */
const EYEBROW = (dark: boolean) =>
  `m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.1em] ${
    dark ? "text-cyan" : "text-blue/70"
  }`;

/* Colour comes from the band shell by inheritance: the global h1–h6 rule in
   globals.css forces `color: inherit` unlayered, so a colour utility on the
   heading itself would lose to it. Only the size utility is safe. */
const BAND_TITLE = "m-0 text-[length:var(--fs-h3)]";

const BAND_BODY = (dark: boolean) =>
  `m-0 text-[length:var(--fs-body)] leading-[1.45] text-pretty ${
    dark ? "text-white/85" : "text-ink/75"
  }`;

/* The route label. Self-start so it sits under its list instead of stretching
   to the full track; mt is the gap between the bullets and the link, not a
   push to the bottom, because the two bands' copy blocks differ in height. */
const BAND_FOOT = (dark: boolean) =>
  `mt-[clamp(4px,0.6vw,10px)] inline-flex items-center gap-2 self-start text-[length:var(--fs-small)] font-bold uppercase tracking-[0.08em] ${
    dark ? "text-white" : "text-cyan"
  }`;

const ARROW = "transition-transform duration-300 group-hover:translate-x-1";

/**
 * /what-we-provide — the hub for the two detail pages.
 *
 * Server component: every state it needs is in the URL, not in React.
 */
export default function WhatWeProvideLanding() {
  return (
    <main className={SECTION}>
      {/* Hero — the fork stated as the headline */}
      <PageHero
        eyebrow="What We Provide"
        title={
          <>
            Own Them, <span className="text-cyan">or Hire Them</span>
          </>
        }
        lead="Two ways to put heavy-lift drones to work: own them, or hire the capability."
        actions={
          <>
            <Button href="/what-we-provide/products" tone="onLight" size="lg" withArrow>
              Buy the Aircraft
            </Button>
            <Button href="/what-we-provide/services" tone="onLight" size="lg" withArrow>
              Hire the Capability
            </Button>
          </>
        }
        photo={{
          src: "/media/HIMALAYAN-HERO-poster.jpg",
          alt: "Himalayan terrain the company's drones operate over",
        }}
      />

      {/* The two routes */}
      <Section>
        <div className="flex flex-col gap-[length:var(--card-gap)]">
          <Link
            href="/what-we-provide/products"
            className={BAND_LIGHT}
            aria-label="Drone Products — buy the aircraft"
          >
            <div
              className={`${PHOTO_CELL} ${PHOTO_FIRST}`}
              style={cutVars("left")}
            >
              <div className={SEAM} aria-hidden="true" />
              <div className={PHOTO_MASK}>
                <Image
                  src="/media/Logistics.jpeg"
                  alt="Heavy-lift drone carrying a payload over remote terrain"
                  fill
                  sizes="(max-width: 860px) 100vw, 38vw"
                  className={PHOTO}
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>

            <div className={`${CONTENT} ${TEXT_SECOND}`}>
              <p className={EYEBROW(false)}>Own them</p>
              <h2 className={BAND_TITLE}>Drone Products</h2>
              <p className={BAND_BODY(false)}>
                Buy the aircraft: Freightor D-Series logistics drones,
                surveillance drones, and custom platforms built in India for
                Indian conditions.
              </p>

              <Bullets>
                <Bullet>Freightor D20, D100, D200, D300</Bullet>
                <Bullet>VTOL fixed-wing surveillance drones</Bullet>
                <Bullet>Custom-built drones to your spec</Bullet>
              </Bullets>

              <span className={BAND_FOOT(false)}>
                Explore products
                <ArrowRight size={15} className={ARROW} aria-hidden="true" />
              </span>
            </div>
          </Link>

          <Link
            href="/what-we-provide/services"
            className={BAND_DARK}
            aria-label="Drone as a Service — hire the capability"
          >
            <div
              className={`${PHOTO_CELL} ${PHOTO_SECOND}`}
              style={cutVars("right")}
            >
              <div className={SEAM} aria-hidden="true" />
              <div className={PHOTO_MASK}>
                <Image
                  src="/media/Tower-stringing.jpeg"
                  alt="Drone laying a pilot line across a transmission tower"
                  fill
                  sizes="(max-width: 860px) 100vw, 38vw"
                  className={PHOTO}
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
            </div>

            <div className={`${CONTENT} ${TEXT_FIRST}`}>
              <p className={EYEBROW(true)}>Hire them</p>
              <h2 className={BAND_TITLE}>Drone as a Service</h2>
              <p className={BAND_BODY(true)}>
                Hire the capability: logistics delivery, inspections, sensor
                surveys, and tower stringing with our crews and drones — no
                fleet to own.
              </p>

              <Bullets>
                <Bullet dark>
                  Logistics Drone as a Service (LDaaS)
                </Bullet>
                <Bullet dark>
                  Drone inspections (confined space, visual, thermal, UT)
                </Bullet>
                <Bullet dark>Industrial sensor surveys</Bullet>
                <Bullet dark>Drone-based tower stringing</Bullet>
              </Bullets>

              <span className={BAND_FOOT(true)}>
                Explore services
                <ArrowRight size={15} className={ARROW} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </Section>

      {/* Closing CTA — the same landing both detail pages use */}
      <ClosingCTA
        title={<>Let&rsquo;s Move Something Impossible</>}
        text="Tell us what you need to carry, and where. We will bring the drone."
        footer={
          <p className="m-0">
            Contact: Arjun Naik &middot;{" "}
            <a href="tel:+917899801210" className={CONTACT_LINK}>
              +91 78998 01210
            </a>{" "}
            &middot;{" "}
            <a
              href="mailto:arjun@himalayanhaulers.com"
              className={CONTACT_LINK}
            >
              arjun@himalayanhaulers.com
            </a>
          </p>
        }
      >
        <Button href="/#connect" tone="onDark" size="lg" withArrow>
          Let&rsquo;s Connect
        </Button>
      </ClosingCTA>
    </main>
  );
}

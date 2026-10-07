import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import {
  BODY,
  CARD_PAD,
  CONTENT_MAX,
  H1,
  INNER,
  LEAD,
  SECTION_GAP,
  Bullet,
  Bullets,
  CardPhoto,
} from "./ui";

export const metadata: Metadata = {
  title: "What We Provide | Drone Products & Services | Himalayan Haulers",
  description:
    "Two ways to work with Himalayan Haulers: buy a Freightor heavy-lift drone, or hire drones with crews through Drone as a Service.",
};

/* Two side-by-side routes into the detail pages: BUY (light card) and HIRE
   (navy card). The navy shell mirrors the light CARD token but on blue, so the
   pair reads as one component in two tones — the same trick WhatWeProvide uses.
   `group` sits on each Link so the photo zoom and the arrow nudge both key off
   card hover without extra state. */
const CARD_LIGHT =
  "group flex flex-col overflow-hidden rounded-lg border border-blue/10 bg-white shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.06)] transition-[border-color,box-shadow,transform] duration-300 hover:border-cyan/50 hover:shadow-[0_4px_8px_rgba(10,25,45,0.05),0_20px_44px_rgba(10,25,45,0.1)] motion-safe:hover:-translate-y-0.5 no-underline";

const CARD_DARK =
  "group flex flex-col overflow-hidden rounded-lg border border-white/12 bg-blue text-white shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.06)] transition-[border-color,box-shadow,transform] duration-300 hover:border-cyan/50 hover:shadow-[0_4px_8px_rgba(10,25,45,0.05),0_20px_44px_rgba(10,25,45,0.1)] motion-safe:hover:-translate-y-0.5 no-underline";

/* The "Explore →" footer line. Uppercase micro-label, cyan on light and white
   on dark; the arrow slides right on hover to signal the card itself is the
   link. mt-auto pins it to the bottom so both cards align their CTAs. */
const FOOT_BASE =
  "mt-auto inline-flex items-center gap-2 pt-[clamp(20px,2.4vw,28px)] text-[length:var(--fs-small)] font-bold uppercase tracking-[0.08em]";

const FOOT_LIGHT = `${FOOT_BASE} text-cyan`;
const FOOT_DARK = `${FOOT_BASE} text-white`;

const ARROW =
  "transition-transform duration-300 motion-safe:group-hover:translate-x-1";

/* Body copy, per tone. Written out rather than reusing BODY + an override so
   no two text-colour classes ever land on the same element. */
const BODY_LIGHT = BODY;
const BODY_DARK =
  "m-0 mt-[clamp(10px,1.2vw,16px)] text-[length:var(--fs-body)] leading-[1.45] text-white/85 text-pretty";

/**
 * /what-we-provide — the hub for the two detail pages.
 *
 * Server component: every state it needs is in the URL, not in React.
 */
export default function WhatWeProvideLanding() {
  return (
    <main className="animate-hh-fade bg-white py-[length:var(--section-pad)] text-ink [--fs-h2:calc(var(--fs-h2)*1.6)] [--fs-lead:calc(var(--fs-lead)*1.45)] [--fs-h3:calc(var(--fs-h3)*1.35)] [--fs-body:calc(var(--fs-body)*1.18)] [--fs-small:calc(var(--fs-small)*1.2)]">
      {/* Hero */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <h1 className={H1}>
            What We <span className="text-cyan">Provide</span>
          </h1>
          <p className={LEAD}>
            Two ways to put heavy-lift drones to work: own them, or hire the
            capability.
          </p>
        </div>
      </div>

      {/* The two routes */}
      <div className={`${INNER} ${SECTION_GAP}`}>
        <div className="grid max-w-[length:var(--content-max,1200px)] grid-cols-[repeat(2,minmax(0,1fr))] gap-[length:var(--card-gap)] max-[860px]:grid-cols-[minmax(0,1fr)]">
          <Link
            href="/what-we-provide/products"
            className={CARD_LIGHT}
            aria-label="Drone Products — buy the aircraft"
          >
            <CardPhoto
              src="/media/Logistics.jpeg"
              alt="Heavy-lift drone carrying a payload over remote terrain"
              sizes="(max-width: 860px) 92vw, 46vw"
            />

            <div className={`flex flex-1 flex-col ${CARD_PAD}`}>
              <p className="m-0 mb-[clamp(6px,0.8vw,10px)] text-[length:var(--fs-small)] font-bold uppercase tracking-[0.1em] text-cyan">
                Own them
              </p>
              <h2 className="m-0 text-[length:var(--fs-h3)] text-ink">
                Drone Products
              </h2>
              <p className={`m-0 mt-[clamp(10px,1.2vw,16px)] ${BODY_LIGHT}`}>
                Buy the aircraft: Freightor D-Series logistics drones,
                surveillance drones, and custom platforms built in India for
                Indian conditions.
              </p>

              <div className="mt-[clamp(16px,2vw,24px)]">
                <Bullets>
                  <Bullet>Freightor D20, D100, D200, D300</Bullet>
                  <Bullet>VTOL fixed-wing surveillance drones</Bullet>
                  <Bullet>Custom-built drones to your spec</Bullet>
                </Bullets>
              </div>

              <span className={FOOT_LIGHT}>
                Explore products
                <ArrowRight size={15} className={ARROW} aria-hidden="true" />
              </span>
            </div>
          </Link>

          <Link
            href="/what-we-provide/services"
            className={CARD_DARK}
            aria-label="Drone as a Service — hire the capability"
          >
            <CardPhoto
              src="/media/Tower-stringing.jpeg"
              alt="Drone laying a pilot line across a transmission tower"
              sizes="(max-width: 860px) 92vw, 46vw"
            />

            <div className={`flex flex-1 flex-col ${CARD_PAD}`}>
              <p className="m-0 mb-[clamp(6px,0.8vw,10px)] text-[length:var(--fs-small)] font-bold uppercase tracking-[0.1em] text-cyan">
                Hire them
              </p>
              <h2 className="m-0 text-[length:var(--fs-h3)] text-white">
                Drone as a Service
              </h2>
              <p className={BODY_DARK}>
                Hire the capability: logistics delivery, inspections, sensor
                surveys, and tower stringing with our crews and drones — no
                fleet to own.
              </p>

              <div className="mt-[clamp(16px,2vw,24px)]">
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
              </div>

              <span className={FOOT_DARK}>
                Explore services
                <ArrowRight size={15} className={ARROW} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

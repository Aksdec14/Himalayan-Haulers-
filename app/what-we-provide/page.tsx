import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Cog, Cpu, Package, ShieldCheck } from "lucide-react";

import Button from "@/components/ui/Button";

import HeroSlider, { type Slide } from "./hero-slider";

export const metadata: Metadata = {
  title:
    "Drone Products & Drone as a Service in India | Himalayan Haulers",
  description:
    "Two ways to put heavy-lift drones to work: own an HH Freightor D-Series drone, or hire the capability as a service. 20 to 300 kg payloads, built in India.",
};

/* ==========================================================================
   WHAT WE PROVIDE â€” the index for the route, laid out after the "Palma House"
   main-page wireframe (the wireframe's navbar and footer are the site's own
   and are not part of this page).

     1. hero          copy + links left, tall photo right with arrows
     2. intro         centred heading; photo left, copy + link right
     3. four cards    centred heading; four equal cards in one row
     4. products      centred heading; photo left, copy + link right
     5. services      centred heading; copy + link left, tall photo right
     6. closing       the navy ClosingCTA panel

   Copy is the same as before: the two-offer framing comes from the home
   WhatWeProvide section, and the capability list from the Products page.

   Layout constants live HERE rather than in a shared module, as Products and
   Services carry their own copies; design tokens (--fs-*, --content-*) still
   come from globals.css.

   SIZES. The type ramp is declared as --fs-*-xl, which are DIFFERENT custom
   properties from the --fs-* rungs they read. The old wrapper declared
   `--fs-h2: calc(var(--fs-h2) * 1.6)`: a custom property that references
   itself is a cycle, the browser discards it, and every size that read it
   silently fell back to the inherited font size.

   COLOUR. The global h1â€“h6 rule forces `color: inherit`, so a colour utility
   on a heading loses. Colour is set on the wrapper and inherited.
   ========================================================================== */

/* ---- Page chrome ----------------------------------------------------------- */

/** Left-anchored padding: the same --content-pad line the navbar logo sits on. */
const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

/** Measure cap only; the left edge stays flush with INNER. */
const CONTENT_MAX = "max-w-[length:var(--content-max,1200px)]";

/** Applied to <main>. Same step-ups Products and Services use, renamed so no
 *  property reads itself. */
const PAGE =
  "bg-white text-ink animate-hh-fade py-[length:var(--section-pad)] [--fs-h2-xl:calc(var(--fs-h2)*1.6)] [--fs-lead-xl:calc(var(--fs-lead)*1.45)] [--fs-h3-xl:calc(var(--fs-h3)*1.35)] [--fs-body-xl:calc(var(--fs-body)*1.18)] [--fs-small-xl:calc(var(--fs-small)*1.2)]";

/** One vertical rhythm for every stacked block below the hero. */
const BLOCK = "mt-[clamp(56px,7vw,112px)]";

/** The wireframe's section headings: centred, large, light, all caps. */
const TITLE =
  "m-0 text-balance text-center text-[length:var(--fs-h2-xl)] font-light uppercase leading-[1.1] tracking-[0.01em]";

/** Cyan on white is 2.7:1, so labels on white take the muted navy. */
const EYEBROW =
  "m-0 text-[length:var(--fs-small-xl)] font-bold uppercase tracking-[0.16em] text-blue/70";

const BODY =
  "m-0 text-[length:var(--fs-body-xl)] leading-[1.5] text-ink/75 text-pretty";

/** Gap between a section's centred heading and its content row. */
const ROW_TOP = "mt-[clamp(32px,4.4vw,72px)]";

const ROW_GAP = "gap-[clamp(28px,5vw,88px)]";

/* The photo and the copy beside it are one row: same top, same bottom. On
   desktop the photo drops its aspect ratio and stretches to the copy's height,
   with a floor so a short block of copy never leaves a sliver. Below 860px they
   stack and the ratio takes over again. */
const ROW_PHOTO =
  "aspect-[5/4] min-[860px]:aspect-auto min-[860px]:min-h-[clamp(300px,30vw,460px)]";
const ROW_PHOTO_TALL =
  "aspect-[7/8] min-[860px]:aspect-auto min-[860px]:min-h-[clamp(340px,34vw,520px)]";

/* ---- Small building blocks ------------------------------------------------- */

function Wrap({ children }: { children: ReactNode }) {
  return (
    <div className={INNER}>
      <div className={CONTENT_MAX}>{children}</div>
    </div>
  );
}

/** A cyan dot bullet. The dot is decorative (aria-hidden), the text is the
 *  list item's real content. */
function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-[0.85em] text-[length:var(--fs-body-xl)] leading-[1.45] text-ink/75">
      <span
        aria-hidden="true"
        className="mt-[0.6em] size-[6px] shrink-0 rounded-full bg-cyan"
      />
      <span className="text-pretty">{children}</span>
    </li>
  );
}

/** Stacked bullet list with one rhythm for every list on the page. */
function Bullets({ children }: { children: ReactNode }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-[0.7em] p-0">{children}</ul>
  );
}

/** The wireframe's "VIEW COLLECTION â€”â€”>" link: small caps with a thin line and
 *  arrowhead underneath that lengthens on hover. Navy text, cyan line. */
function LineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex flex-col gap-[0.8em] self-start text-blue no-underline"
    >
      <span className="text-[length:var(--fs-small-xl)] font-bold uppercase tracking-[0.12em]">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="relative block h-px w-[clamp(110px,10vw,170px)] bg-cyan transition-[width] duration-300 after:absolute after:right-0 after:top-1/2 after:size-[7px] after:-translate-y-1/2 after:rotate-45 after:border-r after:border-t after:border-cyan after:content-[''] group-hover:w-[clamp(140px,12vw,210px)] motion-reduce:transition-none"
      />
    </Link>
  );
}

/** Photograph in a plain box: no radius, no shadow, as in the wireframe. */
function Photo({
  src,
  alt,
  ratio,
  position = "center",
}: {
  src: string;
  alt: string;
  ratio: string;
  position?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-ink ${ratio}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 860px) 100vw, 50vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}

/** Navy closing panel. */
function ClosingCTA({
  title,
  text,
  children,
}: {
  title: ReactNode;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className={`${INNER} ${BLOCK}`}>
      <div className={CONTENT_MAX}>
        <div className="rounded-lg bg-blue px-[clamp(24px,3.5vw,56px)] py-[clamp(36px,4.5vw,64px)] text-center text-white">
          <h2 className="m-0 text-[length:var(--fs-h2-xl)] uppercase">{title}</h2>
          <p className="mx-auto m-0 mt-[clamp(12px,1.6vw,20px)] max-w-[60ch] text-[length:var(--fs-lead-xl)] leading-[1.45] text-white/85 text-pretty">
            {text}
          </p>
          <div className="mt-[clamp(24px,3vw,40px)] flex flex-wrap items-center justify-center gap-x-[clamp(20px,2.4vw,32px)] gap-y-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Page content ---------------------------------------------------------- */

/* The hero slides: each photograph travels with the copy that describes it.
   None of these photographs is used again further down the page. All the copy
   is lifted from the offers further down. */
const HERO_SLIDES: Slide[] = [
  {
    src: "/media/construction.jpg",
    alt: "High-altitude construction site at dusk, served by drone logistics",
    position: "center 62%",
    eyebrow: "What We Provide",
    title: "Own the Drone, or",
    accent: "Hire the Capability",
    lead: "Heavy-lift drones that carry 20 to 300 kg to places trucks and mules can't reach. Buy the aircraft, or hire the same capability with crews, pilots and support.",
    links: [
      { href: "/what-we-provide/products", label: "Explore Products" },
      { href: "/what-we-provide/services", label: "Explore Services" },
    ],
  },
  {
    src: "/media/defence.jpg",
    alt: "Heavy-lift drone delivering supplies at altitude",
    eyebrow: "Own them",
    title: "Own",
    accent: "the Drone",
    lead: "Purpose-built heavy-lift logistics drones, plus surveillance and custom platforms, built in India for Indian conditions.",
    links: [{ href: "/what-we-provide/products", label: "Explore Products" }],
  },
  {
    src: "/media/power.jpg",
    alt: "Drone stringing a pilot line between power towers",
    eyebrow: "Hire the capability",
    title: "Hire",
    accent: "the Capability",
    lead: "Get the result without owning the drone. Our crews bring the aircraft, pilots, batteries and support to your site.",
    links: [{ href: "/what-we-provide/services", label: "Explore Services" }],
  },
];

/* What every route carries, whichever page a visitor lands on first. The four
   entries are shared verbatim with the Products page. */
const CAPABILITIES: {
  icon: typeof Cpu;
  title: string;
  body: string;
}[] = [
  {
    icon: Cpu,
    title: "Fully autonomous flight",
    body: "Plan the route, launch, and the drone flies it.",
  },
  {
    icon: Package,
    title: "20 to 300 kg payloads",
    body: "Pick the platform that matches the load you need to move.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in failsafes",
    body: "Protection against link loss, low battery and system faults.",
  },
  {
    icon: Cog,
    title: "Built and flown in India",
    body: "Over 100 man-years of experience designing, building and flying.",
  },
];

/**
 * /what-we-provide â€” the index for the route: which drone products exist, and
 * whether you should buy one or hire the capability instead.
 *
 * Server component. The only client code is the hero's arrow slider, in
 * ./hero-slider.
 */
export default function WhatWeProvidePage() {
  return (
    <main className={PAGE}>
      {/* ---- 1. Hero: copy left, photograph right ---------------------------
          One component owns both halves, so changing the photograph changes the
          copy beside it. -mt cancels <main>'s top padding; the pt then clears
          the fixed navbar, so the hero sits on white directly beneath it, as
          the wireframe's does. */}
      <section className="-mt-[length:var(--section-pad)] bg-white pt-[length:var(--nav-h)]">
        <HeroSlider slides={HERO_SLIDES} />
      </section>

      {/* ---- 2. Intro: photo left, copy right -------------------------------- */}
      <section className={BLOCK}>
        <Wrap>
          <h2 className={TITLE}>Two Ways to Put Drones to Work</h2>

          <div
            className={`${ROW_TOP} ${ROW_GAP} grid items-stretch min-[860px]:grid-cols-2`}
          >
            <Photo
              src="/media/HIMALAYAN-HERO-poster.jpg"
              alt="Himalayan terrain the company's drones operate over"
              ratio={ROW_PHOTO}
            />

            <div className="flex flex-col justify-center gap-[clamp(12px,1.4vw,18px)]">
              <p className={BODY}>
                Himalayan Haulers builds heavy-lift logistics drones in India
                and flies them for customers who cannot wait for a road. Teams
                come to us for one of two reasons: they want their own
                aircraft, or they want the job done without owning anything.
              </p>
              <p className={BODY}>
                Both routes run on the same platforms, the same aircrew and the
                same safety standard. The difference is only who carries the
                aircraft, the batteries and the maintenance burden.
              </p>

              <div className="pt-[clamp(8px,1.2vw,16px)]">
                <LineLink href="/contact">Request a Quote</LineLink>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ---- 3. Four equal cards --------------------------------------------- */}
      <section className={BLOCK}>
        <Wrap>
          <h2 className={TITLE}>What Every Route Carries</h2>

          <p
            className={`${BODY} mx-auto mt-[clamp(10px,1.2vw,16px)] max-w-[56ch] text-center`}
          >
            Whichever page you start on, these four hold true.
          </p>

          <ul
            className={`${ROW_TOP} m-0 grid list-none grid-cols-2 gap-[length:var(--card-gap)] p-0 min-[760px]:grid-cols-4`}
          >
            {CAPABILITIES.map((capability) => {
              const Icon = capability.icon;
              return (
                /* Colour is set here and inherited by the <h3>. */
                <li
                  key={capability.title}
                  className="flex min-h-[clamp(240px,22vw,340px)] flex-col justify-between gap-[clamp(20px,2.4vw,40px)] bg-blue p-[clamp(14px,1.6vw,24px)] text-white"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-[clamp(34px,2.6vw,42px)] place-items-center bg-cyan/15 text-cyan"
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </span>

                  <div>
                    <h3 className="m-0 text-[length:var(--fs-body-xl)] font-bold leading-[1.25]">
                      {capability.title}
                    </h3>
                    <p className="m-0 mt-[0.6em] text-[length:var(--fs-small-xl)] leading-[1.5] text-white/80 text-pretty">
                      {capability.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Wrap>
      </section>

      {/* ---- 4. Products: photo left, copy right ----------------------------- */}
      <section id="products" className={`${BLOCK} scroll-mt-[96px]`}>
        <Wrap>
          <h2 className={TITLE}>Drone Products</h2>

          <div
            className={`${ROW_TOP} ${ROW_GAP} grid items-stretch min-[860px]:grid-cols-2`}
          >
            <Photo
              src="/media/Logistics.jpeg"
              alt="Heavy-lift drone lowering a supply container over remote hills"
              ratio={ROW_PHOTO}
              /* 1980x3520 with the drone high in the frame. */
              position="center top"
            />

            <div className="flex flex-col justify-center gap-[clamp(12px,1.4vw,18px)]">
              <p className={EYEBROW}>Own them</p>

              <p className={BODY}>
                Purpose-built heavy-lift logistics drones, plus surveillance and
                custom platforms, built in India for Indian conditions.
              </p>

              <Bullets>
                <Bullet>Freightor D-Series logistics drones</Bullet>
                <Bullet>Surveillance drones</Bullet>
                <Bullet>Custom-built drones</Bullet>
              </Bullets>

              <div className="pt-[clamp(8px,1.2vw,16px)]">
                <LineLink href="/what-we-provide/products">
                  Explore Products
                </LineLink>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ---- 5. Services: copy left, photo right ----------------------------- */}
      <section id="services" className={`${BLOCK} scroll-mt-[96px]`}>
        <Wrap>
          <h2 className={TITLE}>Drone as a Service</h2>

          <div
            className={`${ROW_TOP} ${ROW_GAP} grid items-stretch min-[860px]:grid-cols-2`}
          >
            <div className="flex flex-col justify-center gap-[clamp(12px,1.4vw,18px)]">
              <p className={EYEBROW}>Hire the capability</p>

              <p className={BODY}>
                Get the result without owning the drone. Our crews bring the
                aircraft, pilots, batteries and support to your site.
              </p>

              <Bullets>
                <Bullet>Logistics Drone as a Service (LDaaS)</Bullet>
                <Bullet>Drone inspections</Bullet>
                <Bullet>Industrial sensor surveys</Bullet>
                <Bullet>Drone-based tower stringing</Bullet>
              </Bullets>

              <div className="pt-[clamp(8px,1.2vw,16px)]">
                <LineLink href="/what-we-provide/services">
                  Explore Services
                </LineLink>
              </div>
            </div>

            <Photo
              src="/media/Tower-stringing.jpeg"
              alt="Drone lowering a supply container to an operator in a field"
              ratio={ROW_PHOTO_TALL}
              position="center 30%"
            />
          </div>
        </Wrap>
      </section>

      {/* ---- 6. Closing CTA --------------------------------------------------- */}
      <ClosingCTA
        title="Tell Us What You Need to Carry"
        text="Share your payload, distance and altitude, and we will recommend the right drone â€” and whether to buy it or hire it â€” with a clear quote."
      >
        <Button href="/contact" tone="onDark" size="lg" withArrow>
          Request a Quote
        </Button>
        <Button
          href="/what-we-provide/products"
          tone="onDark"
          size="lg"
          withArrow
        >
          Browse the D-Series
        </Button>
      </ClosingCTA>
    </main>
  );
}
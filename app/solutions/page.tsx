import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUp, ArrowUpRight, type LucideIcon } from "lucide-react";

import CapabilityShowcase, {
  type Capability,
} from "./capability-showcase";

export const metadata: Metadata = {
  title: "Operational Capabilities & Technical Services | Himalayan Haulers",
  description:
    "The right drone, sensor and crew for work at height, at distance or in confined spaces: logistics, tower stringing, inspection, NDT and sensing.",
};

/* ==========================================================================
   /solutions — the plain, light layout from the marine-construction reference.

     1. hero            full-bleed photo, navy wash, headline on the right half
     2. about us        heading, intro, three muted-label columns, then a
                        three-column media row: small photo + pill | an index
                        of rows with hairlines | large photo
     3. capabilities    three-up rounded photo cards. A full-width bar sits on
                        the bottom edge of each photo; hovering the card lays
                        that capability's technical value over the photo. The
                        sixth cell is a call-to-action
     4. detail          a grey band with a card slider whose cards run off the
                        right edge; pressing a card (or any #capability-0N
                        link) opens a side panel with a photo and the full
                        detail. Lives in ./capability-showcase, the page's
                        only client code
     5. back to top     one centred pill, where the reference has "all projects"

   One visual language: white page, navy type, 16px radii, and pill buttons
   (glass over photos, pale blue on white).

   Type and vertical rhythm are the site's, not this page's, and this route
   reads them the way the main routes do:

   - SIZES read raw --fs-* rungs and nothing else — h1 -> h2 -> h3 -> lead ->
     body -> small, one rung per level, exactly as app/industries/page.tsx
     reads them. Weight, line-height, tracking, balance and colour come from
     the h1-h6 rule in globals.css, which is unlayered and so outranks any
     utility on a heading: a heading here carries its size (plus `uppercase`
     on h2, the site's convention) and leaves weight and leading alone.
   - There is no page-level type multiplier. `--fs-h2:calc(var(--fs-h2)*1.6)`
     reads the property it is defining, which is a cycle; the value goes
     guaranteed-invalid and every heading silently drops to its inherited
     size. Raw rungs are the only scale this page uses.
   - THE GRID: --content-pad left-anchors every section; --content-max caps
     the measure.
   - RHYTHM: --section-pad is the only vertical section padding on the page,
     and --gap, --gap-peer, --gap-block and --card-gap carry everything
     inside a section. Nothing here invents a vertical value of its own.

   Page chrome (navbar, footer) is untouched.
   ========================================================================== */

/* ---- Page shell ---------------------------------------------------------- */

const PAGE =
  "text-ink [--gap:clamp(14px,1.6vw,24px)] [--gap-peer:calc(var(--gap)*1.5)] [--gap-block:calc(var(--gap)*3)]";

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

const CONTENT_MAX = "max-w-[length:var(--content-max,1200px)]";

/** The site's left-anchored container: padding outside, measure inside. */
function Wrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={INNER}>
      <div className={`${CONTENT_MAX} ${className}`}>{children}</div>
    </div>
  );
}

/* ---- Type ---------------------------------------------------------------- */

const H2 = "m-0 text-[length:var(--fs-h2)] uppercase";

/* A column heading or a service heading: both are h3, so both take the h3
   rung and nothing else. */
const SUBHEAD = "m-0 text-[length:var(--fs-h3)]";

const INTRO =
  "m-0 max-w-[68ch] text-[length:var(--fs-lead)] leading-[1.38] text-ink/88 text-pretty";

const BODY =
  "m-0 text-[length:var(--fs-body)] leading-[1.45] text-ink/80 text-pretty";

/* Three equal columns: the grid every text block on the page sits on. */
const COLS = "grid gap-[length:var(--card-gap)] min-[860px]:grid-cols-3";

const PHOTO =
  "object-cover transition-transform duration-500 ease-out transform-gpu motion-safe:group-hover:scale-105 motion-reduce:transition-none";

/* ---- Pill button --------------------------------------------------------- */

const PILL_TONES = {
  /* Pale blue on white pages. */
  light: "bg-[#d5dfe9] text-blue hover:bg-[#c2d1e0]",
  /* Frosted over a photo, white type. */
  glass: "bg-white/25 text-white backdrop-blur-md hover:bg-white/35",
} as const;

function Pill({
  href,
  children,
  tone = "light",
  icon: Icon = ArrowUpRight,
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof PILL_TONES;
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex w-fit items-center gap-[0.9em] rounded-full px-[1.5em] py-[0.8em] text-[length:var(--fs-nav,16px)] no-underline transition-colors duration-300 ${PILL_TONES[tone]} ${className}`}
    >
      {children}
      <Icon size={13} strokeWidth={1.6} aria-hidden="true" />
    </a>
  );
}

/* ---- Content: capability copy verbatim from the draft -------------------- */

const CAPABILITIES: Capability[] = [
  {
    n: "01",
    category: "Logistics",
    image: {
      src: "/media/Logistics.jpeg",
      alt: "Heavy-lift drone carrying a payload over remote terrain",
      /* 1980x3520 with the drone high in the frame — a centred crop loses it. */
      position: "center top",
    },
    services: [
      {
        title: "Logistics & Last-Mile Delivery",
        fields: [
          {
            label: "Operational Scope",
            body: "Transporting essential materials, operational provisions, and medical supplies to remote, isolated, or difficult-to-reach locations.",
          },
          {
            label: "Technical Value",
            body: "Bypasses ground infrastructure limitations entirely\u2014no road needed\u2014significantly shortening transit times over rugged topography and minimizing exposure to surface transit risks.",
          },
          {
            label: "System Capabilities",
            body: "Heavy-lift cargo platforms engineered for extended-range Beyond Visual Line of Sight (BVLOS) missions in demanding meteorological and geographical conditions.",
          },
        ],
      },
    ],
  },
  {
    n: "02",
    category: "Infrastructure Deployment",
    image: {
      src: "/media/Tower-stringing.jpeg",
      alt: "Drone laying a pilot line across a tower",
    },
    services: [
      {
        title: "Drone-Based Tower Stringing",
        fields: [
          {
            label: "Mission Execution",
            body: "Deploying pilot lines across transmission towers, steep valleys, and complex terrain sectors via aerial automation.",
          },
          {
            label: "Technical Value",
            body: "Eliminates the necessity for high-risk manual climbing and hazardous ground-based stringing procedures in difficult terrain.",
          },
          {
            label: "System Capabilities",
            body: "Precision line-release assemblies, high-tensile deployment rigs, and specialized flight stability controls built for utility infrastructure projects.",
          },
        ],
      },
    ],
  },
  {
    n: "03",
    category: "Industrial Asset Inspection",
    image: {
      src: "/media/Inspection.jpeg",
      alt: "Drone inspecting an industrial structure",
    },
    services: [
      {
        title: "Confined Space Inspection",
        fields: [
          {
            label: "Mission Execution",
            body: "Accessing restricted industrial interiors\u2014such as storage vessels, boilers, and tanks\u2014without requiring human entry.",
          },
          {
            label: "Technical Value",
            body: "Eradicates OSHA-classified confined space entry risks, removes the need for scaffolding, and significantly reduces facility downtime.",
          },
          {
            label: "System Capabilities",
            body: "Collision-tolerant caged aerial systems equipped with high-definition optical payloads and onboard stabilization for GPS-denied environments.",
          },
        ],
      },
      {
        title: "Visual & Thermal Inspection",
        fields: [
          {
            label: "Mission Execution",
            body: "Conducting thorough aerial assessments of tall vertical and horizontal assets, including flare stacks, industrial pipelines, and processing structures.",
          },
          {
            label: "Technical Value",
            body: "Identifies material degradation, structural stress, and thermal anomalies prior to functional failure.",
          },
          {
            label: "System Capabilities",
            body: "Ultra-high-resolution optical zoom cameras combined with calibrated radiometric thermal sensors.",
          },
        ],
      },
    ],
  },
  {
    n: "04",
    category: "Advanced NDT & Material Analysis",
    image: {
      src: "/media/energy.jpg",
      alt: "Drone inspecting a refinery stack",
    },
    services: [
      {
        title: "Thickness & Coating Measurement",
        fields: [
          {
            label: "Mission Execution",
            body: "Executing contact Ultrasonic Testing (UT) and dry film coating thickness assessments on elevated or inaccessible industrial assets.",
          },
          {
            label: "Technical Value",
            body: "Generates verified Non-Destructive Testing (NDT) data at height without the deployment of rope access teams or scaffolding.",
          },
          {
            label: "System Capabilities",
            body: "Specialized contact UT drones integrated with stabilized probe mechanisms and magnetic tracking systems to log structural integrity metrics.",
          },
        ],
      },
    ],
  },
  {
    n: "05",
    category: "Environmental & Specialty Sensing",
    image: {
      src: "/media/construction.jpg",
      alt: "Drone surveying a construction site",
    },
    services: [
      {
        title: "Survey & Sensing",
        fields: [
          {
            label: "Mission Execution",
            body: "Executing advanced data capture operations, including bathymetric mapping, Ground Penetrating Radar (GPR) profiling, and airborne gas leak detection.",
          },
          {
            label: "Technical Value",
            body: "Integrates multiple data collection modalities into a single flight mission to gather comprehensive subsurface, hydrological, and environmental intelligence.",
          },
          {
            label: "System Capabilities",
            body: "Modular sensor payloads supporting LiDAR, hyperspectral imaging, echo-sounders, and atmospheric gas analysis sensors.",
          },
        ],
      },
    ],
  },
];

/* Photographs the capabilities do not claim: the hero, and the two in the
   about media row. */
const PHOTOS = {
  hero: {
    src: "/media/defence.jpg",
    alt: "Heavy-lift drone delivering supplies at altitude",
  },
  small: {
    src: "/media/power.jpg",
    alt: "Drone stringing a pilot line between power towers",
  },
  large: {
    src: "/media/construction.jpg",
    alt: "Drone surveying a construction site",
  },
};

const ABOUT =
  "Himalayan Haulers provides specialized, mission-critical aerial robotics and engineering support designed to safely execute complex operations across challenging environments. Our services minimize human exposure to high-risk industrial hazards while maximizing operational efficiency and data accuracy.";

/* The three conditions the hero lead names, taken apart. Every phrase is
   lifted from a capability's own fields further down the page. */
const CONTEXTS = [
  {
    title: "At Height",
    body: "Pilot lines across transmission towers and steep valleys; aerial assessment of flare stacks, industrial pipelines and processing structures.",
  },
  {
    title: "At Distance",
    body: "Heavy-lift cargo platforms on extended-range Beyond Visual Line of Sight (BVLOS) missions over rugged topography, bypassing ground infrastructure entirely.",
  },
  {
    title: "In Confined Spaces",
    body: "Storage vessels, boilers and tanks entered without requiring human entry, removing the need for scaffolding and significantly reducing facility downtime.",
  },
];

/**
 * /solutions — Operational Capabilities & Technical Services.
 *
 * Server component. The only client code is the detail slider and its side
 * panel, in ./capability-showcase. Keeping the page here is what allows the
 * `metadata` export.
 */
export default function SolutionsPage() {
  return (
    <main id="top" className={PAGE}>
      {/* ---- 1. Hero: photo, navy wash, text on the right half ------------- */}
      <section className="relative isolate overflow-hidden bg-blue">
        <Image
          src={PHOTOS.hero.src}
          alt={PHOTOS.hero.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-blue/30 bg-[linear-gradient(90deg,rgba(14,38,66,0)_0%,rgba(14,38,66,0.45)_55%,rgba(14,38,66,0.6)_100%)]"
        />

        <div
          className={`${INNER} flex min-h-[clamp(580px,80vh,880px)] items-center py-[length:var(--section-pad)]`}
        >
          <div className="flex w-full flex-col gap-[length:var(--gap)] text-white min-[860px]:ml-[48%] min-[860px]:w-[46%] min-[860px]:max-w-[560px]">
            <h1 className="m-0 text-balance text-[length:var(--fs-h1)] animate-hh-rise [animation-delay:100ms]">
              Operational Capabilities &amp; Technical Services
            </h1>

            <p className="m-0 max-w-[38ch] text-[length:var(--fs-lead)] leading-[1.38] text-white/90 animate-hh-rise [animation-delay:200ms]">
              The right drone, sensor and crew for work at height, at distance or
              in confined spaces.
            </p>

            <div className="mt-[length:var(--gap)] flex flex-wrap gap-[length:var(--gap)] animate-hh-rise [animation-delay:300ms]">
              <Pill href="#capabilities" tone="glass">
                View Capabilities
              </Pill>
              <Pill href="/#contact" tone="glass">
                Let&rsquo;s Connect
              </Pill>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 2. About us ---------------------------------------------------- */}
      <section
        id="about"
        className="scroll-mt-[96px] bg-white py-[length:var(--section-pad)]"
      >
        <Wrap>
          <h2 className={H2}>About Us</h2>

          <p className={`${INTRO} mt-[length:var(--gap)]`}>{ABOUT}</p>

          {/* Three muted-label columns. */}
          <div className={`${COLS} mt-[length:var(--gap-block)]`}>
            {CONTEXTS.map((context) => (
              <div key={context.title}>
                <h3 className={SUBHEAD}>{context.title}</h3>
                <p className={`${BODY} mt-[0.5em]`}>{context.body}</p>
              </div>
            ))}
          </div>

          {/* Media row: small photo + pill | index rows | large photo. */}
          <div className={`${COLS} mt-[length:var(--gap-block)] items-stretch`}>
            <div className="flex flex-col justify-between gap-[length:var(--gap-peer)]">
              <div className="relative aspect-[10/9] w-[46%] min-w-[96px] overflow-hidden rounded-2xl bg-ink">
                <Image
                  src={PHOTOS.small.src}
                  alt={PHOTOS.small.alt}
                  fill
                  sizes="(max-width: 860px) 40vw, 14vw"
                  className="object-cover"
                />
              </div>

              <Pill href="#capabilities">View Capabilities</Pill>
            </div>

            {/* The capability index: a name on the left, its services on the
                right, a hairline between rows. Each row jumps to its detail. */}
            <ul className="m-0 flex list-none flex-col justify-center p-0">
              {CAPABILITIES.map((cap) => (
                <li
                  key={cap.n}
                  className="border-b border-blue/15 last:border-b-0"
                >
                  <a
                    href={`#capability-${cap.n}`}
                    className="group grid grid-cols-2 gap-[length:var(--gap)] py-[length:var(--gap)] text-inherit no-underline"
                  >
                    <span className="text-[length:var(--fs-body)] leading-[1.3] text-blue underline-offset-[6px] decoration-cyan decoration-2 group-hover:underline">
                      {cap.category}
                    </span>
                    <span className="text-[length:var(--fs-small)] leading-[1.4] text-ink/60">
                      {cap.services.map((service) => service.title).join(" · ")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="relative aspect-[150/127] w-full overflow-hidden rounded-2xl bg-ink">
              <Image
                src={PHOTOS.large.src}
                alt={PHOTOS.large.alt}
                fill
                sizes="(max-width: 860px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
        </Wrap>
      </section>

      {/* ---- 3. Capabilities: three-up rounded photo cards ----------------- */}
      <section
        id="capabilities"
        className="scroll-mt-[96px] bg-white pb-[length:var(--section-pad)]"
      >
        <Wrap>
          <h2 className={H2}>Capabilities</h2>

          <div className="mt-[length:var(--gap-block)] grid gap-x-[length:var(--gap)] gap-y-[length:var(--gap-block)] min-[640px]:grid-cols-2 min-[960px]:grid-cols-3">
            {CAPABILITIES.map((cap) => {
              /* Every service's second field is its Technical Value, which is
                 the one line worth showing before the visitor commits to the
                 detail section. */
              const preview = cap.services[0].fields[1];

              return (
                <article
                  key={cap.n}
                  className="group flex flex-col gap-[length:var(--gap)]"
                >
                  {/* flex-col + justify-end puts the bar on the photo's bottom
                      edge at the photo's full width. The bar is a flex item,
                      not absolutely positioned, so its ::after can stretch
                      to the photo box and make the whole photo the link. */}
                  <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-ink">
                    <Image
                      src={cap.image.src}
                      alt={cap.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                      className={PHOTO}
                      style={{ objectPosition: cap.image.position ?? "center" }}
                    />

                    {/* A light foot so the bar always has something to sit on. */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,38,66,0.55)_0%,rgba(14,38,66,0)_45%)]"
                    />

                    {/* Hover / focus reveal. It repeats the detail section, so
                        it is hidden from assistive tech; the bottom padding
                        keeps the copy clear of the bar. Touch screens have no
                        hover, and simply get the bar. */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 flex flex-col justify-end gap-[0.5em] bg-blue/85 p-[clamp(18px,2vw,28px)] pb-[clamp(64px,5.5vw,84px)] text-white opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100 motion-reduce:transition-none"
                    >
                      <p className="m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.12em] text-cyan">
                        {preview.label}
                      </p>
                      <p className="m-0 text-[length:var(--fs-body)] leading-[1.45] text-white/90 text-pretty">
                        {preview.body}
                      </p>
                    </div>

                    <a
                      href={`#capability-${cap.n}`}
                      className="z-10 flex items-center justify-between gap-[length:var(--gap)] bg-white/90 px-[clamp(16px,1.8vw,24px)] py-[clamp(12px,1.2vw,16px)] text-[length:var(--fs-nav,16px)] text-blue no-underline backdrop-blur-sm transition-colors duration-300 after:absolute after:inset-0 after:z-10 after:content-[''] hover:bg-cyan hover:text-ink focus-visible:bg-cyan focus-visible:text-ink"
                    >
                      View details
                      <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
                    </a>
                  </div>

                  <div>
                    <h3 className="m-0 text-[length:var(--fs-h3)]">{cap.category}</h3>
                    {cap.services.map((service) => (
                      <p
                        key={service.title}
                        className="m-0 mt-[0.3em] text-[length:var(--fs-small)] leading-[1.4] text-ink/60"
                      >
                        {service.title}
                      </p>
                    ))}
                  </div>
                </article>
              );
            })}

            {/* Sixth cell: the call to action. */}
            <div className="flex flex-col justify-between gap-[length:var(--gap-block)] rounded-2xl bg-blue p-[clamp(24px,3vw,40px)] text-white max-[959px]:min-h-[260px]">
              <div className="flex flex-col gap-[length:var(--gap)]">
                <h3 className="m-0 text-balance text-[length:var(--fs-h3)] uppercase">
                  Put the Capability to Work
                </h3>
                <p className="m-0 text-[length:var(--fs-lead)] leading-[1.38] text-white/85 text-pretty">
                  Tell us the site, the payload and the hazard. We bring the
                  drone, the sensors and the crew.
                </p>
              </div>

              <Pill href="/#contact" tone="glass">
                Let&rsquo;s Connect
              </Pill>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ---- 4. Detail: card slider + side panel ---------------------------- */}
      <CapabilityShowcase capabilities={CAPABILITIES}>
        <Pill href="#top" icon={ArrowUp}>
          Back to top
        </Pill>
      </CapabilityShowcase>
    </main>
  );
}
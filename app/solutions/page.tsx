import type { Metadata } from "next";
import Image from "next/image";

import FeatureBanner from "./feature-banner";
import MoreButton from "./more-button";

export const metadata: Metadata = {
  title: "Operational Capabilities & Technical Services | Himalayan Haulers",
  description:
    "The right drone, sensor and crew for work at height, at distance or in confined spaces: logistics, tower stringing, inspection, NDT and sensing.",
};

/* ==========================================================================
   /solutions — four sections on an alternating ground: white hero, tinted
   band, white services, tinted band, then the ink panel that closes it.

   Everything the site already defines is reused rather than re-declared:
   the light band is #f4f7fa, the same surface WhatWeProvide, the homepage
   Solutions and the products page use; navy is --blue, the accent --cyan.

   Type and spacing carry the rules the hero sets:

   1. SIZES. Every size is a raw --fs-* rung, never multiplied, so the h1
      here is exactly the h1 in components/Hero.tsx. Weight, leading and
      tracking come from the global heading rule in globals.css.

   2. HIERARCHY. h1 (page) -> h2 (section) -> h3 (service). Capability
      categories appear as a card's label or as a tag pill — never as a
      heading — so they never sit between the section and the service.

   3. SPACING. One token, --gap, declared once on the page root. Every
      margin and gap reads it: --gap-peer separates siblings inside a card,
      --gap-block separates sections. Component geometry — button, tag and
      panel padding — stays on its own optical values, exactly as the hero
      leaves its CTA at px-6 while spacing its copy from --hero-gap.

   Page chrome (navbar, footer) and the shared UI are untouched; this route
   does not depend on ../what-we-provide/ui or components/ui/Button.
   ========================================================================== */

/* ---- Page shell ---------------------------------------------------------- */

/* The three gap rungs live on the root so every section's container inherits
   them without redeclaring them. */
const PAGE =
  "text-ink [--gap:clamp(14px,1.6vw,24px)] [--gap-peer:calc(var(--gap)*1.5)] [--gap-block:calc(var(--gap)*3)]";

const CONTAINER = "mx-auto w-full max-w-[1180px] px-[clamp(20px,3.4vw,56px)]";

const WHITE = "bg-white py-[length:var(--section-pad)]";
const BAND = "bg-[#f4f7fa] py-[length:var(--section-pad)]";

/* ---- Type ---------------------------------------------------------------- */

/* The hero's own three sources: --fs-* for size, globals.css for weight,
   leading and case. Animation matches the hero's stagger — h1 at 200ms, lead
   at 300ms, both hh-rise. */
const EYEBROW =
  "m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.16em] text-cyan animate-hh-fade [animation-delay:100ms]";

const H1 =
  "m-0 text-[length:var(--fs-h1)] uppercase animate-hh-rise [animation-delay:200ms]";

const LEAD =
  "m-0 max-w-[56ch] text-[length:var(--fs-lead)] leading-[1.38] text-ink/88 text-pretty animate-hh-rise [animation-delay:300ms]";

/* Section headings sit at the h2 rung and centre, as the reference does. */
const H2 = "m-0 text-center text-[length:var(--fs-h2)] uppercase";

/* A service entry's heading — --fs-h3, no margin of its own: the card's
   flex gap places it, and it never sits directly against the fields. */
const SERVICE_TITLE = "m-0 text-[length:var(--fs-h3)] text-ink";

/* mt is safe here because the fields are always wrapped with their heading in
   a block, never a direct child of the card's flex column — so this owns the
   heading-to-fields separation without doubling the card's own gap. */
const FIELDS = "m-0 mt-[length:var(--gap)] flex flex-col gap-[length:var(--gap)]";

const FIELD_LABEL =
  "m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.12em] text-cyan";

/* m-0 first: a <dd> carries a UA inline-start margin that utilities must clear
   before mt can own the top spacing. The em gap under a label is optical — it
   belongs to the label/value unit, not to the page rhythm. */
const FIELD_BODY =
  "m-0 mt-[0.35em] text-[length:var(--fs-body)] leading-[1.45] text-ink/75 text-pretty";

/* ---- Section 1: hero ----------------------------------------------------- */

/* Two-column asymmetric split: the media column is the wider of the two, as
   in the reference, and the two stack on a phone. */
const HERO =
  "grid gap-[length:var(--gap-block)] min-[860px]:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] min-[860px]:items-center";

/* Greeting, statement, subheading and the two actions — one gap between all
   four, so the column reads as a single evenly spaced stack. */
const HERO_TEXT = "flex flex-col gap-[length:var(--gap)]";

const ACTIONS = "flex flex-wrap gap-[length:var(--gap)]";

/* ---- Section 2: about band ----------------------------------------------- */

const ABOUT_GRID =
  "mt-[length:var(--gap-block)] grid gap-[length:var(--gap-block)] min-[860px]:grid-cols-2 min-[860px]:items-center";

const ABOUT_LEAD =
  "m-0 max-w-[56ch] text-[length:var(--fs-lead)] leading-[1.38] text-ink/88 text-pretty";

/* The reference's abstract placeholder shapes, standing in for real imagery:
   rounded tiles, the second dropped a block-gap lower for the offset. */
const TILES = "grid grid-cols-2 gap-[length:var(--gap)]";
const TILE =
  "relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink min-[860px]:[&:nth-child(2)]:mt-[length:var(--gap-block)]";

/* ---- Section 3: services -------------------------------------------------- */

const SERVICES_GRID =
  "mt-[length:var(--gap-block)] grid gap-[length:var(--gap)] min-[560px]:grid-cols-2 min-[900px]:grid-cols-5";

/* The cards are anchors: this is the index, and each one jumps to its detail
   entry in the section below. */
const SERVICE_CARD =
  "group flex flex-col gap-[length:var(--gap)] text-ink no-underline";

const SERVICE_IMG = "relative aspect-[4/3] overflow-hidden bg-ink";

const SERVICE_LABEL =
  "m-0 text-[length:var(--fs-h3)] transition-colors group-hover:text-cyan";

/* ---- Section 4: portfolio ------------------------------------------------- */

/* Two columns rather than five-across: each card carries three fields of
   --fs-body, and five-across would break them to ~25 characters a line. The
   reference's vertical offset survives as an even-child pull, which drops
   every second card a block-gap lower. */
const PORTFOLIO_GRID =
  "mt-[length:var(--gap-block)] grid items-start gap-[length:var(--gap)] min-[900px]:grid-cols-2 min-[900px]:[&>*:nth-child(even)]:mt-[length:var(--gap-block)]";

const PROJECT_CARD =
  "flex scroll-mt-[96px] flex-col gap-[length:var(--gap)] rounded-2xl border border-blue/10 bg-white p-[length:var(--gap-peer)]";

const PROJECT_IMG = "relative aspect-[16/10] overflow-hidden rounded-lg";

/* Same pill the products page uses for its category tags. */
const TAG =
  "w-fit rounded-full bg-cyan/10 px-[0.9em] py-[0.35em] text-[length:var(--fs-small)] font-bold uppercase tracking-[0.04em] text-cyan";

/* ---- Section 5: closing panel --------------------------------------------- */

const CLOSING =
  "bg-ink px-[clamp(24px,3.5vw,56px)] py-[clamp(36px,4.5vw,64px)] text-white animate-hh-fade [animation-delay:280ms]";

const CLOSING_TITLE = "m-0 max-w-[18ch] text-[length:var(--fs-h2)] uppercase";

const CLOSING_TEXT =
  "m-0 mt-[length:var(--gap)] max-w-[62ch] text-[length:var(--fs-lead)] leading-[1.38] text-white/88 text-pretty";

/* ---- Content: capability copy verbatim from the draft -------------------- */

type Field = { label: string; body: string };
type Service = { title: string; fields: Field[] };
type Capability = {
  n: string;
  category: string;
  image: { src: string; alt: string };
  services: Service[];
};

const CAPABILITIES: Capability[] = [
  {
    n: "01",
    category: "Logistics",
    image: {
      src: "/media/Logistics.jpeg",
      alt: "Heavy-lift drone carrying a payload over remote terrain",
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

/* The two images in the about band are the ones no capability claims, so no
   photograph appears twice for different reasons on the page. */
const TILES_CONTENT = [
  {
    src: "/media/power.jpg",
    alt: "Drone stringing a pilot line between power towers",
  },
  {
    src: "/media/defence.jpg",
    alt: "Heavy-lift drone delivering supplies at altitude",
  },
];

/* ---- Small building blocks ----------------------------------------------- */

/** One capability's labelled fields. The labels stay cyan because that is
 *  the one accent that reads on the white card and on ink alike. */
function Fields({ fields }: { fields: Field[] }) {
  return (
    <dl className={FIELDS}>
      {fields.map((field) => (
        <div key={field.label}>
          <dt className={FIELD_LABEL}>{field.label}</dt>
          <dd className={FIELD_BODY}>{field.body}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A service entry as it appears in the portfolio section: tag, heading,
 *  then its three fields. */
function ProjectCard({ cap }: { cap: Capability }) {
  return (
    <article id={`capability-${cap.n}`} className={PROJECT_CARD}>
      <div className={PROJECT_IMG}>
        <Image
          src={cap.image.src}
          alt={cap.image.alt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <p className={TAG}>{cap.category}</p>

      {cap.services.map((service) => (
        <div key={service.title}>
          <h3 className={SERVICE_TITLE}>{service.title}</h3>
          <Fields fields={service.fields} />
        </div>
      ))}
    </article>
  );
}

/**
 * /solutions — Operational Capabilities & Technical Services.
 *
 * Server component: the content is static and the only interactive leaf is
 * the hero's carousel. Keeping it here is what allows the `metadata` export.
 */
export default function SolutionsPage() {
  return (
    <main className={PAGE}>
      {/* Section 1 — hero: media left, statement and actions right. */}
      <section className={WHITE}>
        <div className={CONTAINER}>
          <div className={HERO}>
            <FeatureBanner />

            <div className={HERO_TEXT}>
              <p className={EYEBROW}>Solutions</p>
              <h1 className={H1}>
                Operational Capabilities &amp; Technical Services
              </h1>
              <p className={LEAD}>
                The right drone, sensor and crew for work at height, at
                distance or in confined spaces.
              </p>

              <div className={ACTIONS}>
                <MoreButton href="/#contact" tone="solid">
                  Let&rsquo;s Connect
                </MoreButton>
                <MoreButton href="#capabilities">View Capabilities</MoreButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — about band: paragraph left, offset image tiles right. */}
      <section
        className={`${BAND} animate-hh-fade [animation-delay:120ms]`}
      >
        <div className={CONTAINER}>
          <h2 className={H2}>About Us</h2>

          <div className={ABOUT_GRID}>
            <p className={ABOUT_LEAD}>
              Himalayan Haulers provides specialized, mission-critical aerial
              robotics and engineering support designed to safely execute
              complex operations across challenging environments. Our services
              minimize human exposure to high-risk industrial hazards while
              maximizing operational efficiency and data accuracy.
            </p>

            <div className={TILES}>
              {TILES_CONTENT.map((tile) => (
                <div key={tile.src} className={TILE}>
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="(max-width: 860px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — services: five cards, image over label, the index. */}
      <section
        id="capabilities"
        className={`${WHITE} scroll-mt-[96px] animate-hh-fade [animation-delay:160ms]`}
      >
        <div className={CONTAINER}>
          <h2 className={H2}>Services</h2>

          <div className={SERVICES_GRID}>
            {CAPABILITIES.map((cap) => (
              <a
                key={cap.n}
                href={`#capability-${cap.n}`}
                className={SERVICE_CARD}
              >
                <div className={SERVICE_IMG}>
                  <Image
                    src={cap.image.src}
                    alt={cap.image.alt}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <p className={SERVICE_LABEL}>{cap.category}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — portfolio: the detail entries the index points at. */}
      <section
        className={`${BAND} animate-hh-fade [animation-delay:200ms]`}
      >
        <div className={CONTAINER}>
          <h2 className={H2}>Capabilities</h2>

          <div className={PORTFOLIO_GRID}>
            {CAPABILITIES.map((cap) => (
              <ProjectCard key={cap.n} cap={cap} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — closing panel. */}
      <section className={WHITE}>
        <div className={CONTAINER}>
          <div className={CLOSING}>
            <h2 className={CLOSING_TITLE}>Put the Capability to Work</h2>
            <p className={CLOSING_TEXT}>
              Tell us the site, the payload and the hazard. We bring the drone,
              the sensors and the crew.
            </p>

            <div className="mt-[length:var(--gap)]">
              <MoreButton href="/#contact" tone="dark">
                Let&rsquo;s Connect
              </MoreButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

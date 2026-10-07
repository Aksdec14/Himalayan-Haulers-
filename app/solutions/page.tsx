import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUp, ArrowUpRight, type LucideIcon } from "lucide-react";

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
     3. capabilities    three-up rounded photo cards, a centred pill over each,
                        caption underneath; the sixth cell is a call-to-action
     4. detail          each service as a heading and three muted-label columns
     5. back to top     one centred pill, where the reference has "all projects"

   One visual language: white page, navy type, light weights, 16px radii, and
   pill buttons (glass over photos, pale blue on white).

   - SIZES read --fs-* rungs. The page-level steps live on the root as
     --fs-*-xl multipliers, which are DIFFERENT custom properties from the
     rungs they read (a self-referencing --fs-* is a cycle and silently
     collapses every heading to its inherited size).
   - THE GRID: --content-pad left-anchors every section; --content-max caps
     the measure.
   - GAPS: --gap / --gap-peer / --gap-block are declared once on the root.

   Page chrome (navbar, footer) is untouched.
   ========================================================================== */

/* ---- Page shell ---------------------------------------------------------- */

const PAGE =
  "text-ink [--gap:clamp(14px,1.6vw,24px)] [--gap-peer:calc(var(--gap)*1.5)] [--gap-block:calc(var(--gap)*3)] [--fs-h1-xl:calc(var(--fs-h1)*1.3)] [--fs-h2-xl:calc(var(--fs-h2)*1.6)] [--fs-h3-xl:calc(var(--fs-h3)*1.35)] [--fs-body-xl:calc(var(--fs-body)*1.18)] [--fs-lead-xl:calc(var(--fs-lead)*1.45)] [--fs-small-xl:calc(var(--fs-small)*1.2)]";

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

const H2 =
  "m-0 text-balance text-[length:var(--fs-h3-xl)] font-light leading-[1.15] text-blue";

/* The pale grey-blue label above each column of text. */
const LABEL = "m-0 text-[length:var(--fs-body-xl)] font-normal text-blue/55";

const INTRO =
  "m-0 max-w-[72ch] text-[length:var(--fs-body-xl)] leading-[1.5] text-ink/80 text-pretty";

const BODY =
  "m-0 text-[length:var(--fs-body)] leading-[1.5] text-ink/80 text-pretty";

const SERVICE_TITLE =
  "m-0 text-balance text-[length:var(--fs-h3)] font-light leading-[1.2] text-blue";

/* Three equal columns: the grid every text block on the page sits on. */
const COLS =
  "grid gap-[clamp(20px,2.4vw,40px)] min-[860px]:grid-cols-3";

const PHOTO =
  "object-cover transition-transform duration-500 ease-out transform-gpu motion-safe:group-hover:scale-105 motion-reduce:transition-none";

/* ---- Pill button --------------------------------------------------------- */

const PILL_TONES = {
  /* Pale blue on white pages. */
  light: "bg-[#d5dfe9] text-blue hover:bg-[#c2d1e0]",
  /* Frosted over a photo, white type. */
  glass: "bg-white/25 text-white backdrop-blur-md hover:bg-white/35",
  /* Frosted white over a darkened photo, navy type. */
  solid: "bg-white/85 text-blue backdrop-blur-sm hover:bg-white",
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
      className={`inline-flex w-fit items-center gap-[0.9em] rounded-full px-[1.5em] py-[0.8em] text-[length:var(--fs-small-xl)] no-underline transition-colors duration-300 ${PILL_TONES[tone]} ${className}`}
    >
      {children}
      <Icon size={13} strokeWidth={1.6} aria-hidden="true" />
    </a>
  );
}

/** Labelled fields as three columns: muted label, dark text. */
function Fields({ fields }: { fields: Field[] }) {
  return (
    <dl className={`${COLS} m-0 mt-[length:var(--gap-peer)]`}>
      {fields.map((field) => (
        <div key={field.label}>
          <dt className={LABEL}>{field.label}</dt>
          <dd className={`${BODY} mt-[0.6em]`}>{field.body}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---- Content: capability copy verbatim from the draft -------------------- */

type Field = { label: string; body: string };
type Service = { title: string; fields: Field[] };
type Capability = {
  n: string;
  category: string;
  image: { src: string; alt: string; position?: string };
  services: Service[];
};

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
 * Server component, no client JS: the content is static, and every control on
 * the page is a plain link. Keeping it here is what allows the `metadata`
 * export.
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
          className={`${INNER} flex min-h-[clamp(480px,66vh,760px)] items-center py-[clamp(48px,8vh,96px)]`}
        >
          <div className="flex w-full flex-col gap-[length:var(--gap)] text-white min-[860px]:ml-[48%] min-[860px]:w-[46%] min-[860px]:max-w-[560px]">
            <h1 className="m-0 text-balance text-[length:var(--fs-h1)] font-light leading-[1.12] animate-hh-rise [animation-delay:100ms]">
              Operational Capabilities &amp; Technical Services
            </h1>

            <p className="m-0 max-w-[36ch] text-[length:var(--fs-body-xl)] font-light leading-[1.45] text-white/90 animate-hh-rise [animation-delay:200ms]">
              The right drone, sensor and crew for work at height, at distance or
              in confined spaces.
            </p>

            <div className="flex flex-wrap gap-[length:var(--gap)] pt-[length:var(--gap)] animate-hh-rise [animation-delay:300ms]">
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
        className="scroll-mt-[96px] bg-white py-[clamp(48px,6vw,96px)]"
      >
        <Wrap>
          <h2 className={H2}>About Us</h2>

          <p className={`${INTRO} mt-[length:var(--gap)]`}>{ABOUT}</p>

          {/* Three muted-label columns. */}
          <div className={`${COLS} mt-[clamp(28px,3.4vw,56px)]`}>
            {CONTEXTS.map((context) => (
              <div key={context.title}>
                <h3 className={LABEL}>{context.title}</h3>
                <p className={`${BODY} mt-[0.6em]`}>{context.body}</p>
              </div>
            ))}
          </div>

          {/* Media row: small photo + pill | index rows | large photo. */}
          <div className={`${COLS} mt-[clamp(36px,5vw,80px)] items-stretch`}>
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
                    className="group grid grid-cols-2 gap-[length:var(--gap)] py-[clamp(12px,1.3vw,20px)] text-inherit no-underline"
                  >
                    <span className="text-[length:var(--fs-body-xl)] leading-[1.3] text-blue underline-offset-[6px] decoration-cyan decoration-2 group-hover:underline">
                      {cap.category}
                    </span>
                    <span className="text-[length:var(--fs-small-xl)] leading-[1.4] text-ink/60">
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
        className="scroll-mt-[96px] bg-white pb-[clamp(48px,6vw,96px)]"
      >
        <Wrap>
          <h2 className={H2}>Capabilities</h2>

          <div className="mt-[clamp(24px,3vw,44px)] grid gap-x-[length:var(--gap)] gap-y-[clamp(28px,3.2vw,48px)] min-[640px]:grid-cols-2 min-[960px]:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <article key={cap.n} className="group flex flex-col gap-[0.9em]">
                <div className="relative aspect-[5/6] overflow-hidden rounded-2xl bg-ink">
                  <Image
                    src={cap.image.src}
                    alt={cap.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                    className={PHOTO}
                    style={{ objectPosition: cap.image.position ?? "center" }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-blue/35"
                  />

                  {/* The pill's ::after stretches over the whole photo, so the
                      entire card is the link. */}
                  <div className="absolute inset-0 grid place-items-center">
                    <Pill
                      href={`#capability-${cap.n}`}
                      tone="solid"
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      View details
                    </Pill>
                  </div>
                </div>

                <div>
                  <h3 className="m-0 text-[length:var(--fs-body-xl)] font-normal leading-[1.35] text-blue">
                    {cap.category}
                  </h3>
                  {cap.services.map((service) => (
                    <p
                      key={service.title}
                      className="m-0 mt-[0.25em] text-[length:var(--fs-small-xl)] leading-[1.4] text-ink/60"
                    >
                      {service.title}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            {/* Sixth cell: the call to action. */}
            <div className="flex flex-col justify-between gap-[length:var(--gap-block)] rounded-2xl bg-blue p-[clamp(20px,2.4vw,36px)] text-white max-[959px]:min-h-[260px]">
              <div className="flex flex-col gap-[length:var(--gap)]">
                <h3 className="m-0 text-balance text-[length:var(--fs-h3-xl)] font-light leading-[1.15]">
                  Put the Capability to Work
                </h3>
                <p className="m-0 text-[length:var(--fs-body-xl)] font-light leading-[1.45] text-white/85 text-pretty">
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

      {/* ---- 4. Detail: each service as three muted-label columns ---------- */}
      <section
        id="detail"
        className="scroll-mt-[96px] bg-white pb-[clamp(48px,6vw,96px)]"
      >
        <Wrap>
          <h2 className={H2}>Capability Detail</h2>

          <div className="mt-[clamp(24px,3vw,44px)] flex flex-col gap-[clamp(36px,4.4vw,72px)]">
            {CAPABILITIES.map((cap) => (
              <article
                key={cap.n}
                id={`capability-${cap.n}`}
                className="scroll-mt-[96px] border-t border-blue/15 pt-[clamp(20px,2.4vw,36px)]"
              >
                <p className={LABEL}>{cap.category}</p>

                {cap.services.map((service, index) => (
                  <div
                    key={service.title}
                    className={
                      index === 0
                        ? "mt-[length:var(--gap)]"
                        : "mt-[clamp(28px,3.4vw,52px)]"
                    }
                  >
                    <h3 className={SERVICE_TITLE}>{service.title}</h3>
                    <Fields fields={service.fields} />
                  </div>
                ))}
              </article>
            ))}
          </div>

          {/* One centred pill closes the page. */}
          <div className="flex justify-center pt-[clamp(40px,5vw,72px)]">
            <Pill href="#top" icon={ArrowUp}>
              Back to top
            </Pill>
          </div>
        </Wrap>
      </section>
    </main>
  );
}
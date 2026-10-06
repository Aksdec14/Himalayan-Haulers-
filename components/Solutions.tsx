import Image from "next/image";

type Solution = {
  id: string;
  title: string;
  body: string;
};

const SOLUTIONS: Solution[] = [
  {
    id: "logistics",
    title: "Logistics & Last-Mile Delivery",
    body: "Materials, rations and medicine to remote sites, no road needed.",
  },
  {
    id: "stringing",
    title: "Drone-Based Tower Stringing",
    body: "Pilot lines laid across towers by drone, with no risky climbs.",
  },
  {
    id: "confined-space",
    title: "Confined Space Inspection",
    body: "Drones fly inside tanks and boilers so nobody has to enter.",
  },
  {
    id: "visual-thermal",
    title: "Visual & Thermal Inspection",
    body: "Stacks, pipelines and tanks inspected from the air.",
  },
  {
    id: "ultrasonic",
    title: "Thickness & Coating Measurement",
    body: "Contact UT and coating readings on structures at height.",
  },
  {
    id: "survey",
    title: "Survey & Sensing",
    body: "Bathymetry, GPR and methane detection from the air.",
  },
];

/* Collage slots. `src` is null when no photo exists yet; a slot with a src
   renders an <Image>, a slot without one renders a labelled placeholder. Aspect
   ratios differ per slot so the four read as a collage, and the right-hand column
   is nudged down to stagger them.

   Paths are from public/ root, not public/media/. `alt` describes the photo for
   anyone who cannot see it, so it names the subject rather than the capability. */
const COLLAGE_ITEMS: {
  id: string;
  label: string;
  src: string | null;
  alt: string;
  aspect: string;
}[] = [
  {
    id: "c1",
    label: "Logistics",
    src: "/media/Logistics.jpeg",
    alt: "Heavy-lift drone carrying a payload",
    aspect: "aspect-[3/4]",
  },
  {
    id: "c2",
    label: "Tower stringing",
    src: "/media/Tower-stringing.jpeg",
    alt: "Drone laying a pilot line across a tower",
    aspect: "aspect-[4/3]",
  },
  {
    id: "c3",
    label: "Inspection",
    src: "/media/Inspection.jpeg",
    alt: "Drone inspecting an industrial stack",
    aspect: "aspect-[4/3]",
  },
  {
    id: "c4",
    label: "Survey & sensing",
    src: "/media/Logistics.jpeg",
    alt: "Drone surveying terrain",
    aspect: "aspect-[3/4]",
  },
];

/* Type sizes read from the shared ramp with the SAME multipliers WhatWeProvide
   uses, so the two sections set identical type at identical levels. The section
   itself carries no background: each half paints its own (blue left, white
   right), so the split is a clean full-bleed 50/50.

   The top margin therefore separates this section from the one above by showing
   the page background (--body's #1b2a3d) in the gap, which reads as a dark
   band between the light What We Provide section and the split below. Padding on
   the halves would have pulled the blue and white inward instead, leaving the
   two halves flush with each other and the page. */
const SECTION =
  "mt-[clamp(24px,3vw,48px)] [--fs-h2:calc(var(--fs-h2)*1.6)] [--fs-lead:calc(var(--fs-lead)*1.45)] [--fs-h3:calc(var(--fs-h3)*1.35)] [--fs-body:calc(var(--fs-body)*1.18)] [--fs-small:calc(var(--fs-small)*1.2)]";

/* Full-bleed two-column split. Stacks below 900px: blue content first, then the
   white collage. */
const LAYOUT = "grid grid-cols-2 max-[900px]:grid-cols-1";

/* Vertical rhythm comes from --ry (globals.css), ONE gap used for the section
   padding, the gap between eyebrow / headline / sub-head / list, and the gap
   between list items. Reading a token is what makes the column evenly
   distributed by construction rather than by six clamps happening to look alike.

   Note the class names are written out in full. Interpolating a value into a
   class — py-[${RY}] — silently produces NO CSS, because Tailwind scans source
   text for complete utility names and cannot see a value assembled at runtime. */
const LEFT =
  "bg-blue text-white py-[length:var(--ry)] pl-[length:var(--content-pad)] pr-[clamp(24px,4vw,64px)]";



const HEADLINE =
  "mt-[length:var(--ry)] mb-0 text-[length:var(--fs-h1)] uppercase min-[1100px]:whitespace-nowrap";

/* White at 72% over #13294b measures ~7:1. */
const SUBHEAD =
  "mt-[length:var(--ry)] mb-0 max-w-[46ch] text-[length:var(--fs-lead)] leading-[1.45] text-white/72 text-pretty";

/* No boxes and no tick marks: plain text separated by space alone. */
const LIST =
  "mt-[length:var(--ry)] mb-0 mx-0 px-0 pb-0 list-none flex flex-col gap-[length:var(--ry)]";

const ITEM = "";

const ITEM_TITLE = "m-0 text-[length:var(--fs-h3)] text-white";

const ITEM_BODY =
  "mt-[0.25em] mb-0 text-[length:var(--fs-body)] leading-[1.45] text-white/75 text-pretty";

/* ---- Right: white collage --------------------------------------------------- */

const RIGHT =
  "bg-white py-[length:var(--ry)] pl-[clamp(24px,4vw,64px)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

/* Sticky on wide screens so the images stay in view while the longer list on the
   left scrolls past; static once the layout stacks. */
const COLLAGE_WRAP =
  "min-[901px]:sticky min-[901px]:top-[clamp(16px,6vh,72px)]";

const COLLAGE =
  "grid grid-cols-2 items-start gap-x-[clamp(10px,1.4vw,20px)] gap-y-[length:var(--ry)]";

/* Second column sits lower, which is what turns a grid into a collage. */
const COLLAGE_COL_OFFSET = "mt-[clamp(16px,2.4vw,32px)]";

const IMG_FRAME = "relative w-full overflow-hidden rounded-md";

/* Navy tint and navy label on white. The old white-on-white values would vanish. */
const PLACEHOLDER =
  "flex items-center justify-center p-[clamp(10px,1.2vw,16px)] text-center text-[length:var(--fs-small)] font-bold tracking-[0.06em] uppercase text-blue/60 bg-blue/10";

function CollageTile({ item }: { item: (typeof COLLAGE_ITEMS)[number] }) {
  return (
    <div className={`${IMG_FRAME} ${item.aspect}`}>
      {item.src ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 900px) 45vw, 22vw"
          className="object-cover"
        />
      ) : (
        <div className={`${PLACEHOLDER} absolute inset-0`} aria-hidden="true">
          {item.label}
        </div>
      )}
    </div>
  );
}

/**
 * "Solutions" — full-bleed split: blue content on the left, white image collage
 * on the right.
 *
 * Server component, no interactive parts.
 */
export default function Solutions() {
  const left = COLLAGE_ITEMS.filter((_, i) => i % 2 === 0);
  const right = COLLAGE_ITEMS.filter((_, i) => i % 2 === 1);

  return (
    <section id="solutions" className={SECTION} aria-labelledby="solutions-title">
      <div className={LAYOUT}>
        <div className={LEFT}>
          <div className="animate-hh-fade">
            
            <h2 id="solutions-title" className={HEADLINE}>
              Built for the Hard-to-Reach
            </h2>
            <p className={SUBHEAD}>
              The right drone, sensor and crew for work at height, at distance or
              in confined spaces.
            </p>

            <ul className={LIST}>
              {SOLUTIONS.map((item) => (
                <li key={item.id} className={ITEM}>
                  <h3 className={ITEM_TITLE}>{item.title}</h3>
                  <p className={ITEM_BODY}>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={RIGHT}>
          <div
            className={`${COLLAGE_WRAP} animate-hh-fade [animation-delay:150ms]`}
          >
            <div className={COLLAGE}>
              <div className="flex flex-col gap-y-[length:var(--ry)]">
                {left.map((item) => (
                  <CollageTile key={item.id} item={item} />
                ))}
              </div>
              <div
                className={`flex flex-col gap-y-[length:var(--ry)] ${COLLAGE_COL_OFFSET}`}
              >
                {right.map((item) => (
                  <CollageTile key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
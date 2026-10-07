"use client";

import Image from "next/image";
import { useState } from "react";

/* ==========================================================================
   /solutions — the hero's media column: the featured-capability carousel.

   Client component: it owns exactly one piece of state, which capability is
   featured. The page around it stays a server component, so its `metadata`
   export keeps working.

   It renders the hero's LEFT column only — frame, number tab, both arrows,
   and the slide's metadata line — which is what lets every static line of
   the hero (greeting, h1, subheading, the two actions) stay in page.tsx and
   server-render. The capability's descriptive sentence and its callout are
   deliberately not repeated here: both already live on this page as the
   Technical Value field of the matching portfolio entry, so carrying them
   again under the picture would say the same thing twice.
   ========================================================================== */

type Slide = {
  n: string;
  /** Full title, shown as the carousel's metadata line. */
  title: string;
  image: { src: string; alt: string };
};

const SLIDES: Slide[] = [
  {
    n: "01",
    title: "Logistics & Last-Mile Delivery",
    image: {
      src: "/media/Logistics.jpeg",
      alt: "Heavy-lift drone carrying a payload over remote terrain",
    },
  },
  {
    n: "02",
    title: "Drone-Based Tower Stringing",
    image: {
      src: "/media/Tower-stringing.jpeg",
      alt: "Drone laying a pilot line across a tower",
    },
  },
  {
    n: "03",
    title: "Confined Space Inspection",
    image: {
      src: "/media/Inspection.jpeg",
      alt: "Drone inspecting an industrial structure",
    },
  },
  {
    n: "04",
    title: "Thickness & Coating Measurement",
    image: {
      src: "/media/energy.jpg",
      alt: "Drone inspecting a refinery stack",
    },
  },
  {
    n: "05",
    title: "Survey & Sensing",
    image: {
      src: "/media/construction.jpg",
      alt: "Drone surveying a construction site",
    },
  },
];

/* The column stacks frame and caption off one gap, so the separation reads
   the same as every other gap on the page. */
const HERO_COL = "flex flex-col gap-[length:var(--gap)]";

/* The hero's main image rather than a banner strip: 4:3 on a phone where a
   wider ratio would be a slit, 16:9 above it so it holds its own beside the
   h1. */
const FRAME =
  "relative aspect-[4/3] overflow-hidden bg-ink min-[700px]:aspect-[16/9]";

/* Number tab, flush into the frame's top-left corner. Tabular figures keep
   "01" and "05" the same width so the tab never resizes between slides. */
const COUNTER =
  "absolute left-0 top-0 bg-white px-[clamp(10px,1.2vw,16px)] py-[clamp(6px,0.7vw,10px)] text-[length:var(--fs-small)] font-bold tabular-nums tracking-[0.14em] text-ink";

/* Square, outlined, sitting on the frame's left and right edges rather than
   inside or outside it — the reference puts the controls on the boundaries. */
const ARROW =
  "absolute top-1/2 grid size-[clamp(38px,3.4vw,52px)] -translate-y-1/2 cursor-pointer place-items-center border border-ink/15 bg-white/95 text-ink transition-colors hover:bg-ink hover:text-white";

const METADATA =
  "m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.16em] text-ink/55";

const ArrowIcon = ({ d }: { d: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

export default function FeatureBanner() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  /* Wraps rather than clamps: the arrows say which way is left to go by
     disappearing at the ends, so the count always matches the entry shown. */
  const go = (next: number) =>
    setActive((next + SLIDES.length) % SLIDES.length);

  return (
    <div className={HERO_COL}>
      <div className={FRAME}>
        {/* Keyed so the incoming picture fades in rather than swapping hard.
            reduced-motion collapses the animation globally in globals.css. */}
        <Image
          key={slide.n}
          src={slide.image.src}
          alt={slide.image.alt}
          fill
          priority
          sizes="(max-width: 860px) 100vw, 55vw"
          className="object-cover animate-hh-fade"
        />

        <span className={COUNTER} aria-hidden="true">
          {slide.n}&thinsp;/&thinsp;{SLIDES.length}
        </span>

        <button
          type="button"
          className={`${ARROW} left-0`}
          onClick={() => go(active - 1)}
          aria-label="Show previous capability"
        >
          <ArrowIcon d="M19 12H5M11 6l-6 6 6 6" />
        </button>

        <button
          type="button"
          className={`${ARROW} right-0`}
          onClick={() => go(active + 1)}
          aria-label="Show next capability"
        >
          <ArrowIcon d="M5 12h14M13 6l6 6-6 6" />
        </button>
      </div>

      {/* The live region is the caption line itself, so a screen reader
          announces the swap once. */}
      <div aria-live="polite">
        <p className={METADATA}>
          {slide.n} &mdash; {slide.title}
        </p>
      </div>
    </div>
  );
}

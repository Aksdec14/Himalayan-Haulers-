import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Himalayan Haulers",
  description:
    "Oil & gas, chemicals, cement, maritime, mining, nuclear, power generation, sewers and infrastructure: the industries Himalayan Haulers covers.",
};

/* ==========================================================================
   /industries â€” "Industries We Serve"

   Left: heading and sub-heading. Right: a mosaic of grayscale photo tiles,
   each with a white industry icon and its name, like the reference. Tiles
   without an icon are photo-only fillers (defence, power, energy,
   construction) that complete the mosaic.

   Desktop: a 6 x 4 grid with explicit placement, so every cell is covered.
   Mobile: a plain two-column grid of the nine industry tiles.

   Sizes read the site's raw --fs-* rungs; spacing reads --gap, --gap-block
   and --section-pad, the same as the other routes.

   ICONS: put the PNGs in /public/media/industries/ with the file names below
   (or change the `icon` paths). They are forced to white with
   `brightness-0 invert`; remove that class if the PNGs are already white.
   ========================================================================== */

const PAGE =
  "text-ink [--gap:clamp(14px,1.6vw,24px)] [--gap-block:calc(var(--gap)*3)]";

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

type Tile = {
  /** Industry name. Tiles without one are photo-only fillers. */
  name?: string;
  icon?: string;
  photo: string;
  /** Desktop placement on the 6 x 4 grid. */
  place: string;
};

const CONDITIONS = [
  "At height",
  "At distance",
  "In confined spaces",
];

const TILES: Tile[] = [
  {
    name: "Oil & Gas",
    icon: "/media/industries/oil-gas.png",
    photo: "/media/energy.jpg",
    place:
      "min-[860px]:col-start-1 min-[860px]:col-span-2 min-[860px]:row-start-1 min-[860px]:row-span-2",
  },
  {
    name: "Chemicals",
    icon: "/media/industries/chemicals.png",
    photo: "/media/Inspection.jpeg",
    place: "min-[860px]:col-start-3 min-[860px]:row-start-1",
  },
  {
    name: "Cement",
    icon: "/media/industries/cement.png",
    photo: "/media/construction.jpg",
    place: "min-[860px]:col-start-4 min-[860px]:col-span-2 min-[860px]:row-start-1",
  },
  {
    photo: "/media/defence.jpg",
    place: "min-[860px]:col-start-6 min-[860px]:row-start-1 min-[860px]:row-span-2",
  },
  {
    name: "Maritime",
    icon: "/media/industries/maritime.png",
    photo: "/media/Logistics.jpeg",
    place:
      "min-[860px]:col-start-3 min-[860px]:col-span-2 min-[860px]:row-start-2 min-[860px]:row-span-2",
  },
  {
    name: "Mining",
    icon: "/media/industries/mining.png",
    photo: "/media/Tower-stringing.jpeg",
    place: "min-[860px]:col-start-5 min-[860px]:row-start-2",
  },
  {
    photo: "/media/power.jpg",
    place: "min-[860px]:col-start-1 min-[860px]:row-start-3",
  },
  {
    name: "Nuclear",
    icon: "/media/industries/nuclear.png",
    photo: "/media/Inspection.jpeg",
    place: "min-[860px]:col-start-2 min-[860px]:row-start-3 min-[860px]:row-span-2",
  },
  {
    name: "Power Gen",
    icon: "/media/industries/power-gen.png",
    photo: "/media/power.jpg",
    place: "min-[860px]:col-start-5 min-[860px]:col-span-2 min-[860px]:row-start-3",
  },
  {
    photo: "/media/construction.jpg",
    place: "min-[860px]:col-start-1 min-[860px]:row-start-4",
  },
  {
    name: "Infrastructure",
    icon: "/media/industries/infrastructure.png",
    photo: "/media/Tower-stringing.jpeg",
    place: "min-[860px]:col-start-3 min-[860px]:col-span-2 min-[860px]:row-start-4",
  },
  {
    name: "Sewers",
    icon: "/media/industries/sewers.png",
    photo: "/media/energy.jpg",
    place: "min-[860px]:col-start-5 min-[860px]:row-start-4",
  },
  {
    photo: "/media/energy.jpg",
    place: "min-[860px]:col-start-6 min-[860px]:row-start-4",
  },
];

function Pill({
  href,
  children,
  tone,
}: {
  href: string;
  children: React.ReactNode;
  tone: "solid" | "light" | "white" | "glass";
}) {
  const tones = {
    solid: "bg-blue text-white hover:bg-cyan hover:text-ink",
    light: "bg-[#d5dfe9] text-blue hover:bg-[#c2d1e0]",
    white: "bg-white text-blue hover:bg-cyan hover:text-ink",
    glass: "bg-white/25 text-white hover:bg-white/35",
  } as const;
  return (
    <a
      href={href}
      className={`inline-flex flex-1 items-center justify-between gap-[0.9em] whitespace-nowrap rounded-none px-[1.2em] py-[0.9em] text-[length:var(--fs-nav,16px)] no-underline min-[860px]:flex-none transition-colors duration-300 ${tones[tone]}`}
    >
      {children}
      <ArrowUpRight size={13} strokeWidth={1.6} aria-hidden="true" />
    </a>
  );
}

function MosaicTile({ tile }: { tile: Tile }) {
  const isFiller = !tile.name;

  return (
    <li
      className={`group relative aspect-square overflow-hidden bg-ink min-[860px]:aspect-auto ${
        isFiller ? "max-[859px]:hidden" : ""
      } ${tile.place}`}
    >
      <Image
        src={tile.photo}
        alt=""
        fill
        sizes="(max-width: 860px) 50vw, 18vw"
        className="object-cover grayscale transition duration-500 ease-out transform-gpu motion-safe:group-hover:scale-105 group-hover:grayscale-0 motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-blue/35 transition-opacity duration-500 group-hover:opacity-60"
      />

      {tile.name && tile.icon ? (
        <>
          <span className="absolute inset-0 grid place-items-center p-[16%] pb-[34%]">
            <span className="relative block size-full">
              <Image
                src={tile.icon}
                alt=""
                fill
                sizes="160px"
                className="object-contain brightness-0 invert"
              />
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 px-[clamp(8px,1vw,14px)] pb-[clamp(8px,1vw,14px)] break-words text-center text-[10px] font-bold uppercase leading-tight tracking-[0.04em] text-white min-[860px]:text-[length:var(--fs-small)] min-[860px]:tracking-[0.08em]">
            {tile.name}
          </span>
        </>
      ) : null}
    </li>
  );
}

const WRAP = "mx-auto w-full max-w-[1400px]";
const H2 = "m-0 text-[length:var(--fs-h2)] uppercase";
const BODY =
  "m-0 text-[length:var(--fs-body)] leading-[1.5] text-ink/80 text-pretty";
const LABEL =
  "m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.12em] text-blue/70";

/* Matches the five cards on /solutions (#capability-01 ... 05). */
const CAPS = ["Logistics", "Tower Stringing", "Inspection", "NDT", "Sensing"];

/* DRAFT COPY: written from the capability wording on /solutions. Check each
   line against what you actually do in the industry before publishing. */
const DETAIL = [
  {
    name: "Oil & Gas",
    work: "Visual and thermal inspection of flare stacks and pipelines, contact UT thickness checks on elevated assets, and airborne gas leak detection.",
    hazard: "Rope access and scaffolding at height.",
    caps: ["03", "04", "05"],
  },
  {
    name: "Chemicals",
    work: "Aerial inspection of storage vessels, tanks and process structures, inside and out.",
    hazard: "Human entry into confined spaces.",
    caps: ["03", "04"],
  },
  {
    name: "Cement",
    work: "Inspection and thickness checks on tall vertical structures and processing plant.",
    hazard: "Manual climbing and scaffolding.",
    caps: ["03", "04"],
  },
  {
    name: "Maritime",
    work: "Heavy-lift delivery of provisions and materials to hard-to-reach locations, and bathymetric mapping.",
    hazard: "Surface transit risk and ground infrastructure limits.",
    caps: ["01", "05"],
  },
  {
    name: "Mining",
    work: "Supply runs over rugged terrain and survey work, including GPR profiling and LiDAR.",
    hazard: "Long, risky surface transit to remote sites.",
    caps: ["01", "05"],
  },
  {
    name: "Nuclear",
    work: "Inspection of restricted industrial interiors with collision-tolerant systems, without sending people in.",
    hazard: "Human exposure in restricted areas.",
    caps: ["03"],
  },
  {
    name: "Power Gen",
    work: "Pilot-line stringing across transmission towers, plus visual and thermal inspection of boilers and structures.",
    hazard: "High-risk manual climbing.",
    caps: ["02", "03", "04"],
  },
  {
    name: "Sewers",
    work: "Inspection of tanks and confined interiors using caged aerial systems that work without GPS.",
    hazard: "Confined space entry.",
    caps: ["03"],
  },
  {
    name: "Infrastructure",
    work: "Pilot lines across steep valleys, inspection of tall assets, and subsurface survey.",
    hazard: "Climbing, scaffolding and ground-based stringing.",
    caps: ["02", "03", "05"],
  },
];

const STEPS = [
  {
    title: "Site Brief",
    body: "You tell us the site, the payload and the hazard.",
  },
  {
    title: "Survey & Planning",
    body: "We assess the terrain, the airspace and the risks, and choose the drone and sensors.",
  },
  {
    title: "Mission",
    body: "Our crew flies the operation so your people stay out of harm's way.",
  },
  {
    title: "Data & Reporting",
    body: "You receive verified inspection data and a clear record of the work.",
  },
];

type Detail = (typeof DETAIL)[number];

function DetailCard({ item, index }: { item: Detail; index: number }) {
  return (
    <article className="group flex flex-col border border-blue/10 bg-white shadow-[0_18px_40px_-24px_rgba(10,25,45,0.28)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-20px_rgba(10,25,45,0.38)]">
      <span
        aria-hidden="true"
        className="block h-[3px] w-full bg-blue transition-colors duration-300 group-hover:bg-cyan"
      />

      <div className="flex flex-1 flex-col p-[clamp(18px,1.8vw,26px)]">
        <div className="flex items-baseline justify-between gap-[length:var(--gap)]">
          <h3 className="m-0 text-[length:var(--fs-h3)]">{item.name}</h3>
          <span aria-hidden="true" className={LABEL}>
            0{index + 1}
          </span>
        </div>

        <p className={`${LABEL} mt-[length:var(--gap)]`}>Scope</p>
        <p className={`${BODY} mt-[0.3em]`}>{item.work}</p>

        <div className="mt-[length:var(--gap)] border-t border-blue/10 pt-[length:var(--gap)]">
          <p className={LABEL}>Hazard removed</p>
          <p className={`${BODY} mt-[0.3em]`}>{item.hazard}</p>
        </div>

        <div className="flex flex-wrap gap-[0.5em] pt-[length:var(--gap)]">
          {item.caps.map((n) => (
            <a
              key={n}
              href={`/solutions#capability-${n}`}
              className="rounded-full bg-[#f0f2f5] px-[1em] py-[0.4em] text-[length:var(--fs-small)] text-blue no-underline transition-colors duration-300 hover:bg-blue hover:text-white"
            >
              {CAPS[Number(n) - 1]}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

/* Two vertical carousels: one drifts up, one drifts down. The list is drawn
   twice and the track moves by exactly one copy (-50%), so the loop is
   seamless. The second copy is inert: hidden from assistive tech and the Tab
   order. Hover or focus pauses; reduced motion stops it and lets the column
   scroll by hand. */
const MARQUEE_CSS = `
@keyframes hh-up{from{transform:translateY(0)}to{transform:translateY(-50%)}}
@keyframes hh-down{from{transform:translateY(-50%)}to{transform:translateY(0)}}
.hh-track-up{animation:hh-up 50s linear infinite;will-change:transform}
.hh-track-down{animation:hh-down 42s linear infinite;will-change:transform}
.hh-col:hover .hh-track-up,.hh-col:hover .hh-track-down,
.hh-col:focus-within .hh-track-up,.hh-col:focus-within .hh-track-down{animation-play-state:paused}
@media (prefers-reduced-motion:reduce){
.hh-track-up,.hh-track-down{animation:none}
.hh-col{overflow-y:auto}
}`;

function Column({
  items,
  dir,
  className = "",
}: {
  items: { item: Detail; index: number }[];
  dir: "up" | "down";
  className?: string;
}) {
  const copy = (hidden: boolean) => (
    <div
      aria-hidden={hidden || undefined}
      inert={hidden || undefined}
      className="flex flex-col gap-[length:var(--card-gap,24px)] pb-[length:var(--card-gap,24px)]"
    >
      {items.map(({ item, index }) => (
        <DetailCard key={item.name} item={item} index={index} />
      ))}
    </div>
  );

  return (
    <div
      className={`hh-col h-[clamp(460px,72vh,620px)] min-w-0 overflow-hidden px-[10px] [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] ${className}`}
    >
      <div className={dir === "up" ? "hh-track-up" : "hh-track-down"}>
        {copy(false)}
        {copy(true)}
      </div>
    </div>
  );
}

const COL_A = DETAIL.map((item, index) => ({ item, index })).filter((_, i) => i % 2 === 0);
const COL_B = DETAIL.map((item, index) => ({ item, index })).filter((_, i) => i % 2 === 1);

export default function IndustriesPage() {
  return (
    <main id="top" className={PAGE}>
      <section className="overflow-x-clip bg-[#f0f2f5] py-[calc(var(--section-pad)*0.9)]">
        <div className={INNER}>
          <div className="mx-auto grid w-full max-w-[1400px] items-stretch gap-[length:var(--gap-block)] min-[860px]:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)]">
            {/* Left: heading, copy, conditions, CTAs. It stretches to the
                mosaic's height: heading level with the top row, CTAs level
                with the bottom row. */}
            <div className="flex flex-col justify-between gap-[length:var(--gap-block)]">
              <div className="flex flex-col gap-[length:var(--gap)]">
                <span
                  aria-hidden="true"
                  className="block h-[2px] w-[clamp(80px,10vw,140px)] bg-blue"
                />
                <h1 className="m-0 text-[length:var(--fs-h2)] uppercase">
                  Industries We Serve
                </h1>
                <p className="m-0 max-w-[34ch] text-[length:var(--fs-lead)] leading-[1.38] text-ink/88 text-pretty">
                  These are the areas that we cover.
                </p>
                <p className="m-0 max-w-[44ch] text-[length:var(--fs-body)] leading-[1.5] text-ink/80 text-pretty">
                  Specialized aerial robotics for the places where work is
                  hardest and riskiest, minimizing human exposure to hazards
                  while maximizing efficiency and data accuracy.
                </p>
                <p className="m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.1em] text-blue">
                  {CONDITIONS.join(" Â· ")}
                </p>
              </div>

              <div className="flex flex-nowrap gap-[length:var(--gap)]">
                <Pill href="/contact" tone="solid">
                  Let&rsquo;s Connect
                </Pill>
                <Pill href="/solutions" tone="light">
                  View Capabilities
                </Pill>
              </div>
            </div>

            {/* Right: the mosaic */}
            <ul
              aria-label="Industries we serve"
              className="m-0 grid list-none grid-cols-3 gap-[6px] p-0 min-w-0 min-[860px]:h-[clamp(380px,50vh,500px)] min-[860px]:grid-cols-6 min-[860px]:grid-rows-4"
            >
              {TILES.map((tile, index) => (
                <MosaicTile key={tile.name ?? `filler-${index}`} tile={tile} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---- What we do in each industry ---------------------------------- */}
      <section
        id="industry-detail"
        className="scroll-mt-[96px] overflow-x-clip bg-white py-[calc(var(--section-pad)*0.8)]"
      >
        <style>{MARQUEE_CSS}</style>
        <div className={INNER}>
          <div className={WRAP}>
            <div className="grid items-center gap-[length:var(--gap-block)] min-[860px]:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)]">
              {/* Left: heading and sub-heading */}
              <div className="flex flex-col gap-[length:var(--gap)]">
                <span
                  aria-hidden="true"
                  className="block h-[2px] w-[clamp(80px,10vw,140px)] bg-blue"
                />
                <h2 className={H2}>What We Do In Each Industry</h2>
                <p className="m-0 max-w-[30ch] text-[length:var(--fs-lead)] leading-[1.38] text-ink/88 text-pretty">
                  Nine industries, one aim: keep people out of harm&rsquo;s way.
                </p>
                <p className={`${BODY} max-w-[44ch]`}>
                  For each sector, here is the work we take on, the hazard it
                  removes, and the capability behind it.
                </p>
                <div className="mt-[length:var(--gap)]">
                  <Pill href="/solutions" tone="solid">
                    View Capabilities
                  </Pill>
                </div>
              </div>

              {/* Right: two vertical carousels, up and down */}
              <div className="grid min-w-0 grid-cols-1 gap-[length:var(--gap)] min-[860px]:grid-cols-2">
                <Column items={COL_A} dir="up" />
                <Column items={COL_B} dir="down" className="max-[859px]:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- How we work -------------------------------------------------- */}
      <section className="overflow-x-clip bg-white py-[calc(var(--section-pad)*0.8)]">
        <div className={INNER}>
          <div className={WRAP}>
            <h2 className={H2}>How We Work</h2>

            <ol className="m-0 mt-[length:var(--gap-block)] grid list-none gap-[length:var(--gap-block)] p-0 min-[640px]:grid-cols-2 min-[960px]:grid-cols-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="border-t-2 border-blue pt-[length:var(--gap)]">
                  <p className={LABEL}>Step 0{i + 1}</p>
                  <h3 className="m-0 mt-[0.4em] text-[length:var(--fs-h3)]">
                    {step.title}
                  </h3>
                  <p className={`${BODY} mt-[0.5em]`}>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---- Closing call to action --------------------------------------- */}
      <section className="overflow-x-clip bg-blue py-[calc(var(--section-pad)*0.8)] text-white">
        <div className={INNER}>
          <div className={`${WRAP} flex flex-col gap-[length:var(--gap-block)] min-[860px]:flex-row min-[860px]:items-end min-[860px]:justify-between`}>
            <div className="flex max-w-[40ch] flex-col gap-[length:var(--gap)]">
              <h2 className="m-0 text-balance text-[length:var(--fs-h2)] uppercase">
                Tell Us The Site, The Payload And The Hazard
              </h2>
              <p className="m-0 text-[length:var(--fs-lead)] leading-[1.38] text-white/85 text-pretty">
                We bring the drone, the sensors and the crew.
              </p>
            </div>

            <div className="flex flex-nowrap gap-[length:var(--gap)]">
              <Pill href="/contact" tone="white">
                Let&rsquo;s Connect
              </Pill>
              <Pill href="/solutions" tone="glass">
                View Capabilities
              </Pill>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
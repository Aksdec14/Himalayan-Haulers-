import Image from "next/image";
import Button from "./ui/Button";

type Industry = {
  id: string;
  title: string;
  body: string;
  image: { src: string; alt: string; position?: string };
};

/* Every area we cover. Power is now Power Gen and Energy is now Oil & Gas, so
   nothing is listed twice. Swap any `image.src` for a better photo. */
const INDUSTRIES: Industry[] = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    body: "Flare stack and pipeline inspection, thickness checks and gas leak detection.",
    image: { src: "/media/energy.jpg", alt: "Drone inspecting a refinery stack" },
  },
  {
    id: "chemicals",
    title: "Chemicals",
    body: "Vessel, tank and process-structure inspection without human entry.",
    image: { src: "/media/Inspection.jpeg", alt: "Drone inspecting an industrial structure" },
  },
  {
    id: "cement",
    title: "Cement",
    body: "Inspection and thickness checks on tall structures and processing plant.",
    image: { src: "/media/construction.jpg", alt: "Drone surveying an industrial site" },
  },
  {
    id: "maritime",
    title: "Maritime",
    body: "Heavy-lift delivery to hard-to-reach locations, plus bathymetric mapping.",
    image: {
      src: "/media/Logistics.jpeg",
      alt: "Heavy-lift drone carrying a payload",
      position: "center top",
    },
  },
  {
    id: "mining",
    title: "Mining",
    body: "Supply runs over rugged terrain, with GPR and LiDAR survey work.",
    image: { src: "/media/Tower-stringing.jpeg", alt: "Drone working over rough terrain" },
  },
  {
    id: "nuclear",
    title: "Nuclear",
    body: "Inspection of restricted interiors without sending people in.",
    image: { src: "/media/Inspection.jpeg", alt: "Drone inspecting a restricted interior" },
  },
  {
    id: "power-gen",
    title: "Power Gen",
    body: "Pilot-line stringing, tower-site delivery and line inspection.",
    image: { src: "/media/power.jpg", alt: "Drone stringing a pilot line between power towers" },
  },
  {
    id: "sewers",
    title: "Sewers",
    body: "Confined interior inspection with caged systems that need no GPS.",
    image: { src: "/media/energy.jpg", alt: "Drone inspecting a confined structure" },
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    body: "Pilot lines across valleys, tall-asset inspection and subsurface survey.",
    image: { src: "/media/Tower-stringing.jpeg", alt: "Drone laying a pilot line across a tower" },
  },
  {
    id: "defence",
    title: "Defence",
    body: "Heavy-lift resupply to remote posts, with airdrops and high-altitude operation.",
    image: { src: "/media/defence.jpg", alt: "Heavy-lift drone delivering supplies at altitude" },
  },
  {
    id: "construction",
    title: "Construction",
    body: "Materials to sites machines can't reach, plus GPR and bathymetry surveys.",
    image: { src: "/media/construction.jpg", alt: "Drone surveying a construction site" },
  },
];

/* Layout: a heading with the contact link, then one row of compact photo cards
   that drifts sideways on its own, continuously. Every card shows its number,
   title, description and button at all times.

   The row is drawn twice and the track moves by exactly one copy (-50%), so
   the loop has no jump. The second copy is inert: hidden from assistive tech
   and the Tab order. Hovering or tabbing into the row pauses it; for visitors
   with reduced motion it stops and the row scrolls by hand instead.

   Theme is unchanged: white page, navy text, cyan accents, the same tokens as
   before. --content-pad keeps the heading on the navbar logo's vertical line. */
const SECTION =
  "overflow-x-clip bg-white text-[color:var(--blue)] [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] py-[length:var(--section-pad)]";

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

const HEADER =
  "flex flex-wrap items-end justify-between gap-x-[clamp(24px,4vw,64px)] gap-y-[clamp(14px,2vw,24px)] max-w-[length:var(--content-max,1200px)] mb-[clamp(24px,3vw,44px)]";

const TITLE = "m-0 text-[length:var(--fs-h1)] uppercase text-[color:var(--blue)]";

const HEADER_LINK =
  "inline-block border-0 border-b-2 border-solid border-[color:var(--blue)] pb-[0.35em] text-[length:var(--fs-small)] font-semibold text-[color:var(--blue)] no-underline transition-colors hover:border-[color:var(--cyan)] focus-visible:border-[color:var(--cyan)]";

/* Speed: the full loop takes this long. Raise it to slow the row down. */
const LOOP_SECONDS = 70;

const MARQUEE_CSS = `
@keyframes hh-ind-move{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.hh-ind-track{animation:hh-ind-move ${LOOP_SECONDS}s linear infinite;will-change:transform}
.hh-ind:hover .hh-ind-track,.hh-ind:focus-within .hh-ind-track{animation-play-state:paused}
@media (prefers-reduced-motion:reduce){
.hh-ind-track{animation:none}
.hh-ind{overflow-x:auto}
}`;

const CARD_GAP = "gap-[length:var(--card-gap,24px)]";

/* Compact cards: landscape, a fixed short height. */
const CARD =
  "group relative isolate h-[clamp(200px,16vw,240px)] w-[clamp(280px,26vw,360px)] shrink-0 overflow-hidden rounded-lg border border-[color:var(--blue)]/10 bg-[color:var(--blue)] text-white shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-[color:var(--cyan)]/50";

const CARD_PHOTO =
  "absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 motion-reduce:transition-none";

const SCRIM = "absolute inset-0 bg-linear-to-t from-[color:var(--blue)] via-[color:var(--blue)]/80 to-[color:var(--blue)]/15";

const CARD_TEXT = "absolute inset-x-0 bottom-0 p-[clamp(14px,1.4vw,20px)]";

const NUMBER =
  "text-[length:var(--fs-small)] font-bold uppercase tracking-[0.1em] text-[color:var(--cyan)]";

/* The global h1-h6 rule forces `color: inherit` unlayered, so the title takes
   white from the card and the trailing `!` keeps it white regardless. */
const ITEM_TITLE = "m-0 text-[length:var(--fs-h3)] leading-[1.2] text-white!";

const ITEM_BODY =
  "m-0 mt-[0.35em] text-[length:var(--fs-small)] leading-[1.4] text-white/90 text-pretty";

const ITEM_CTA = "mt-[clamp(8px,1vw,12px)] text-white!";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      inert={hidden || undefined}
      className={`m-0 flex shrink-0 list-none p-0 pr-[length:var(--card-gap,24px)] ${CARD_GAP}`}
    >
      {INDUSTRIES.map((industry, index) => (
        <li key={industry.id} className={CARD}>
          <Image
            src={industry.image.src}
            alt={industry.image.alt}
            fill
            sizes="(max-width: 860px) 280px, 360px"
            className={CARD_PHOTO}
            style={{ objectPosition: industry.image.position ?? "center" }}
          />
          <div className={SCRIM} aria-hidden="true" />

          <div className={CARD_TEXT}>
            <div className="flex items-baseline gap-[0.7em]">
              <span className={NUMBER} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={ITEM_TITLE}>{industry.title}</h3>
            </div>
            <p className={ITEM_BODY}>{industry.body}</p>
            <Button
              href="/industries"
              tone="onDark"
              withArrow
              className={ITEM_CTA}
            >
              Explore {industry.title}
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

/**
 * "Industries We Serve" — a heading and a contact link, then a continuously
 * moving row of compact photo cards covering every area we work in.
 *
 * Server component; the only interactive part is the shared Button.
 */
export default function Industries() {
  return (
    <section
      id="industries"
      className={SECTION}
      aria-labelledby="industries-title"
    >
      <style>{MARQUEE_CSS}</style>

      <div className={INNER}>
        <header className={`${HEADER} [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both]`}>
          <h2 id="industries-title" className={TITLE}>
            Industries We Serve
          </h2>
          <a href="/contact" className={HEADER_LINK}>
            Ready to get started? Contact us
          </a>
        </header>
      </div>

      <div className="hh-ind overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="hh-ind-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactElement,
  type RefObject,
} from "react";

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

type IconName =
  | "box"
  | "route"
  | "shield"
  | "layers"
  | "check"
  | "mountain"
  | "target"
  | "factory"
  | "bolt"
  | "pin"
  | "feather"
  | "clock"
  | "rotor"
  | "eye"
  | "plane"
  | "grid"
  | "radar"
  | "flag";

const ICONS: Record<IconName, ReactElement> = {
  box: <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9" />,
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h6a3 3 0 000-6h-4a3 3 0 010-6h6" />
    </>
  ),
  shield: <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3zM9 12l2 2 4-4" />,
  layers: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" />,
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </>
  ),
  mountain: <path d="M3 19l6-11 4 7 2-3 6 7H3z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </>
  ),
  factory: <path d="M3 21V10l6 3V10l6 3V6h3v15H3zM7 17h2M12 17h2" />,
  bolt: <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z" />,
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  feather: <path d="M20 4c-8 0-13 4-13 11l-3 5M7 15h7M20 4c0 8-4 12-11 12" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  rotor: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10V4M12 14v6M10 12H4M14 12h6M5.6 5.6l3 3M15.4 15.4l3 3M18.4 5.6l-3 3M8.6 15.4l-3 3" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  plane: <path d="M21 4L3 11l7 2.5L12.5 21 21 4zM10 13.5L21 4" />,
  grid: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />,
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 12l6-6" />
    </>
  ),
  flag: <path d="M5 21V4M5 4h11l-2 4 2 4H5" />,
};

function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {ICONS[name]}
    </svg>
  );
}

/* Diagonal arrow, like "Visit site" in the reference */
function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 12L12 4M5.5 4H12v6.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

/* Every CTA and card link on this section goes here */
const PRODUCTS_URL = "/what-we-provide/products";

type Feature = [IconName, string];
type Drone = { id: string; model: string; sub: string; features: Feature[] };
type Tag = [IconName, string];

type Category = {
  id: "commercial" | "defence";
  tab: string;
  title: [string, string];
  lead: string;
  tags: Tag[];
  cta: { label: string; href: string };
  drones: Drone[];
};

const CATEGORIES: Category[] = [
  {
    id: "commercial",
    tab: "Commercial",
    title: ["Freightor for", "Logistics Drones"],
    lead: "Heavy-lift drones from 5 kg to 300 kg, built in India for every kind of terrain.",
    tags: [
      ["box", "Heavy payloads"],
      ["mountain", "All-terrain operations"],
    ],
    cta: { label: "Explore All Drones", href: PRODUCTS_URL },
    drones: [
      {
        id: "c300",
        model: "C300",
        sub: "Payload 300 kg",
        features: [
          ["box", "Heavy-lift capability"],
          ["route", "Long-range operations"],
          ["shield", "Rugged design"],
        ],
      },
      {
        id: "c200",
        model: "C200",
        sub: "Payload 200 kg",
        features: [
          ["layers", "High payload capacity"],
          ["check", "Reliable performance"],
          ["mountain", "All-terrain operations"],
        ],
      },
      {
        id: "c100",
        model: "C100",
        sub: "Payload 100 kg",
        features: [
          ["target", "Versatile operations"],
          ["box", "Optimised payload"],
          ["factory", "Industrial applications"],
        ],
      },
      {
        id: "c20",
        model: "C20",
        sub: "Payload 20 kg",
        features: [
          ["grid", "Flexible deployment"],
          ["bolt", "Efficient operations"],
          ["pin", "Field-ready performance"],
        ],
      },
      {
        id: "c5",
        model: "C5",
        sub: "Payload 5 kg",
        features: [
          ["feather", "Lightweight design"],
          ["clock", "Quick deployment"],
          ["layers", "Multi-purpose use"],
        ],
      },
      {
        id: "cfwvtol7",
        model: "CFWVTOL7",
        sub: "Payload 7 kg VTOL",
        features: [
          ["rotor", "VTOL capability"],
          ["route", "Extended range"],
          ["mountain", "Difficult-terrain operations"],
        ],
      },
    ],
  },
  {
    id: "defence",
    tab: "Defence",
    title: ["Freightor for", "Defence Drones"],
    lead: "Mission-ready drone platforms for demanding defence operations, day and night.",
    tags: [
      ["box", "High payloads"],
      ["route", "Long endurance"],
      ["target", "Tactical operations"],
    ],
    cta: { label: "Explore All Defence Drones", href: PRODUCTS_URL },
    drones: [
      {
        id: "d300",
        model: "D300",
        sub: "Payload 300 kg",
        features: [
          ["box", "Heavy-payload capability"],
          ["layers", "Logistics support"],
          ["shield", "Rugged operations"],
        ],
      },
      {
        id: "d200",
        model: "D200",
        sub: "Payload 200 kg",
        features: [
          ["layers", "High payload capacity"],
          ["route", "Tactical logistics"],
          ["pin", "Field operations"],
        ],
      },
      {
        id: "d100",
        model: "D100",
        sub: "Payload 100 kg",
        features: [
          ["target", "Versatile deployment"],
          ["box", "Payload flexibility"],
          ["check", "Mission support"],
        ],
      },
      {
        id: "d20",
        model: "D20",
        sub: "Payload 20 kg",
        features: [
          ["grid", "Compact logistics"],
          ["bolt", "Flexible deployment"],
          ["pin", "Field-ready operations"],
        ],
      },
      {
        id: "d5",
        model: "D5",
        sub: "Payload 5 kg",
        features: [
          ["feather", "Lightweight platform"],
          ["clock", "Rapid deployment"],
          ["layers", "Multi-purpose capability"],
        ],
      },
      {
        id: "dfwvtol7",
        model: "DFWVTOL7",
        sub: "Payload 7 kg VTOL",
        features: [
          ["rotor", "Vertical take-off and landing"],
          ["plane", "Fixed-wing configuration"],
          ["route", "Extended-range operations"],
        ],
      },
      {
        id: "skye-d100-defence",
        model: "Skye D100",
        sub: "Surveillance",
        features: [
          ["eye", "Aerial surveillance"],
          ["radar", "Situational awareness"],
          ["clock", "Persistent monitoring"],
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */

const FADE_CSS = `
@keyframes fd-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.fd-swap{animation:fd-in .35s ease-out both}
@media (prefers-reduced-motion:reduce){.fd-swap{animation:none}}
`;

/* Left-anchored on the same content line as the sections above and below:
   --content-pad is --hero-left, so this shares the vertical line of the
   navbar logo and the hero headline. Copied from Solutions.tsx so the two
   bands cannot drift apart. */
const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 3l5 5-5 5" />
    </svg>
  );
}

/* "Heavy-lift capability", "Rugged design" -> one readable sentence */
function describe(features: Feature[]) {
  const labels = features.map(([, label], i) =>
    i === 0 ? label : label.charAt(0).toLowerCase() + label.slice(1),
  );
  return `${labels.join(", ")}.`;
}

/* Left side: text only */
function IntroPanel({ category }: { category: Category }) {
  return (
    <div className="flex min-w-0 flex-col justify-between gap-6 py-1 lg:pr-4">
      <div>
        <h2 className="m-0 text-[clamp(22px,2.4vw,30px)] font-semibold leading-[1.1] tracking-tight text-[color:var(--blue)] text-balance">
          {category.title[0]}{" "}
          <em className="font-serif font-normal italic text-[color:var(--cyan)]">
            {category.title[1]}
          </em>
        </h2>
        <p className="mb-0 mt-3 max-w-[34ch] text-[clamp(13px,1.2vw,15px)] leading-[1.55] text-[color:var(--blue)]/70 text-pretty">
          {category.lead}
        </p>

        <ul className="m-0 mt-5 flex list-none flex-col gap-1.5 p-0">
          {category.tags.map(([, label]) => (
            <li key={label} className="text-[13px] text-[color:var(--blue)]/80">
              {label}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={category.cta.href}
        className="w-fit text-[15px] font-semibold text-[color:var(--blue)] underline decoration-[color:var(--cyan)] decoration-2 underline-offset-4 transition-colors hover:text-[color:var(--cyan)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--cyan)]"
      >
        {category.cta.label}
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Collage layout (desktop)                                            */
/* ------------------------------------------------------------------ */

/*
  Two rows of tiles with different widths and heights, like the
  collage reference. Top row is bottom-aligned (tops form a staircase),
  bottom row is top-aligned. `grow` is the relative width.

  Slots in reading order:  A B C D  /  E F G H
  Drones fill the biggest tiles first (PRIORITY below).
*/
type Level = "sm" | "md" | "lg"; // how much text a tile shows
type Slot = { grow: number; h: string; level: Level; tone: 0 | 1 | 2 };

const SLOTS: Slot[] = [
  { grow: 82, h: "h-[120px]", level: "sm", tone: 0 }, // A
  { grow: 112, h: "h-[170px]", level: "md", tone: 0 }, // B
  { grow: 143, h: "h-[220px]", level: "lg", tone: 1 }, // C
  { grow: 149, h: "h-[170px]", level: "md", tone: 2 }, // D
  { grow: 138, h: "h-[110px]", level: "sm", tone: 0 }, // E
  { grow: 87, h: "h-[150px]", level: "md", tone: 2 }, // F
  { grow: 175, h: "h-[190px]", level: "lg", tone: 0 }, // G
  { grow: 88, h: "h-[125px]", level: "sm", tone: 1 }, // H
];

/* drone index -> slot index (C, G, D, B, F, E, H, A) */
const PRIORITY = [2, 6, 3, 1, 5, 4, 7, 0];

const TONES = [
  {
    card: "bg-white text-[color:var(--blue)] border border-[color:var(--blue)]/10",
    sub: "text-[color:var(--cyan)]",
    body: "text-[color:var(--blue)]/70",
    dot: "bg-[color:var(--cyan)]/15 text-[color:var(--cyan)]",
  },
  {
    card: "bg-[color:var(--blue)] text-white",
    sub: "text-white/60",
    body: "text-white/75",
    dot: "bg-white/15 text-white",
  },
  {
    card: "bg-[color:var(--cyan)]/15 text-[color:var(--blue)]",
    sub: "text-[color:var(--blue)]/65",
    body: "text-[color:var(--blue)]/75",
    dot: "bg-white/70 text-[color:var(--blue)]",
  },
] as const;

/* True only on desktop (>= 1024px, Tailwind `lg`). The collage and its image
   are not mounted at all below that, so phones never download the photo. */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

/* ------------------------------------------------------------------ */
/* Shared image                                                        */
/* ------------------------------------------------------------------ */

/* One image covers the whole collage; each tile shows its own piece of it.
   Replace with your own file (put it in /public/images/). */
const COLLAGE_IMAGE = "/media/image.png";

type Measure = { x: number; y: number; w: number; h: number };

/* Sits inside a tile. It is as big as the whole collage and shifted back by
   the tile's offset, so every tile lines up like pieces of one picture. */
function SharedImage({ wrap }: { wrap: RefObject<HTMLDivElement | null> }) {
  const self = useRef<HTMLDivElement>(null);
  const [m, setM] = useState<Measure>({ x: 0, y: 0, w: 0, h: 0 });

  /* useEffect, not useLayoutEffect: a child's layout effect runs before the
     parent's ref is attached, so wrap.current was null and the image was
     never sized (0 x 0), which is why nothing showed. */
  useEffect(() => {
    const container = wrap.current;
    const tile = self.current?.parentElement;
    if (!container || !tile) return;

    const measure = () => {
      const a = container.getBoundingClientRect();
      const b = tile.getBoundingClientRect();
      setM({ x: b.left - a.left, y: b.top - a.top, w: a.width, h: a.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    ro.observe(tile);
    return () => ro.disconnect();
  }, [wrap]);

  return (
    <>
      <div
        ref={self}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bg-cover bg-center"
        style={{
          width: m.w,
          height: m.h,
          transform: `translate(${-m.x}px, ${-m.y}px)`,
          backgroundImage: `url(${COLLAGE_IMAGE})`,
        }}
      />
      {/* Keeps the text readable on any photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--blue)]/85 to-[color:var(--blue)]/35"
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */

function DroneCard({
  drone,
  level = "md",
  tone = 0,
  className = "",
  grow,
  shared,
}: {
  drone: Drone;
  level?: Level;
  tone?: 0 | 1 | 2;
  className?: string;
  grow?: number;
  shared?: RefObject<HTMLDivElement | null>;
}) {
  const t = shared ? TONES[1] : TONES[tone];
  const lines = level === "md" ? 1 : level === "lg" ? 2 : 0;

  return (
    <li
      style={grow ? { flex: `${grow} 1 0%` } : undefined}
      className={`group relative flex min-w-0 flex-col justify-between gap-2 overflow-hidden rounded-xl p-[clamp(10px,1vw,14px)] ${t.card} ${className}`}
    >
      {shared && <SharedImage wrap={shared} />}
      <div className="relative">
        {level === "lg" && (
          <span className={`mb-2 flex size-8 items-center justify-center rounded-lg ${t.dot}`}>
            <Icon name={drone.features[0][0]} className="size-4" />
          </span>
        )}
        <h3
          className={`m-0 break-words font-bold leading-tight ${
            level === "lg" ? "text-[clamp(20px,2vw,26px)]" : "text-[16px]"
          }`}
        >
          {drone.model}
        </h3>
        <p className={`m-0 mt-0.5 text-[12.5px] font-medium ${t.sub}`}>{drone.sub}</p>
      </div>

      <div className="relative">
        {lines > 0 && (
          <p className={`m-0 text-[12px] leading-[1.4] ${t.body}`}>
            {describe(drone.features.slice(0, lines))}
          </p>
        )}
        {/* Stretched link: whole card is clickable */}
        <a
          href={PRODUCTS_URL}
          aria-label={`View ${drone.model}`}
          className="mt-2 inline-flex w-fit items-center gap-1 text-[12px] font-semibold text-inherit no-underline after:absolute after:inset-0 after:rounded-xl after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--cyan)]"
        >
          View details
          <Chevron className="size-3 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </li>
  );
}

/* Small summary tile that fills a leftover slot */
function CountTile({
  count,
  slot,
  shared,
}: {
  count: number;
  slot: Slot;
  shared: RefObject<HTMLDivElement | null>;
}) {
  return (
    <li
      style={{ flex: `${slot.grow} 1 0%` }}
      className={`relative flex min-w-0 flex-col justify-end overflow-hidden rounded-xl bg-[color:var(--blue)] p-[clamp(12px,1.2vw,16px)] text-white ${slot.h}`}
    >
      <SharedImage wrap={shared} />
      <p className="relative m-0 text-[clamp(28px,3vw,40px)] font-bold leading-none">{count}</p>
      <p className="relative m-0 mt-1 text-[12.5px] text-white/80">models</p>
    </li>
  );
}

function Collage({ drones }: { drones: Drone[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const slotDrone: (Drone | null)[] = Array(SLOTS.length).fill(null);
  drones.forEach((d, i) => {
    if (i < PRIORITY.length) slotDrone[PRIORITY[i]] = d;
  });

  const renderSlot = (i: number) => {
    const slot = SLOTS[i];
    const drone = slotDrone[i];
    if (drone) {
      return (
        <DroneCard
          key={drone.id}
          drone={drone}
          level={slot.level}
          tone={slot.tone}
          grow={slot.grow}
          className={slot.h}
          shared={wrapRef}
        />
      );
    }
    if (i === 0) return <CountTile key="count" count={drones.length} slot={slot} shared={wrapRef} />;
    return null; // other free slots stay empty, which keeps the ragged collage edge
  };

  return (
    <div
      ref={wrapRef}
      className="hidden flex-col justify-center gap-[clamp(8px,1vw,12px)] lg:flex"
    >
      <ul className="m-0 flex list-none items-end gap-[clamp(8px,1vw,12px)] p-0">
        {[0, 1, 2, 3].map(renderSlot)}
      </ul>
      <ul className="m-0 flex list-none items-start gap-[clamp(8px,1vw,12px)] p-0">
        {[4, 5, 6, 7].map(renderSlot)}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

function FreightorDrones() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = CATEGORIES[active];
  const isDesktop = useIsDesktop();

  function select(index: number, focus = false) {
    const next = (index + CATEGORIES.length) % CATEGORIES.length;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      select(active + 1, true);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      select(active - 1, true);
    }
  }

  return (
    <section
      className="relative min-w-0 overflow-hidden bg-white pt-[length:var(--section-pad)] pb-[length:calc(var(--section-pad)*0.45)]"
      aria-label="Drones"
    >
      <div className={INNER}>
      <div className="flex flex-wrap items-center gap-x-[clamp(16px,2.4vw,32px)] gap-y-4">
        <h2 className="m-0 text-[clamp(32px,2vw,72px)] font-semibold leading-none tracking-tight text-[color:var(--blue)]">
          OUR PRODUCTS
        </h2>

        <div
          role="tablist"
          aria-label="Drone category"
          onKeyDown={onKeyDown}
          className="inline-flex max-w-full rounded-full bg-[color:var(--blue)]/[0.06] p-1"
        >
          {CATEGORIES.map((cat, index) => {
            const isActive = index === active;
            return (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`${baseId}-tab-${cat.id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`${baseId}-panel`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(index)}
                className={`min-w-[clamp(84px,18vw,150px)] cursor-pointer rounded-full border-0 px-3 py-2 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--cyan)] sm:px-5 sm:text-[14px] ${
                  isActive
                    ? "bg-[color:var(--blue)] text-white shadow-[0_4px_12px_rgba(10,25,45,0.2)]"
                    : "bg-transparent text-[color:var(--blue)]/70 hover:text-[color:var(--blue)]"
                }`}
              >
                {cat.tab}
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={`panel-${current.id}`}
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${current.id}`}
        className="fd-swap mt-[clamp(12px,1.6vw,20px)] grid gap-[clamp(8px,1vw,12px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)]"
      >
        <IntroPanel category={current} />

        {/* Mobile / tablet: simple grid */}
        <ul className="m-0 grid list-none grid-cols-1 content-start gap-[clamp(8px,1vw,12px)] p-0 min-[500px]:grid-cols-2 lg:hidden">
          {current.drones.map((drone) => (
            <DroneCard key={drone.id} drone={drone} level="lg" tone={0} />
          ))}
        </ul>

        {/* Desktop: collage */}
        {isDesktop && <Collage drones={current.drones} />}
      </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function DronePage() {
  return (
    <main className="overflow-x-clip bg-white pt-6 text-[color:var(--blue)]">
      <style>{FADE_CSS}</style>
      <div className="flex w-full flex-col">
        <FreightorDrones />
      </div>
    </main>
  );
}
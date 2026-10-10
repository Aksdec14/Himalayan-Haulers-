"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactElement } from "react";

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

function Arrow({ className }: { className?: string }) {
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
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

type Feature = [IconName, string];
type Drone = { id: string; model: string; sub: string; features: Feature[] };
type Tag = [IconName, string];

type Category = {
  id: "commercial" | "defence" | "surveillance";
  tab: string;
  title: [string, string]; // [navy, cyan]
  lead: string;
  tags: Tag[];
  cta: { label: string; href: string };
  columns: string; // grid columns per breakpoint
  drones: Drone[];
};

const CATEGORIES: Category[] = [
  {
    id: "commercial",
    tab: "Commercial",
    title: ["Freightor", "Logistics Drones"],
    lead: "Heavy-lift drones from 5 kg to 300 kg, built in India.",
    tags: [
      ["box", "Heavy payloads"],
      ["mountain", "All-terrain operations"],
      ["flag", "Made in India"],
    ],
    cta: { label: "Explore All Drones", href: "/drones" },
    columns: "grid-cols-2 md:grid-cols-3 xl:grid-cols-6",
    drones: [
      {
        id: "c300",
        model: "C300",
        sub: "300 kg",
        features: [
          ["box", "Heavy-lift capability"],
          ["route", "Long-range operations"],
          ["shield", "Rugged design"],
        ],
      },
      {
        id: "c200",
        model: "C200",
        sub: "200 kg",
        features: [
          ["layers", "High payload capacity"],
          ["check", "Reliable performance"],
          ["mountain", "All-terrain operations"],
        ],
      },
      {
        id: "c100",
        model: "C100",
        sub: "100 kg",
        features: [
          ["target", "Versatile operations"],
          ["box", "Optimised payload"],
          ["factory", "Industrial applications"],
        ],
      },
      {
        id: "c20",
        model: "C20",
        sub: "20 kg",
        features: [
          ["grid", "Flexible deployment"],
          ["bolt", "Efficient operations"],
          ["pin", "Field-ready performance"],
        ],
      },
      {
        id: "c5",
        model: "C5",
        sub: "5 kg",
        features: [
          ["feather", "Lightweight design"],
          ["clock", "Quick deployment"],
          ["layers", "Multi-purpose use"],
        ],
      },
      {
        id: "cfwvtol7",
        model: "CFWVTOL7",
        sub: "7 kg VTOL",
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
    title: ["Freightor", "Defence Drones"],
    lead: "Mission-ready drone platforms for demanding defence operations.",
    tags: [
      ["box", "High payloads"],
      ["route", "Long endurance"],
      ["target", "Tactical operations"],
    ],
    cta: { label: "Explore All Defence Drones", href: "/drones/defence" },
    columns: "grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
    drones: [
      {
        id: "d300",
        model: "D300",
        sub: "300 kg",
        features: [
          ["box", "Heavy-payload capability"],
          ["layers", "Logistics support"],
          ["shield", "Rugged operations"],
        ],
      },
      {
        id: "d200",
        model: "D200",
        sub: "200 kg",
        features: [
          ["layers", "High payload capacity"],
          ["route", "Tactical logistics"],
          ["pin", "Field operations"],
        ],
      },
      {
        id: "d100",
        model: "D100",
        sub: "100 kg",
        features: [
          ["target", "Versatile deployment"],
          ["box", "Payload flexibility"],
          ["check", "Mission support"],
        ],
      },
      {
        id: "d20",
        model: "D20",
        sub: "20 kg",
        features: [
          ["grid", "Compact logistics"],
          ["bolt", "Flexible deployment"],
          ["pin", "Field-ready operations"],
        ],
      },
      {
        id: "d5",
        model: "D5",
        sub: "5 kg",
        features: [
          ["feather", "Lightweight platform"],
          ["clock", "Rapid deployment"],
          ["layers", "Multi-purpose capability"],
        ],
      },
      {
        id: "dfwvtol7",
        model: "DFWVTOL7",
        sub: "7 kg VTOL",
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
  {
    id: "surveillance",
    tab: "Surveillance",
    title: ["Surveillance", "Drones"],
    lead: "Advanced aerial surveillance for enhanced situational awareness.",
    tags: [
      ["eye", "Real-time monitoring"],
      ["radar", "Aerial intelligence"],
      ["target", "Mission-ready operations"],
    ],
    cta: { label: "Explore Surveillance Solutions", href: "/drones/surveillance" },
    columns: "grid-cols-2 md:grid-cols-3 xl:grid-cols-6",
    drones: [
      {
        id: "skye-d100",
        model: "Skye D100",
        sub: "Surveillance",
        features: [
          ["eye", "Aerial monitoring"],
          ["radar", "Situational awareness"],
          ["target", "Intelligence gathering"],
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */

const PANEL =
  "relative mb-5 min-w-0 overflow-hidden rounded-none bg-gradient-to-b md:mb-10 from-white to-[color:var(--cyan)]/10 p-[clamp(12px,2vw,24px)]";

const FADE_CSS = `
@keyframes fd-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.fd-swap{animation:fd-in .35s ease-out both}
@media (prefers-reduced-motion:reduce){.fd-swap{animation:none}}
`;

function Heading({ title, lead, tags }: { title: [string, string]; lead: string; tags: Tag[] }) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
      <div className="min-w-0">
        <h2 className="m-0 break-words text-[clamp(22px,3.4vw,40px)] font-extrabold leading-[1.08] tracking-tight text-[color:var(--blue)]">
          {title[0]} <span className="text-[color:var(--cyan)]">{title[1]}</span>
        </h2>
        <p className="mb-0 mt-1.5 max-w-[48ch] text-[clamp(14px,1.4vw,16px)] leading-[1.5] text-[color:var(--blue)]/70 text-pretty">
          {lead}
        </p>
      </div>

      <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 lg:shrink-0 lg:flex-col lg:gap-2">
        {tags.map(([icon, label]) => (
          <li
            key={label}
            className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--blue)]/80"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--cyan)]/15 text-[color:var(--cyan)]">
              <Icon name={icon} className="size-3" />
            </span>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DroneCard({ drone }: { drone: Drone }) {
  return (
    <li className="flex min-w-0 flex-col rounded-none border border-[color:var(--blue)]/5 bg-white p-[clamp(10px,1.1vw,14px)] shadow-[0_1px_2px_rgba(10,25,45,0.04),0_8px_24px_rgba(10,25,45,0.06)]">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="m-0 break-words text-[clamp(15px,1.4vw,18px)] font-extrabold leading-tight text-[color:var(--blue)]">
            {drone.model}
          </h3>
          <p className="m-0 mt-0.5 text-[12.5px] text-[color:var(--blue)]/70">{drone.sub}</p>
        </div>
        <a
          href={`/drones/${drone.id}`}
          aria-label={`View ${drone.model}`}
          className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--cyan)]/15 text-[color:var(--cyan)] transition-colors hover:bg-[color:var(--cyan)] hover:text-white focus-visible:bg-[color:var(--cyan)] focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--cyan)]"
        >
          <Arrow className="size-3" />
        </a>
      </div>

      <ul className="m-0 mt-2.5 flex list-none flex-1 flex-col gap-1.5 p-0">
        {drone.features.map(([icon, label]) => (
          <li
            key={label}
            className="flex items-start gap-2 text-[12.5px] leading-[1.3] text-[color:var(--blue)]/85"
          >
            <Icon name={icon} className="mt-px size-4 shrink-0 text-[color:var(--blue)]/60" />
            <span className="min-w-0 break-words">{label}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

function Cta({ label, href }: { label: string; href: string }) {
  return (
    <div className="mt-[clamp(12px,1.6vw,18px)] flex items-center gap-4">
      <span
        className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-[color:var(--cyan)]/60 sm:block"
        aria-hidden="true"
      />
      <a
        href={href}
        className="mx-auto inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--blue)] px-[clamp(20px,3vw,32px)] py-2.5 text-center text-[14px] font-semibold text-white no-underline shadow-[0_8px_20px_rgba(10,25,45,0.18)] transition-colors hover:bg-[color:var(--cyan)] focus-visible:bg-[color:var(--cyan)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--cyan)] sm:mx-0"
      >
        {label}
        <Arrow className="size-3.5" />
      </a>
      <span
        className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-[color:var(--cyan)]/60 sm:block"
        aria-hidden="true"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function FreightorDrones() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = CATEGORIES[active];

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
    <section className={PANEL} aria-label="Drones">
      <div key={`head-${current.id}`} className="fd-swap">
        <Heading title={current.title} lead={current.lead} tags={current.tags} />
      </div>

      <div
        role="tablist"
        aria-label="Drone category"
        onKeyDown={onKeyDown}
        className="mt-[clamp(12px,1.6vw,18px)] inline-flex max-w-full rounded-full bg-[color:var(--blue)]/[0.06] p-1"
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
              className={`min-w-[clamp(84px,18vw,170px)] cursor-pointer rounded-full border-0 px-3 py-2 text-[13px] sm:px-5 sm:text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--cyan)] ${
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

      <div
        key={`panel-${current.id}`}
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${current.id}`}
        className="fd-swap"
      >
        <ul
          className={`m-0 mt-[clamp(10px,1.4vw,16px)] grid list-none gap-[clamp(8px,1vw,12px)] p-0 ${current.columns}`}
        >
          {current.drones.map((drone) => (
            <DroneCard key={drone.id} drone={drone} />
          ))}
        </ul>

        <Cta label={current.cta.label} href={current.cta.href} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function DronePage() {
  return (
    <main className="overflow-x-clip bg-white py-0 text-[color:var(--blue)]">
      <style>{FADE_CSS}</style>
      <div className="flex w-full flex-col">
        <FreightorDrones />
      </div>
    </main>
  );
}
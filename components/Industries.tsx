"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

type IconName =
  | "tower"
  | "pole"
  | "box"
  | "binoculars"
  | "inspect"
  | "flame"
  | "gauge"
  | "map"
  | "layers"
  | "anchor"
  | "drone"
  | "wind"
  | "sun"
  | "water";

type Capability = { icon: IconName; label: string; note?: string; lines?: string[] };

type Industry = {
  id: string;
  name: string; // sidebar label
  headline: [string, string]; // [navy line, cyan line]
  body: string;
  image: { src: string; alt: string; position?: string };
  capabilities: Capability[];
};

const INSPECT_LINES = [
  "External Visual & Thermal Inspection",
  "Confined Space Inspection",
  "UT Thickness Measurement",
];

const INDUSTRIES: Industry[] = [
  {
    id: "power",
    name: "Power Transmission Infrastructure",
    headline: ["Power Transmission", "Infrastructure"],
    body: "Drone-enabled solutions for transmission line development, inspection and logistics across challenging terrain.",
    image: { src: "/media/power.jpg", alt: "Drone stringing a pilot line between power towers" },
    capabilities: [
      { icon: "tower", label: "Power Transmission Line Stringing", note: "800 kV & 33 kV" },
      { icon: "pole", label: "Transmission Pole Erection" },
      { icon: "box", label: "Material Transportation", note: "for tower foundations" },
      { icon: "binoculars", label: "Surveillance", note: "route and site monitoring" },
      { icon: "inspect", label: "Tower & Conductor Inspection" },
    ],
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    headline: ["Oil & Gas", "Operations"],
    body: "Inspect critical assets and move materials safely, without shutdowns or sending people into hazardous spaces.",
    image: { src: "/industries/oil-gas-operations.png", alt: "Drone inspecting a refinery stack" },
    capabilities: [
      {
        icon: "inspect",
        label: "Asset Inspections",
        lines: INSPECT_LINES,
      },
      { icon: "anchor", label: "Offshore Operations" },
      { icon: "box", label: "Logistics Drone as a Service (LDaaS)" },
      { icon: "flame", label: "Fire Fighting Drones" },
      { icon: "binoculars", label: "Surveillance", note: "plant and perimeter monitoring" },
    ],
  },
  {
    id: "steel-plants",
    name: "Steel Plants",
    headline: ["Steel", "Plants"],
    body: "Keep plants running with safer inspections, accurate stockpile data and reliable measurement of dams and reservoirs.",
    image: { src: "/industries/steel-plants.png", alt: "Drone inspecting an industrial structure" },
    capabilities: [
      { icon: "inspect", label: "Asset Inspections", lines: INSPECT_LINES },
      { icon: "box", label: "Logistics Drone as a Service (LDaaS)" },
      { icon: "layers", label: "Stockpile Measurement & Monitoring" },
      { icon: "water", label: "Tailings Dam & Reservoir", note: "silting and capacity measurement" },
      { icon: "binoculars", label: "Surveillance" },
    ],
  },
  {
    id: "offshore",
    name: "Offshore",
    headline: ["Offshore", "Platforms"],
    body: "Move parts and inspect assets between platforms without costly vessel or personnel transfers.",
    image: {
      src: "/industries/offshore.png",
      alt: "Heavy-lift drone carrying a payload",
      position: "center top",
    },
    capabilities: [
      { icon: "box", label: "Inter-Platform Logistics Drone-as-a-Service (LDaaS)" },
      { icon: "inspect", label: "Asset Inspections", lines: INSPECT_LINES },
      { icon: "binoculars", label: "Surveillance" },
    ],
  },
  {
    id: "mining",
    name: "Mining",
    headline: ["Mining", "Sites"],
    body: "Supply remote sites, inspect underground bores and monitor stockpiles with less risk to people.",
    image: { src: "/industries/mining.png", alt: "Drone working over rough terrain" },
    capabilities: [
      { icon: "box", label: "Logistics Drone as a Service (LDaaS)" },
      { icon: "drone", label: "Underground Bore Inspection" },
      { icon: "layers", label: "Stockpile Measurement & Monitoring" },
      { icon: "binoculars", label: "Surveillance" },
    ],
  },
  {
    id: "renewable-energy",
    name: "Renewable Energy",
    headline: ["Renewable", "Energy"],
    body: "Inspect, maintain and supply wind, solar and hydro assets faster, at height and at scale.",
    image: { src: "/media/energy.jpg", alt: "Drone surveying an energy site" },
    capabilities: [
      {
        icon: "wind",
        label: "Wind Energy",
        lines: ["Tower & blade inspection", "LDaaS parts and tools for turbine maintenance"],
      },
      {
        icon: "sun",
        label: "Solar Power Plants",
        lines: ["Panel inspection", "Panel cleaning", "LDaaS for installation and maintenance"],
      },
      {
        icon: "water",
        label: "Hydro Power",
        lines: [
          "Dam wall and sluice gate inspection",
          "Tunnel inspection",
          "Reservoir silting and capacity measurement",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Icons (simple line icons, inherit currentColor)                     */
/* ------------------------------------------------------------------ */

const ICON_PATHS: Record<IconName, ReactElement> = {
  tower: (
    <>
      <path d="M12 3v3M8 21l3-15h2l3 15M9.5 12h5M8.5 17h7M6 8h12" />
    </>
  ),
  pole: (
    <>
      <path d="M12 3v18M7 7h10M9 11h6M10 21h4" />
    </>
  ),
  box: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9" />
    </>
  ),
  binoculars: (
    <>
      <path d="M7 8h3v10H5.5A2.5 2.5 0 013 15.5V12l2-4h2zM17 8h-3v10h4.5a2.5 2.5 0 002.5-2.5V12l-2-4h-2zM10 12h4" />
    </>
  ),
  inspect: (
    <>
      <path d="M6 3h8l4 4v6M6 3v18h6M9 9h5M9 13h3" />
      <circle cx="16.5" cy="17.5" r="2.5" />
      <path d="M18.5 19.5L21 22" />
    </>
  ),
  flame: (
    <>
      <path d="M12 3c1 3 5 5 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 16a8 8 0 1116 0M12 16l4-5M7 16h1M16 16h1" />
    </>
  ),
  map: (
    <>
      <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v14M8 11h8M4 14a8 8 0 008 7 8 8 0 008-7" />
    </>
  ),
  wind: (
    <>
      <path d="M12 11V21M12 11l-1-7M12 11l6 3M12 11l-6 3M9 21h6" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6L7 7M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
    </>
  ),
  water: (
    <>
      <path d="M12 3c3 4 6 7 6 11a6 6 0 01-12 0c0-4 3-7 6-11z" />
    </>
  ),
  drone: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <path d="M7 6h10M12 6v5M9 11h6v4H9zM5 8l4 3M19 8l-4 3" />
    </>
  ),
};

function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
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
/* Styles                                                              */
/* ------------------------------------------------------------------ */

const SECTION =
  "overflow-x-clip bg-white text-[color:var(--blue)] py-[length:var(--section-pad)]";

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

const HEADER =
  "flex flex-wrap items-end justify-between gap-x-[clamp(24px,4vw,64px)] gap-y-[clamp(14px,2vw,24px)] max-w-[length:var(--content-max,1200px)] mb-[clamp(24px,3vw,44px)]";

const TITLE = "m-0 text-[length:var(--fs-h1)] uppercase text-[color:var(--blue)]";

const HEADER_LINK =
  "inline-block border-0 border-b-2 border-solid border-[color:var(--blue)] pb-[0.35em] text-[length:var(--fs-small)] font-semibold text-[color:var(--blue)] no-underline transition-colors hover:border-[color:var(--cyan)] focus-visible:border-[color:var(--cyan)]";

const FADE_CSS = `
@keyframes hh-ind-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.hh-ind-swap{animation:hh-ind-in .35s ease-out both}
@media (prefers-reduced-motion:reduce){.hh-ind-swap{animation:none}}
`;

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function Industries() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const current = INDUSTRIES[active];

  function select(index: number, focus = false) {
    const next = (index + INDUSTRIES.length) % INDUSTRIES.length;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      select(active + 1, true);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      select(active - 1, true);
    } else if (e.key === "Home") {
      e.preventDefault();
      select(0, true);
    } else if (e.key === "End") {
      e.preventDefault();
      select(INDUSTRIES.length - 1, true);
    }
  }

  return (
    <section id="industries" className={SECTION} aria-labelledby="industries-title">
      <style>{FADE_CSS}</style>

      <div className={INNER}>
        <header className={HEADER}>
          <h2 id="industries-title" className={TITLE}>
            Industries We Serve
          </h2>
          <Link href="/contact" className={HEADER_LINK}>
            Ready to get started? Contact us
          </Link>
        </header>

        <div className="grid max-w-[length:var(--content-max,1200px)] grid-cols-1 gap-5 lg:grid-cols-[clamp(220px,22vw,270px)_minmax(0,1fr)] lg:items-stretch lg:gap-0">
          {/* Sidebar */}
          <div className="flex min-w-0 flex-col lg:pr-6">
            <p className="m-0 mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--blue)]/60">
              Industries
            </p>

            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="Industries"
              onKeyDown={onKeyDown}
              className="grid grid-cols-1 gap-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-1 lg:flex-col"
            >
              {INDUSTRIES.map((industry, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={industry.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    id={`${baseId}-tab-${industry.id}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => select(index)}
                    className={`group flex min-w-0 cursor-pointer items-center gap-2 break-words border-0 border-l-2 border-solid px-3 py-3 text-left lg:flex-1 lg:gap-4 lg:px-4 lg:py-3.5 text-[length:var(--fs-small)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--cyan)] ${
                      isActive
                        ? "border-l-[color:var(--cyan)] bg-[color:var(--cyan)]/10 font-semibold text-[color:var(--blue)]"
                        : "border-l-transparent bg-transparent font-medium text-[color:var(--blue)]/70 hover:text-[color:var(--blue)]"
                    }`}
                  >
                    <span className="flex-1">{industry.name}</span>
                    <span
                      aria-hidden="true"
                      className={`hidden size-5 shrink-0 items-center justify-center rounded-full sm:flex ${
                        isActive
                          ? "bg-[color:var(--cyan)] text-white"
                          : "text-[color:var(--blue)]/40 group-hover:text-[color:var(--blue)]"
                      }`}
                    >
                      <Arrow className="size-3" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${current.id}`}
            className="relative isolate min-w-0 overflow-hidden rounded-3xl border border-[color:var(--blue)]/5 bg-gradient-to-br from-white via-white to-[color:var(--cyan)]/10 shadow-[0_2px_4px_rgba(10,25,45,0.04),0_20px_48px_rgba(10,25,45,0.08)]"
          >
            {/* Photo fading in from the right */}
            <div
              key={`img-${current.id}`}
              className="hh-ind-swap pointer-events-none relative h-[clamp(160px,40vw,260px)] w-full [mask-image:linear-gradient(to_bottom,black_55%,transparent)] lg:absolute lg:inset-y-0 lg:right-0 lg:-z-10 lg:h-auto lg:w-3/5 lg:[mask-image:linear-gradient(to_left,black_50%,transparent)]"
            >
              <Image
                src={current.image.src}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                style={{ objectPosition: current.image.position ?? "center" }}
              />
            </div>

            <div
              key={`content-${current.id}`}
              className="hh-ind-swap relative p-[clamp(16px,3vw,40px)] max-lg:pt-2"
            >

              <h3 className="mb-0 mt-0 text-[clamp(22px,4vw,48px)] break-words font-extrabold leading-[1.08] tracking-tight text-[color:var(--blue)]">
                {current.headline[0]}
                <br />
                <span className="text-[color:var(--cyan)]">{current.headline[1]}</span>
              </h3>

              <p className="mb-0 mt-4 max-w-[34ch] text-[length:var(--fs-body,16px)] max-sm:text-[15px] leading-[1.55] text-[color:var(--blue)]/70 text-pretty">
                {current.body}
              </p>

              <ul className="m-0 mt-[clamp(24px,5vw,64px)] grid list-none grid-cols-2 gap-3 p-0 sm:grid-flow-col sm:grid-cols-none sm:auto-cols-[minmax(0,176px)] sm:justify-start sm:gap-[clamp(6px,1.2vw,12px)]">
                {current.capabilities.map((cap) => (
                  <li
                    key={cap.label}
                    className="aspect-square min-w-0 [container-type:inline-size] rounded-2xl border border-[color:var(--blue)]/5 bg-white/85 shadow-[0_1px_2px_rgba(10,25,45,0.04),0_8px_24px_rgba(10,25,45,0.06)] backdrop-blur-sm"
                  >
                    {/* Sizes below scale with the card width (cqw) so five cards
                        always fit on one line, at any screen size. */}
                    <div className="flex h-full flex-col items-center justify-start break-words p-[7cqw] text-center [gap:4cqw]">
                      <span className="flex size-[26cqw] shrink-0 items-center justify-center rounded-full bg-[color:var(--cyan)]/10 text-[color:var(--cyan)]">
                        <Icon name={cap.icon} className="size-[12cqw]" />
                      </span>
                      <span className="text-[clamp(11px,8cqw,13px)] sm:text-[clamp(7px,7.4cqw,13px)] font-semibold leading-[1.25] text-[color:var(--blue)]">
                        {cap.label}
                        {cap.lines && (
                          <span className="mt-[1.5cqw] block text-[clamp(9.5px,6.6cqw,10.5px)] sm:text-[clamp(6px,6cqw,10.5px)] font-normal leading-[1.3] text-[color:var(--blue)]/60">
                            {cap.lines.map((line) => (
                              <span key={line} className="mt-[1cqw] block">
                                {line}
                              </span>
                            ))}
                          </span>
                        )}
                        {cap.note && (
                          <span className="mt-[1cqw] block text-[clamp(9.5px,7cqw,11px)] sm:text-[clamp(6px,6.4cqw,11px)] font-normal text-[color:var(--blue)]/60">
                            {cap.note}
                          </span>
                        )}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/industries"
                className="mt-6 inline-flex items-center gap-2 text-[length:var(--fs-small)] font-semibold text-[color:var(--blue)] no-underline transition-colors hover:text-[color:var(--cyan)] focus-visible:text-[color:var(--cyan)]"
              >
                Explore {current.name}
                <Arrow className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
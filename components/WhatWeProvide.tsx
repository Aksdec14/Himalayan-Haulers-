import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cctv, Package, Settings } from "lucide-react";

const CTAS = [
  { label: "Explore Products", href: "/what-we-provide/products" },
  { label: "Explore Services", href: "/what-we-provide/services" },
];

const FEATURES = [
  {
    icon: Package,
    title: "Drone Products",
    description: "Commercial, Surveillance and Defence logistics drones",
  },
  {
    icon: Cctv,
    title: "Power Transmission",
    description: "33 kV and 800 kV stringing, pole erection, and tower foundation material movement.",
  },
  {
    icon: Settings,
    title: "Drone Services (DaaS)",
    description: "LDaaS, visual and thermal inspection, confined space inspection, and UT measurement",
  },
];

/* Change this to swap the photo. Use a wide drone-over-mountains shot with
   the drone on the right. */
const HERO_IMAGE = {
  src: "/media/image.png",
  alt: "Heavy-lift drone carrying a crate over snow-capped Himalayan peaks",
  position: "center",
};

/* Sizes are declared as separate -xl properties so no custom property reads
   itself (a self-referencing property is a cycle and silently falls back). */
const SECTION =
  "relative isolate overflow-hidden bg-gradient-to-br from-white via-white to-sky-50 text-[color:var(--ink)] [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [--fs-body-xl:calc(var(--fs-body)*1.18)] [--fs-small-xl:calc(var(--fs-small)*1.2)]";

const EYEBROW =
  "m-0 flex items-center gap-4 text-[length:var(--fs-small)] font-medium uppercase tracking-[0.2em] text-[color:var(--ink)]";

const TITLE =
  "m-0 text-balance text-[length:calc(var(--fs-h1)*0.85)] font-extrabold uppercase leading-[1] tracking-tight text-[color:var(--ink)]";

const LEAD =
  "m-0 max-w-[46ch] text-[length:var(--fs-small-xl)] leading-[1.55] text-[color:var(--ink)]/70 text-pretty";

const LINK =
  "inline-flex items-center gap-2 whitespace-nowrap border-b-2 border-[color:var(--cyan)] pb-2 text-[length:var(--fs-small)] font-medium uppercase tracking-[0.12em] text-[color:var(--cyan)] no-underline transition-colors duration-300 hover:text-[color:var(--blue)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--cyan)]";

/**
 * "What We Provide": copy, two links and three features on the left, one
 * full-bleed photo fading into the page on the right. Server component.
 */
export default function WhatWeProvide() {
  return (
    <section id="provide" className={SECTION} aria-labelledby="provide-title">
      {/* Right: full-bleed photo, fading into the page on its left edge */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full min-[1100px]:w-[52%]">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          sizes="(max-width: 1100px) 100vw, 62vw"
          className="object-cover opacity-30 [mask-image:linear-gradient(to_right,transparent_0%,black_35%)] min-[1100px]:opacity-100 min-[1100px]:[mask-composite:intersect] min-[1100px]:[mask-image:linear-gradient(to_right,transparent_0%,black_30%),linear-gradient(to_top,transparent_0%,black_25%)]"
          style={{ objectPosition: HERO_IMAGE.position }}
        />

        {/* decorative arcs + accent bar (desktop only) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 800 700"
          className="absolute inset-0 hidden size-full min-[1100px]:block"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path
            d="M120 90 C 300 20, 560 40, 700 300"
            stroke="white"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          />
          <path
            d="M20 260 C 40 160, 130 90, 230 55"
            stroke="#28a0ff"
            strokeOpacity="0.5"
            strokeWidth="1.2"
            strokeDasharray="1 5"
            strokeLinecap="round"
          />
        </svg>
        <span
          aria-hidden="true"
          className="absolute left-[2%] top-[14%] hidden h-[4px] w-14 bg-[color:var(--cyan)] min-[1100px]:block"
        />
      </div>

      {/* Left: copy */}
      <div className="flex flex-col gap-[clamp(12px,1.4vw,18px)] py-[clamp(24px,3vw,44px)] pl-[length:var(--content-pad)] pr-[length:var(--content-pad)] min-[1100px]:max-w-[55%]">
        <p className={EYEBROW}>
          Drones · DAAS · Solutions
          <span
            aria-hidden="true"
            className="block h-px w-20 shrink-0 bg-[color:var(--ink)]/30"
          />
        </p>

        <h2 id="provide-title" className={TITLE}>
          What We
          {" "}
          <span className="text-[color:var(--cyan)]">Deliver</span>
        </h2>

        <p className={LEAD}>
        Heavy-lift drones, field-ready crews, and aerial intelligence built for tough terrain. From 5 kg to 800 kg logistics and power line stringing to thermal and UT inspections, we help EPCs, utilities, and industries work faster, with fewer people at height or in harm’s way.
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {CTAS.map((cta) => (
            <Link key={cta.href} href={cta.href} className={LINK}>
              {cta.label}
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          ))}
        </div>

        {/* Feature row */}
        <ul className="m-0 mt-[clamp(8px,1.4vw,20px)] grid list-none grid-cols-1 gap-5 p-0 min-[640px]:grid-cols-3 min-[640px]:gap-0">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <li
                key={f.title}
                className={`flex gap-4 ${
                  i > 0
                    ? "min-[640px]:border-l min-[640px]:border-[color:var(--ink)]/15 min-[640px]:pl-[clamp(16px,2vw,32px)]"
                    : ""
                } ${i < FEATURES.length - 1 ? "min-[640px]:pr-[clamp(16px,2vw,32px)]" : ""}`}
              >
                <Icon
                  size={40}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[color:var(--cyan)]"
                />
                <span className="flex flex-col gap-1">
                  <span className="text-[length:var(--fs-small)] font-bold uppercase leading-tight tracking-[0.06em] text-[color:var(--ink)]">
                    {f.title}
                  </span>
                  <span className="max-w-[18ch] text-[length:var(--fs-small)] leading-snug text-[color:var(--ink)]/60">
                    {f.description}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
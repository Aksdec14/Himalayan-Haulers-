import type { Metadata } from "next";
import {
  BatteryCharging,
  Cog,
  Crosshair,
  Cpu,
  Package,
  Radar,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Button from "@/components/ui/Button";

import {
  BODY,
  CAP_GRID,
  CAP_ICON,
  CARD,
  CARD_BODY,
  CARD_PAD,
  CARD_TITLE,
  CHIP,
  CONFIRM,
  IconTile,
  Section,
  SectionHead,
  ClosingCTA,
  PageHero,
} from "../ui";

export const metadata: Metadata = {
  title:
    "Heavy-Lift Logistics Drones in India | HH Freightor D-Series | Himalayan Haulers",
  description:
    "Freightor D-Series heavy-lift drones carry 20 to 300 kg to remote, high-altitude sites. Autonomous, built in India. Also surveillance and custom drones.",
};

/* ==========================================================================
   PRODUCTS PAGE — Heavy-Lift Drone Products
   ========================================================================== */

/* Applied to <main>: the section type scale steps up from the hero's, exactly
   as WhatWeProvide does it, so the two detail pages set identical type. */
const SECTION =
  "bg-white text-ink animate-hh-fade py-[length:var(--section-pad)] [--fs-h2:calc(var(--fs-h2)*1.6)] [--fs-lead:calc(var(--fs-lead)*1.45)] [--fs-h3:calc(var(--fs-h3)*1.35)] [--fs-body:calc(var(--fs-body)*1.18)] [--fs-small:calc(var(--fs-small)*1.2)]";

/* ---- Headline stats strip -------------------------------------------------
   Four numbers taken straight from the spec table and the intro copy. The
   section's --fs-h3 override sizes them; a <p> is used rather than a heading
   so the global heading rule does not re-case them. */
const STATS: { value: string; label: string }[] = [
  { value: "300 kg", label: "Max payload, sea level" },
  { value: "6,000 m", label: "Highest flight ceiling" },
  { value: "4", label: "Freightor D-Series models" },
  { value: "100+", label: "Man-years of team experience" },
];

const STAT_GRID =
  "grid grid-cols-4 gap-x-[clamp(16px,2.4vw,32px)] gap-y-[clamp(20px,2.4vw,28px)] border-y border-blue/15 py-[clamp(20px,2.6vw,36px)] max-[760px]:grid-cols-2";

const STAT_VALUE =
  "m-0 text-[length:var(--fs-h3)] font-bold leading-none text-blue";

const STAT_LABEL =
  "m-0 mt-[0.5em] text-[length:var(--fs-small)] uppercase leading-[1.4] tracking-[0.06em] text-ink/55";

/* ---- Spec tables ----------------------------------------------------------
   Navy header row, zebra body, values centred under their model column. The
   wrapper keeps its overflow-x so the table scrolls instead of squashing on a
   phone. */
const TABLE_WRAPPER =
  "w-full overflow-x-auto rounded-lg border border-blue/15 shadow-[0_2px_4px_rgba(10,25,45,0.04)]";

const TABLE = "w-full border-collapse text-left text-[length:var(--fs-body)]";

const TH =
  "px-[clamp(12px,1.5vw,20px)] py-[clamp(11px,1.3vw,16px)] bg-blue text-white text-[length:var(--fs-small)] font-bold uppercase tracking-[0.08em] border-b border-blue";

const TH_FIRST = `${TH} rounded-tl-lg`;
const TH_LAST = `${TH} rounded-tr-lg`;

const TD =
  "px-[clamp(12px,1.5vw,20px)] py-[clamp(10px,1.2vw,14px)] border-b border-blue/10";

const TD_LABEL = `${TD} font-semibold text-ink`;
const TD_VALUE = `${TD} text-center text-ink/75`;

const ROW = "transition-colors odd:bg-[#f7f9fc] hover:bg-cyan/[0.06]";

/* ---- Cards ---------------------------------------------------------------- */
const GRID_TWO =
  "grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[length:var(--card-gap)] max-[860px]:grid-cols-[minmax(0,1fr)]";

/* Payload pill on each model card — the one number buyers compare first. */
const BADGE =
  "shrink-0 rounded-full bg-cyan/10 px-[0.9em] py-[0.35em] text-[length:var(--fs-small)] font-bold uppercase tracking-[0.04em] text-cyan";

/* ---- Capability tiles (shared styles from ../ui) --------------------------
   The seven shared features as an icon grid instead of a flat bullet list. */

const CAPABILITIES: {
  icon: typeof Cpu;
  title: string;
  body: string;
}[] = [
  {
    icon: Cpu,
    title: "Fully autonomous flight",
    body: "Plan the route, launch, and the drone flies it.",
  },
  {
    icon: Radar,
    title: "Obstacle avoidance",
    body: "Safe operation around ridgelines, towers, wires and trees.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in failsafes",
    body: "Protection against link loss, low battery and system faults.",
  },
  {
    icon: Package,
    title: "Flexible load carrying",
    body: "Cargo box, under-slung load or winch.",
  },
  {
    icon: Crosshair,
    title: "Load drop without landing",
    body: "Deliver to steep slopes, narrow ridges and border posts.",
  },
  {
    icon: Cog,
    title: "BLDC propulsion",
    body: "Efficient, reliable electric motors.",
  },
  {
    icon: BatteryCharging,
    title: "Battery options",
    body: "NMC cells for fast charging, or Li-Ion solid-state for longer range.",
  },
];

/* ---- Freightor models ----------------------------------------------------- */
const MODELS: { name: string; payload: string; best: string; body: string }[] =
  [
    {
      name: "HH Freightor D20",
      payload: "20 kg payload",
      best: "light, fast, high-altitude resupply.",
      body: "The lightest in the range and the one that flies highest, up to 6,000 m. It keeps its full 20 kg payload at 10,000 ft, which makes it the pick for medicine, rations, spares and small equipment to remote posts and sites.",
    },
    {
      name: "HH Freightor D100",
      payload: "100 kg payload",
      best: "mid-weight site logistics.",
      body: "Carries 100 kg at sea level and 60 kg at 10,000 ft. A good fit for construction materials, tools, batteries and survey equipment over 15 km.",
    },
    {
      name: "HH Freightor D200",
      payload: "175 kg payload",
      best: "heavy cargo in tough terrain.",
      body: "Carries 175 kg at sea level and still lifts 90 kg at 10,000 ft. Suited to tower components, cement, pipes and heavy supply drops where there is no road head.",
    },
    {
      name: "HH Freightor D300",
      payload: "300 kg payload",
      best: "maximum payload.",
      body: "Our largest platform, lifting 300 kg at sea level and 150 kg at 10,000 ft. Built for the heaviest single loads on shorter routes, such as tower erection and bulk site supply.",
    },
  ];

/* Custom panel: the five things the copy says can be customised, as chips. */
const CHIPS = [
  "Propulsion",
  "Batteries",
  "Payload mounts",
  "Avionics",
  "Sensors",
];

/**
 * /what-we-provide/products — the buy-the-aircraft page.
 *
 * Server component: no client state; the only interactive parts are the
 * shared Button links.
 */
export default function ProductsPage() {
  return (
    <main className={SECTION}>
      {/* Hero */}
      <PageHero
        eyebrow="Drone Products"
        title={
          <>
            Heavy-Lift Drones for the Terrain{" "}
            <span className="text-cyan">Others Avoid</span>
          </>
        }
        lead="Logistics, surveillance and custom drones, designed and built in India for high altitude, steep terrain and real payloads."
        actions={
          <>
            <Button href="/#connect" tone="onLight" size="lg" withArrow>
              Request a Quote
            </Button>
            <Button tone="onLight" size="lg">
              Download Brochure
            </Button>
          </>
        }
        photo={{
          src: "/media/Logistics.jpeg",
          alt: "Heavy-lift drone carrying a payload over remote terrain",
        }}
      />

      {/* Stats strip */}
      <Section>
        <div className={STAT_GRID}>
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-hh-fade"
              style={{ animationDelay: `${150 + index * 80}ms` }}
            >
              <p className={STAT_VALUE}>{stat.value}</p>
              <p className={STAT_LABEL}>{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Intro */}
      <Section>
        <SectionHead title="Built in India, for Indian Conditions" />
        <div className="flex max-w-[78ch] flex-col gap-[clamp(12px,1.4vw,18px)]">
          <p className={BODY}>
            Most drones are made for flat ground and thin air at sea level. Ours
            are made for mountain posts, remote construction sites and power
            lines across valleys. Himalayan Haulers is headquartered in
            Bangalore, our drones are manufactured in Tirupati, and our core
            team brings more than 100 man-years of experience in designing,
            building and flying drones.
          </p>
          <p className={BODY}>
            Every platform is fully autonomous, with obstacle avoidance and
            failsafes built in, so one operator can move heavy loads where
            roads, mules and helicopters are impractical.
          </p>
        </div>
      </Section>

      {/* Product 1: Freightor D-Series — headline + spec table */}
      <Section>
        <SectionHead
          title="HH Freightor D-Series Logistics Drones"
          lead="Four heavy-lift drones. One platform philosophy. Pick the payload you need."
        />

        <div className={TABLE_WRAPPER}>
          <table className={TABLE} role="table">
            <caption className="sr-only">
              Freightor D-Series specifications by model
            </caption>
            <thead>
              <tr>
                <th scope="col" className={TH_FIRST}>
                  Specification
                </th>
                <th scope="col" className={TH}>
                  D20
                </th>
                <th scope="col" className={TH}>
                  D100
                </th>
                <th scope="col" className={TH}>
                  D200
                </th>
                <th scope="col" className={TH_LAST}>
                  D300
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Payload at sea level
                </th>
                <td className={TD_VALUE}>20 kg</td>
                <td className={TD_VALUE}>100 kg</td>
                <td className={TD_VALUE}>175 kg</td>
                <td className={TD_VALUE}>300 kg</td>
              </tr>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Payload at 10,000 ft
                </th>
                <td className={TD_VALUE}>20 kg</td>
                <td className={TD_VALUE}>60 kg</td>
                <td className={TD_VALUE}>90 kg</td>
                <td className={TD_VALUE}>150 kg</td>
              </tr>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Payload at 15,000&ndash;17,000 ft
                </th>
                <td className={TD_VALUE}>15 kg</td>
                <td className={TD_VALUE}>30 kg</td>
                <td className={TD_VALUE}>50 kg</td>
                <td className={TD_VALUE}>n/a</td>
              </tr>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Max altitude (AMSL)
                </th>
                <td className={TD_VALUE}>6,000 m</td>
                <td className={TD_VALUE}>5,500 m</td>
                <td className={TD_VALUE}>5,500 m</td>
                <td className={TD_VALUE}>5,000 m</td>
              </tr>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Range (one way)
                </th>
                <td className={TD_VALUE}>20 km</td>
                <td className={TD_VALUE}>15 km</td>
                <td className={TD_VALUE}>15 km</td>
                <td className={TD_VALUE}>10 km</td>
              </tr>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Cruise speed
                </th>
                <td className={TD_VALUE}>12 m/s</td>
                <td className={TD_VALUE}>12 m/s</td>
                <td className={TD_VALUE}>12 m/s</td>
                <td className={TD_VALUE}>10 m/s</td>
              </tr>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Max take-off weight
                </th>
                <td className={TD_VALUE}>60 kg</td>
                <td className={TD_VALUE}>195 kg</td>
                <td className={TD_VALUE}>328 kg</td>
                <td className={TD_VALUE}>535 kg</td>
              </tr>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Size (without propellers)
                </th>
                <td className={TD_VALUE}>2174 &times; 2174 mm</td>
                <td className={TD_VALUE}>2510 &times; 2510 mm</td>
                <td className={TD_VALUE}>3000 &times; 3000 mm</td>
                <td className={TD_VALUE}>4200 &times; 4200 mm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={CONFIRM}>
          <em>
            [CONFIRM] Specs follow the Freightor Series deck. Defence deck shows
            some differing figures for D20, D100, D200 and D300 ceiling.
          </em>
        </p>
      </Section>

      {/* Individual model cards */}
      <Section>
        <div className={GRID_TWO}>
          {MODELS.map((model, index) => (
            <article
              key={model.name}
              className={`${CARD} animate-hh-fade`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={`flex flex-1 flex-col ${CARD_PAD}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className={CARD_TITLE}>{model.name}</h3>
                  <span className={BADGE}>{model.payload}</span>
                </div>
                <p className={CARD_BODY}>
                  <strong>Best for:</strong> {model.best}
                </p>
                <p className={CARD_BODY}>{model.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Built-in capabilities */}
      <Section>
        <SectionHead
          title="Built-in Capabilities"
          lead="Included on every Freightor model."
        />
        <ul className={CAP_GRID}>
          {CAPABILITIES.map((capability) => (
            <IconTile key={capability.title} {...capability} />
          ))}
        </ul>
      </Section>

      {/* Product 2: Surveillance Drones */}
      <Section>
        <SectionHead
          title="Surveillance Drones"
          lead="Eyes over difficult ground."
        />
        <p className={`max-w-[78ch] ${BODY}`}>
          Fixed-wing VTOL and multirotor drones for long-endurance observation,
          with ISR payload options. Take off and land anywhere, then cover large
          areas on one sortie.
        </p>

        <div className={`${TABLE_WRAPPER} mt-[clamp(20px,2.6vw,36px)]`}>
          <table className={TABLE} role="table">
            <caption className="sr-only">
              Surveillance drone specifications by model
            </caption>
            <thead>
              <tr>
                <th scope="col" className={TH_FIRST}>
                  Specification
                </th>
                <th scope="col" className={TH}>
                  HH 120VFWS
                </th>
                <th scope="col" className={TH_LAST}>
                  HH 300VFWS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Type
                </th>
                <td className={TD_VALUE}>VTOL fixed wing</td>
                <td className={TD_VALUE}>VTOL fixed wing</td>
              </tr>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Range
                </th>
                <td className={TD_VALUE}>20&ndash;30 km</td>
                <td className={TD_VALUE}>50&ndash;100 km</td>
              </tr>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Endurance
                </th>
                <td className={TD_VALUE}>120 min+</td>
                <td className={TD_VALUE}>300 min</td>
              </tr>
              <tr className={ROW}>
                <th scope="row" className={TD_LABEL}>
                  Payload
                </th>
                <td className={TD_VALUE}>ISR</td>
                <td className={TD_VALUE}>ISR</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={CONFIRM}>
          <em>
            [CONFIRM] Specs taken from the Defence deck. Please confirm they can
            be public.
          </em>
        </p>
      </Section>

      {/* Product 3: Custom-Built Drones */}
      <Section>
        <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] items-start gap-[clamp(24px,3vw,48px)] max-[860px]:grid-cols-[minmax(0,1fr)]">
          <div>
            <SectionHead title="Custom-Built Drones" />
            <p className={`max-w-[70ch] ${BODY}`}>
              Need something we do not list? Tell us the payload, altitude,
              range and mission, and our engineering team will specify and
              build a drone around it. We can customise propulsion, batteries,
              payload mounts, avionics and sensors to your requirement.
            </p>
            <div className="mt-[clamp(20px,2.4vw,32px)]">
              <Button tone="onLight" size="lg" withArrow>
                Talk to Our Engineers
              </Button>
            </div>
          </div>

          {/* Dashed spec sheet: the five customisable systems as chips. */}
          <div className="rounded-lg border-2 border-dashed border-blue/25 bg-[#f4f7fa]/60 p-[clamp(20px,2.4vw,32px)]">
            <div className="flex items-center gap-3">
              <span className={CAP_ICON} aria-hidden="true">
                <Wrench size={18} strokeWidth={1.8} />
              </span>
              <p className="m-0 text-[length:var(--fs-body)] font-bold text-ink">
                We can customise:
              </p>
            </div>
            <ul className="m-0 mt-[clamp(14px,1.8vw,22px)] flex list-none flex-wrap gap-2 p-0">
              {CHIPS.map((chip) => (
                <li key={chip} className={CHIP}>
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Prefer Not to Buy */}
      <Section>
        <div className="rounded-lg border border-blue/10 bg-[#f4f7fa] px-[clamp(24px,3.5vw,56px)] py-[clamp(32px,4vw,56px)] text-center">
          <h2 className="m-0 text-[length:var(--fs-h2)] uppercase">
            Prefer Not to Buy?
          </h2>
          <p className="mx-auto m-0 mt-[clamp(12px,1.6vw,20px)] max-w-[60ch] text-[length:var(--fs-lead)] leading-[1.45] text-ink/70 text-pretty">
            You can hire the same drones with crews through our Drone as a
            Service offering.
          </p>
          <div className="mt-[clamp(24px,3vw,40px)] flex justify-center">
            <Button
              href="/what-we-provide/services"
              tone="onLight"
              size="lg"
              withArrow
            >
              Explore Services
            </Button>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <ClosingCTA
        title="Tell Us What You Need to Carry"
        text="Share your payload, distance and altitude, and we will recommend the right drone and send a clear quote."
      >
        <Button href="/#connect" tone="onDark" size="lg" withArrow>
          Request a Quote
        </Button>
        <Button tone="onDark" size="lg">
          Download Brochure
        </Button>
      </ClosingCTA>
    </main>
  );
}

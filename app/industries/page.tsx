import type { Metadata } from "next";
import Image from "next/image";
import {
  Atom,
  BrickWall,
  Building2,
  Droplets,
  FlaskConical,
  Flame,
  Fuel,
  HardHat,
  Pickaxe,
  RadioTower,
  Shield,
  Ship,
  Zap,
} from "lucide-react";

import Button from "../../components/ui/Button";

export const metadata: Metadata = {
  title: "Industries We Serve | Himalayan Haulers",
  description:
    "Himalayan Haulers supports operations across oil and gas, chemicals, cement, maritime, mining, nuclear, power generation, sewers and infrastructure, plus power, defence, construction and energy.",
};

/* ==========================================================================
   /industries — the sector index.

   Thirteen labels, nothing more: no sector has body copy in the content
   draft, so each entry carries its name and an icon and stops there. The
   icon is decoration for the label, never a substitute for it.

   The container is the site's left-anchored one (--content-pad / --content-max)
   rather than the centred one /solutions uses, so this page's edge lines up
   with the navbar logo and the hero headline the way the other content
   routes do. It is declared locally because app/what-we-provide/ui.tsx is
   deliberately route-scoped and must not be imported from outside its route.

   Page chrome (navbar, footer) and the shared UI are untouched.
   ========================================================================== */

/* ---- Container ------------------------------------------------------------ */

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

const CONTENT_MAX = "max-w-[length:var(--content-max,1200px)]";

const SECTION_GAP = "mt-[clamp(40px,5vw,80px)]";

/* ---- Type ---------------------------------------------------------------- */

const EYEBROW =
  "m-0 mb-[clamp(8px,1vw,12px)] text-[length:var(--fs-small)] font-bold uppercase tracking-[0.1em] text-cyan";

const H1 = "m-0 max-w-[20ch] text-[length:var(--fs-h1)] uppercase";

const LEAD =
  "m-0 mt-[clamp(10px,1.2vw,16px)] max-w-[64ch] text-[length:var(--fs-lead)] leading-[1.38] text-ink/88 text-pretty";

/* ---- Hero photo ----------------------------------------------------------- */

const PHOTO =
  "relative mt-[clamp(28px,3.5vw,48px)] aspect-[16/9] w-full overflow-hidden rounded-lg bg-ink shadow-[0_12px_32px_rgba(10,25,45,0.12)] max-[700px]:aspect-[4/3] md:aspect-[21/9]";

/* ---- Sector grid ---------------------------------------------------------- */

/* Three across on a desktop, two on a tablet, one on a phone. Thirteen items
   means the last row is short, which is fine — an index is allowed to end. */
const GRID =
  "m-0 grid list-none gap-[clamp(14px,1.8vw,22px)] p-0 grid-cols-1 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3";

const TILE =
  "flex items-center gap-[clamp(14px,1.6vw,20px)] rounded-lg border border-blue/10 bg-[#f4f7fa] p-[clamp(18px,2vw,26px)]";

const TILE_ICON =
  "grid size-11 shrink-0 place-items-center rounded-md bg-cyan/10 text-cyan";

const TILE_INDEX =
  "m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.16em] text-ink/45";

const TILE_LABEL = "m-0 mt-[0.2em] text-[length:var(--fs-h3)] text-ink";

/* ---- Closing panel -------------------------------------------------------- */

const CLOSING =
  "rounded-lg bg-blue px-[clamp(24px,3.5vw,56px)] py-[clamp(36px,4.5vw,64px)] text-center text-white animate-hh-fade [animation-delay:300ms]";

const CLOSING_TITLE = "m-0 text-[length:var(--fs-h2)] uppercase";

const CLOSING_TEXT =
  "mx-auto m-0 mt-[clamp(12px,1.6vw,20px)] max-w-[60ch] text-[length:var(--fs-lead)] leading-[1.38] text-white/88 text-pretty";

const CLOSING_ACTIONS =
  "mt-[clamp(24px,3vw,40px)] flex flex-wrap items-center justify-center gap-x-[clamp(20px,2.4vw,32px)] gap-y-3";

/* ---- Content -------------------------------------------------------------- */

type Sector = {
  id: string;
  label: string;
  icon: typeof Fuel;
};

/* Order is the client's: the nine from the brief first, then the four the
   home page already names. Labels are verbatim. */
const SECTORS: Sector[] = [
  { id: "oil-gas", label: "Oil & Gas", icon: Fuel },
  { id: "chemicals", label: "Chemicals", icon: FlaskConical },
  { id: "cement", label: "Cement", icon: BrickWall },
  { id: "maritime", label: "Maritime", icon: Ship },
  { id: "mining", label: "Mining", icon: Pickaxe },
  { id: "nuclear", label: "Nuclear", icon: Atom },
  { id: "power-gen", label: "Power Gen", icon: Zap },
  { id: "sewers", label: "Sewers", icon: Droplets },
  { id: "infrastructure", label: "Infrastructure", icon: Building2 },
  { id: "power", label: "Power", icon: RadioTower },
  { id: "defence", label: "Defence", icon: Shield },
  { id: "construction", label: "Construction", icon: HardHat },
  { id: "energy", label: "Energy", icon: Flame },
];

/**
 * /industries — sectors the operation serves.
 *
 * Server component with no interactive state, so `metadata` exports normally.
 */
export default function IndustriesPage() {
  return (
    <main className="bg-white py-[length:var(--section-pad)] text-ink">
      <header className={INNER}>
        <div className={CONTENT_MAX}>
          <div className="animate-hh-fade">
            <p className={EYEBROW}>Industries</p>
            <h1 className={H1}>Industries We Serve</h1>
            <p className={LEAD}>
              From refinery stacks to sewer mains, the same airframes, sensors
              and crews &mdash; deployed where access is hardest.
            </p>
          </div>

          <div className={PHOTO}>
            <Image
              src="/media/Inspection.jpeg"
              alt="Drone inspecting an industrial structure"
              fill
              priority
              sizes="(max-width: 700px) 92vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <section className={`${INNER} ${SECTION_GAP}`} aria-label="Sectors">
        <div className={CONTENT_MAX}>
          <ol className={GRID}>
            {SECTORS.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <li
                  key={sector.id}
                  className={`${TILE} animate-hh-fade`}
                  style={{ animationDelay: `${120 + index * 60}ms` }}
                >
                  <span className={TILE_ICON} aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>

                  <div>
                    <p className={TILE_INDEX} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className={TILE_LABEL}>{sector.label}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className={`${INNER} ${SECTION_GAP}`}>
        <div className={CONTENT_MAX}>
          <div className={CLOSING}>
            <h2 className={CLOSING_TITLE}>Put the Capability to Work</h2>
            <p className={CLOSING_TEXT}>
              Tell us the site, the payload and the hazard. We bring the drone,
              the sensors and the crew.
            </p>

            <div className={CLOSING_ACTIONS}>
              {/* The site's one shared Button, untouched — same label-and-rule
                  shape every other page uses, on the navy panel it is designed
                  for. */}
              <Button href="/#contact" withArrow>
                Let&rsquo;s Connect
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

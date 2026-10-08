import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  Plus,
  Route,
  Scale,
  ShieldCheck,
  Timer,
  Users,
  Wallet,
} from "lucide-react";

import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title:
    "Drone as a Service in India | Logistics, Inspection, Tower Stringing | Himalayan Haulers",
  description:
    "Hire heavy-lift drones with crews. Logistics Drone as a Service, drone inspections, industrial surveys and tower stringing, without owning a fleet.",
};

/* ==========================================================================
   SERVICES PAGE — Drone as a Service
   ========================================================================== */

/* ---- Page chrome ------------------------------------------------------------
   The layout constants and small blocks below are deliberately declared HERE,
   in the one file that uses them, rather than in a shared module. The route's
   index and Products pages carry their own copies of the same values: this route
   has three pages and no shared chrome file, so a change to the section rhythm
   is a change in each page. Design tokens (--fs-*, --content-*) still come from
   globals.css, which is what keeps these pages in step with the navbar, the home
   hero and the home sections. */

/** Left-anchored padding: the same --content-pad line the navbar logo and the
 *  hero headline sit on. */
const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

/** Measure cap only; the left edge stays flush with INNER. */
const CONTENT_MAX = "max-w-[length:var(--content-max,1200px)]";

/** One vertical rhythm for every stacked block on the page. The hero is the
 *  first child and carries no margin, so this is safe. */
const SECTION_GAP = "mt-[clamp(40px,5vw,80px)]";

const EYEBROW =
  "m-0 mb-[clamp(8px,1vw,12px)] text-[length:var(--fs-small)] font-bold tracking-[0.1em] uppercase text-cyan";

/** max-w keeps a long headline wrapping at a sensible measure instead of
 *  running the full container width. */
const H1 = "m-0 max-w-[20ch] text-[length:var(--fs-h1)] uppercase";
const H2 = "m-0 text-[length:var(--fs-h2)] uppercase";

const LEAD =
  "m-0 mt-[clamp(10px,1.2vw,16px)] max-w-[64ch] text-[length:var(--fs-lead)] leading-[1.45] text-ink/70 text-pretty";

const BODY =
  "text-[length:var(--fs-body)] leading-[1.45] text-ink/75 text-pretty";

/** The card shell the home page already uses: hairline border, two-layer
 *  shadow, and a lift on hover. Images and content are layered inside it, so
 *  the card itself clips (overflow-hidden) to keep photos in the rounded box.
 *  text-ink is set here because headings inside the card inherit their colour
 *  from it (the global h1–h6 rule forces `color: inherit`). */
const CARD =
  "group flex flex-col overflow-hidden rounded-lg border border-blue/10 bg-white text-ink shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.06)] transition-[border-color,box-shadow,transform] duration-300 hover:border-cyan/50 hover:shadow-[0_4px_8px_rgba(10,25,45,0.05),0_20px_44px_rgba(10,25,45,0.1)] motion-safe:hover:-translate-y-0.5";

/** Content padding for the body block inside a CARD (the photo band sits
 *  above it and runs full-bleed to the card's edges). */
const CARD_PAD = "p-[clamp(24px,2.8vw,40px)]";

const CARD_TITLE = "m-0 text-[length:var(--fs-h3)] text-ink";

const CARD_BODY =
  "m-0 mt-[clamp(10px,1.2vw,16px)] text-[length:var(--fs-body)] leading-[1.45] text-ink/75 text-pretty";

/** Confirm note — the draft's [CONFIRM] markers stay visible until cleared. */
const CONFIRM =
  "mt-[clamp(12px,1.4vw,18px)] m-0 text-[length:var(--fs-small)] text-ink/55";

/* ---- Icon feature tiles ------------------------------------------------------
   Used by both detail pages: capabilities on Products, benefits on Services.
   Icon sits in a tinted square, the title keeps the feature name and the body
   keeps the original sentence from the content draft. */
const CAP_GRID =
  "m-0 grid grid-cols-2 gap-[clamp(12px,1.6vw,20px)] list-none p-0 max-[760px]:grid-cols-1";

const CAP_TILE =
  "flex items-start gap-[clamp(12px,1.4vw,18px)] rounded-lg border border-blue/10 bg-[#f4f7fa]/70 p-[clamp(14px,1.7vw,22px)] transition-colors duration-300 hover:border-cyan/40 hover:bg-[#f4f7fa]";

const CAP_ICON =
  "grid size-9 shrink-0 place-items-center rounded-md bg-cyan/10 text-cyan";

const CAP_TITLE = "m-0 text-[length:var(--fs-body)] font-bold text-ink";

const CAP_BODY =
  "m-0 mt-[0.3em] text-[length:var(--fs-small)] leading-[1.5] text-ink/65";

/** Small pill for short option lists (commercial models, customisable parts). */
const CHIP =
  "rounded-full border border-blue/15 bg-white px-[0.9em] py-[0.4em] text-[length:var(--fs-small)] font-semibold text-ink/70";

/* Action row in the hero. The stagger uses `[animation-delay:…]`, not
   `delay-[…]`: that utility sets transition-delay, which does nothing. */
const HERO_ACTIONS =
  "mt-[clamp(24px,3vw,40px)] flex animate-hh-fade flex-wrap items-center gap-x-[clamp(20px,2.4vw,32px)] gap-y-3 [animation-delay:120ms]";

/* ---- Small building blocks --------------------------------------------------- */

/** A cyan dot bullet. The dot is decorative (aria-hidden), the text is the
 *  list item's real content. `dark` flips the text for navy surfaces. */
function Bullet({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-[0.85em] text-[length:var(--fs-body)] leading-[1.45] ${
        dark ? "text-white/80" : "text-ink/75"
      }`}
    >
      <span
        aria-hidden="true"
        className="mt-[0.6em] size-[6px] shrink-0 rounded-full bg-cyan"
      />
      <span className="text-pretty">{children}</span>
    </li>
  );
}

/** Stacked bullet list with one rhythm for every list on the page. */
function Bullets({ children }: { children: ReactNode }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-[0.7em] p-0">{children}</ul>
  );
}

/** One icon tile: tinted icon square, bold title, one-line body. */
function IconTile({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof import("lucide-react").Cpu;
  title: string;
  body: string;
}) {
  return (
    <li className={CAP_TILE}>
      <span className={CAP_ICON} aria-hidden="true">
        <Icon size={18} strokeWidth={1.8} />
      </span>
      <div>
        <p className={CAP_TITLE}>{title}</p>
        <p className={CAP_BODY}>{body}</p>
      </div>
    </li>
  );
}

/**
 * Standard section: left-anchored wrapper, capped measure, one vertical gap.
 * Every block below the hero goes through this so nothing drifts.
 */
function Section({ children }: { children: ReactNode }) {
  return (
    <div className={`${INNER} ${SECTION_GAP}`}>
      <div className={CONTENT_MAX}>{children}</div>
    </div>
  );
}

/** Eyebrow-free section heading with an optional lead line. */
function SectionHead({
  title,
  lead,
  id,
}: {
  title: ReactNode;
  lead?: string;
  id?: string;
}) {
  return (
    <header className="mb-[clamp(20px,2.4vw,32px)]">
      <h2 id={id} className={H2}>
        {title}
      </h2>
      {lead ? <p className={LEAD}>{lead}</p> : null}
    </header>
  );
}

/**
 * Photo band inside a card. Sits above CARD_PAD, full-bleed to the card's
 * rounded corners, and zooms a touch on card hover.
 */
function CardPhoto({
  src,
  alt,
  sizes,
  ratio = "aspect-[16/9]",
}: {
  src: string;
  alt: string;
  sizes: string;
  ratio?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${ratio}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 motion-reduce:transition-none"
      />
    </div>
  );
}

/**
 * Page-opening block: eyebrow, big uppercase headline with a cyan accent span,
 * lead line, action row, optional full-width photo band. Fade-in mirrors the home
 * sections (hh-fade, second step delayed) so arrivals read the same here.
 *
 * BAND layout: the copy sits on the page's white surface and the photo runs
 * below it. The route index lays its copy over the photo instead, which is why
 * this is not shared code — the two layouts genuinely differ.
 */
function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  photo,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  actions?: ReactNode;
  photo?: { src: string; alt: string; sizes?: string };
}) {
  return (
    <header className={INNER}>
      <div className={CONTENT_MAX}>
        <div className="animate-hh-fade">
          <p className={EYEBROW}>{eyebrow}</p>
          <h1 className={H1}>{title}</h1>
          <p className={LEAD}>{lead}</p>
        </div>

        {actions ? (
          <div className={HERO_ACTIONS} role="group" aria-label="Page actions">
            {actions}
          </div>
        ) : null}

        {photo ? (
          <div className="mt-[clamp(28px,3.5vw,48px)] animate-hh-fade overflow-hidden rounded-lg shadow-[0_12px_32px_rgba(10,25,45,0.12)] [animation-delay:220ms]">
            <div className="relative aspect-[16/9] w-full max-[700px]:aspect-[4/3] md:aspect-[21/9]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority
                sizes={photo.sizes ?? "(max-width: 700px) 92vw, 1200px"}
                className="object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

/** Navy closing panel used by both detail pages. */
function ClosingCTA({
  title,
  text,
  children,
  footer,
}: {
  title: ReactNode;
  text: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <Section>
      <div className="rounded-lg bg-blue px-[clamp(24px,3.5vw,56px)] py-[clamp(36px,4.5vw,64px)] text-center text-white">
        <h2 className="m-0 text-[length:var(--fs-h2)] uppercase">{title}</h2>
        <p className="mx-auto m-0 mt-[clamp(12px,1.6vw,20px)] max-w-[60ch] text-[length:var(--fs-lead)] leading-[1.45] text-white/85 text-pretty">
          {text}
        </p>
        <div className="mt-[clamp(24px,3vw,40px)] flex flex-wrap items-center justify-center gap-x-[clamp(20px,2.4vw,32px)] gap-y-3">
          {children}
        </div>
        {footer ? (
          <div className="mt-[clamp(24px,3vw,40px)] text-[length:var(--fs-body)] leading-[1.6] text-white/75">
            {footer}
          </div>
        ) : null}
      </div>
    </Section>
  );
}

/* Same type ramp as Products: the section steps up from the hero's scale via
   per-level multipliers, scoped to this page only. */
const SECTION =
  "bg-white text-ink animate-hh-fade py-[length:var(--section-pad)] [--fs-h2:calc(var(--fs-h2)*1.6)] [--fs-lead:calc(var(--fs-lead)*1.45)] [--fs-h3:calc(var(--fs-h3)*1.35)] [--fs-body:calc(var(--fs-body)*1.18)] [--fs-small:calc(var(--fs-small)*1.2)]";

/* In-card subhead ("Typical uses:", "How it works:"). One level below the
   card title, so it reads --fs-h3 like the card title but not bold-cyan. */
const SUBHEAD = "m-0 mt-[clamp(16px,2vw,24px)] text-[length:var(--fs-h3)] font-bold text-ink";

const GRID_TWO =
  "grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[length:var(--card-gap)] max-[860px]:grid-cols-[minmax(0,1fr)]";

const GRID_FOUR =
  "grid grid-cols-4 gap-[length:var(--card-gap)] max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1";

/* "How it works" — numbered steps, cyan numeral in a tinted circle. */
const STEP =
  "flex items-start gap-[clamp(10px,1.2vw,14px)] text-[length:var(--fs-body)] leading-[1.45] text-ink/75";

const STEP_NUM =
  "grid size-7 shrink-0 place-items-center rounded-full bg-cyan/10 text-[length:var(--fs-small)] font-bold text-cyan";

/* FAQ: native <details>, so it opens without JavaScript and still works if
   scripts fail. group-open rotates the + into a ×. */
const FAQ_LIST = "mt-0 max-w-[84ch] border-t border-blue/15";

const FAQ_ITEM = "group border-b border-blue/15 py-[clamp(14px,1.6vw,20px)]";

const FAQ_Q =
  "flex cursor-pointer list-none items-start justify-between gap-4 text-[length:var(--fs-body)] font-bold leading-[1.4] text-ink transition-colors hover:text-cyan [&::-webkit-details-marker]:hidden";

const FAQ_A =
  "m-0 mt-[clamp(10px,1.2vw,16px)] max-w-[72ch] text-[length:var(--fs-body)] leading-[1.55] text-ink/70";

/* ---- Content -------------------------------------------------------------- */

const BENEFITS: {
  icon: typeof Wallet;
  title: string;
  body: string;
}[] = [
  {
    icon: Wallet,
    title: "No capital cost",
    body: "Use heavy-lift drones without buying a fleet.",
  },
  {
    icon: Users,
    title: "No pilots to hire",
    body: "Our trained crews operate everything.",
  },
  {
    icon: Route,
    title: "Right drone for the job",
    body: "We match the platform to your payload, altitude and route.",
  },
  {
    icon: ShieldCheck,
    title: "Safer work",
    body: "Keep people off cliffs, towers and out of confined spaces.",
  },
  {
    icon: Timer,
    title: "Faster delivery",
    body: "Minutes in the air instead of days on foot or by mule.",
  },
  {
    icon: Scale,
    title: "Scales with your project",
    body: "Pay only for the days, tonnes or scope you need.",
  },
];

const LDaaS_USES = [
  "Materials and tools to remote construction and tower sites",
  "Rations, medicine and spares to isolated posts",
  "Equipment moves across valleys and rivers",
  "Emergency supply when roads are cut",
];

const COMMERCIAL_MODELS = ["Per metric ton", "Per day", "Turnkey for a project"];

const LDaaS_STEPS = [
  "Tell us the job: route, load, timeline.",
  "We plan and deploy: right drone, crew and batteries on site.",
  "We fly it: you get the delivery, we handle the rest.",
];

const INDUSTRIES: { name: string; body: string; image: string; alt: string }[] =
  [
    {
      name: "Power",
      body: "Transmission towers, substations, line inspection and stringing.",
      image: "/media/power.jpg",
      alt: "Drone stringing a pilot line between power towers",
    },
    {
      name: "Energy",
      body: "Pipelines, refineries, wind farms, solar fields and methane monitoring.",
      image: "/media/energy.jpg",
      alt: "Drone inspecting a refinery stack",
    },
    {
      name: "Defence",
      body: "High-altitude resupply, border surveillance, forward area logistics.",
      image: "/media/defence.jpg",
      alt: "Heavy-lift drone delivering supplies at altitude",
    },
    {
      name: "Construction",
      body: "Remote site delivery, progress surveys, tower erection and confined space inspection.",
      image: "/media/construction.jpg",
      alt: "Drone surveying a construction site",
    },
  ];

const FAQS: { q: string; a: string; confirm?: string }[] = [
  {
    q: "Do I need any drone licence or permission?",
    a: "Our crews handle operations and work with you on the permissions your site needs.",
    confirm: "[CONFIRM] Please add your standard compliance wording.",
  },
  {
    q: "How soon can you deploy?",
    a: "Tell us the location and scope and we will give a mobilisation timeline with the quote.",
    confirm: "[CONFIRM]",
  },
  {
    q: "Can I buy the drone later?",
    a: "Yes. Many customers start with DAAS and move to owning once they have proven the use case.",
  },
  {
    q: "What areas do you cover?",
    a: "We operate across India, including high-altitude and remote regions.",
    confirm: "[CONFIRM]",
  },
];

/** Navy underline link used inside the closing panel's contact line. */
const CONTACT_LINK =
  "text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-cyan hover:decoration-cyan";

/**
 * /what-we-provide/services — the hire-the-capability page.
 *
 * Server component: the FAQ accordion is native <details>, so no client JS is
 * needed anywhere on the page.
 */
export default function ServicesPage() {
  return (
    <main className={SECTION}>
      {/* Hero */}
      <PageHero
        eyebrow="Drone as a Service"
        title={
          <>
            Pay for the Haul, <span className="text-cyan">Not the Hardware</span>
          </>
        }
        lead="We bring the drones, pilots, batteries and support to your site. You get the result, without owning or operating anything."
        actions={
          <>
            <Button href="/#connect" tone="onLight" size="lg" withArrow>
              Get a Quote
            </Button>
            <Button tone="onLight" size="lg">
              Talk to Our Team
            </Button>
          </>
        }
      />

      {/* Intro */}
      <Section>
        <SectionHead title="Drone Capability on Demand" />
        <p className={`max-w-[78ch] ${BODY}`}>
          Owning drones means buying aircraft, hiring and training pilots,
          managing batteries, maintenance and permissions. With Drone as a
          Service, Himalayan Haulers carries all of that. Our crews deploy to
          your project, fly the job, and move on when it is done.
        </p>
      </Section>

      {/* Why Choose DAAS */}
      <Section>
        <SectionHead
          title="Why Choose DAAS"
          lead="Six reasons teams hire the capability instead of buying it."
        />
        <ul className={CAP_GRID}>
          {BENEFITS.map((benefit) => (
            <IconTile key={benefit.title} {...benefit} />
          ))}
        </ul>
      </Section>

      {/* Service 1: LDaaS */}
      <Section>
        <article className={CARD}>
          <CardPhoto
            src="/media/Logistics.jpeg"
            alt="Heavy-lift drone carrying a payload to a remote site"
            sizes="(max-width: 860px) 92vw, 1200px"
            ratio="aspect-[16/7] max-[700px]:aspect-[16/9]"
          />
          <div className={`flex flex-1 flex-col ${CARD_PAD}`}>
            <p className="m-0 mb-[clamp(6px,0.8vw,10px)] text-[length:var(--fs-small)] font-bold uppercase tracking-[0.1em] text-cyan">
              Service 01
            </p>
            <h2 className={CARD_TITLE}>
              Logistics Drone as a Service (LDaaS)
            </h2>
            <p className={CARD_BODY}>
              <strong>Last-Mile Delivery Where There Is No Road</strong>
            </p>
            <p className={CARD_BODY}>
              LDaaS is built for EPC and other companies that need to move
              materials from an accessible road head to a remote location with
              no road access. We provide the drones, crew and logistics
              planning. You provide the load and the destination.
            </p>

            <h3 className={SUBHEAD}>Typical uses:</h3>
            <div className="mt-[clamp(10px,1.2vw,16px)]">
              <Bullets>
                {LDaaS_USES.map((use) => (
                  <Bullet key={use}>{use}</Bullet>
                ))}
              </Bullets>
            </div>

            <h3 className={SUBHEAD}>Commercial models (pick the one that fits):</h3>
            <ul className="m-0 mt-[clamp(12px,1.4vw,18px)] flex list-none flex-wrap gap-2 p-0">
              {COMMERCIAL_MODELS.map((model) => (
                <li key={model} className={CHIP}>
                  {model}
                </li>
              ))}
            </ul>

            <p className={CARD_BODY}>
              <strong>Drone options:</strong> HH Freightor C100, C200 and C300
              (see the LDaaS deck).
            </p>
            <p className={CONFIRM}>
              <em>
                [CONFIRM] LDaaS deck calls these C-series; product decks call
                them D-series. Please confirm which name to use on the site.
              </em>
            </p>

            <h3 className={SUBHEAD}>How it works:</h3>
            <ol className="m-0 mt-[clamp(12px,1.4vw,18px)] flex list-none flex-col gap-[clamp(10px,1.2vw,14px)] p-0">
              {LDaaS_STEPS.map((step, index) => (
                <li key={step} className={STEP}>
                  <span className={STEP_NUM} aria-hidden="true">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-[clamp(24px,3vw,40px)]">
              <Button tone="onLight" size="lg" withArrow>
                Get an LDaaS Quote
              </Button>
            </div>
          </div>
        </article>
      </Section>

      {/* Service 2: Drone Inspections */}
      <Section>
        <article className={CARD}>
          <CardPhoto
            src="/media/Inspection.jpeg"
            alt="Drone inspecting an industrial structure"
            sizes="(max-width: 860px) 92vw, 1200px"
            ratio="aspect-[16/7] max-[700px]:aspect-[16/9]"
          />
          <div className={`flex flex-1 flex-col ${CARD_PAD}`}>
            <p className="m-0 mb-[clamp(6px,0.8vw,10px)] text-[length:var(--fs-small)] font-bold uppercase tracking-[0.1em] text-cyan">
              Service 02
            </p>
            <h2 className={CARD_TITLE}>Drone Inspections</h2>
            <p className={CARD_BODY}>
              <strong>Inspect Without Sending People In or Up</strong>
            </p>
            <p className={CARD_BODY}>
              Drones reach places that are dangerous, expensive or slow to
              inspect by hand, and send data straight to your engineers.
            </p>

            <div className="mt-[clamp(14px,1.8vw,22px)]">
              <Bullets>
                <Bullet>
                  <strong>Confined space inspection:</strong> collision-tolerant
                  drones fly inside tanks, boilers and ducts, so nobody has to
                  enter.
                </Bullet>
                <Bullet>
                  <strong>External visual and thermal inspection:</strong>{" "}
                  stacks, flare tips, pipelines, tanks and structures, from the
                  air.
                </Bullet>
                <Bullet>
                  <strong>
                    Ultrasonic thickness and coating measurement:
                  </strong>{" "}
                  contact-based drone measurements (UT, EMAT, high-temperature
                  UT, DFT) on structures at height.
                </Bullet>
              </Bullets>
            </div>

            <p className={CARD_BODY}>
              <strong>Good for:</strong> refineries, pipelines, power plants,
              industrial facilities.
            </p>

            <div className="mt-auto pt-[clamp(24px,3vw,40px)]">
              <Button tone="onLight" size="lg" withArrow>
                Request an Inspection
              </Button>
            </div>
          </div>
        </article>
      </Section>

      {/* Service 3 & 4: Industrial Sensor Surveys & Tower Stringing */}
      <Section>
        <div className={GRID_TWO}>
          <article className={CARD}>
            <CardPhoto
              src="/media/construction.jpg"
              alt="Drone surveying a construction site"
              sizes="(max-width: 860px) 92vw, 46vw"
            />
            <div className={`flex flex-1 flex-col ${CARD_PAD}`}>
              <p className="m-0 mb-[clamp(6px,0.8vw,10px)] text-[length:var(--fs-small)] font-bold uppercase tracking-[0.1em] text-cyan">
                Service 03
              </p>
              <h2 className={CARD_TITLE}>Industrial Sensor Surveys</h2>
              <p className={CARD_BODY}>
                <strong>Data from the Air, Ready to Act On</strong>
              </p>

              <div className="mt-[clamp(14px,1.8vw,22px)]">
                <Bullets>
                  <Bullet>
                    <strong>Bathymetry:</strong> water depth and bed profile for
                    dams, reservoirs and rivers.
                  </Bullet>
                  <Bullet>
                    <strong>Ground-penetrating radar (GPR):</strong> detect
                    utilities and subsurface features before you dig or build.
                  </Bullet>
                  <Bullet>
                    <strong>Methane detection:</strong> screen pipelines, gas
                    facilities and landfills for leaks.
                  </Bullet>
                </Bullets>
              </div>

              <div className="mt-auto pt-[clamp(24px,3vw,40px)]">
                <Button tone="onLight" size="lg" withArrow>
                  Request a Survey
                </Button>
              </div>
            </div>
          </article>

          <article className={CARD}>
            <CardPhoto
              src="/media/Tower-stringing.jpeg"
              alt="Drone laying a pilot line across a transmission tower"
              sizes="(max-width: 860px) 92vw, 46vw"
            />
            <div className={`flex flex-1 flex-col ${CARD_PAD}`}>
              <p className="m-0 mb-[clamp(6px,0.8vw,10px)] text-[length:var(--fs-small)] font-bold uppercase tracking-[0.1em] text-cyan">
                Service 04
              </p>
              <h2 className={CARD_TITLE}>Drone-Based Tower Stringing</h2>
              <p className={CARD_BODY}>
                <strong>Pilot Lines Across Towers, Without the Climb</strong>
              </p>
              <p className={CARD_BODY}>
                Stringing the first line across towers is slow and risky over
                mountains, forests and rivers. We fly the pilot line across by
                drone, which your team then uses to pull heavier lines.
              </p>

              <div className="mt-[clamp(14px,1.8vw,22px)]">
                <Bullets>
                  <Bullet>
                    <strong>We provide:</strong> drone, batteries and crew.
                  </Bullet>
                  <Bullet>
                    <strong>You provide:</strong> lines, winches and
                    installation team.
                  </Bullet>
                </Bullets>
              </div>

              <p className={CARD_BODY}>
                <strong>Benefits:</strong> faster crossings, fewer climbs and
                ground crossings, safer crews, less disturbance to terrain and
                crops.
              </p>

              <div className="mt-auto pt-[clamp(24px,3vw,40px)]">
                <Button tone="onLight" size="lg" withArrow>
                  Plan a Stringing Project
                </Button>
              </div>
            </div>
          </article>
        </div>
      </Section>

      {/* Who We Serve */}
      <Section>
        <SectionHead
          title="Who We Serve"
          lead="Power, Energy, Defence and Construction — each industry applies these services differently."
        />
        <div className={GRID_FOUR}>
          {INDUSTRIES.map((industry) => (
            <article key={industry.name} className={CARD}>
              <CardPhoto
                src={industry.image}
                alt={industry.alt}
                sizes="(max-width: 600px) 92vw, (max-width: 1100px) 46vw, 280px"
                ratio="aspect-[16/10]"
              />
              <div className={`flex flex-1 flex-col ${CARD_PAD}`}>
                <h3 className={CARD_TITLE}>{industry.name}</h3>
                <p className={CARD_BODY}>{industry.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <SectionHead title="FAQs" />
        <div className={FAQ_LIST}>
          {FAQS.map((faq) => (
            <details key={faq.q} className={FAQ_ITEM}>
              <summary className={FAQ_Q}>
                {faq.q}
                <Plus
                  size={18}
                  strokeWidth={2}
                  className="mt-[0.2em] shrink-0 text-cyan transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className={FAQ_A}>
                {faq.a}
                {faq.confirm ? (
                  <>
                    {" "}
                    <em className="text-ink/55">{faq.confirm}</em>
                  </>
                ) : null}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <ClosingCTA
        title={<>Let&rsquo;s Move Something Impossible</>}
        text="Tell us what you need to carry, and where. We will bring the drone."
        footer={
          <p className="m-0">
            Contact: Arjun Naik &middot;{" "}
            <a href="tel:+917899801210" className={CONTACT_LINK}>
              +91 78998 01210
            </a>{" "}
            &middot;{" "}
            <a href="mailto:arjun@himalayanhaulers.com" className={CONTACT_LINK}>
              arjun@himalayanhaulers.com
            </a>
          </p>
        }
      >
        <Button href="/#connect" tone="onDark" size="lg" withArrow>
          Let&rsquo;s Connect
        </Button>
      </ClosingCTA>
    </main>
  );
}

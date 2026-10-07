import type { Metadata } from "next";
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

import {
  BODY,
  CAP_GRID,
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
  Bullet,
  Bullets,
  CardPhoto,
} from "../ui";

export const metadata: Metadata = {
  title:
    "Drone as a Service in India | Logistics, Inspection, Tower Stringing | Himalayan Haulers",
  description:
    "Hire heavy-lift drones with crews. Logistics Drone as a Service, drone inspections, industrial surveys and tower stringing, without owning a fleet.",
};

/* ==========================================================================
   SERVICES PAGE — Drone as a Service
   ========================================================================== */

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

import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Drone as a Service in India | Logistics, Inspection, Tower Stringing | Himalayan Haulers",
  description:
    "Hire heavy-lift drones with crews. Logistics Drone as a Service, drone inspections, industrial surveys and tower stringing, without owning a fleet.",
};

/* ==========================================================================
   SERVICES PAGE — Drone as a Service, laid out like the Products page.

     1. hero            full-width photo banner, headline and buttons over it
     2. on demand       photo left, text right (intro + why choose DAAS)
     3. LDaaS           photo left, text right
     4. inspections     photo left, text right
     5. sensor surveys  photo left, text right
     6. tower stringing photo left, text right
     7. who we serve    photo left, text right
     8. FAQs            heading left, questions right
     9. closing banner  photo background, text and buttons over it

   Every photo / text pair is a two-column row of equal height, so the photo
   runs level with the text beside it. Black, white and grey only. Design
   tokens (--fs-*, --content-*, --section-pad) come from globals.css.
   ========================================================================== */

/* ---- Layout ---------------------------------------------------------------- */

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";
const CONTENT_MAX = "max-w-[length:var(--content-max,1200px)]";
const BAND_PAD = "py-[calc(var(--section-pad)*0.7)]";

const GREY = "bg-[#d9d9d9]";
const MAIN = "bg-white text-[color:var(--ink)] [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both]";

function Band({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`${BAND_PAD} scroll-mt-[96px] ${className}`}>
      <div className={INNER}>
        <div className={CONTENT_MAX}>{children}</div>
      </div>
    </section>
  );
}

/* ---- Type ------------------------------------------------------------------ */

const H1 =
  "m-0 max-w-[18ch] text-[length:var(--fs-h1)] font-semibold leading-[1.1] tracking-[-0.01em] text-balance";
const H2 =
  "m-0 text-[length:var(--fs-h2)] font-semibold leading-[1.15] tracking-[-0.01em] text-balance";
const LABEL = "m-0 text-[length:var(--fs-body)] font-semibold";
const LEAD =
  "m-0 mt-[clamp(8px,1vw,14px)] max-w-[56ch] text-[length:var(--fs-lead)] leading-[1.4] text-[color:var(--ink)]/60 text-pretty";
const BODY = "m-0 text-[length:var(--fs-small)] leading-[1.55] text-[color:var(--ink)]/70 text-pretty";
const NOTE = "m-0 mt-[0.8em] text-[length:var(--fs-small)] opacity-60";

/* ---- Pieces ---------------------------------------------------------------- */

type LinkVariant = "solid" | "outline" | "white" | "outlineWhite";

function PillLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: LinkVariant;
}) {
  const base =
    "inline-flex items-center justify-center rounded-[2px] px-[1.4em] py-[0.8em] text-[length:var(--fs-small)] font-semibold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";
  const looks: Record<LinkVariant, string> = {
    solid: "bg-[color:var(--ink)] text-white hover:bg-[color:var(--ink)]/80",
    outline: "border border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white",
    white: "bg-white text-[color:var(--ink)] hover:bg-white/85",
    outlineWhite: "border border-white text-white hover:bg-white hover:text-[color:var(--ink)]",
  };
  return (
    <a href={href} className={`${base} ${looks[variant]}`}>
      {children}
    </a>
  );
}

function Photo({
  src,
  alt,
  sizes,
  priority,
  position,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  position?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover"
      style={{ objectPosition: position ?? "center" }}
    />
  );
}

/** Photo on the left, text on the right. The row stretches, so the photo is
 *  exactly as tall as the text beside it. */
function Split({
  id,
  photo,
  children,
  className = "",
}: {
  id?: string;
  photo: { src: string; alt: string; position?: string };
  children: ReactNode;
  className?: string;
}) {
  return (
    <Band id={id} className={className}>
      <div className="grid items-stretch gap-[clamp(24px,4vw,64px)] min-[860px]:grid-cols-2">
        <div className={`relative min-h-[260px] overflow-hidden ${GREY}`}>
          <Photo
            src={photo.src}
            alt={photo.alt}
            position={photo.position}
            sizes="(max-width: 860px) 92vw, 560px"
          />
        </div>
        <div className="flex flex-col justify-center">{children}</div>
      </div>
    </Band>
  );
}

/** Small bold line with a one-line description under it. */
function Sub({ children }: { children: ReactNode }) {
  return (
    <p className="m-0 mt-[clamp(10px,1.2vw,16px)] text-[length:var(--fs-body)] font-semibold">
      {children}
    </p>
  );
}

/** Dot list: one rhythm for every list on the page. */
function Bullets({ children }: { children: ReactNode }) {
  return (
    <ul className="m-0 mt-[clamp(10px,1.2vw,16px)] flex list-none flex-col gap-[0.6em] p-0">
      {children}
    </ul>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-[1.1em] text-[length:var(--fs-small)] leading-[1.5] text-[color:var(--ink)]/70 before:absolute before:left-0 before:top-[0.6em] before:size-[5px] before:rounded-full before:bg-[color:var(--ink)] before:content-['']">
      {children}
    </li>
  );
}

/** Rows with a thin line above each: title left, text right. */
function Rows({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="m-0 mt-[clamp(16px,2vw,28px)] list-none p-0">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-[0.2em] border-t border-[color:var(--ink)]/15 py-[clamp(10px,1.2vw,14px)]"
        >
          <span className="text-[length:var(--fs-small)] font-semibold">{item.title}</span>
          <span className={`${BODY} max-w-[40ch] min-[560px]:text-right`}>{item.body}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---- Content --------------------------------------------------------------- */

const BENEFITS = [
  { title: "No capital cost", body: "Use heavy-lift drones without buying a fleet." },
  { title: "No pilots to hire", body: "Our trained crews operate everything." },
  { title: "Right drone for the job", body: "We match the platform to your payload, altitude and route." },
  { title: "Safer work", body: "Keep people off cliffs, towers and out of confined spaces." },
  { title: "Faster delivery", body: "Minutes in the air instead of days on foot or by mule." },
  { title: "Scales with your project", body: "Pay only for the days, tonnes or scope you need." },
];

const LDAAS_USES = [
  "Materials and tools to remote construction and tower sites",
  "Rations, medicine and spares to isolated posts",
  "Equipment moves across valleys and rivers",
  "Emergency supply when roads are cut",
];

const COMMERCIAL_MODELS = ["Per metric ton", "Per day", "Turnkey for a project"];

const LDAAS_STEPS = [
  "Tell us the job: route, load, timeline.",
  "We plan and deploy: right drone, crew and batteries on site.",
  "We fly it: you get the delivery, we handle the rest.",
];

const INDUSTRIES = [
  { title: "Power", body: "Transmission towers, substations, line inspection and stringing." },
  { title: "Energy", body: "Pipelines, refineries, wind farms, solar fields and methane monitoring." },
  { title: "Defence", body: "High-altitude resupply, border surveillance, forward area logistics." },
  { title: "Construction", body: "Remote site delivery, progress surveys, tower erection and confined space inspection." },
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

const CONTACT_LINK =
  "text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white";

/**
 * /what-we-provide/services — the hire-the-capability page.
 *
 * Server component: the FAQ list is native <details>, so no client JS is
 * needed anywhere on the page.
 */
export default function ServicesPage() {
  return (
    <main className={MAIN}>
      {/* ---- 1. Hero banner: photo, text and buttons over it ---------------- */}
      <section className="relative isolate overflow-hidden bg-[color:var(--ink)] text-white">
        <Photo
          src="/media/power.jpg"
          alt="Drone stringing a pilot line between power towers"
          sizes="100vw"
          priority
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.15)_100%)]"
        />
        <div className={`${INNER} relative`}>
          <div
            className={`${CONTENT_MAX} flex min-h-[clamp(460px,66vh,700px)] flex-col items-start justify-center py-[calc(var(--section-pad)*0.6)]`}
          >
            <h1 className={H1}>Pay for the haul, not the hardware</h1>
            <p className={`${LEAD} max-w-[48ch] text-white/85`}>
              We bring the drones, pilots, batteries and support to your site.
              You get the result, without owning or operating anything.
            </p>
            <div className="mt-[clamp(20px,2.6vw,36px)] flex flex-wrap gap-3">
              <PillLink href="/contact" variant="white">
                Get a Quote
              </PillLink>
              <PillLink href="/contact" variant="outlineWhite">
                Talk to Our Team
              </PillLink>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 2. On demand + why choose DAAS --------------------------------- */}
      <Split
        photo={{
          src: "/media/defence.jpg",
          alt: "Heavy-lift drone delivering supplies at altitude",
        }}
      >
        <h2 className={H2}>Drone capability on demand</h2>
        <p className={`${BODY} mt-[clamp(12px,1.4vw,18px)] max-w-[60ch]`}>
          Owning drones means buying aircraft, hiring and training pilots,
          managing batteries, maintenance and permissions. With Drone as a
          Service, Himalayan Haulers carries all of that. Our crews deploy to
          your project, fly the job, and move on when it is done.
        </p>
        <Sub>Why choose DAAS</Sub>
        <Rows items={BENEFITS} />
      </Split>

      {/* ---- 3. LDaaS ------------------------------------------------------- */}
      <Split
        id="ldaas"
        className="border-t border-[color:var(--ink)]/15"
        photo={{
          src: "/media/Logistics.jpeg",
          alt: "Heavy-lift drone carrying a payload to a remote site",
          position: "center top",
        }}
      >
        <p className={`${LABEL} text-[color:var(--ink)]/50`}>Service 01</p>
        <h2 className={`${H2} mt-[0.3em]`}>Logistics Drone as a Service (LDaaS)</h2>
        <Sub>Last-mile delivery where there is no road</Sub>
        <p className={`${BODY} mt-[0.6em] max-w-[60ch]`}>
          LDaaS is built for EPC and other companies that need to move materials
          from an accessible road head to a remote location with no road access.
          We provide the drones, crew and logistics planning. You provide the
          load and the destination.
        </p>

        <Sub>Typical uses</Sub>
        <Bullets>
          {LDAAS_USES.map((use) => (
            <Bullet key={use}>{use}</Bullet>
          ))}
        </Bullets>

        <Sub>Commercial models (pick the one that fits)</Sub>
        <ul className="m-0 mt-[clamp(10px,1.2vw,16px)] flex list-none flex-wrap gap-2 p-0">
          {COMMERCIAL_MODELS.map((model) => (
            <li
              key={model}
              className="border border-[color:var(--ink)]/30 px-[0.9em] py-[0.4em] text-[length:var(--fs-small)] font-semibold"
            >
              {model}
            </li>
          ))}
        </ul>

        <p className={`${BODY} mt-[clamp(12px,1.4vw,18px)]`}>
          <strong className="text-[color:var(--ink)]">Drone options:</strong> HH Freightor
          C100, C200 and C300 (see the LDaaS deck).
        </p>
        <p className={NOTE}>
          <em>
            [CONFIRM] LDaaS deck calls these C-series; product decks call them
            D-series. Please confirm which name to use on the site.
          </em>
        </p>

        <Sub>How it works</Sub>
        <ol className="m-0 mt-[clamp(10px,1.2vw,16px)] flex list-none flex-col gap-[0.7em] p-0">
          {LDAAS_STEPS.map((step, index) => (
            <li key={step} className="flex items-start gap-[0.8em]">
              <span
                aria-hidden="true"
                className="grid size-6 shrink-0 place-items-center rounded-full border border-[color:var(--ink)]/30 text-[length:var(--fs-small)] font-semibold"
              >
                {index + 1}
              </span>
              <span className={BODY}>{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-[clamp(18px,2.2vw,28px)]">
          <PillLink href="/contact">Get an LDaaS Quote</PillLink>
        </div>
      </Split>

      {/* ---- 4. Drone inspections ------------------------------------------- */}
      <Split
        id="inspections"
        className="border-t border-[color:var(--ink)]/15"
        photo={{
          src: "/media/Inspection.jpeg",
          alt: "Drone inspecting an industrial structure",
        }}
      >
        <p className={`${LABEL} text-[color:var(--ink)]/50`}>Service 02</p>
        <h2 className={`${H2} mt-[0.3em]`}>Drone Inspections</h2>
        <Sub>Inspect without sending people in or up</Sub>
        <p className={`${BODY} mt-[0.6em] max-w-[60ch]`}>
          Drones reach places that are dangerous, expensive or slow to inspect
          by hand, and send data straight to your engineers.
        </p>
        <Bullets>
          <Bullet>
            <strong className="text-[color:var(--ink)]">Confined space inspection:</strong>{" "}
            collision-tolerant drones fly inside tanks, boilers and ducts, so
            nobody has to enter.
          </Bullet>
          <Bullet>
            <strong className="text-[color:var(--ink)]">External visual and thermal inspection:</strong>{" "}
            stacks, flare tips, pipelines, tanks and structures, from the air.
          </Bullet>
          <Bullet>
            <strong className="text-[color:var(--ink)]">Ultrasonic thickness and coating measurement:</strong>{" "}
            contact-based drone measurements (UT, EMAT, high-temperature UT,
            DFT) on structures at height.
          </Bullet>
        </Bullets>
        <p className={`${BODY} mt-[clamp(12px,1.4vw,18px)]`}>
          <strong className="text-[color:var(--ink)]">Good for:</strong> refineries, pipelines,
          power plants, industrial facilities.
        </p>
        <div className="mt-[clamp(18px,2.2vw,28px)]">
          <PillLink href="/contact">Request an Inspection</PillLink>
        </div>
      </Split>

      {/* ---- 5. Industrial sensor surveys ----------------------------------- */}
      <Split
        id="surveys"
        className="border-t border-[color:var(--ink)]/15"
        photo={{
          src: "/media/energy.jpg",
          alt: "Drone inspecting a refinery stack",
        }}
      >
        <p className={`${LABEL} text-[color:var(--ink)]/50`}>Service 03</p>
        <h2 className={`${H2} mt-[0.3em]`}>Industrial Sensor Surveys</h2>
        <Sub>Data from the air, ready to act on</Sub>
        <Bullets>
          <Bullet>
            <strong className="text-[color:var(--ink)]">Bathymetry:</strong> water depth and
            bed profile for dams, reservoirs and rivers.
          </Bullet>
          <Bullet>
            <strong className="text-[color:var(--ink)]">Ground-penetrating radar (GPR):</strong>{" "}
            detect utilities and subsurface features before you dig or build.
          </Bullet>
          <Bullet>
            <strong className="text-[color:var(--ink)]">Methane detection:</strong> screen
            pipelines, gas facilities and landfills for leaks.
          </Bullet>
        </Bullets>
        <div className="mt-[clamp(18px,2.2vw,28px)]">
          <PillLink href="/contact">Request a Survey</PillLink>
        </div>
      </Split>

      {/* ---- 6. Tower stringing --------------------------------------------- */}
      <Split
        id="stringing"
        className="border-t border-[color:var(--ink)]/15"
        photo={{
          src: "/media/Tower-stringing.jpeg",
          alt: "Drone laying a pilot line across a transmission tower",
        }}
      >
        <p className={`${LABEL} text-[color:var(--ink)]/50`}>Service 04</p>
        <h2 className={`${H2} mt-[0.3em]`}>Drone-Based Tower Stringing</h2>
        <Sub>Pilot lines across towers, without the climb</Sub>
        <p className={`${BODY} mt-[0.6em] max-w-[60ch]`}>
          Stringing the first line across towers is slow and risky over
          mountains, forests and rivers. We fly the pilot line across by drone,
          which your team then uses to pull heavier lines.
        </p>
        <Bullets>
          <Bullet>
            <strong className="text-[color:var(--ink)]">We provide:</strong> drone, batteries
            and crew.
          </Bullet>
          <Bullet>
            <strong className="text-[color:var(--ink)]">You provide:</strong> lines, winches
            and installation team.
          </Bullet>
        </Bullets>
        <p className={`${BODY} mt-[clamp(12px,1.4vw,18px)]`}>
          <strong className="text-[color:var(--ink)]">Benefits:</strong> faster crossings,
          fewer climbs and ground crossings, safer crews, less disturbance to
          terrain and crops.
        </p>
        <div className="mt-[clamp(18px,2.2vw,28px)]">
          <PillLink href="/contact">Plan a Stringing Project</PillLink>
        </div>
      </Split>

      {/* ---- 7. Who we serve ------------------------------------------------ */}
      <Split
        className="border-t border-[color:var(--ink)]/15"
        photo={{
          src: "/media/construction.jpg",
          alt: "Drone surveying a construction site",
        }}
      >
        <h2 className={H2}>Who we serve</h2>
        <p className={LEAD}>
          Power, Energy, Defence and Construction. Each industry applies these
          services differently.
        </p>
        <Rows items={INDUSTRIES} />
      </Split>

      {/* ---- 8. FAQs: heading left, questions right ------------------------- */}
      <Band className="border-t border-[color:var(--ink)]/15">
        <div className="grid gap-[clamp(16px,3vw,48px)] min-[860px]:grid-cols-2">
          <h2 className={H2}>FAQs</h2>
          <div>
            {FAQS.map((faq) => (
              <details key={faq.q} className="group border-b border-[color:var(--ink)]/25 first:border-t">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[clamp(12px,1.4vw,18px)] text-[length:var(--fs-small)] font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <Plus
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="shrink-0 transition-transform group-open:rotate-45"
                  />
                </summary>
                <p className={`${BODY} pb-[clamp(12px,1.4vw,18px)]`}>
                  {faq.a}
                  {faq.confirm ? (
                    <>
                      {" "}
                      <em className="opacity-60">{faq.confirm}</em>
                    </>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Band>

      {/* ---- 9. Closing banner: photo background, text and button over it --- */}
      <section className="relative isolate overflow-hidden bg-[color:var(--ink)] text-white">
        <Photo
          src="/media/defence.jpg"
          alt="Heavy-lift drone delivering supplies at altitude"
          sizes="100vw"
        />
        <span aria-hidden="true" className="absolute inset-0 bg-black/60" />
        <div className={`${INNER} relative`}>
          <div
            className={`${CONTENT_MAX} flex min-h-[clamp(280px,32vw,400px)] flex-col items-center justify-center py-[calc(var(--section-pad)*0.5)] text-center`}
          >
            <h2 className={H2}>Let&rsquo;s move something impossible</h2>
            <p className={`${LEAD} mx-auto text-white/85`}>
              Tell us what you need to carry, and where. We will bring the
              drone.
            </p>
            <div className="mt-[clamp(20px,2.6vw,36px)]">
              <PillLink href="/contact" variant="white">
                Let&rsquo;s Connect
              </PillLink>
            </div>
            <p className="m-0 mt-[clamp(18px,2.2vw,28px)] text-[length:var(--fs-small)] leading-[1.6] text-white/75">
              Contact: Arjun Naik &middot;{" "}
              <a href="tel:+917899801210" className={CONTACT_LINK}>
                +91 78998 01210
              </a>{" "}
              &middot;{" "}
              <a href="mailto:arjun@himalayanhaulers.com" className={CONTACT_LINK}>
                arjun@himalayanhaulers.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
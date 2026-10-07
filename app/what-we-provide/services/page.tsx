import Link from "next/link";
import Button from "@/components/ui/Button";

/* ==========================================================================
   SERVICES PAGE — Drone as a Service
   ========================================================================== */

const SECTION =
  "bg-white text-ink animate-hh-fade [--fs-h2:calc(var(--fs-h2)*1.6)] [--fs-lead:calc(var(--fs-lead)*1.45)] [--fs-h3:calc(var(--fs-h3)*1.35)] [--fs-body:calc(var(--fs-body)*1.18)] [--fs-small:calc(var(--fs-small)*1.2)] py-[length:var(--section-pad)]";

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

const HEADER =
  "max-w-[min(62ch,var(--content-max,1200px))] mb-[clamp(32px,4.5vw,64px)]";

const TITLE = "text-[length:var(--fs-h1)] uppercase";

const ACCENT = "text-cyan";

const SUBLINE =
  "mt-[clamp(12px,1.6vw,20px)] text-[length:var(--fs-lead)] leading-[1.45] text-ink/72 text-pretty";

const EYEBROW =
  "mb-[clamp(8px,1vw,12px)] text-[length:var(--fs-small)] font-bold tracking-[0.1em] uppercase text-cyan";

const CONTENT_MAX = "max-w-[length:var(--content-max,1200px)]";

const CARD =
  "flex flex-col p-[clamp(24px,2.8vw,40px)] rounded-lg border shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.06)] transition-[border-color,box-shadow,transform] duration-300";

const CARD_LIGHT = "bg-white text-ink border-blue/10";

const CARD_HOVER =
  "hover:border-cyan/50 hover:shadow-[0_4px_8px_rgba(10,25,45,0.05),0_20px_44px_rgba(10,25,45,0.1)] motion-safe:hover:-translate-y-0.5";

const CARD_TITLE = "text-[length:var(--fs-h3)] text-ink";

const CARD_BODY =
  "mt-[clamp(12px,1.4vw,18px)] text-[length:var(--fs-body)] leading-[1.45] text-pretty text-ink/75";

const LIST = "mt-auto mb-0 mx-0 px-0 pb-0 pt-[clamp(18px,2.2vw,26px)] list-none";

const LIST_ITEM =
  "text-[length:var(--fs-body)] leading-[1.4] not-first:mt-[0.6em] text-ink/85";

const GRID_TWO =
  "grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[length:var(--card-gap)] max-[860px]:grid-cols-[minmax(0,1fr)]";

const GRID_FOUR =
  "grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[length:var(--card-gap)] max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1";

const CTA_SECTION =
  "bg-blue text-white rounded-lg p-[clamp(32px,4vw,56px)] text-center";

const CTA_TITLE = "text-[length:var(--fs-h2)] uppercase";

const CTA_TEXT =
  "mt-[clamp(12px,1.6vw,20px)] text-[length:var(--fs-lead)] leading-[1.45] text-white/85 text-pretty max-w-[60ch] mx-auto";

const SERVICE_CARD = `${CARD} ${CARD_LIGHT} ${CARD_HOVER}`;

export default function ServicesPage() {
  return (
    <main className={SECTION}>
      {/* Hero */}
      <div className={INNER}>
        <header className={HEADER}>
          <p className={EYEBROW}>DRONE AS A SERVICE</p>
          <h1 className={TITLE}>
            Pay for the Haul, <span className={ACCENT}>Not the Hardware</span>
          </h1>
          <p className={SUBLINE}>
            We bring the drones, pilots, batteries and support to your site. You get the result, without owning or operating anything.
          </p>
        </header>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row">
            <Button tone="onDark" size="lg">Get a Quote</Button>
            <Button tone="onLight" size="lg">Talk to Our Team</Button>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <h2 className="text-[length:var(--fs-h2)] uppercase mb-[clamp(16px,2vw,24px)]">
            Drone Capability on Demand
          </h2>
          <p className={CARD_BODY}>
            Owning drones means buying aircraft, hiring and training pilots, managing batteries, maintenance and permissions. With Drone as a Service, Himalayan Haulers carries all of that. Our crews deploy to your project, fly the job, and move on when it is done.
          </p>
        </div>
      </div>

      {/* Why Choose DAAS */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <h2 className="text-[length:var(--fs-h2)] uppercase mb-[clamp(16px,2vw,24px)]">
            Why Choose DAAS
          </h2>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>No capital cost: use heavy-lift drones without buying a fleet.</span>
            </li>
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>No pilots to hire: our trained crews operate everything.</span>
            </li>
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>Right drone for the job: we match the platform to your payload, altitude and route.</span>
            </li>
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>Safer work: keep people off cliffs, towers and out of confined spaces.</span>
            </li>
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>Faster delivery: minutes in the air instead of days on foot or by mule.</span>
            </li>
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>Scales with your project: pay only for the days, tonnes or scope you need.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Service 1: LDaaS */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <div className={SERVICE_CARD}>
            <h2 className={CARD_TITLE}>Logistics Drone as a Service (LDaaS)</h2>
            <p className={CARD_BODY}><strong>Last-Mile Delivery Where There Is No Road</strong></p>
            <p className={CARD_BODY}>
              LDaaS is built for EPC and other companies that need to move materials from an accessible road head to a remote location with no road access. We provide the drones, crew and logistics planning. You provide the load and the destination.
            </p>

            <h3 className="mt-[clamp(16px,2vw,24px)] text-[length:var(--fs-h3)] text-ink">Typical uses:</h3>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                <span className="mt-1 shrink-0 text-cyan">•</span>
                <span>Materials and tools to remote construction and tower sites</span>
              </li>
              <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                <span className="mt-1 shrink-0 text-cyan">•</span>
                <span>Rations, medicine and spares to isolated posts</span>
              </li>
              <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                <span className="mt-1 shrink-0 text-cyan">•</span>
                <span>Equipment moves across valleys and rivers</span>
              </li>
              <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                <span className="mt-1 shrink-0 text-cyan">•</span>
                <span>Emergency supply when roads are cut</span>
              </li>
            </ul>

            <h3 className="mt-[clamp(16px,2vw,24px)] text-[length:var(--fs-h3)] text-ink">Commercial models (pick the one that fits):</h3>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                <span className="mt-1 shrink-0 text-cyan">•</span>
                <span>Per metric ton</span>
              </li>
              <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                <span className="mt-1 shrink-0 text-cyan">•</span>
                <span>Per day</span>
              </li>
              <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                <span className="mt-1 shrink-0 text-cyan">•</span>
                <span>Turnkey for a project</span>
              </li>
            </ul>

            <p className={CARD_BODY}>
              <strong>Drone options:</strong> HH Freightor C100, C200 and C300 (see the LDaaS deck).
              <em className="text-ink/60"> [CONFIRM] LDaaS deck calls these C-series; product decks call them D-series. Please confirm which name to use on the site.</em>
            </p>

            <h3 className="mt-[clamp(16px,2vw,24px)] text-[length:var(--fs-h3)] text-ink">How it works:</h3>
            <ol className="flex flex-col gap-2 mt-2 list-decimal list-inside text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <li>Tell us the job: route, load, timeline.</li>
              <li>We plan and deploy: right drone, crew and batteries on site.</li>
              <li>We fly it: you get the delivery, we handle the rest.</li>
            </ol>

            <div className="flex flex-col gap-3 md:flex-row mt-[clamp(24px,3vw,40px)]">
              <Button tone="onDark" size="lg">Get an LDaaS Quote</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2: Drone Inspections */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <div className={SERVICE_CARD}>
            <h2 className={CARD_TITLE}>Drone Inspections</h2>
            <p className={CARD_BODY}><strong>Inspect Without Sending People In or Up</strong></p>
            <p className={CARD_BODY}>
              Drones reach places that are dangerous, expensive or slow to inspect by hand, and send data straight to your engineers.
            </p>

            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                <span className="mt-1 shrink-0 text-cyan">•</span>
                <span><strong>Confined space inspection:</strong> collision-tolerant drones fly inside tanks, boilers and ducts, so nobody has to enter.</span>
              </li>
              <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                <span className="mt-1 shrink-0 text-cyan">•</span>
                <span><strong>External visual and thermal inspection:</strong> stacks, flare tips, pipelines, tanks and structures, from the air.</span>
              </li>
              <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                <span className="mt-1 shrink-0 text-cyan">•</span>
                <span><strong>Ultrasonic thickness and coating measurement:</strong> contact-based drone measurements (UT, EMAT, high-temperature UT, DFT) on structures at height.</span>
              </li>
            </ul>

            <p className={CARD_BODY}>
              <strong>Good for:</strong> refineries, pipelines, power plants, industrial facilities.
            </p>

            <div className="flex flex-col gap-3 md:flex-row mt-[clamp(24px,3vw,40px)]">
              <Button tone="onDark" size="lg">Request an Inspection</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 & 4: Industrial Sensor Surveys & Tower Stringing */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <div className={GRID_TWO}>
            <article className={SERVICE_CARD}>
              <h2 className={CARD_TITLE}>Industrial Sensor Surveys</h2>
              <p className={CARD_BODY}><strong>Data from the Air, Ready to Act On</strong></p>
              <ul className="flex flex-col gap-2 mt-2">
                <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                  <span className="mt-1 shrink-0 text-cyan">•</span>
                  <span><strong>Bathymetry:</strong> water depth and bed profile for dams, reservoirs and rivers.</span>
                </li>
                <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                  <span className="mt-1 shrink-0 text-cyan">•</span>
                  <span><strong>Ground-penetrating radar (GPR):</strong> detect utilities and subsurface features before you dig or build.</span>
                </li>
                <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                  <span className="mt-1 shrink-0 text-cyan">•</span>
                  <span><strong>Methane detection:</strong> screen pipelines, gas facilities and landfills for leaks.</span>
                </li>
              </ul>
              <div className="flex flex-col gap-3 md:flex-row mt-[clamp(24px,3vw,40px)]">
                <Button tone="onDark" size="lg">Request a Survey</Button>
              </div>
            </article>

            <article className={SERVICE_CARD}>
              <h2 className={CARD_TITLE}>Drone-Based Tower Stringing</h2>
              <p className={CARD_BODY}><strong>Pilot Lines Across Towers, Without the Climb</strong></p>
              <p className={CARD_BODY}>
                Stringing the first line across towers is slow and risky over mountains, forests and rivers. We fly the pilot line across by drone, which your team then uses to pull heavier lines.
              </p>

              <h3 className="mt-[clamp(16px,2vw,24px)] text-[length:var(--fs-h3)] text-ink">What we provide:</h3>
              <ul className="flex flex-col gap-2 mt-2">
                <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                  <span className="mt-1 shrink-0 text-cyan">•</span>
                  <span>Drone, batteries and crew</span>
                </li>
              </ul>

              <h3 className="mt-[clamp(16px,2vw,24px)] text-[length:var(--fs-h3)] text-ink">What you provide:</h3>
              <ul className="flex flex-col gap-2 mt-2">
                <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                  <span className="mt-1 shrink-0 text-cyan">•</span>
                  <span>Lines, winches and installation team</span>
                </li>
              </ul>

              <h3 className="mt-[clamp(16px,2vw,24px)] text-[length:var(--fs-h3)] text-ink">Benefits:</h3>
              <p className={CARD_BODY}>
                Faster crossings, fewer climbs and ground crossings, safer crews, less disturbance to terrain and crops.
              </p>

              <div className="flex flex-col gap-3 md:flex-row mt-[clamp(24px,3vw,40px)]">
                <Button tone="onDark" size="lg">Plan a Stringing Project</Button>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Who We Serve */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <h2 className="text-[length:var(--fs-h2)] uppercase mb-[clamp(16px,2vw,24px)]">
            Who We Serve
          </h2>
          <div className={GRID_FOUR}>
            <article className={`${CARD} ${CARD_LIGHT} ${CARD_HOVER} text-center`}>
              <h3 className={CARD_TITLE}>Power</h3>
              <p className={CARD_BODY}>Transmission towers, substations, line inspection and stringing.</p>
            </article>
            <article className={`${CARD} ${CARD_LIGHT} ${CARD_HOVER} text-center`}>
              <h3 className={CARD_TITLE}>Energy</h3>
              <p className={CARD_BODY}>Pipelines, refineries, wind farms, solar fields and methane monitoring.</p>
            </article>
            <article className={`${CARD} ${CARD_LIGHT} ${CARD_HOVER} text-center`}>
              <h3 className={CARD_TITLE}>Defence</h3>
              <p className={CARD_BODY}>High-altitude resupply, border surveillance, forward area logistics.</p>
            </article>
            <article className={`${CARD} ${CARD_LIGHT} ${CARD_HOVER} text-center`}>
              <h3 className={CARD_TITLE}>Construction</h3>
              <p className={CARD_BODY}>Remote site delivery, progress surveys, tower erection and confined space inspection.</p>
            </article>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <h2 className="text-[length:var(--fs-h2)] uppercase mb-[clamp(16px,2vw,24px)]">
            FAQs
          </h2>
          <dl className="flex flex-col gap-[clamp(16px,2vw,24px)]">
            <div>
              <dt className="text-[length:var(--fs-h3)] text-ink">Do I need any drone licence or permission?</dt>
              <dd className="mt-2 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                Our crews handle operations and work with you on the permissions your site needs.
                <em className="text-ink/60"> [CONFIRM] Please add your standard compliance wording.</em>
              </dd>
            </div>
            <div>
              <dt className="text-[length:var(--fs-h3)] text-ink">How soon can you deploy?</dt>
              <dd className="mt-2 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                Tell us the location and scope and we will give a mobilisation timeline with the quote.
                <em className="text-ink/60"> [CONFIRM]</em>
              </dd>
            </div>
            <div>
              <dt className="text-[length:var(--fs-h3)] text-ink">Can I buy the drone later?</dt>
              <dd className="mt-2 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                Yes. Many customers start with DAAS and move to owning once they have proven the use case.
              </dd>
            </div>
            <div>
              <dt className="text-[length:var(--fs-h3)] text-ink">What areas do you cover?</dt>
              <dd className="mt-2 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
                We operate across India, including high-altitude and remote regions.
                <em className="text-ink/60"> [CONFIRM]</em>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Closing CTA */}
      <div className={INNER}>
        <div className={CTA_SECTION}>
          <h2 className={CTA_TITLE}>Let&rsquo;s Move Something Impossible</h2>
          <p className={CTA_TEXT}>
            Tell us what you need to carry, and where. We will bring the drone.
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center mt-[clamp(24px,3vw,40px)]">
            <Button tone="onLight" size="lg" className="bg-white text-blue hover:bg-cyan/10">Let&rsquo;s Connect</Button>
          </div>
          <div className="mt-[clamp(24px,3vw,40px)] text-[length:var(--fs-body)] leading-[1.45] text-white/85">
            <p>Contact: Arjun Naik · +91 78998 01210 · arjun@himalayanhaulers.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}
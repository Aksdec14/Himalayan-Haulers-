import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

/* ==========================================================================
   PRODUCTS PAGE — Heavy-Lift Drone Products
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

const TABLE_WRAPPER =
  "w-full overflow-x-auto rounded-lg border border-blue/10";

const TABLE =
  "w-full border-collapse text-left text-[length:var(--fs-body)]";

const TH =
  "px-[clamp(12px,1.5vw,20px)] py-[clamp(10px,1.2vw,14px)] bg-blue/5 font-bold text-ink border-b border-blue/10";

const TD =
  "px-[clamp(12px,1.5vw,20px)] py-[clamp(10px,1.2vw,14px)] border-b border-blue/10";

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

const CTA_SECTION =
  "bg-blue text-white rounded-lg p-[clamp(32px,4vw,56px)] text-center";

const CTA_TITLE = "text-[length:var(--fs-h2)] uppercase";

const CTA_TEXT =
  "mt-[clamp(12px,1.6vw,20px)] text-[length:var(--fs-lead)] leading-[1.45] text-white/85 text-pretty max-w-[60ch] mx-auto";

export default function ProductsPage() {
  return (
    <main className={SECTION}>
      {/* Hero */}
      <div className={INNER}>
        <header className={HEADER}>
          <p className={EYEBROW}>DRONE PRODUCTS</p>
          <h1 className={TITLE}>
            Heavy-Lift Drones for the Terrain <span className={ACCENT}>Others Avoid</span>
          </h1>
          <p className={SUBLINE}>
            Logistics, surveillance and custom drones, designed and built in India for high altitude, steep terrain and real payloads.
          </p>
        </header>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row">
            <Button variant="primary" size="lg">Request a Quote</Button>
            <Button variant="outline" size="lg">Download Brochure</Button>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <h2 className="text-[length:var(--fs-h2)] uppercase">Built in India, for Indian Conditions</h2>
          <p className={CARD_BODY}>
            Most drones are made for flat ground and thin air at sea level. Ours are made for mountain posts, remote construction sites and power lines across valleys. Himalayan Haulers is headquartered in Bangalore, our drones are manufactured in Tirupati, and our core team brings more than 100 man-years of experience in designing, building and flying drones.
          </p>
          <p className={CARD_BODY}>
            Every platform is fully autonomous, with obstacle avoidance and failsafes built in, so one operator can move heavy loads where roads, mules and helicopters are impractical.
          </p>
        </div>
      </div>

      {/* Product 1: Freightor D-Series */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <h2 className="text-[length:var(--fs-h2)] uppercase mb-[clamp(8px,1vw,12px)]">
            HH Freightor D-Series Logistics Drones
          </h2>
          <p className="text-[length:var(--fs-lead)] leading-[1.45] text-ink/75 mb-[clamp(24px,3vw,40px)]">
            Four heavy-lift drones. One platform philosophy. Pick the payload you need.
          </p>

          {/* Specs Table */}
          <div className={TABLE_WRAPPER}>
            <table className={TABLE} role="table">
              <thead>
                <tr>
                  <th className={TH}>Specification</th>
                  <th className={TH}>D20</th>
                  <th className={TH}>D100</th>
                  <th className={TH}>D200</th>
                  <th className={TH}>D300</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}><strong>Payload at sea level</strong></td>
                  <td className={TD}>20 kg</td>
                  <td className={TD}>100 kg</td>
                  <td className={TD}>175 kg</td>
                  <td className={TD}>300 kg</td>
                </tr>
                <tr>
                  <td className={TD}><strong>Payload at 10,000 ft</strong></td>
                  <td className={TD}>20 kg</td>
                  <td className={TD}>60 kg</td>
                  <td className={TD}>90 kg</td>
                  <td className={TD}>150 kg</td>
                </tr>
                <tr>
                  <td className={TD}><strong>Payload at 15,000–17,000 ft</strong></td>
                  <td className={TD}>15 kg</td>
                  <td className={TD}>30 kg</td>
                  <td className={TD}>50 kg</td>
                  <td className={TD}>n/a</td>
                </tr>
                <tr>
                  <td className={TD}><strong>Max altitude (AMSL)</strong></td>
                  <td className={TD}>6,000 m</td>
                  <td className={TD}>5,500 m</td>
                  <td className={TD}>5,500 m</td>
                  <td className={TD}>5,000 m</td>
                </tr>
                <tr>
                  <td className={TD}><strong>Range (one way)</strong></td>
                  <td className={TD}>20 km</td>
                  <td className={TD}>15 km</td>
                  <td className={TD}>15 km</td>
                  <td className={TD}>10 km</td>
                </tr>
                <tr>
                  <td className={TD}><strong>Cruise speed</strong></td>
                  <td className={TD}>12 m/s</td>
                  <td className={TD}>12 m/s</td>
                  <td className={TD}>12 m/s</td>
                  <td className={TD}>10 m/s</td>
                </tr>
                <tr>
                  <td className={TD}><strong>Max take-off weight</strong></td>
                  <td className={TD}>60 kg</td>
                  <td className={TD}>195 kg</td>
                  <td className={TD}>328 kg</td>
                  <td className={TD}>535 kg</td>
                </tr>
                <tr>
                  <td className={TD}><strong>Size (without propellers)</strong></td>
                  <td className={TD}>2174 × 2174 mm</td>
                  <td className={TD}>2510 × 2510 mm</td>
                  <td className={TD}>3000 × 3000 mm</td>
                  <td className={TD}>4200 × 4200 mm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[length:var(--fs-small)] text-ink/60">
            <em>[CONFIRM] Specs follow the Freightor Series deck. Defence deck shows some differing figures for D20, D100, D200 and D300 ceiling.</em>
          </p>
        </div>
      </div>

      {/* Individual model cards */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <div className={GRID_TWO}>
            <article className={`${CARD} ${CARD_LIGHT} ${CARD_HOVER}`}>
              <h3 className={CARD_TITLE}>HH Freightor D20</h3>
              <p className={CARD_BODY}><strong>Best for:</strong> light, fast, high-altitude resupply.</p>
              <p className={CARD_BODY}>
                The lightest in the range and the one that flies highest, up to 6,000 m. It keeps its full 20 kg payload at 10,000 ft, which makes it the pick for medicine, rations, spares and small equipment to remote posts and sites.
              </p>
            </article>

            <article className={`${CARD} ${CARD_LIGHT} ${CARD_HOVER}`}>
              <h3 className={CARD_TITLE}>HH Freightor D100</h3>
              <p className={CARD_BODY}><strong>Best for:</strong> mid-weight site logistics.</p>
              <p className={CARD_BODY}>
                Carries 100 kg at sea level and 60 kg at 10,000 ft. A good fit for construction materials, tools, batteries and survey equipment over 15 km.
              </p>
            </article>

            <article className={`${CARD} ${CARD_LIGHT} ${CARD_HOVER}`}>
              <h3 className={CARD_TITLE}>HH Freightor D200</h3>
              <p className={CARD_BODY}><strong>Best for:</strong> heavy cargo in tough terrain.</p>
              <p className={CARD_BODY}>
                Carries 175 kg at sea level and still lifts 90 kg at 10,000 ft. Suited to tower components, cement, pipes and heavy supply drops where there is no road head.
              </p>
            </article>

            <article className={`${CARD} ${CARD_LIGHT} ${CARD_HOVER}`}>
              <h3 className={CARD_TITLE}>HH Freightor D300</h3>
              <p className={CARD_BODY}><strong>Best for:</strong> maximum payload.</p>
              <p className={CARD_BODY}>
                Our largest platform, lifting 300 kg at sea level and 150 kg at 10,000 ft. Built for the heaviest single loads on shorter routes, such as tower erection and bulk site supply.
              </p>
            </article>
          </div>
        </div>
      </div>

      {/* Built-in Capabilities */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <h2 className="text-[length:var(--fs-h2)] uppercase mb-[clamp(16px,2vw,24px)]">
            Built-in Capabilities (all Freightor models)
          </h2>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>Fully autonomous flight: plan the route, launch, and the drone flies it.</span>
            </li>
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>Obstacle avoidance: safe operation around ridgelines, towers, wires and trees.</span>
            </li>
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>Built-in failsafes: protection against link loss, low battery and system faults.</span>
            </li>
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>Flexible load carrying: cargo box, under-slung load or winch.</span>
            </li>
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>Load drop without landing: deliver to steep slopes, narrow ridges and border posts.</span>
            </li>
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>BLDC propulsion: efficient, reliable electric motors.</span>
            </li>
            <li className="flex items-start gap-3 text-[length:var(--fs-body)] leading-[1.45] text-ink/75">
              <span className="mt-1 shrink-0 text-cyan">•</span>
              <span>Battery options: NMC cells for fast charging, or Li-Ion solid-state for longer range.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Product 2: Surveillance Drones */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <h2 className="text-[length:var(--fs-h2)] uppercase mb-[clamp(8px,1vw,12px)]">
            Surveillance Drones
          </h2>
          <p className="text-[length:var(--fs-lead)] leading-[1.45] text-ink/75 mb-[clamp(24px,3vw,40px)]">
            Eyes over difficult ground.
          </p>
          <p className={CARD_BODY}>
            Fixed-wing VTOL and multirotor drones for long-endurance observation, with ISR payload options. Take off and land anywhere, then cover large areas on one sortie.
          </p>

          <div className={TABLE_WRAPPER} style={{ marginTop: 'clamp(24px,3vw,40px)' }}>
            <table className={TABLE} role="table">
              <thead>
                <tr>
                  <th className={TH}>Specification</th>
                  <th className={TH}>HH 120VFWS</th>
                  <th className={TH}>HH 300VFWS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}><strong>Type</strong></td>
                  <td className={TD}>VTOL fixed wing</td>
                  <td className={TD}>VTOL fixed wing</td>
                </tr>
                <tr>
                  <td className={TD}><strong>Range</strong></td>
                  <td className={TD}>20–30 km</td>
                  <td className={TD}>50–100 km</td>
                </tr>
                <tr>
                  <td className={TD}><strong>Endurance</strong></td>
                  <td className={TD}>120 min+</td>
                  <td className={TD}>300 min</td>
                </tr>
                <tr>
                  <td className={TD}><strong>Payload</strong></td>
                  <td className={TD}>ISR</td>
                  <td className={TD}>ISR</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[length:var(--fs-small)] text-ink/60">
            <em>[CONFIRM] Specs taken from the Defence deck. Please confirm they can be public.</em>
          </p>
        </div>
      </div>

      {/* Product 3: Custom-Built Drones */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <h2 className="text-[length:var(--fs-h2)] uppercase mb-[clamp(8px,1vw,12px)]">
            Custom-Built Drones
          </h2>
          <p className={CARD_BODY}>
            Need something we do not list? Tell us the payload, altitude, range and mission, and our engineering team will specify and build a drone around it. We can customise propulsion, batteries, payload mounts, avionics and sensors to your requirement.
          </p>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mt-[clamp(24px,3vw,40px)]">
            <div className="flex flex-col gap-3 md:flex-row">
              <Button variant="primary" size="lg">Talk to Our Engineers</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Prefer Not to Buy */}
      <div className={INNER}>
        <div className={CONTENT_MAX}>
          <div className="bg-[#f4f7fa] rounded-lg p-[clamp(32px,4vw,56px)] text-center">
            <h2 className="text-[length:var(--fs-h2)] uppercase">Prefer Not to Buy?</h2>
            <p className="mt-[clamp(12px,1.6vw,20px)] text-[length:var(--fs-lead)] leading-[1.45] text-ink/72 text-pretty max-w-[60ch] mx-auto">
              You can hire the same drones with crews through our Drone as a Service offering.
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center mt-[clamp(24px,3vw,40px)]">
              <Button variant="primary" size="lg" asChild>
                <Link href="/what-we-provide/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className={INNER}>
        <div className={CTA_SECTION}>
          <h2 className={CTA_TITLE}>Tell Us What You Need to Carry</h2>
          <p className={CTA_TEXT}>
            Share your payload, distance and altitude, and we will recommend the right drone and send a clear quote.
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center mt-[clamp(24px,3vw,40px)]">
            <Button variant="primary" size="lg" className="bg-white text-blue hover:bg-cyan/10">Request a Quote</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Download Brochure</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
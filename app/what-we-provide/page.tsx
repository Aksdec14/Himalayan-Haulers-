import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Cctv,
  Cog,
  Crosshair,
  Fan,
  Gauge,
  HardHat,
  MountainSnow,
  Package,
  Route,
  Ruler,
  Settings,
  ShieldCheck,
  Truck,
  Weight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Heavy-Lift Logistics Drones | Himalayan Haulers",
  description:
    "Freightor heavy-lift logistics drones for remote, high-altitude terrain. 20 to 300 kg payloads for last-mile delivery and infrastructure logistics, built in India.",
};

/* ==========================================================================
   PRODUCTS - single file, no local imports (Hero and Button are inlined).

   IMAGES you need in /public (or change the paths below):
     /media/image.png                       hero drone + crate over peaks
     /media/defence-drone.png               placeholder used by every card
     /media/HIMALAYAN-HERO-poster.jpg       closing banner background

   Font sizes use the site --fs-* tokens (unchanged).
   ========================================================================== */

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(16px,5vw,64px))]";
const MAX = "mx-auto w-full max-w-[1400px]";
const SECTION = "mt-[clamp(40px,5vw,80px)] scroll-mt-[96px]";

const H2 =
  "m-0 text-balance text-[length:var(--fs-h2)] font-bold leading-[1.1] text-[color:var(--blue)]";
const BODY =
  "m-0 text-[length:var(--fs-body)] leading-[1.55] text-[color:var(--ink)]/80 text-pretty";
const EYEBROW =
  "m-0 flex items-center gap-[0.9em] text-[length:var(--fs-small)] font-bold uppercase tracking-[0.14em] text-[color:var(--cyan)]";


/* ---- Data ------------------------------------------------------------------ */

const TABS = [
  { label: "Logistics Drones", href: "#logistics", icon: Package },
  { label: "Surveillance Drones", href: "#other-platforms", icon: Cctv },
  { label: "High-Speed / Kamikaze Drones", href: "#other-platforms", icon: Crosshair },
  { label: "Custom Drones", href: "#other-platforms", icon: Settings },
];

const USE_CASES = [
  { label: "Last-mile material delivery for EPC projects", icon: Package },
  { label: "Remote infrastructure sites", icon: MountainSnow },
  { label: "Road-head to site transport", icon: Truck },
  { label: "Logistics support for EPC projects", icon: HardHat },
];

type Spec = [label: string, value: string];

type Drone = {
  model: string;
  tagline: string;
  blurb: string;
  image: string;
  specs: Spec[];
};

const POWER = "NMC Batteries (Fast Charging) /\nLi-Ion Solid State (Long Range)";

const DRONES: Drone[] = [
  {
    model: "Freightor C300",
    tagline: "HH Freightor Series",
    blurb: "High-capacity heavy-lift drone for large payload missions.",
    image: "/products/Freightor C300.jpeg",
    specs: [
      ["Dimensions W/O Propeller", "4200 mm × 4200 mm"],
      ["Max. All Up Weight", "535 kg"],
      ["Payload (Sea Level)", "300 kg"],
      ["Payload (10,000 ft)", "150 kg"],
      ["Service Ceiling", "5,000 m"],
      ["Operating Range", "10 km"],
      ["Cruise Velocity", "10 m/s"],
      ["Propulsion", "BLDC"],
      ["Power", POWER],
    ],
  },
  {
    model: "Freightor C200",
    tagline: "HH Freightor Series",
    blurb: "Versatile heavy-lift platform for infrastructure and remote logistics.",
    image: "/products/Freightor C200.jpg",
    specs: [
      ["Dimensions W/O Propeller", "3000 mm × 3000 mm"],
      ["Max. All Up Weight", "328 kg"],
      ["Payload (6,000 ft)", "150 kg"],
      ["Payload (12,000 ft)", "90 kg"],
      ["Payload (12,000–18,000 ft)", "50 kg"],
      ["Service Ceiling", "5,500 m AMSL"],
      ["Operating Range", "15 km (One Way)\n7 km + 7 km (Round Trip)"],
      ["Cruise Velocity", "12 m/s"],
      ["Propulsion", "BLDC"],
      ["Power", POWER],
    ],
  },
  {
    model: "Freightor C100",
    tagline: "HH Freightor Series",
    blurb: "Efficient platform for mid-capacity logistics operations.",
    image: "/products/Freightor C100.jpeg",
    specs: [
      ["Dimensions W/O Propeller", "2510 mm × 2510 mm"],
      ["Max. All Up Weight", "195 kg"],
      ["Payload (Sea Level)", "100 kg"],
      ["Payload (10,000 ft)", "60 kg"],
      ["Payload (15,000–17,000 ft)", "30 kg"],
      ["Service Ceiling", "5,500 m AMSL"],
      ["Operating Range", "15 km (One Way)\n10 km + 10 km (Round Trip)"],
      ["Cruise Velocity", "12 m/s"],
      ["Propulsion", "BLDC"],
      ["Power", POWER],
    ],
  },
  {
    model: "Freightor C20",
    tagline: "HH Freightor Series",
    blurb: "Compact platform for light payload missions in high-altitude terrain.",
    image: "/products/Freightor C20.jpeg",
    specs: [
      ["Dimensions W/O Propeller", "2174 mm × 2174 mm"],
      ["Max. All Up Weight", "60 kg"],
      ["Payload (Sea Level)", "20 kg"],
      ["Payload (10,000 ft)", "20 kg"],
      ["Payload (15,000–17,000 ft)", "15 kg"],
      ["Payload (17,000–19,000 ft)", "10 kg"],
      ["Service Ceiling", "5,500 m AMSL"],
      ["Operating Range", "15 km (One Way)\n10 km + 10 km (Round Trip)"],
      ["Cruise Velocity", "12 m/s"],
      ["Propulsion", "BLDC"],
      ["Power", POWER],
    ],
  },
];

const OTHERS = [
  {
    title: "Surveillance Drones",
    body: "Aerial platforms for monitoring and situational awareness across operational environments.",
    icon: Cctv,
    image: "/media/Surveillance-drone.jpeg",
  },
  {
    title: "High-Speed / Kamikaze Drones",
    body: "Specialised high-speed platforms for mission-specific applications.",
    icon: Crosshair,
    image: "/media/defence-drone.png",
  },
  {
    title: "Custom Drones",
    body: "Application-specific drone development for specialised requirements.",
    icon: Settings,
    image: "/media/Collage.png",
  },
];

const WHY = [
  { label: "Designed for Challenging Terrain", icon: MountainSnow },
  { label: "Multiple Payload Classes", icon: Cog },
  { label: "Mission-Specific Configurations", icon: Crosshair },
  { label: "Engineering & Operational Expertise", icon: ShieldCheck },
];

function specIcon(label: string) {
  if (label.startsWith("Dimensions")) return Ruler;
  if (label.startsWith("Max")) return Weight;
  if (label.startsWith("Payload")) return Package;
  if (label.startsWith("Service")) return MountainSnow;
  if (label.startsWith("Operating")) return Route;
  if (label.startsWith("Cruise")) return Gauge;
  if (label.startsWith("Propulsion")) return Fan;
  return BatteryCharging;
}

/* ---- Small building blocks ------------------------------------------------- */

function Btn({
  href,
  tone,
  children,
}: {
  href: string;
  tone: "solid" | "outline" | "white";
  children: ReactNode;
}) {
  const tones = {
    solid:
      "bg-[color:var(--blue)] text-white border border-[color:var(--blue)] hover:bg-[color:var(--cyan)] hover:border-[color:var(--cyan)] hover:text-[color:var(--ink)]",
    outline:
      "bg-white text-[color:var(--blue)] border border-[color:var(--blue)]/50 hover:border-[color:var(--blue)] hover:bg-[#e3eefb]",
    white:
      "bg-white text-[color:var(--blue)] border border-white hover:bg-[color:var(--cyan)] hover:border-[color:var(--cyan)]",
  } as const;
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-between gap-[0.9em] rounded-[4px] px-[1.3em] py-[0.9em] text-[length:var(--fs-nav,15px)] font-semibold no-underline transition-colors duration-300 max-[520px]:w-full sm:whitespace-nowrap ${tones[tone]}`}
    >
      {children}
      {href !== "/contact" && (
        <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" className="shrink-0" />
      )}
    </Link>
  );
}

function SectionHead({
  no,
  label,
  title,
  light,
  children,
}: {
  no: string;
  label: string;
  title: ReactNode;
  light?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[clamp(10px,1.2vw,16px)]">
      <p className={EYEBROW}>
        <span>{no}</span>
        <span>{label}</span>
      </p>
      <h2 className={light ? H2.replace("text-[color:var(--blue)]", "text-white") : H2}>{title}</h2>
      {children}
    </div>
  );
}

function DroneCard({ drone }: { drone: Drone }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[12px] border border-[color:var(--blue)]/20 bg-white shadow-[0_18px_40px_-24px_rgba(20,60,120,0.45)] transition-shadow duration-300 hover:shadow-[0_26px_52px_-22px_rgba(20,60,120,0.55)]">
      {/* top accent bar */}
      <div aria-hidden="true" className="h-[5px] bg-gradient-to-r from-[color:var(--blue)] to-[color:var(--cyan)]" />

      <div className="flex flex-col p-[clamp(12px,1.2vw,18px)]">
        <div className="relative aspect-[16/8] overflow-hidden rounded-[8px] bg-gradient-to-b from-[#d6e6f8] to-[#eef5fc] sm:aspect-[16/7]">
          <Image
            src={drone.image}
            alt={`${drone.model} ${drone.tagline.toLowerCase()}`}
            fill
            sizes="(max-width: 1100px) 100vw, 45vw"
            className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
        </div>

        <div className="flex items-start justify-between gap-4 px-[0.4em] pt-[clamp(14px,1.4vw,20px)]">
          <div className="min-w-0">
            <h3 className="m-0 break-words text-[length:var(--fs-h3)] font-bold leading-[1.15] text-[color:var(--blue)]">
              {drone.model}
            </h3>
            <p className="m-0 mt-[0.35em] text-[length:var(--fs-small)] font-semibold text-[color:var(--cyan)]">
              {drone.tagline}
            </p>
          </div>
        </div>

        <p className="m-0 mt-[0.6em] max-w-[40ch] px-[0.4em] text-[length:var(--fs-small)] leading-[1.5] text-[color:var(--ink)]/75 text-pretty">
          {drone.blurb}
        </p>

        <dl className="m-0 mt-[clamp(12px,1.2vw,18px)] overflow-hidden rounded-[8px] border border-[color:var(--blue)]/15">
          {drone.specs.map(([label, value], i) => {
            const Icon = specIcon(label);
            return (
              <div
                key={label}
                className={`grid grid-cols-[20px_minmax(0,1fr)] items-start gap-x-[0.7em] gap-y-[0.15em] px-[0.8em] py-[0.55em] text-[length:var(--fs-small)] leading-[1.4] sm:grid-cols-[20px_minmax(0,1fr)_minmax(0,1.15fr)] ${
                  i % 2 === 0 ? "bg-[#edf4fc]" : "bg-white"
                }`}
              >
                <Icon
                  size={16}
                  strokeWidth={1.6}
                  aria-hidden="true"
                  className="mt-[0.2em] text-[color:var(--blue)]/70"
                />
                <dt className="text-[color:var(--ink)]/70">{label}</dt>
                <dd className="m-0 col-start-2 whitespace-pre-line font-semibold text-[color:var(--blue)] sm:col-start-auto">
                  {value}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </article>
  );
}

/* ---- Page ------------------------------------------------------------------ */

export default function ProductsPage() {
  return (
    <main
      className={`overflow-x-clip bg-gradient-to-b from-[#e6f0fb] via-[#eef4fc] to-[#e3edf9] pb-[clamp(24px,3vw,48px)] text-[color:var(--ink)] [--card-gap:clamp(14px,1.6vw,24px)]`}
    >
      {/* ---- Hero ----------------------------------------------------------- */}
      <section className="relative bg-gradient-to-br from-white via-[#f1f7fe] to-[#dbe9f9] pt-[length:var(--nav-h)]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[68%] min-[860px]:block"
        >
          <Image
            src="/media/image.png"
            alt=""
            fill
            priority
            sizes="68vw"
            className="object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f1f7fe] via-[#f1f7fe]/50 to-transparent" />
        </div>

        <div className={`${INNER} relative`}>
          <div
            className={`${MAX} grid min-h-[clamp(380px,46vw,620px)] items-center py-[clamp(28px,4vw,64px)]`}
          >
            <div className="flex max-w-[36rem] flex-col gap-[clamp(14px,1.6vw,22px)]">

              <h1 className="m-0 border-l-[3px] border-[color:var(--cyan)] pl-[0.6em] text-[length:var(--fs-h1)] font-extrabold uppercase leading-[1.08] text-[color:var(--blue)]">
                HH Freightor Series{" "}
                <span className="text-[color:var(--cyan)]">proven at altitude</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Mobile: photo sits under the copy */}
        <div className="relative aspect-[4/3] min-[860px]:hidden">
          <Image
            src="/media/image.png"
            alt="Heavy-lift drone carrying a crate over snow-capped Himalayan peaks"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ---- Category tabs --------------------------------------------------- */}
      <div className={`${INNER} relative z-10 mt-[clamp(-28px,-2vw,-12px)]`}>
        <nav
          aria-label="Product categories"
          className={`${MAX} grid grid-cols-1 overflow-hidden rounded-[10px] border border-[color:var(--blue)]/15 bg-white p-[clamp(6px,1vw,14px)] shadow-[0_18px_40px_-20px_rgba(20,60,120,0.45)] min-[560px]:grid-cols-2 min-[1000px]:grid-cols-4`}
        >
          {TABS.map((tab, i) => {
            const Icon = tab.icon;
            const active = i === 0;
            return (
              <a
                key={tab.label}
                href={tab.href}
                className={`flex items-center gap-[0.9em] rounded-[8px] px-[clamp(10px,1.2vw,20px)] py-[clamp(10px,1vw,14px)] no-underline transition-colors duration-300 hover:text-[color:var(--cyan)] min-[1000px]:rounded-none min-[1000px]:border-l min-[1000px]:border-[color:var(--blue)]/15 min-[1000px]:first:border-l-0 ${
                  active ? "bg-[#e3eefb] text-[color:var(--blue)]" : "text-[color:var(--ink)]/80"
                }`}
              >
                <span
                  className={`grid size-[clamp(40px,3vw,48px)] shrink-0 place-items-center rounded-[8px] ${
                    active ? "bg-[color:var(--cyan)]/25" : "bg-[#edf4fc]"
                  }`}
                >
                  <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="text-[length:var(--fs-small)] font-bold uppercase leading-[1.25] tracking-[0.05em]">
                  {tab.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* ---- 01 Logistics ---------------------------------------------------- */}
      <section id="logistics" className={SECTION}>
        <div className={INNER}>
          <div className={MAX}>
            <div className="grid items-center gap-[clamp(20px,3vw,48px)] min-[860px]:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
              <SectionHead
                no="01"
                label="Logistics Drones"
                title={
                  <>
                    Freightor
                    <br />
                    Logistics Drone Series
                  </>
                }
              >
                <p className={`${BODY} max-w-[56ch]`}>
                  Designed to transport materials to remote locations,
                  particularly sites without road access. The Freightor range
                  supports last-mile delivery and infrastructure logistics in
                  challenging terrain.
                </p>
              </SectionHead>

              <ul className="m-0 flex w-full list-none flex-col gap-[0.9em] rounded-[10px] border border-[color:var(--blue)]/15 border-l-[4px] border-l-[color:var(--cyan)] bg-white p-[clamp(16px,1.6vw,24px)] shadow-[0_18px_40px_-26px_rgba(20,60,120,0.4)] min-[860px]:w-auto min-[860px]:justify-self-end">
                {USE_CASES.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-[0.9em] text-[length:var(--fs-small)] text-[color:var(--ink)]/85"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="shrink-0 text-[color:var(--blue)]"
                    />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[clamp(24px,3vw,44px)] grid grid-cols-1 items-start gap-[length:var(--card-gap)] min-[1100px]:grid-cols-2">
              {DRONES.map((drone) => (
                <DroneCard key={drone.model} drone={drone} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- 02 Other platforms --------------------------------------------- */}
      <section id="other-platforms" className={`${SECTION} bg-[#d9e8f9] py-[clamp(32px,4vw,64px)]`}>
        <div className={INNER}>
          <div className={MAX}>
            <div className="flex flex-col gap-[clamp(16px,2vw,28px)] min-[860px]:flex-row min-[860px]:items-end min-[860px]:justify-between">
              <SectionHead
                no="02"
                label="Other Drone Platforms"
                title={
                  <>
                    Engineered for
                    <br />
                    Specialised Missions
                  </>
                }
              >
                <p className={`${BODY} max-w-[56ch]`}>
                  In addition to our logistics drones, we develop and deploy
                  platforms for surveillance, high-speed operations and custom
                  applications.
                </p>
              </SectionHead>

              <div>
                <Btn href="/what-we-provide/products" tone="outline">
                  Explore All Products
                </Btn>
              </div>
            </div>

            <ul className="m-0 mt-[clamp(20px,2.4vw,36px)] grid list-none grid-cols-1 gap-[length:var(--card-gap)] p-0 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
              {OTHERS.map(({ title, body, icon: Icon, image }) => (
                <li
                  key={title}
                  className="group overflow-hidden rounded-[10px] border border-[color:var(--blue)]/20 bg-white p-[clamp(10px,1vw,14px)] shadow-[0_18px_40px_-26px_rgba(20,60,120,0.4)]"
                >
                  <div className="relative aspect-[16/8] overflow-hidden rounded-[8px] bg-gradient-to-b from-[#d6e6f8] to-[#eef5fc]">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 30vw"
                      className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start gap-[0.9em] px-[0.4em] pb-[0.4em] pt-[clamp(12px,1.2vw,18px)]">
                    <Icon
                      size={32}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="mt-[0.1em] shrink-0 text-[color:var(--blue)]"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="m-0 text-[length:var(--fs-body)] font-bold text-[color:var(--blue)]">
                        {title}
                      </h3>
                      <p className="m-0 mt-[0.4em] text-[length:var(--fs-small)] leading-[1.5] text-[color:var(--ink)]/75 text-pretty">
                        {body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---- 03 Why choose us ------------------------------------------------ */}
      <section className={SECTION}>
        <div className={INNER}>
          <div
            className={`${MAX} grid items-center gap-[clamp(20px,3vw,48px)] rounded-[14px] bg-gradient-to-br from-[color:var(--blue)] to-[#1b4f94] p-[clamp(20px,3vw,48px)] text-white shadow-[0_24px_56px_-28px_rgba(10,35,80,0.6)] min-[960px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]`}
          >
            <SectionHead
              no="03"
              label="Why Choose Himalayan Haulers"
              light
              title={
                <>
                  Built for
                  <br />
                  the Real World
                </>
              }
            />

            <ul className="m-0 grid list-none grid-cols-2 gap-y-[clamp(14px,1.6vw,24px)] p-0 min-[760px]:grid-cols-4">
              {WHY.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex flex-col items-center gap-[0.8em] px-[0.6em] text-center min-[760px]:border-l min-[760px]:border-white/20 min-[760px]:first:border-l-0"
                >
                  <Icon
                    size={38}
                    strokeWidth={1.3}
                    aria-hidden="true"
                    className="text-[color:var(--cyan)]"
                  />
                  <span className="max-w-[16ch] text-[length:var(--fs-small)] leading-[1.3] text-white/90">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Closing banner -------------------------------------------------- */}
      <section className={`${INNER} mt-[clamp(32px,4vw,56px)]`}>
        <div className={MAX}>
          <div className="relative overflow-hidden rounded-[12px] border border-white/60 text-white shadow-[0_24px_56px_-28px_rgba(10,25,45,0.5)]">
            <Image
              src="/media/HIMALAYAN-HERO-poster.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[color:var(--blue)]/90 via-[color:var(--blue)]/70 to-[color:var(--blue)]/30"
            />

            <div className="relative flex max-w-[46rem] flex-col gap-[clamp(12px,1.4vw,20px)] p-[clamp(22px,3.5vw,56px)]">
              <p className="m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.14em] text-[color:var(--cyan)]">
                Ready to deploy
              </p>
              <h2 className="m-0 text-balance text-[length:var(--fs-h2)] font-bold leading-[1.1]">
                Find the Right Drone Platform for Your Operation
              </h2>
              <p className="m-0 max-w-[52ch] text-[length:var(--fs-body)] leading-[1.55] text-white/90 text-pretty">
                Share your payload, altitude, range and application
                requirements. Our team will help you identify the most suitable
                platform.
              </p>
              <div className="pt-[0.6em] max-[520px]:w-full">
                <Btn href="/contact" tone="white">
                  Discuss Your Requirements
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
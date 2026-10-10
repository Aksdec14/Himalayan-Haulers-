import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Heavy-Lift Logistics Drones in India | HH Freightor D-Series | Himalayan Haulers",
  description:
    "Freightor D-Series heavy-lift drones carry 20 to 300 kg to remote, high-altitude sites. Autonomous, built in India. Also surveillance and custom drones.",
};

/* ==========================================================================
   PRODUCTS PAGE — a basic page.

     1. hero            full-width photo banner, headline and buttons over it
     2. about           photo left, text right (with the key numbers)
     3. models          photo left, text right
     4. capabilities    photo left, text right
     5. custom-built    photo left, text right
     6. closing banner  photo background, text and buttons over it

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

/* ---- Content --------------------------------------------------------------- */

const STATS = [
  { value: "300 kg", label: "max payload, sea level" },
  { value: "6,000 m", label: "highest flight ceiling" },
  { value: "4", label: "Freightor D-Series models" },
  { value: "100+", label: "man-years of team experience" },
];

const MODELS = [
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

const CAPABILITIES = [
  { title: "Fully autonomous flight", body: "Plan the route, launch, and the drone flies it." },
  { title: "Obstacle avoidance", body: "Safe operation around ridgelines, towers, wires and trees." },
  { title: "Built-in failsafes", body: "Protection against link loss, low battery and system faults." },
  { title: "Flexible load carrying", body: "Cargo box, under-slung load or winch." },
  { title: "Load drop without landing", body: "Deliver to steep slopes, narrow ridges and border posts." },
  { title: "BLDC propulsion", body: "Efficient, reliable electric motors." },
  { title: "Battery options", body: "NMC cells for fast charging, or Li-Ion solid-state for longer range." },
];

const CHIPS = ["Propulsion", "Batteries", "Payload mounts", "Avionics", "Sensors"];

/**
 * /what-we-provide/products — the buy-the-aircraft page.
 *
 * Server component: no client state.
 */
export default function ProductsPage() {
  return (
    <main className={MAIN}>
      {/* ---- 1. Hero banner: photo, text and buttons over it ---------------- */}
      <section className="relative isolate overflow-hidden bg-[color:var(--ink)] text-white">
        <Photo
          src="/media/Logistics.jpeg"
          alt="Heavy-lift drone carrying a payload over remote terrain"
          sizes="100vw"
          priority
          position="center top"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.15)_100%)]"
        />
        <div className={`${INNER} relative`}>
          <div
            className={`${CONTENT_MAX} flex min-h-[clamp(460px,66vh,700px)] flex-col items-start justify-center py-[calc(var(--section-pad)*0.6)]`}
          >
            <h1 className={H1}>Heavy-lift drones for the terrain others avoid</h1>
            <p className={`${LEAD} max-w-[48ch] text-white/85`}>
              Logistics, surveillance and custom drones, designed and built in
              India for high altitude, steep terrain and real payloads.
            </p>
            <div className="mt-[clamp(20px,2.6vw,36px)] flex flex-wrap gap-3">
              <PillLink href="/contact" variant="white">
                Request a Quote
              </PillLink>
              <PillLink href="/contact" variant="outlineWhite">
                Download Brochure
              </PillLink>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 2. About: photo left, text right ------------------------------- */}
      <Split
        photo={{
          src: "/media/Tower-stringing.jpeg",
          alt: "Drone laying a pilot line across a tower",
        }}
      >
        <h2 className={H2}>Built in India, for Indian conditions</h2>
        <p className={`${BODY} mt-[clamp(12px,1.4vw,18px)] max-w-[60ch]`}>
          Most drones are made for flat ground and thin air at sea level. Ours
          are made for mountain posts, remote construction sites and power lines
          across valleys. Himalayan Haulers is headquartered in Bangalore, our
          drones are manufactured in Tirupati, and our core team brings more
          than 100 man-years of experience in designing, building and flying
          drones.
        </p>
        <p className={`${BODY} mt-[0.8em] max-w-[60ch]`}>
          Every platform is fully autonomous, with obstacle avoidance and
          failsafes built in, so one operator can move heavy loads where roads,
          mules and helicopters are impractical.
        </p>
        <dl className="m-0 mt-[clamp(18px,2.2vw,28px)] grid grid-cols-2 gap-x-[clamp(16px,2vw,28px)] gap-y-[clamp(14px,1.8vw,20px)] border-t border-[color:var(--ink)]/15 pt-[clamp(16px,2vw,24px)]">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dd className="m-0 text-[length:var(--fs-h3)] font-semibold leading-none">
                {stat.value}
              </dd>
              <dt className="mt-[0.4em] text-[length:var(--fs-small)] text-[color:var(--ink)]/60">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Split>

      {/* ---- 3. Models: photo left, text right ------------------------------ */}
      <Split
        id="models"
        className="border-t border-[color:var(--ink)]/15"
        photo={{
          src: "/media/defence.jpg",
          alt: "Heavy-lift drone delivering supplies at altitude",
        }}
      >
        <h2 className={H2}>HH Freightor D-Series</h2>
        <p className={LEAD}>
          Four heavy-lift drones. One platform philosophy. Pick the payload you
          need.
        </p>
        <div className="mt-[clamp(16px,2vw,28px)] flex flex-col">
          {MODELS.map((model) => (
            <article key={model.name} className="border-t border-[color:var(--ink)]/15 py-[clamp(12px,1.4vw,18px)]">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className={LABEL}>{model.name}</h3>
                <p className="m-0 text-[length:var(--fs-small)] font-semibold text-[color:var(--ink)]/50">
                  {model.payload}
                </p>
              </div>
              <p className={`${BODY} mt-[0.4em]`}>
                <strong className="text-[color:var(--ink)]">Best for:</strong> {model.best}
              </p>
              <p className={`${BODY} mt-[0.3em]`}>{model.body}</p>
            </article>
          ))}
        </div>
      </Split>

      {/* ---- 4. Capabilities: photo left, text right ------------------------ */}
      <Split
        photo={{
          src: "/media/Logistics.jpeg",
          alt: "Heavy-lift drone carrying a payload over remote terrain",
          position: "center top",
        }}
      >
        <h2 className={H2}>Built-in capabilities</h2>
        <p className={LEAD}>Included on every Freightor model.</p>
        <ul className="m-0 mt-[clamp(16px,2vw,28px)] list-none p-0">
          {CAPABILITIES.map((item) => (
            <li
              key={item.title}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-[0.2em] border-t border-[color:var(--ink)]/15 py-[clamp(10px,1.2vw,14px)]"
            >
              <span className="text-[length:var(--fs-small)] font-semibold">{item.title}</span>
              <span className={`${BODY} max-w-[40ch] min-[560px]:text-right`}>{item.body}</span>
            </li>
          ))}
        </ul>
      </Split>

      {/* ---- 5. Custom-built: photo left, text right ------------------------ */}
      <Split
        id="custom"
        className="border-t border-[color:var(--ink)]/15"
        photo={{
          src: "/media/power.jpg",
          alt: "Drone stringing a pilot line between power towers",
        }}
      >
        <h2 className={H2}>Custom-built drones</h2>
        <p className={`${BODY} mt-[clamp(12px,1.4vw,18px)] max-w-[60ch]`}>
          Need something we do not list? Tell us the payload, altitude, range
          and mission, and our engineering team will specify and build a drone
          around it. We can customise propulsion, batteries, payload mounts,
          avionics and sensors to your requirement.
        </p>
        <ul className="m-0 mt-[clamp(14px,1.8vw,22px)] flex list-none flex-wrap gap-2 p-0">
          {CHIPS.map((chip) => (
            <li
              key={chip}
              className="border border-[color:var(--ink)]/30 px-[0.9em] py-[0.4em] text-[length:var(--fs-small)] font-semibold"
            >
              {chip}
            </li>
          ))}
        </ul>
        <div className="mt-[clamp(18px,2.2vw,28px)]">
          <PillLink href="/contact">Talk to Our Engineers</PillLink>
        </div>
      </Split>

      {/* ---- 6. Closing banner: photo background, text and buttons over it -- */}
      <section className="relative isolate overflow-hidden bg-[color:var(--ink)] text-white">
        <Photo
          src="/media/energy.jpg"
          alt="Drone inspecting a refinery stack"
          sizes="100vw"
        />
        <span aria-hidden="true" className="absolute inset-0 bg-black/60" />
        <div className={`${INNER} relative`}>
          <div
            className={`${CONTENT_MAX} flex min-h-[clamp(260px,30vw,380px)] flex-col items-center justify-center py-[calc(var(--section-pad)*0.5)] text-center`}
          >
            <h2 className={H2}>Tell us what you need to carry</h2>
            <p className={`${LEAD} mx-auto text-white/85`}>
              Share your payload, distance and altitude, and we will recommend
              the right drone and send a clear quote.
            </p>
            <div className="mt-[clamp(20px,2.6vw,36px)] flex flex-wrap items-center justify-center gap-3">
              <PillLink href="/contact" variant="white">
                Request a Quote
              </PillLink>
              <PillLink href="/contact" variant="outlineWhite">
                Download Brochure
              </PillLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import Image from "next/image";
import Button from "./ui/Button";

type Industry = {
  id: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
  image: { src: string; alt: string };
};

const INDUSTRIES: Industry[] = [
  {
    id: "power",
    title: "Power",
    body: "Pilot-line stringing, tower-site delivery and line inspection across rough terrain.",
    cta: { label: "Explore Power", href: "#power" },
    image: {
      src: "/media/power.jpg",
      alt: "Drone stringing a pilot line between power towers",
    },
  },
  {
    id: "energy",
    title: "Energy",
    body: "Confined space, thermal and visual inspections, thickness checks and methane screening.",
    cta: { label: "Explore Energy", href: "#energy" },
    image: { src: "/media/energy.jpg", alt: "Drone inspecting a refinery stack" },
  },
  {
    id: "defence",
    title: "Defence",
    body: "Heavy-lift resupply to remote posts, with airdrops and high-altitude operation.",
    cta: { label: "Explore Defence", href: "#defence" },
    image: {
      src: "/media/defence.jpg",
      alt: "Heavy-lift drone delivering supplies at altitude",
    },
  },
  {
    id: "construction",
    title: "Construction",
    body: "Materials to sites machines can't reach, plus GPR and bathymetry surveys.",
    cta: { label: "Explore Construction", href: "#construction" },
    image: {
      src: "/media/construction.jpg",
      alt: "Drone surveying a construction site",
    },
  },
];

/* Layout idea, taken from the reference: a heading with one small link on the
   right, then a numbered list of rows divided by hairlines. Each row reads
   picture, number, then title with its description underneath.

   Theme is unchanged: white page, navy text, cyan accents, and the same type
   tokens this section already used. --content-pad is --hero-left, which keeps the
   heading on the same vertical line as the navbar logo and the hero headline. */
const SECTION =
  "bg-white text-blue animate-hh-fade py-[length:var(--section-pad)]";

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

/* Heading left, link right, bottoms aligned. Wraps the link under the heading on
   narrow screens instead of squeezing either. */
const HEADER =
  "flex flex-wrap items-end justify-between gap-x-[clamp(24px,4vw,64px)] gap-y-[clamp(14px,2vw,24px)] max-w-[length:var(--content-max,1200px)] mb-[clamp(28px,3.5vw,56px)]";

const TITLE = "m-0 text-[length:var(--fs-h1)] uppercase text-blue";

/* The reference's "Ready to get started? Contact us" with its underline. The rule
   turns cyan on hover, the same accent the shared Button uses. */
const HEADER_LINK =
  "inline-block border-0 border-b-2 border-solid border-blue pb-[0.35em] text-[length:var(--fs-small)] font-semibold text-blue no-underline transition-colors hover:border-cyan focus-visible:border-cyan";

/* ---- Rows -------------------------------------------------------------------
   Three tracks: picture, number, text. The picture track is the widest so the
   number lands about 40% across, as in the reference; the picture itself keeps a
   fixed size at the left of its track. At phone width the number moves into the
   text column and the picture spans both lines beside it. */
const LIST =
  "m-0 p-0 list-none max-w-[length:var(--content-max,1200px)] border-b border-blue/15";

const ROW =
  "group grid grid-cols-[minmax(0,4fr)_minmax(0,0.7fr)_minmax(0,5.3fr)] items-start gap-x-[clamp(16px,2.4vw,40px)] border-t border-blue/15 py-[clamp(18px,2.4vw,36px)] max-[700px]:grid-cols-[clamp(96px,28vw,160px)_minmax(0,1fr)] max-[700px]:gap-x-[clamp(14px,4vw,24px)] max-[700px]:gap-y-[0.4em]";

const THUMB =
  "relative w-[clamp(120px,14vw,200px)] aspect-[4/3] overflow-hidden rounded-lg max-[700px]:row-span-2 max-[700px]:w-full";

const NUMBER =
  "m-0 text-[length:var(--fs-h3)] leading-[1.2] text-blue max-[700px]:col-start-2 max-[700px]:text-[length:var(--fs-small)] max-[700px]:text-cyan";

const TEXT = "min-w-0 max-[700px]:col-start-2";

const ITEM_TITLE = "m-0 text-[length:var(--fs-h3)] text-blue";

const ITEM_BODY =
  "mt-[clamp(8px,1vw,14px)] mb-0 max-w-[52ch] text-[length:var(--fs-h4)] leading-[1.35] text-blue/75 text-pretty";

/* The row's own link, kept from the previous version. */
const ITEM_CTA = "self-start mt-[clamp(10px,1.2vw,18px)]";

/**
 * "Industries We Serve" — a heading with a contact link, then a numbered list of
 * the four industries, one row each: picture, number, title, description.
 *
 * Server component; the only interactive part is the shared Button.
 */
export default function Industries() {
  return (
    <section
      id="industries"
      className={SECTION}
      aria-labelledby="industries-title"
    >
      <div className={INNER}>
        <header className={`${HEADER} animate-hh-fade`}>
          <h2 id="industries-title" className={TITLE}>
            Industries We Serve
          </h2>
          <a href="#contact" className={HEADER_LINK}>
            Ready to get started? Contact us
          </a>
        </header>

        <ol className={LIST}>
          {INDUSTRIES.map((industry, index) => (
            <li
              key={industry.id}
              className={`${ROW} animate-hh-fade`}
              style={{ animationDelay: `${150 + index * 100}ms` }}
            >
              <div className={THUMB}>
                <Image
                  src={industry.image.src}
                  alt={industry.image.alt}
                  fill
                  sizes="(max-width: 700px) 28vw, 200px"
                  className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>

              <p className={NUMBER} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>

              <div className={TEXT}>
                <h3 className={ITEM_TITLE}>{industry.title}</h3>
                <p className={ITEM_BODY}>{industry.body}</p>
                <Button
                  href={industry.cta.href}
                  tone="onLight"
                  withArrow
                  className={ITEM_CTA}
                >
                  {industry.cta.label}
                </Button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
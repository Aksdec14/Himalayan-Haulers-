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

/* White surface, navy text. Type sizes read from the shared ramp UNMODIFIED, so
   this section sets type at exactly the Hero's sizes — same rungs, same values.
   The Hero is the reference: it is the only place on the site that overrides
   nothing, so matching it means dropping the multipliers the other sections
   carry rather than adding new ones here.

   --content-pad is --hero-left, which keeps the heading on the same vertical line
   as the navbar logo and the hero headline. */
const SECTION =
  "bg-white text-blue animate-hh-fade py-[length:var(--section-pad)]";

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

/* Images left, content right — a mirror of the previous layout. The fr values
   swap with the DOM order, so each block keeps the width it had: the text grid
   still gets the wider 7fr track and the images the narrower 5fr, just on the
   other side. Stacks below 900px, images first. */
const LAYOUT =
  "grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-[clamp(32px,5vw,80px)] max-w-[length:var(--content-max,1200px)] max-[900px]:grid-cols-1";

/* ---- Left: eyebrow, heading, subheading, 2x2 content ----------------------- */

const EYEBROW =
  "m-0 mb-[clamp(12px,1.4vw,20px)] text-[length:var(--fs-small)] font-bold tracking-[0.12em] uppercase text-cyan";

const TITLE = "m-0 text-[length:var(--fs-h1)] uppercase text-blue";

/* leading-[1.38] and text-pretty match the Hero's lede exactly. */
const SUBLINE =
  "mt-[clamp(14px,1.8vw,24px)] mb-0 max-w-[46ch] text-[length:var(--fs-lead)] leading-[1.38] text-blue/75 text-pretty";

/* No boxes: each industry is text under a hairline rule, 2x2, dropping to one
   column on phones. */
const GRID =
  "grid grid-cols-2 gap-x-[clamp(20px,3vw,48px)] gap-y-[clamp(24px,3vw,44px)] mt-[clamp(32px,4vw,56px)] mb-0 mx-0 px-0 pb-0 list-none max-[700px]:grid-cols-1";

const ITEM = "flex flex-col pt-[clamp(16px,1.8vw,24px)] border-t border-blue/15";

const ITEM_TITLE = "m-0 text-[length:var(--fs-h3)] text-blue";

/* --fs-small with leading-[1.35], matching the Hero's feature-strip body rather
   than --fs-body. That is the element this one corresponds to: a short supporting
   line under a small heading. */
const ITEM_BODY =
  "mt-[clamp(10px,1.2vw,16px)] mb-[clamp(16px,1.8vw,26px)] text-[length:var(--fs-h4)] leading-[1.35] text-blue/75 text-pretty";

/* mt-auto pins every CTA to the bottom of its item. Items in a row share one
   height (the grid stretches them), so the buttons line up whatever the text
   length. The body's bottom margin is the minimum gap above the button. */
const ITEM_CTA = "self-start mt-auto";

/* ---- Right: 2x2 images ------------------------------------------------------ */

/* Sticky on wide screens so the images stay in view while the longer left side
   scrolls past; static once stacked. */
const IMAGES_WRAP =
  "min-[901px]:sticky min-[901px]:top-[clamp(16px,6vh,72px)]";

const IMAGES = "grid grid-cols-2 gap-[clamp(10px,1.4vw,20px)]";

/* 4:5 portrait rather than square: the frames are half a grid column wide, so a
   1:1 box is short enough to leave the sticky column much shorter than the text
   beside it. 4:5 adds ~25% height without changing the grid or the gap tokens. */
const IMG_FRAME = "relative w-full aspect-[4/5] overflow-hidden rounded-md";

/**
 * "Industries We Serve" — white section. Left: a 2x2 image grid, one image per
 * industry. Right: eyebrow, heading, subheading and the 2x2 industry text.
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
        <div className={LAYOUT}>
          <div className={`${IMAGES_WRAP} animate-hh-fade`}>
            <div className={IMAGES}>
              {INDUSTRIES.map((industry) => (
                <div key={industry.id} className={IMG_FRAME}>
                  <Image
                    src={industry.image.src}
                    alt={industry.image.alt}
                    fill
                    sizes="(max-width: 900px) 45vw, 20vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="animate-hh-fade [animation-delay:150ms]">
            <p className={EYEBROW}>Industries</p>
            <h2 id="industries-title" className={TITLE}>
              Industries We Serve
            </h2>
            <p className={SUBLINE}>
              Different sectors, same problem: hard-to-reach places.
            </p>

            <ul className={GRID}>
              {INDUSTRIES.map((industry) => (
                <li key={industry.id} className={ITEM}>
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
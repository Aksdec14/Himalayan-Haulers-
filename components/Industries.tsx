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

/* Layout: a heading with one small link on the right, then a 2x2 grid of
   photo cards. Each card is a navy tile with the photo filling it; the number
   and title rest on the bottom scrim, and the description + CTA fade up on
   hover.

   Theme is unchanged: white page, navy text, cyan accents, and the same type
   tokens this section already used. --content-pad is --hero-left, which keeps
   the heading on the same vertical line as the navbar logo and the hero
   headline. */
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

/* ---- Cards -----------------------------------------------------------------
   Two equal columns; collapses to one below 860px. min-h keeps every card in
   a row the same height so the four tiles read as one block — sized to fit the
   resting content (number + title) plus the revealed block without clipping. */
const GRID =
  "m-0 grid grid-cols-2 list-none p-0 gap-[length:var(--card-gap)] max-w-[length:var(--content-max,1200px)] max-[860px]:grid-cols-1";

const CARD =
  "group relative isolate min-h-[clamp(240px,22vw,320px)] overflow-hidden rounded-lg border border-blue/10 bg-blue text-white shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-cyan/50 hover:shadow-[0_4px_8px_rgba(10,25,45,0.05),0_20px_44px_rgba(10,25,45,0.12)]";

/* Photo fills the tile and drifts in slightly on hover — the same motion the
   thumbnails used in the old row layout. */
const CARD_PHOTO =
  "absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 motion-reduce:transition-none";

/* Bottom-up navy scrim: solid enough at the base that white text stays
   readable whatever the photo does behind it. */
const SCRIM = "absolute inset-0 bg-linear-to-t from-blue via-blue/60 to-blue/5";

/* Bottom-anchored text block. The number and title are always visible so a
   card is never an unlabelled photo; the description and CTA are the part that
   waits for hover. */
const CARD_TEXT = "absolute inset-x-0 bottom-0 p-[clamp(20px,2.4vw,32px)]";

const NUMBER =
  "m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.1em] text-cyan";

/* Title is white at rest, sized a notch above --fs-h3 so it reads as the
   card's headline against the photo.

   Two defences on the colour: the global h1–h6 rule in globals.css sets
   `color: inherit` UNLAYERED, which beats layered utilities — so the h3 takes
   its colour from the parent card (text-white, inherited) and the trailing `!`
   makes the utility itself important enough to win anyway. Font-size is not
   touched by that rule, so the calc below applies normally. */
const ITEM_TITLE =
  "m-0 mt-[0.35em] text-[length:calc(var(--fs-h3)*1.15)] leading-[1.2] text-white!";

/* The hover-revealed block.

   Base state is VISIBLE: on touch devices (@media (hover: none)) there is no
   hover to trigger, so the content stays put. Only devices that actually hover
   hide it — @media(hover:hover) hides, group-hover reveals, and
   group-focus-within reveals it again for keyboard users tabbing to the CTA
   (focus must never land on something invisible). pointer-events follow the
   same pattern so the hidden CTA cannot be clicked by accident. */
const REVEAL =
  "mt-[clamp(10px,1.2vw,16px)] transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:pointer-events-none [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto";

const ITEM_BODY =
  "m-0 max-w-[46ch] text-[length:calc(var(--fs-body)*1.1)] leading-[1.45] text-white text-pretty";

/* `text-white!` overrides the Button's onDark tone (white/88), so the label is
   full white like the rest of the card's text. */
const ITEM_CTA = "mt-[clamp(16px,1.8vw,22px)] text-white!";

/**
 * "Industries We Serve" — a heading with a contact link, then a 2x2 grid of
 * photo cards: number and title at rest, description and CTA on hover.
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

        <ol className={GRID}>
          {INDUSTRIES.map((industry, index) => (
            <li
              key={industry.id}
              className={`${CARD} animate-hh-fade`}
              style={{ animationDelay: `${150 + index * 100}ms` }}
            >
              <Image
                src={industry.image.src}
                alt={industry.image.alt}
                fill
                sizes="(max-width: 860px) 92vw, 46vw"
                className={CARD_PHOTO}
              />
              <div className={SCRIM} aria-hidden="true" />

              <div className={CARD_TEXT}>
                <p className={NUMBER} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className={ITEM_TITLE}>{industry.title}</h3>

                <div className={REVEAL}>
                  <p className={ITEM_BODY}>{industry.body}</p>
                  <Button
                    href={industry.cta.href}
                    tone="onDark"
                    withArrow
                    className={ITEM_CTA}
                  >
                    {industry.cta.label}
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

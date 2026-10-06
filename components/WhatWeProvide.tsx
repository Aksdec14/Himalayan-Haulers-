import Button from "./ui/Button";

type Offer = {
  id: string;
  /** "blue" inverts the card to a solid dark surface with white text. */
  tone?: "light" | "blue";
  title: string;
  body: string;
  items: string[];
  cta: { label: string; href: string };
};

const OFFERS: Offer[] = [
  {
    id: "products",
    title: "Drone Products",
    body: "Purpose-built heavy-lift logistics drones, plus surveillance and custom platforms, built in India for Indian conditions.",
    items: [
      "Freightor D-Series logistics drones",
      "Surveillance drones",
      "Custom-built drones",
    ],
    cta: { label: "Explore Products", href: "#products" },
  },
  {
    id: "daas",
    tone: "blue",
    title: "Drone as a Service",
    body: "Get the result without owning the drone. Our crews bring the aircraft, pilots, batteries and support to your site.",
    items: [
      "Logistics Drone as a Service (LDaaS)",
      "Drone inspections",
      "Industrial sensor surveys",
      "Drone-based tower stringing",
    ],
    cta: { label: "Explore Services", href: "#services" },
  },
];

/* This section steps up from the hero's scale, so the rungs it uses are
   overridden HERE as arbitrary properties rather than by editing the tokens in
   globals.css (which would resize the hero headline and navbar too).
   Multipliers keep the frame-relative shape of the original clamp()s.

   --fs-h3 is included because the card titles use it and want to be larger than
   the hero's h3s. Scoping it to this section is what keeps the hero slider titles
   at their own size: the token is shared, the override is not. */
const SECTION =
  "bg-[#f4f7fa] text-ink animate-hh-fade [--fs-h2:calc(var(--fs-h2)*1.6)] [--fs-lead:calc(var(--fs-lead)*1.45)] [--fs-h3:calc(var(--fs-h3)*1.35)] [--fs-body:calc(var(--fs-body)*1.18)] [--fs-small:calc(var(--fs-small)*1.2)] py-[length:var(--section-pad)]";

/* Left-anchored: same --hero-left line as the hero headline and navbar logo. */
const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

/* Measure cap only. The left edge stays flush with --content-pad. */
const HEADER =
  "max-w-[min(62ch,var(--content-max,1200px))] mb-[clamp(32px,4.5vw,64px)]";

const TITLE = "text-[length:var(--fs-h1)] uppercase";

const ACCENT = "text-cyan";

const SUBLINE =
  "mt-[clamp(12px,1.6vw,20px)] text-[length:var(--fs-lead)] leading-[1.45] text-ink/72 text-pretty";

/* Caps track width on ultrawide; collapses to one column on width, not type. */
const GRID =
  "grid grid-cols-[repeat(2,minmax(0,1fr))] max-w-[length:var(--content-max,1200px)] gap-[length:var(--card-gap)] m-0 p-0 list-none max-[860px]:grid-cols-[minmax(0,1fr)]";

/* Shared card shell. Surface (bg / text / border colour) is set per tone below. */
const CARD =
  "flex flex-col p-[clamp(24px,2.8vw,40px)] rounded-lg border shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.06)] transition-[border-color,box-shadow,transform] duration-300";

const CARD_LIGHT = "bg-white text-ink border-blue/10";
const CARD_DARK = "bg-blue text-white border-white/12";

const CARD_HOVER =
  "hover:border-cyan/50 hover:shadow-[0_4px_8px_rgba(10,25,45,0.05),0_20px_44px_rgba(10,25,45,0.1)] motion-safe:hover:-translate-y-0.5";

const CARD_TITLE = (dark: boolean) =>
  `text-[length:var(--fs-h3)] ${dark ? "text-white" : "text-ink"}`;

const CARD_BODY = (dark: boolean) =>
  `mt-[clamp(12px,1.4vw,18px)] text-[length:var(--fs-body)] leading-[1.45] text-pretty ${
    dark ? "text-white/85" : "text-ink/75"
  }`;

/* mt-auto pushes the CTA row to the bottom so buttons align across cards.
   Margin and padding are set per side so nothing conflicts with mt-auto. */
const LIST =
  "mt-auto mb-0 mx-0 px-0 pb-0 pt-[clamp(18px,2.2vw,26px)] list-none";

/* Plain text items: no tick marks, separated by space and the item's own weight.
   The padding-left that the tick needed has gone with it. */
const LIST_ITEM = (dark: boolean) =>
  `text-[length:var(--fs-body)] leading-[1.4] not-first:mt-[0.6em] ${
    dark ? "text-white/90" : "text-ink/85"
  }`;

/* Alignment only. Colour, border, arrow and hover belong to the shared Button. */
const CARD_CTA = "self-start mt-[clamp(24px,2.6vw,36px)]";

/**
 * "What We Provide" — the first light section after the video hero.
 *
 * Two cards for the two ways to work with us: buy the aircraft, or hire the
 * capability. Server component; the only interactive part is the shared Button.
 */
export default function WhatWeProvide() {
  return (
    <section id="provide" className={SECTION} aria-labelledby="provide-title">
      <div className={INNER}>
        <header className={HEADER}>
          <h2 id="provide-title" className={TITLE}>
            What We <span className={ACCENT}>Provide</span>
          </h2>
          <p className={SUBLINE}>
            Two ways to put heavy-lift drones to work: own them, or hire the
            capability.
          </p>
        </header>

        <ul className={GRID}>
          {OFFERS.map((offer) => {
            const dark = offer.tone === "blue";
            return (
              <li
                key={offer.id}
                className={`${CARD} ${CARD_HOVER} ${
                  dark ? CARD_DARK : CARD_LIGHT
                }`}
              >
                <h3 className={CARD_TITLE(dark)}>{offer.title}</h3>
                <p className={CARD_BODY(dark)}>{offer.body}</p>

                <ul className={LIST}>
                  {offer.items.map((item) => (
                    <li key={item} className={LIST_ITEM(dark)}>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  href={offer.cta.href}
                  tone={dark ? "onDark" : "onLight"}
                  withArrow
                  className={CARD_CTA}
                >
                  {offer.cta.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
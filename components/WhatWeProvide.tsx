import Button from "./ui/Button";

type Offer = {
  id: string;
  /** "blue" flips the half to a solid navy surface with white text. */
  tone?: "light" | "blue";
  /** Small uppercase kicker above the title — drawn from the section subline. */
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
  cta: { label: string; href: string };
};

const OFFERS: Offer[] = [
  {
    id: "products",
    eyebrow: "Own them",
    title: "Drone Products",
    body: "Purpose-built heavy-lift logistics drones, plus surveillance and custom platforms, built in India for Indian conditions.",
    items: [
      "Freightor D-Series logistics drones",
      "Surveillance drones",
      "Custom-built drones",
    ],
    cta: { label: "Explore Products", href: "/what-we-provide/products" },
  },
  {
    id: "daas",
    tone: "blue",
    eyebrow: "Hire the capability",
    title: "Drone as a Service",
    body: "Get the result without owning the drone. Our crews bring the aircraft, pilots, batteries and support to your site.",
    items: [
      "Logistics Drone as a Service (LDaaS)",
      "Drone inspections",
      "Industrial sensor surveys",
      "Drone-based tower stringing",
    ],
    cta: { label: "Explore Services", href: "/what-we-provide/services" },
  },
];

/* This section steps up from the hero's scale, so the rungs it uses are
   overridden HERE as arbitrary properties rather than by editing the tokens in
   globals.css (which would resize the hero headline and navbar too).
   Multipliers keep the frame-relative shape of the original clamp()s.

   --fs-h3 is included because the offer titles use it and want to be larger
   than the hero's h3s. Scoping it to this section is what keeps the hero
   slider titles at their own size: the token is shared, the override is not.

   `relative` (not decoration): the diagonal paint layers below are children of
   the section, and this container has to sit above them. */
const SECTION =
  "relative bg-[#f4f7fa] text-ink animate-hh-fade [--fs-h2:calc(var(--fs-h2)*1.6)] [--fs-lead:calc(var(--fs-lead)*1.45)] [--fs-h3:calc(var(--fs-h3)*1.35)] [--fs-body:calc(var(--fs-body)*1.18)] [--fs-small:calc(var(--fs-small)*1.2)] py-[length:calc(var(--section-pad)*0.5)]";

/* Left-anchored: same --hero-left line as the hero headline and navbar logo.
   relative + z-10: paints the whole content column above the section's
   diagonal backdrop. */
const INNER =
  "relative z-10 pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

/* ---------------------------------------------------------------------------
   THE DIAGONAL — the WHOLE section is split, full-bleed, edge to edge.

   Two absolute layers paint the split across the entire section box (paddings
   included), no panel, no rounded corners, no shadow:

     navy  : polygon(58% 0, 100% 0, 100% 100%, 42% 100%) — right side, seam
             sweeping from 58% of the width at the top down to 42% at the
             bottom: the same left-leaning "/" as the BannerPower wedges.
     stripe: a 2% cyan accent riding just inside the navy edge.

   Content is a two-column grid whose gap is the seam corridor. The numbers
   below are tuned so the columns clear the seam at every viewport width
   between 860px and ultrawide, measured through INNER's paddings:

     gap 26%  -> left column ends at ~38% of the section (seam bottom 42%,
                 stripe to 44%) and the right column starts at ~62% (seam
                 top 58%, stripe to 60%). No text ever lands on the wrong
                 side of the split.

   Header is capped at min(62ch, 52%) for the same reason: its box ends
   around 54% — clear of the seam's 58% at the top.

   Mobile (<860px): layers hide; columns stack; the navy offer becomes a
   full-bleed band (negative margins cancelling INNER's padding) with a cyan
   top border standing in for the seam.
   ------------------------------------------------------------------------- */
const NAVY =
  "pointer-events-none absolute inset-0 bg-blue max-[860px]:hidden [clip-path:polygon(58%_0,100%_0,100%_100%,42%_100%)]";

const SEAM =
  "pointer-events-none absolute inset-0 bg-cyan max-[860px]:hidden [clip-path:polygon(58%_0,60%_0,44%_100%,42%_100%)]";

/* Header box: the 52% cap is what keeps it left of the seam (see above).
   Full measure again once the split is gone on mobile. */
const HEADER =
  "max-w-[min(62ch,52%)] max-[860px]:max-w-full mb-[clamp(16px,2.2vw,32px)]";

const TITLE = "text-[length:var(--fs-h1)] uppercase";

const ACCENT = "text-cyan";

const SUBLINE =
  "mt-[clamp(8px,1vw,12px)] text-[length:var(--fs-lead)] leading-[1.45] text-ink/72 text-pretty";

/* The gap IS the seam corridor — 26% on desktop, ordinary stack spacing on
   mobile. No max-width cap: narrowing the grid would break the clearance
   math against the seam (which is measured against the full section). */
const GRID =
  "grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[26%] m-0 p-0 list-none max-[860px]:grid-cols-[minmax(0,1fr)] max-[860px]:gap-[20px]";

/* Shared offer shell. Surface and mobile full-bleed treatment per tone. */
const OFFER = "flex flex-col justify-center";

const OFFER_LIGHT = `${OFFER} text-ink`;

/* Mobile: negative margins cancel INNER's padding so the navy band runs
   edge to edge; padding goes back in so the text stays on the content line.
   Desktop: no background of its own — the section's navy layer paints it. */
const OFFER_DARK = `${OFFER} text-white max-[860px]:-ml-[length:var(--content-pad)] max-[860px]:-mr-[length:var(--content-pad-end,clamp(20px,5vw,64px))] max-[860px]:pl-[length:var(--content-pad)] max-[860px]:pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))] max-[860px]:py-[clamp(20px,4vw,28px)] max-[860px]:bg-blue max-[860px]:border-t-[3px] max-[860px]:border-cyan`;

/* Number + kicker. The muted colour sits on the <p>; the cyan number span
   overrides it (a <p> is not a heading, so the global h1–h6 inherit rule
   does not interfere with either colour). */
const EYEBROW = (dark: boolean) =>
  `flex items-center gap-[0.8em] m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.14em] ${
    dark ? "text-white/55" : "text-ink/55"
  }`;

const NUMBER = "text-cyan";

/* Colour comes from the offer shell via inheritance — the global h1–h6 rule
   forces `color: inherit` unlayered, so a colour utility on the h3 itself
   would lose anyway. The size utility is safe: only colour is forced. */
const OFFER_TITLE = "mt-[clamp(6px,0.7vw,8px)] text-[length:var(--fs-h3)]";

const OFFER_BODY = (dark: boolean) =>
  `mt-[clamp(8px,0.9vw,10px)] text-[length:var(--fs-body)] leading-[1.4] text-pretty ${
    dark ? "text-white/85" : "text-ink/75"
  }`;

const LIST = "mt-[clamp(10px,1.2vw,14px)] mb-0 mx-0 px-0 pb-0 list-none";

/* Items carry a small cyan dot so both offers read as lists without tick
   columns eating horizontal room. */
const LIST_ITEM = (dark: boolean) =>
  `relative pl-[1.15em] text-[length:var(--fs-body)] leading-[1.4] before:absolute before:left-0 before:top-[0.55em] before:h-[0.42em] before:w-[0.42em] before:rounded-full before:bg-cyan before:content-[''] not-first:mt-[0.4em] ${
    dark ? "text-white/90" : "text-ink/85"
  }`;

/* Alignment only. Colour, border, arrow and hover belong to the shared Button. */
const OFFER_CTA = "self-start mt-[clamp(14px,1.6vw,20px)]";

/**
 * "What We Provide" — the first light section after the video hero.
 *
 * The section itself is divided by a full-bleed diagonal: light side carries
 * the header and Drone Products, the navy side carries Drone as a Service,
 * with a cyan stripe on the seam. Server component; the only interactive
 * part is the shared Button.
 */
export default function WhatWeProvide() {
  return (
    <section id="provide" className={SECTION} aria-labelledby="provide-title">
      {/* Diagonal backdrop, edge to edge (desktop only) */}
      <div className={NAVY} aria-hidden="true" />
      <div className={SEAM} aria-hidden="true" />

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
          {OFFERS.map((offer, index) => {
            const dark = offer.tone === "blue";
            return (
              <li key={offer.id} className={dark ? OFFER_DARK : OFFER_LIGHT}>
                <p className={EYEBROW(dark)}>
                  <span className={NUMBER}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {offer.eyebrow}
                </p>

                <h3 className={OFFER_TITLE}>{offer.title}</h3>
                <p className={OFFER_BODY(dark)}>{offer.body}</p>

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
                  className={OFFER_CTA}
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

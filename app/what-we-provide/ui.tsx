import Image from "next/image";
import type { ReactNode } from "react";

/* ==========================================================================
   Shared chrome for the three pages under /what-we-provide.
   Lives in the route folder on purpose: nothing outside this route may depend
   on it, so every page here can be restyled without touching the rest of the
   site. Design tokens (--fs-*, --content-*) still come from globals.css, so
   these pages stay in step with the navbar, hero and home sections.
   ========================================================================== */

/** Left-anchored padding: the same --content-pad line the navbar logo and the
 *  hero headline sit on. */
export const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

/** Measure cap only; the left edge stays flush with INNER. */
export const CONTENT_MAX = "max-w-[length:var(--content-max,1200px)]";

/** One vertical rhythm for every stacked block on the route. The hero is the
 *  first child and carries no margin, so this is safe on all three pages. */
export const SECTION_GAP = "mt-[clamp(40px,5vw,80px)]";

export const EYEBROW =
  "m-0 mb-[clamp(8px,1vw,12px)] text-[length:var(--fs-small)] font-bold tracking-[0.1em] uppercase text-cyan";

/** max-w keeps a long headline wrapping at a sensible measure instead of
 *  running the full container width. */
export const H1 = "m-0 max-w-[20ch] text-[length:var(--fs-h1)] uppercase";
export const H2 = "m-0 text-[length:var(--fs-h2)] uppercase";
export const H3 = "m-0 text-[length:var(--fs-h3)] text-ink";

export const LEAD =
  "m-0 mt-[clamp(10px,1.2vw,16px)] max-w-[64ch] text-[length:var(--fs-lead)] leading-[1.45] text-ink/70 text-pretty";

export const BODY =
  "text-[length:var(--fs-body)] leading-[1.45] text-ink/75 text-pretty";

/** The card shell the home page already uses: hairline border, two-layer
 *  shadow, and a lift on hover. Images and content are layered inside it, so
 *  the card itself clips (overflow-hidden) to keep photos in the rounded box.
 *  text-ink is set here because headings inside the card inherit their colour
 *  from it (the global h1–h6 rule forces `color: inherit`). */
export const CARD =
  "group flex flex-col overflow-hidden rounded-lg border border-blue/10 bg-white text-ink shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.06)] transition-[border-color,box-shadow,transform] duration-300 hover:border-cyan/50 hover:shadow-[0_4px_8px_rgba(10,25,45,0.05),0_20px_44px_rgba(10,25,45,0.1)] motion-safe:hover:-translate-y-0.5";

/** Content padding for the body block inside a CARD (the photo band sits
 *  above it and runs full-bleed to the card's edges). */
export const CARD_PAD = "p-[clamp(24px,2.8vw,40px)]";

export const CARD_TITLE = "m-0 text-[length:var(--fs-h3)] text-ink";

export const CARD_BODY =
  "m-0 mt-[clamp(10px,1.2vw,16px)] text-[length:var(--fs-body)] leading-[1.45] text-ink/75 text-pretty";

/** Confirm note — the draft's [CONFIRM] markers stay visible until cleared. */
export const CONFIRM =
  "mt-[clamp(12px,1.4vw,18px)] m-0 text-[length:var(--fs-small)] text-ink/55";

/* ---- Icon feature tiles ---------------------------------------------------
   Used by both detail pages: capabilities on Products, benefits on Services.
   Icon sits in a tinted square, the title keeps the feature name and the body
   keeps the original sentence from the content draft. */
export const CAP_GRID =
  "m-0 grid grid-cols-2 gap-[clamp(12px,1.6vw,20px)] list-none p-0 max-[760px]:grid-cols-1";

export const CAP_TILE =
  "flex items-start gap-[clamp(12px,1.4vw,18px)] rounded-lg border border-blue/10 bg-[#f4f7fa]/70 p-[clamp(14px,1.7vw,22px)] transition-colors duration-300 hover:border-cyan/40 hover:bg-[#f4f7fa]";

export const CAP_ICON =
  "grid size-9 shrink-0 place-items-center rounded-md bg-cyan/10 text-cyan";

export const CAP_TITLE = "m-0 text-[length:var(--fs-body)] font-bold text-ink";

export const CAP_BODY =
  "m-0 mt-[0.3em] text-[length:var(--fs-small)] leading-[1.5] text-ink/65";

/** Small pill for short option lists (commercial models, customisable parts). */
export const CHIP =
  "rounded-full border border-blue/15 bg-white px-[0.9em] py-[0.4em] text-[length:var(--fs-small)] font-semibold text-ink/70";

/* ---- Small building blocks ---------------------------------------------- */

/** A cyan dot bullet. The dot is decorative (aria-hidden), the text is the
 *  list item's real content. `dark` flips the text for navy surfaces. */
export function Bullet({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-[0.85em] text-[length:var(--fs-body)] leading-[1.45] ${
        dark ? "text-white/80" : "text-ink/75"
      }`}
    >
      <span
        aria-hidden="true"
        className="mt-[0.6em] size-[6px] shrink-0 rounded-full bg-cyan"
      />
      <span className="text-pretty">{children}</span>
    </li>
  );
}

/** Stacked bullet list with one rhythm for every list on the route. */
export function Bullets({ children }: { children: ReactNode }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-[0.7em] p-0">{children}</ul>
  );
}

/** One icon tile: tinted icon square, bold title, one-line body. */
export function IconTile({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof import("lucide-react").Cpu;
  title: string;
  body: string;
}) {
  return (
    <li className={CAP_TILE}>
      <span className={CAP_ICON} aria-hidden="true">
        <Icon size={18} strokeWidth={1.8} />
      </span>
      <div>
        <p className={CAP_TITLE}>{title}</p>
        <p className={CAP_BODY}>{body}</p>
      </div>
    </li>
  );
}

/**
 * Standard section: left-anchored wrapper, capped measure, one vertical gap.
 * Every block below the hero goes through this so nothing drifts.
 */
export function Section({ children }: { children: ReactNode }) {
  return (
    <div className={`${INNER} ${SECTION_GAP}`}>
      <div className={CONTENT_MAX}>{children}</div>
    </div>
  );
}

/** Eyebrow-free section heading with an optional lead line. */
export function SectionHead({
  title,
  lead,
  id,
}: {
  title: ReactNode;
  lead?: string;
  id?: string;
}) {
  return (
    <header className="mb-[clamp(20px,2.4vw,32px)]">
      <h2 id={id} className={H2}>
        {title}
      </h2>
      {lead ? <p className={LEAD}>{lead}</p> : null}
    </header>
  );
}

/**
 * Photo band inside a card. Sits above CARD_PAD, full-bleed to the card's
 * rounded corners, and zooms a touch on card hover — same motion the Industries
 * thumbnails use, so the route feels part of the same site.
 */
export function CardPhoto({
  src,
  alt,
  sizes,
  ratio = "aspect-[16/9]",
}: {
  src: string;
  alt: string;
  sizes: string;
  ratio?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${ratio}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 motion-reduce:transition-none"
      />
    </div>
  );
}

/**
 * Page-opening block: eyebrow, big uppercase headline with a cyan accent span,
 * lead line, action row, optional full-width photo band. Fade-in mirrors the
 * home sections (hh-fade, second step delayed) so arrivals read the same here.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  photo,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  actions?: ReactNode;
  photo?: { src: string; alt: string; sizes?: string };
}) {
  return (
    <header className={INNER}>
      <div className={CONTENT_MAX}>
        <div className="animate-hh-fade">
          <p className={EYEBROW}>{eyebrow}</p>
          <h1 className={H1}>{title}</h1>
          <p className={LEAD}>{lead}</p>
        </div>

        {actions ? (
          <div
            className="mt-[clamp(24px,3vw,40px)] flex animate-hh-fade flex-wrap items-center gap-x-[clamp(20px,2.4vw,32px)] gap-y-3 [animation-delay:120ms]"
            role="group"
            aria-label="Page actions"
          >
            {actions}
          </div>
        ) : null}

        {photo ? (
          <div className="mt-[clamp(28px,3.5vw,48px)] animate-hh-fade overflow-hidden rounded-lg shadow-[0_12px_32px_rgba(10,25,45,0.12)] [animation-delay:220ms]">
            <div className="relative aspect-[16/9] w-full max-[700px]:aspect-[4/3] md:aspect-[21/9]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority
                sizes={photo.sizes ?? "(max-width: 700px) 92vw, 1200px"}
                className="object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

/** Navy closing panel used by both detail pages. */
export function ClosingCTA({
  title,
  text,
  children,
  footer,
}: {
  title: ReactNode;
  text: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <Section>
      <div className="rounded-lg bg-blue px-[clamp(24px,3.5vw,56px)] py-[clamp(36px,4.5vw,64px)] text-center text-white">
        <h2 className="m-0 text-[length:var(--fs-h2)] uppercase">{title}</h2>
        <p className="mx-auto m-0 mt-[clamp(12px,1.6vw,20px)] max-w-[60ch] text-[length:var(--fs-lead)] leading-[1.45] text-white/85 text-pretty">
          {text}
        </p>
        <div className="mt-[clamp(24px,3vw,40px)] flex flex-wrap items-center justify-center gap-x-[clamp(20px,2.4vw,32px)] gap-y-3">
          {children}
        </div>
        {footer ? (
          <div className="mt-[clamp(24px,3vw,40px)] text-[length:var(--fs-body)] leading-[1.6] text-white/75">
            {footer}
          </div>
        ) : null}
      </div>
    </Section>
  );
}

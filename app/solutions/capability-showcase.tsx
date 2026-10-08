"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

/* ==========================================================================
   Capability Detail — a card slider, and a side panel that opens from it.

   The slider follows the reference: a grey band with the heading, a line of
   copy and two round arrows, and below it a row of cards that run off the
   right edge. Each card's photo sits inside the band and its white caption
   hangs below the band's bottom edge.

   Pressing a card opens a panel from the right: a photograph on the left and
   the capability's full detail on the right, set as plain text: a heading per
   service and a heading per field, each with its paragraph. The panel is also
   reachable by the page's `#capability-0N` links, so the "View details" bars
   and the About index open it directly.

   Sizes read the site's raw --fs-* rungs and spacing reads --gap, --gap-peer,
   --gap-block, --card-gap and --section-pad from the page that renders this.
   ========================================================================== */

export type Field = { label: string; body: string };
export type Service = { title: string; fields: Field[] };
export type Capability = {
  n: string;
  category: string;
  image: { src: string; alt: string; position?: string };
  services: Service[];
};

const BAND = "bg-[#f0f2f5]";

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

const CONTENT_MAX = "max-w-[length:var(--content-max,1200px)]";

const ROUND_BUTTON =
  "grid size-[clamp(44px,3.6vw,52px)] place-items-center rounded-full transition-[background-color,color,opacity] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan disabled:cursor-not-allowed disabled:opacity-40";

/** A service's fields as plain text: a heading, then its paragraph.
 *  No cards, borders or dashes — only spacing separates the items. */
function FieldList({ fields }: { fields: Field[] }) {
  return (
    <div className="mt-[length:var(--gap)] flex flex-col gap-[length:var(--gap)]">
      {fields.map((field) => (
        <div key={field.label}>
          <h4 className="m-0 text-[length:var(--fs-body)] font-semibold text-ink">
            {field.label}
          </h4>
          <p className="m-0 mt-[0.4em] text-[length:var(--fs-body)] leading-[1.6] text-ink/80 text-pretty">
            {field.body}
          </p>
        </div>
      ))}
    </div>
  );
}

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The slider section plus its side panel. `children` render centred under the
 * slider (the page puts its "Back to top" pill there).
 */
export default function CapabilityShowcase({
  capabilities,
  children,
}: {
  capabilities: Capability[];
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const scroller = useRef<HTMLUListElement>(null);
  const panel = useRef<HTMLElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLElement | null>(null);

  const count = capabilities.length;
  const cap = capabilities[active];

  /* ---- Slider ------------------------------------------------------------ */

  const updateEdges = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const slide = (direction: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    el.scrollBy({
      left: direction * step,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  /* ---- Panel ------------------------------------------------------------- */

  const openAt = useCallback((index: number) => {
    trigger.current = document.activeElement as HTMLElement | null;
    setActive(index);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    /* Drop a `#capability-0N` hash so the same link can open the panel again. */
    if (/^#capability-/.test(window.location.hash)) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
    trigger.current?.focus?.();
  }, []);

  const step = (delta: number) =>
    setActive((current) => (current + delta + count) % count);

  /* The page's `#capability-0N` links open the panel. */
  useEffect(() => {
    const fromHash = () => {
      const match = window.location.hash.match(/^#capability-(\d+)$/);
      if (!match) return;
      const index = capabilities.findIndex((item) => item.n === match[1]);
      if (index >= 0) openAt(index);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [capabilities, openAt]);

  /* While open: lock page scroll, move focus in, close on Escape, keep Tab
     inside the panel. */
  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    closeButton.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !panel.current) return;

      const focusable = panel.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  /* A different capability starts at the top of the panel. */
  useEffect(() => {
    body.current?.scrollTo({ top: 0 });
  }, [active]);

  return (
    <section
      id="detail"
      className="scroll-mt-[96px] bg-white pb-[length:var(--section-pad)]"
    >
      {/* Hash targets. Fixed and zero-sized, so following a `#capability-0N`
          link finds them without scrolling the page: the panel opens over
          wherever the visitor already is, and closing puts them back there. */}
      {capabilities.map((item) => (
        <span
          key={item.n}
          id={`capability-${item.n}`}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 size-0"
        />
      ))}

      {/* --cap-h is the height of every caption box. The band stops one caption
          above the bottom, so the photos sit in the band and the captions hang
          out of it. */}
      <div className="relative [--cap-h:clamp(116px,9.5vw,148px)]">
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 top-0 bottom-[var(--cap-h)] ${BAND}`}
        />

        <div className="relative pt-[length:var(--section-pad)]">
          {/* Heading, copy, arrows */}
          <div className={INNER}>
            <div className={CONTENT_MAX}>
              <span
                aria-hidden="true"
                className="mb-[length:var(--gap-block)] block h-[2px] w-[clamp(140px,18vw,260px)] bg-blue"
              />

              <div className="grid gap-[length:var(--gap-block)] min-[860px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
                <div className="flex flex-col gap-[length:var(--gap-block)]">
                  <h2 className="m-0 text-[length:var(--fs-h2)] uppercase">
                    Capability Detail
                  </h2>

                  <div className="flex gap-[length:var(--gap)]">
                    <button
                      type="button"
                      aria-label="Previous capabilities"
                      disabled={edges.start}
                      onClick={() => slide(-1)}
                      className={`${ROUND_BUTTON} bg-white text-blue hover:bg-blue hover:text-white`}
                    >
                      <ChevronLeft size={20} strokeWidth={1.6} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next capabilities"
                      disabled={edges.end}
                      onClick={() => slide(1)}
                      className={`${ROUND_BUTTON} bg-blue text-white hover:bg-cyan hover:text-ink`}
                    >
                      <ChevronRight size={20} strokeWidth={1.6} aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <p className="m-0 max-w-[88ch] text-[length:var(--fs-h3)] leading-[1.45] text-ink/80 text-pretty min-[860px]:pt-[0.4em]">
                  Select a capability to see its scope, the technical value it
                  delivers and the systems behind it.
                </p>
              </div>
            </div>
          </div>

          {/* The slider. Full width and left-padded to the content line, so
              the cards run off the right edge like the reference. */}
          <ul
            ref={scroller}
            onScroll={updateEdges}
            tabIndex={0}
            aria-label="Capabilities"
            className="m-0 mt-[length:var(--gap-block)] flex list-none snap-x snap-mandatory gap-[length:var(--card-gap)] overflow-x-auto scroll-pl-[length:var(--content-pad)] pb-[clamp(24px,3vw,44px)] pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {capabilities.map((item, index) => (
              <li
                key={item.n}
                className="w-[clamp(250px,25vw,350px)] shrink-0 snap-start"
              >
                {/* The whole card is one button; the round arrow on the seam is
                    its visible handle. Spans, not blocks, because a button may
                    only hold phrasing content. */}
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => openAt(index)}
                  className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
                >
                  <span className="relative block aspect-[3/2] overflow-hidden bg-ink">
                    <Image
                      src={item.image.src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 70vw, 350px"
                      className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none"
                      style={{ objectPosition: item.image.position ?? "center" }}
                    />
                  </span>

                  <span className="relative flex h-[var(--cap-h)] flex-col justify-center gap-[0.4em] border border-t-0 border-blue/10 bg-white px-[clamp(18px,2vw,28px)] shadow-[0_18px_40px_-20px_rgba(10,25,45,0.28)]">
                    <span
                      aria-hidden="true"
                      className="mb-[0.5em] block size-[10px] border border-ink/70"
                    />
                    <span className="block text-[length:var(--fs-h3)] leading-[1.15] text-ink">
                      {item.category}
                    </span>
                    <span className="line-clamp-2 block text-[length:var(--fs-small)] leading-[1.4] text-ink/60">
                      {item.services.map((service) => service.title).join(" · ")}
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute right-[clamp(14px,1.6vw,22px)] top-0 grid size-[clamp(40px,3.2vw,48px)] -translate-y-1/2 place-items-center rounded-full bg-blue text-white transition-colors duration-300 group-hover:bg-cyan group-hover:text-ink"
                    >
                      <ArrowRight size={18} strokeWidth={1.7} />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {children ? (
        <div className={INNER}>
          <div
            className={`${CONTENT_MAX} flex justify-center pt-[length:var(--section-pad)]`}
          >
            {children}
          </div>
        </div>
      ) : null}

      {/* ---- Side panel -------------------------------------------------- */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[100] transition-[visibility] duration-500 ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={close}
          className={`absolute inset-0 bg-ink/55 transition-opacity duration-500 motion-reduce:transition-none ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-labelledby="capability-panel-title"
          inert={!open}
          className={`absolute inset-y-0 right-0 flex w-[min(1000px,100vw)] flex-col bg-white text-ink shadow-[-24px_0_60px_-20px_rgba(10,25,45,0.4)] transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] motion-reduce:transition-none min-[860px]:flex-row ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Photograph */}
          <div className="relative h-[clamp(160px,28vh,260px)] shrink-0 overflow-hidden bg-ink min-[860px]:h-auto min-[860px]:w-[40%]">
            <Image
              key={cap.n}
              src={cap.image.src}
              alt={cap.image.alt}
              fill
              sizes="(max-width: 860px) 100vw, 400px"
              className="animate-hh-fade object-cover"
              style={{ objectPosition: cap.image.position ?? "center" }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,38,66,0.8)_0%,rgba(14,38,66,0)_55%)]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-[clamp(10px,1.4vw,20px)] left-[clamp(16px,2vw,28px)] text-[length:var(--fs-h1)] font-bold leading-none text-white/90"
            >
              {cap.n}
            </span>
          </div>

          {/* Content */}
          <div className="flex min-h-0 min-w-0 flex-1 flex-col">
            <div className="flex items-center justify-between gap-[length:var(--gap)] border-b border-blue/10 px-[clamp(20px,3vw,40px)] py-[clamp(12px,1.4vw,18px)]">
              <p className="m-0 text-[length:var(--fs-small)] font-bold uppercase tracking-[0.12em] text-blue/70">
                {cap.n} / {String(count).padStart(2, "0")}
              </p>

              <div className="flex items-center gap-[0.5em]">
                <button
                  type="button"
                  aria-label="Previous capability"
                  onClick={() => step(-1)}
                  className="grid size-10 place-items-center rounded-full bg-[#f0f2f5] text-blue transition-colors duration-300 hover:bg-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                >
                  <ChevronLeft size={18} strokeWidth={1.6} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Next capability"
                  onClick={() => step(1)}
                  className="grid size-10 place-items-center rounded-full bg-[#f0f2f5] text-blue transition-colors duration-300 hover:bg-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                >
                  <ChevronRight size={18} strokeWidth={1.6} aria-hidden="true" />
                </button>
                <button
                  ref={closeButton}
                  type="button"
                  aria-label="Close"
                  onClick={close}
                  className="ml-[0.5em] grid size-10 place-items-center rounded-full bg-blue text-white transition-colors duration-300 hover:bg-cyan hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                >
                  <X size={18} strokeWidth={1.7} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div
              ref={body}
              className="min-h-0 flex-1 overflow-y-auto px-[clamp(20px,3vw,40px)] py-[length:var(--gap-block)]"
            >
              <h2
                id="capability-panel-title"
                className="m-0 text-[length:var(--fs-h3)] uppercase"
              >
                {cap.category}
              </h2>

              <div className="mt-[length:var(--gap-block)] flex flex-col gap-[length:var(--gap-block)]">
                {cap.services.map((service) => (
                  <section key={service.title}>
                    <h3 className="m-0 text-[length:var(--fs-lead)] font-bold text-blue">
                      {service.title}
                    </h3>
                    <FieldList fields={service.fields} />
                  </section>
                ))}
              </div>

              <a
                href="/#contact"
                className="mt-[length:var(--gap-block)] inline-flex w-fit items-center gap-[0.9em] rounded-full bg-blue px-[1.5em] py-[0.8em] text-[length:var(--fs-nav,16px)] text-white no-underline transition-colors duration-300 hover:bg-cyan hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
              >
                Let&rsquo;s Connect
                <ArrowRight size={14} strokeWidth={1.7} aria-hidden="true" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
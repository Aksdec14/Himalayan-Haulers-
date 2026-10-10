"use client";

import Image from "next/image";
import { useState } from "react";

type Solution = {
  id: string;
  /** Full title, shown when the panel is open. */
  title: string;
  /** Short label, set vertically when the panel is closed. A closed panel is
   *  narrow, so the full title would not fit along its height. */
  short: string;
  body: string;
  image: { src: string; alt: string };
};

/* Paths are from public/ root. Three photos exist so far, so some panels share
   one; give each solution its own file here when you have it. `alt` names the
   subject of the photo rather than the capability. */
const SOLUTIONS: Solution[] = [
  {
    id: "logistics",
    title: "Logistics & Last-Mile Delivery",
    short: "Logistics",
    body: "Materials, rations and medicine to remote sites, no road needed.",
    image: {
      src: "/media/Logistics.jpeg",
      alt: "Heavy-lift drone carrying a payload",
    },
  },
  {
    id: "stringing",
    title: "Drone-Based Tower Stringing",
    short: "Tower Stringing",
    body: "Pilot lines laid across towers by drone, with no risky climbs.",
    image: {
      src: "/media/Tower-stringing.jpeg",
      alt: "Drone laying a pilot line across a tower",
    },
  },
  {
    id: "confined-space",
    title: "Confined Space Inspection",
    short: "Confined Space",
    body: "Drones fly inside tanks and boilers so nobody has to enter.",
    image: {
      src: "/media/Inspection.jpeg",
      alt: "Drone inspecting an industrial structure",
    },
  },
  {
    id: "visual-thermal",
    title: "Visual & Thermal Inspection",
    short: "Visual & Thermal",
    body: "Stacks, pipelines and tanks inspected from the air.",
    image: {
      src: "/media/Inspection.jpeg",
      alt: "Drone inspecting an industrial stack",
    },
  },
  {
    id: "ultrasonic",
    title: "Thickness & Coating Measurement",
    short: "Thickness",
    body: "Contact UT and coating readings on structures at height.",
    image: {
      src: "/media/Inspection.jpeg",
      alt: "Drone taking a contact reading on a structure at height",
    },
  },
  {
    id: "survey",
    title: "Survey & Sensing",
    short: "Survey & Sensing",
    body: "Bathymetry, GPR and methane detection from the air.",
    image: {
      src: "/media/Logistics.jpeg",
      alt: "Drone surveying terrain",
    },
  },
];

/* Cards shown at once. The arrows below the row page through the rest, so six
   solutions are two pages of three. */
const PER_PAGE = 3;
const PAGE_COUNT = Math.ceil(SOLUTIONS.length / PER_PAGE);

/* Theme is unchanged: navy and white with a cyan accent. The reference's black
   open panel becomes the site's navy (--blue) with a cyan title, and its light
   grey closed panels become the #f4f7fa tint "What We Provide" already uses.

   Same type multipliers as WhatWeProvide, so the two sections set identical type
   at identical levels. */
/* Top and bottom padding differ deliberately. BannerPower follows this section
   directly and carries no padding of its own, so the full section pad below left
   a large white band above the banner. The bottom is halved to close that gap
   while keeping the full pad above, where it separates the section from
   WhatWeProvide. */
const SECTION =
  "bg-white text-[color:var(--blue)] pt-[length:var(--section-pad)] pb-[length:calc(var(--section-pad)*0.45)] [--fs-h2:calc(var(--fs-h2)*1.6)] [--fs-lead:calc(var(--fs-lead)*1.45)] [--fs-h3:calc(var(--fs-h3)*1.35)] [--fs-body:calc(var(--fs-body)*1.18)] [--fs-small:calc(var(--fs-small)*1.2)]";

/* Left-anchored: --content-pad is --hero-left, so the heading shares the vertical
   line of the navbar logo and the hero headline. */
const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

const HEADLINE =
  "m-0 text-[length:var(--fs-h1)] uppercase text-[color:var(--blue)] min-[1100px]:whitespace-nowrap";

const SUBHEAD =
  "mt-[length:var(--ry)] mb-0 max-w-[46ch] text-[length:var(--fs-lead)] leading-[1.45] text-[color:var(--blue)]/75 text-pretty";

/* ---- Accordion --------------------------------------------------------------
   One row of panels. The open panel takes 3 shares of the width and each closed
   panel 1, and the change is animated on flex-grow, which is what makes the open
   panel slide wider while its neighbours narrow. Below 900px the row becomes a
   plain stack with every panel open: a vertical label has no room on a phone and
   there is no hover to open anything. */
const ROW =
  "flex gap-[clamp(8px,1vw,16px)] mt-[length:var(--ry)] mb-0 mx-0 p-0 list-none h-[clamp(340px,29vw,440px)] max-[900px]:h-auto max-[900px]:flex-col";

const PANEL_BASE =
  "relative min-w-0 overflow-hidden rounded-[clamp(16px,1.6vw,24px)] outline-none transition-[flex-grow,background-color,color] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-[color:var(--cyan)] focus-visible:ring-offset-2 max-[900px]:flex-none max-[900px]:bg-[color:var(--blue)] max-[900px]:text-white";

const PANEL_OPEN = "flex-[3_1_0%] bg-[color:var(--blue)] text-white";
const PANEL_CLOSED = "flex-[1_1_0%] bg-[#f4f7fa] text-[color:var(--blue)] cursor-pointer";

/* Closed-panel label, set top-to-bottom down the panel's right edge as in the
   reference. It fades out first when a panel opens and in last when it closes, so
   it never overlaps the open panel's content. */
const VERTICAL_LABEL =
  "absolute right-[clamp(14px,1.4vw,22px)] top-[clamp(18px,2vw,30px)] [writing-mode:vertical-rl] whitespace-nowrap font-semibold text-[length:calc(var(--fs-h3)*0.8)] transition-opacity duration-300 motion-reduce:transition-none max-[900px]:hidden";

/* Open-panel text. Closed panels hide it with visibility as well as opacity, so
   its link cannot be tabbed to while invisible. */
const CONTENT_BASE =
  "absolute inset-x-0 top-0 p-[clamp(18px,2.2vw,32px)] transition-[opacity,visibility] duration-[400ms] motion-reduce:transition-none max-[900px]:static max-[900px]:visible max-[900px]:opacity-100";

const CONTENT_OPEN = "visible opacity-100 delay-200";
const CONTENT_CLOSED = "invisible opacity-0 delay-0";

const TITLE_ROW = "flex items-start justify-between gap-4";

const ITEM_TITLE = "m-0 text-[length:var(--fs-h3)] text-[color:var(--cyan)]";

const ITEM_BODY =
  "mt-[0.6em] mb-0 max-w-[40ch] text-[length:var(--fs-body)] leading-[1.4] text-white/80 text-pretty";

/* The reference's square arrow button, linking to the enquiry form. */
const ARROW =
  "grid h-[clamp(36px,3vw,46px)] w-[clamp(36px,3vw,46px)] shrink-0 place-items-center rounded-md border border-white/70 text-white transition-colors hover:bg-white hover:text-[color:var(--blue)] focus-visible:bg-white focus-visible:text-[color:var(--blue)]";

/* The picture fills the bottom half of the panel. It sits a touch zoomed while the
   panel is closed and settles to full size as it opens. */
const IMAGE_WRAP =
  "absolute inset-x-0 bottom-0 h-[46%] overflow-hidden max-[900px]:relative max-[900px]:h-[clamp(180px,42vw,280px)]";

/* ---- Pager ------------------------------------------------------------------ */

const PAGER = "flex items-center gap-[clamp(12px,1.4vw,20px)] mt-[length:var(--ry)]";

/* Same square, outlined button as the panel arrow, in navy for the white page.
   Disabled at either end rather than wrapping, so the arrows always say which way
   is left to go. */
const PAGER_BTN =
  "grid h-[clamp(40px,3.2vw,52px)] w-[clamp(40px,3.2vw,52px)] place-items-center rounded-md border border-[color:var(--blue)]/40 bg-transparent text-[color:var(--blue)] cursor-pointer transition-colors hover:bg-[color:var(--blue)] hover:text-white focus-visible:bg-[color:var(--blue)] focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--cyan)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[color:var(--blue)]";

const PAGER_COUNT = "text-[length:var(--fs-small)] font-semibold tracking-[0.04em] text-[color:var(--blue)]/70";

/**
 * "Solutions" — a row of image panels. Hover (or focus, or tap) one and it opens
 * wide with its full title and description while the others narrow to a vertical
 * label.
 *
 * Client component: it holds one piece of state, which panel is open.
 */
export default function Solutions() {
  const [page, setPage] = useState(0);
  const [active, setActive] = useState(0);

  const start = page * PER_PAGE;
  const visible = SOLUTIONS.slice(start, start + PER_PAGE);

  /* Changing page also resets which panel is open, so a new page always starts
     with its first card open. */
  const goTo = (next: number) => {
    setPage(next);
    setActive(0);
  };

  return (
    <section id="solutions" className={SECTION} aria-labelledby="solutions-title">
      <div className={INNER}>
        <div className="[animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both]">
          <h2 id="solutions-title" className={HEADLINE}>
            Built for the Hard-to-Reach
          </h2>
          <p className={SUBHEAD}>
            The right drone, sensor and crew for work at height, at distance or
            in confined spaces.
          </p>
        </div>

        <ul
          key={page}
          className={`${ROW} [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [animation-delay:150ms]`}
        >
          {visible.map((item, index) => {
            const open = index === active;
            return (
              <li
                key={item.id}
                tabIndex={0}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`${PANEL_BASE} ${open ? PANEL_OPEN : PANEL_CLOSED}`}
              >
                <span
                  aria-hidden="true"
                  className={`${VERTICAL_LABEL} ${
                    open ? "opacity-0 delay-0" : "opacity-100 delay-300"
                  }`}
                >
                  {item.short}
                </span>

                <div
                  className={`${CONTENT_BASE} ${
                    open ? CONTENT_OPEN : CONTENT_CLOSED
                  }`}
                >
                  <div className={TITLE_ROW}>
                    <h3 className={ITEM_TITLE}>{item.title}</h3>
                    <a
                      href="/contact"
                      aria-label={`Enquire about ${item.title}`}
                      className={ARROW}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  </div>
                  <p className={ITEM_BODY}>{item.body}</p>
                </div>

                <div className={IMAGE_WRAP}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    className={`object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none max-[900px]:scale-100 ${
                      open ? "scale-100" : "scale-110"
                    }`}
                  />
                </div>
              </li>
            );
          })}
        </ul>

        <div className={PAGER}>
          <button
            type="button"
            className={PAGER_BTN}
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            aria-label="Show previous solutions"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>

          <button
            type="button"
            className={PAGER_BTN}
            onClick={() => goTo(page + 1)}
            disabled={page === PAGE_COUNT - 1}
            aria-label="Show next solutions"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>

          <span className={PAGER_COUNT} aria-live="polite">
            {start + 1}&ndash;{start + visible.length} of {SOLUTIONS.length}
          </span>
        </div>
      </div>
    </section>
  );
}
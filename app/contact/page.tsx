import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

/* app/contact/page.tsx
   The contact page body only. The navbar and footer are not rendered here: they
   belong in app/layout.tsx so every page shares them. */

export const metadata: Metadata = {
  title: "Contact | Himalayan Haulers",
  description:
    "Tell us what you need to carry, inspect or survey, and where. Our team will get back with the right drone, the right plan and a clear quote.",
};

/* Where the forms post. Point these at your own endpoints (API routes, a form
   service, etc.). Both forms are plain HTML with native validation, so the page
   needs no client JavaScript and stays a server component. */
const ENQUIRY_ACTION = "/api/enquiry";
const NEWSLETTER_ACTION = "/api/newsletter";

const CONTACT = {
  name: "Arjun Naik",
  phone: "+91 78998 01210",
  email: "arjun@himalayanhaulers.com",
  hq: "HQ: Bangalore",
  manufacturing: "Manufacturing: Tirupati",
};

/* OpenStreetMap embed: free, no API key, no billing, and the iframe is the
   documented way to embed it, so it is safe to ship. The marker is at the centre
   of Bangalore for now. To pin the real office, set MAP_LAT / MAP_LON (right-click
   the spot on openstreetmap.org and copy the coordinates).

   Prefer Google? Open the address on maps.google.com, click Share, then "Embed a
   map", and paste the iframe's src into MAP_SRC instead. That is Google's own
   no-key embed. */
const MAP_LAT = 12.9716;
const MAP_LON = 77.5946;
const MAP_SPAN = 0.04; // how far the view extends from the marker, in degrees

const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${MAP_LON - MAP_SPAN}%2C${MAP_LAT - MAP_SPAN / 2}%2C${MAP_LON + MAP_SPAN}%2C${MAP_LAT + MAP_SPAN / 2}&layer=mapnik&marker=${MAP_LAT}%2C${MAP_LON}`;

const INTERESTS = [
  "Buy a drone",
  "Logistics Drone as a Service",
  "Drone inspection",
  "Tower stringing",
  "Survey & sensing",
  "Defence",
  "Other",
];

const INDUSTRY_OPTIONS = ["Power", "Energy", "Defence", "Construction", "Other"];

/* ---- Shared ------------------------------------------------------------------
   SIZES: the site's raw --fs-* rungs are left untouched. This page defines its
   own, slightly larger rungs under different names (--c-small, --c-body,
   --c-lead, --c-h3), each a multiple of the matching --fs-* value. They must NOT
   reuse the --fs-* names: `--fs-h2: calc(var(--fs-h2) * 1.6)` reads the property
   it is defining, which is a cycle, so the browser discards it.

   To change how much larger the text is, edit the multipliers below
   (1.15 = a bit larger, 1.25 = noticeably larger, 1.05 = subtle).

   --gap is the one spacing unit for stacks inside a card, so every gap in the
   info card is the same distance. */
const PAGE =
  "bg-white text-blue [--gap:clamp(14px,1.6vw,24px)] [--c-small:calc(var(--fs-small)*1.15)] [--c-body:calc(var(--fs-body)*1.15)] [--c-lead:calc(var(--fs-lead)*1.1)] [--c-h3:calc(var(--fs-h3)*1.15)]";

/* On small screens (640px and below) the content starts 20px from the left
   edge, instead of the wide --content-pad line the navbar logo uses. */
const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))] max-[640px]:pl-5 max-[640px]:pr-5";

/* Info column left, wide column right, stacking below 900px. Used by both rows
   that follow the hero, so the two rows share one column line. */
const SPLIT =
  "grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-x-[clamp(24px,4vw,64px)] gap-y-[clamp(24px,3vw,40px)] max-w-[length:var(--content-max,1200px)] max-[900px]:grid-cols-1";

/* ---- Hero --------------------------------------------------------------------
   A navy band with a darkened photo behind it. The top padding clears the fixed
   navbar that layout.tsx renders above the page. */
const HERO =
  "relative isolate overflow-hidden bg-blue text-white pt-[clamp(104px,11vw,160px)] pb-[clamp(72px,8vw,120px)] text-center max-[640px]:text-left";

/* Wide enough for the larger headline; the paragraph keeps its own narrower measure. */
const HERO_INNER =
  "mx-auto max-w-[950px] px-[clamp(20px,5vw,64px)] max-[640px]:mx-0 max-[640px]:px-5";

const HERO_TITLE =
  "m-0 text-[length:calc(var(--fs-h1))] uppercase leading-[1.1] text-white text-balance";

const HERO_RULE = "mx-auto mt-[clamp(16px,2vw,28px)] mb-0 max-[640px]:mx-0 h-px w-[clamp(120px,16vw,220px)] border-0 bg-white/50";

const HERO_TEXT =
  "mx-auto mt-[clamp(14px,1.8vw,24px)] mb-0 max-[640px]:mx-0 max-w-[56ch] text-[length:var(--c-lead)] leading-[1.38] text-white/80 text-pretty";

/* Ink on cyan is 5.4:1; white on cyan fails at this size. */
const CTA =
  "mt-[clamp(20px,2.6vw,36px)] inline-block rounded-[4px] bg-cyan px-8 py-[0.85em] text-[length:var(--c-body)] font-bold tracking-[0.04em] uppercase text-ink no-underline transition-[filter,transform] duration-200 hover:brightness-95 motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/* ---- Enquiry row -------------------------------------------------------------
   Light grey surface. The info card is pulled up over the hero's lower edge, as in
   the reference. */
const ENQUIRY = "bg-[#f4f7fa] pb-[clamp(40px,5vw,72px)]";

/* The card is a column: details on top, photograph below. On desktop it is as
   tall as the form beside it, and the photograph is the part that grows, so
   there is never an empty gap between the two. */
const CARD =
  "relative z-[1] -mt-[clamp(40px,5vw,80px)] flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.08)] max-[900px]:-mt-8";

/* Same padding on all four sides, and one gap between everything inside, so the
   name, the three details and the photograph are evenly spaced. */
const CARD_BODY =
  "flex flex-col gap-[length:var(--gap)] p-[clamp(20px,2.4vw,32px)]";

const CARD_NAME = "m-0 text-[length:var(--c-h3)] text-blue";

/* The photograph fills whatever height is left in the card. On a stacked layout
   there is no spare height, so it takes a fixed ratio instead. */
const CARD_PHOTO =
  "relative aspect-[4/3] w-full min-[901px]:aspect-auto min-[901px]:min-h-[clamp(220px,22vw,320px)] min-[901px]:flex-1";

const ROW = "m-0 flex items-start gap-3";
const ICON = "mt-[0.2em] shrink-0 text-cyan";
const LINE = "m-0 text-[length:var(--c-small)] leading-[1.4] text-blue/80 break-words";
const LINK =
  "text-blue underline decoration-blue/30 underline-offset-4 transition-colors hover:decoration-cyan focus-visible:decoration-cyan";

const FORM_WRAP = "pt-[clamp(28px,3.5vw,56px)]";

const FORM_TITLE = "m-0 text-[length:var(--c-h3)] text-blue";

const FORM =
  "mt-[clamp(18px,2.2vw,32px)] grid grid-cols-2 gap-x-[clamp(16px,2.4vw,32px)] gap-y-[clamp(16px,1.8vw,26px)] max-[560px]:grid-cols-1";

const FIELD = "flex min-w-0 flex-col gap-[0.4em]";
const FULL = "col-span-2 max-[560px]:col-span-1";

const LABEL =
  "truncate text-[length:var(--c-small)] font-semibold tracking-normal normal-case text-blue/80";

/* Underline-only fields, on the light grey surface. The rule goes cyan on focus;
   the default outline is replaced by that rule plus a 1px cyan shadow, so keyboard
   focus stays visible. 16px at phone width stops iOS zooming on focus. */
const CONTROL =
  "w-full min-w-0 rounded-none border-0 border-b border-solid border-blue/30 bg-transparent px-0 py-[0.5em] text-[length:var(--c-body)] text-blue outline-none transition-colors placeholder:text-blue/40 focus:outline-none focus-visible:outline-none focus:border-cyan focus-visible:border-cyan focus-visible:shadow-[0_1px_0_0_var(--color-cyan)] max-[560px]:text-[16px]";

const SELECT = `${CONTROL} appearance-none cursor-pointer pr-[1.5em] bg-[length:0.6em] bg-[position:right_0.2em_center] bg-no-repeat bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%206'%3E%3Cpath%20d='M1%201l4%204%204-4'%20fill='none'%20stroke='%2313294b'%20stroke-width='1.5'/%3E%3C/svg%3E")]`;

const TEXTAREA = `${CONTROL} min-h-[6em] resize-y leading-[1.4]`;

const SUBMIT =
  "self-start rounded-[4px] bg-cyan px-8 py-[0.85em] text-[length:var(--c-body)] font-bold tracking-[0.04em] uppercase text-ink cursor-pointer transition-[filter,transform] duration-200 hover:brightness-95 motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue max-[560px]:w-full max-[560px]:self-stretch";

const SMALL_PRINT = "m-0 text-[length:var(--c-small)] text-blue/65";

/* ---- Stay in touch + map ---------------------------------------------------- */

const MAP_ROW = "bg-[#f4f7fa] pb-[clamp(40px,5vw,72px)]";

const NEWSLETTER =
  "flex flex-col justify-center rounded-lg bg-blue p-[clamp(20px,2.4vw,32px)] text-white";

const NEWSLETTER_TITLE = "m-0 text-[length:var(--c-h3)] text-white";

const NEWSLETTER_TEXT =
  "mt-[0.6em] mb-0 text-[length:var(--c-small)] leading-[1.4] text-white/80";

const NEWSLETTER_FORM = "mt-[clamp(14px,1.6vw,22px)] flex";

const NEWSLETTER_INPUT =
  "min-w-0 flex-1 rounded-l-[4px] border-0 bg-white px-4 py-[0.8em] text-[length:var(--c-small)] text-blue outline-none placeholder:text-blue/50 focus-visible:outline-2 focus-visible:outline-cyan max-[560px]:text-[16px]";

const NEWSLETTER_BTN =
  "grid w-[clamp(44px,3.6vw,54px)] shrink-0 cursor-pointer place-items-center rounded-r-[4px] border-0 bg-cyan text-ink transition-[filter] hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const MAP_FRAME =
  "h-[clamp(240px,24vw,340px)] w-full overflow-hidden rounded-lg border-0 bg-blue/10 grayscale-[0.4]";

/**
 * Contact page — hero, then the contact details beside the enquiry form, then the
 * newsletter card beside a map. Navbar and footer are deliberately left to the
 * layout.
 *
 * Server component. Both forms post natively; nothing here needs client state.
 */
export default function ContactPage() {
  return (
    <main className={PAGE}>
      {/* Hero */}
      <section className={HERO} aria-labelledby="contact-title">
        <Image
          src="/media/Inspection.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-blue/80" aria-hidden="true" />

        <div className={`${HERO_INNER} animate-hh-fade`}>
          <h1 id="contact-title" className={HERO_TITLE}>
            Let&rsquo;s Move Something Impossible
          </h1>
          <hr className={HERO_RULE} />
          <p className={HERO_TEXT}>
            Tell us what you need to carry, inspect or survey, and where. Our
            team will get back with the right drone, the right plan and a clear
            quote.
          </p>
          <a href="#enquiry" className={CTA}>
            Request a Quote
          </a>
        </div>
      </section>

      {/* Contact details + enquiry form */}
      <section id="enquiry" className={ENQUIRY} aria-label="Enquiry">
        <div className={INNER}>
          <div className={SPLIT}>
            <aside className={`${CARD} animate-hh-fade`}>
              <div className={CARD_BODY}>
                <p className={CARD_NAME}>{CONTACT.name}</p>

                <address className="m-0 flex flex-col gap-[length:var(--gap)] not-italic">
                  <p className={ROW}>
                    <Mail size={16} className={ICON} aria-hidden="true" />
                    <a href={`mailto:${CONTACT.email}`} className={`${LINE} ${LINK}`}>
                      {CONTACT.email}
                    </a>
                  </p>
                  <p className={ROW}>
                    <Phone size={16} className={ICON} aria-hidden="true" />
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className={`${LINE} ${LINK}`}
                    >
                      {CONTACT.phone}
                    </a>
                  </p>
                  <p className={ROW}>
                    <MapPin size={16} className={ICON} aria-hidden="true" />
                    <span className={LINE}>
                      {CONTACT.hq}
                      <br />
                      {CONTACT.manufacturing}
                    </span>
                  </p>
                </address>

                {/* The social row was removed: every one of its anchors was
                    href="#", so none of them went anywhere. Restore it when the
                    company's real profile URLs are known. */}
              </div>

              <div className={CARD_PHOTO}>
                <Image
                  src="/media/Inspection.jpeg"
                  alt="Heavy-lift drone at work"
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            </aside>

            <div className={`${FORM_WRAP} animate-hh-fade [animation-delay:150ms]`}>
              <h2 className={FORM_TITLE}>Send us your enquiry</h2>

              <form className={FORM} action={ENQUIRY_ACTION} method="post">
                <div className={FIELD}>
                  <label htmlFor="enq-name" className={LABEL}>
                    Full name *
                  </label>
                  <input
                    id="enq-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={CONTROL}
                  />
                </div>

                <div className={FIELD}>
                  <label htmlFor="enq-company" className={LABEL}>
                    Company / organisation *
                  </label>
                  <input
                    id="enq-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    required
                    className={CONTROL}
                  />
                </div>

                <div className={FIELD}>
                  <label htmlFor="enq-email" className={LABEL}>
                    Email *
                  </label>
                  <input
                    id="enq-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={CONTROL}
                  />
                </div>

                <div className={FIELD}>
                  <label htmlFor="enq-phone" className={LABEL}>
                    Phone *
                  </label>
                  <input
                    id="enq-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className={CONTROL}
                  />
                </div>

                <div className={FIELD}>
                  <label htmlFor="enq-interest" className={LABEL}>
                    I&rsquo;m interested in
                  </label>
                  <select
                    id="enq-interest"
                    name="interest"
                    defaultValue=""
                    className={SELECT}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {INTERESTS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={FIELD}>
                  <label htmlFor="enq-industry" className={LABEL}>
                    Industry
                  </label>
                  <select
                    id="enq-industry"
                    name="industry"
                    defaultValue=""
                    className={SELECT}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {INDUSTRY_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={`${FIELD} ${FULL}`}>
                  <label htmlFor="enq-requirement" className={LABEL}>
                    Tell us about your requirement *
                  </label>
                  <textarea
                    id="enq-requirement"
                    name="requirement"
                    required
                    rows={4}
                    placeholder="Payload, distance, altitude, location"
                    className={TEXTAREA}
                  />
                </div>

                <div className={`${FULL} flex flex-col gap-[clamp(12px,1.4vw,18px)]`}>
                  <button type="submit" className={SUBMIT}>
                    Send Enquiry
                  </button>
                  <p className={SMALL_PRINT}>
                    We usually reply within one working day.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stay in touch + map */}
      <section className={MAP_ROW} aria-label="Newsletter and location">
        <div className={INNER}>
          <div className={SPLIT}>
            <div className={`${NEWSLETTER} animate-hh-fade`}>
              <h2 className={NEWSLETTER_TITLE}>Stay in touch</h2>
              <p className={NEWSLETTER_TEXT}>
                Subscribe to our newsletter and we&rsquo;ll keep you informed
                about new drones and services.
              </p>
              <form className={NEWSLETTER_FORM} action={NEWSLETTER_ACTION} method="post">
                <label htmlFor="news-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="news-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Your email"
                  className={NEWSLETTER_INPUT}
                />
                <button type="submit" className={NEWSLETTER_BTN} aria-label="Subscribe">
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
              </form>
            </div>

            <iframe
              title="Himalayan Haulers headquarters, Bangalore"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={`${MAP_FRAME} animate-hh-fade [animation-delay:150ms]`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
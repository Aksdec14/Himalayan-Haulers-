import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

/* app/contact/page.tsx
   The contact page body only. The navbar and footer are not rendered here: they
   belong in app/layout.tsx so every page shares them. */

export const metadata: Metadata = {
  title: "Contact | Himalayan Haulers",
  description:
    "Tell us what you need to carry, inspect or survey, and where. Our team will get back with the right drone, the right plan and a clear quote.",
};

/* Where the form posts. Point this at your own endpoint. The form is plain HTML
   with native validation, so the page needs no client JavaScript. */
const ENQUIRY_ACTION = "/api/enquiry";

const CONTACT = {
  phone: "+91 91487 67910",
  email: "sales@himalayanhaulers.com",
  location: "Bangalore, Tirupati, Leh, Noida",
};

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
   SIZES: the --c-* rungs are this page's own steps. They must NOT reuse the
   --fs-* names, because a custom property that reads itself is a cycle and the
   browser discards it. */
const PAGE =
  "bg-white text-[color:var(--ink)] [--c-small:calc(var(--fs-small)*1.1)] [--c-body:calc(var(--fs-body)*1.08)] [--c-lead:calc(var(--fs-lead)*1.0)] [--c-h3:calc(var(--fs-h3)*1.1)]";

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))] max-[640px]:pl-5 max-[640px]:pr-5";

/* ---- Hero --------------------------------------------------------------------
   Two zones on desktop: copy (left), glass form (right). The background was a
   photograph behind the copy; it is now a soft blue tint, so the section reads
   as a distinct band without an image competing with the form. */
const HERO =
  "relative isolate overflow-hidden bg-gradient-to-br from-[color:var(--blue)]/6 via-[color:var(--blue)]/3 to-sky-100/70 pt-[clamp(28px,4vw,64px)] pb-[clamp(48px,7vw,112px)]";

const EYEBROW =
  "m-0 flex items-center gap-4 text-[length:var(--c-small)] font-medium uppercase tracking-[0.3em] text-[color:var(--ink)]/50";

const HERO_TITLE =
  "m-0 text-balance text-[length:calc(var(--fs-h1)*0.78)] font-extrabold uppercase leading-[1] tracking-tight text-[color:var(--ink)]";

const HERO_LEAD =
  "m-0 max-w-[40ch] text-[length:var(--c-lead)] leading-[1.4] text-[color:var(--ink)]/80 text-pretty";

/* Opaque white card, not glass: the form has to read as solid white behind
   every label and field, so there is no translucency and no backdrop blur for
   the photo to bleed through. The hairline border is what separates the card
   from the page's own near-white backdrop — a white border would vanish. */
const GLASS =
  "border border-[color:var(--blue)]/10 bg-white shadow-[0_30px_60px_-28px_rgba(20,70,140,0.35)]";

const FORM_TITLE =
  "m-0 text-[length:calc(var(--c-h3)*1.15)] font-extrabold leading-tight text-[color:var(--ink)]";

const FORM =
  "mt-[clamp(8px,1vw,14px)] grid grid-cols-2 gap-x-[clamp(12px,1.4vw,20px)] gap-y-[clamp(8px,0.9vw,12px)] max-[560px]:grid-cols-1";

const FIELD = "flex min-w-0 flex-col gap-[0.3em]";
const FULL = "col-span-2 max-[560px]:col-span-1";

const LABEL =
  "text-[length:var(--c-small)] font-semibold normal-case tracking-normal text-[color:var(--ink)]";

/* Boxed fields on solid white — the card behind them is already white, so a
   translucent fill would only tint the labels sitting on top of it.
   16px at phone width stops iOS zooming on focus. */
const CONTROL =
  "w-full min-w-0 rounded-lg border border-[color:var(--blue)]/15 bg-white px-3.5 py-[0.45em] text-[length:var(--c-small)] text-[color:var(--ink)] outline-none transition-colors placeholder:text-[color:var(--ink)]/40 focus:border-[color:var(--cyan)] focus-visible:border-[color:var(--cyan)] focus-visible:shadow-[0_0_0_1px_var(--cyan)] max-[560px]:text-[16px]";

const SELECT = `${CONTROL} appearance-none cursor-pointer pr-10 bg-[length:0.7em] bg-[position:right_1em_center] bg-no-repeat bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%206'%3E%3Cpath%20d='M1%201l4%204%204-4'%20fill='none'%20stroke='%2313294b'%20stroke-width='1.5'/%3E%3C/svg%3E")]`;

const TEXTAREA = `${CONTROL} min-h-[3.4em] resize-y leading-[1.35]`;

/* White label on the cyan->blue gradient: the dark end of the ramp swallowed
   the ink-coloured text, so contrast dropped exactly where the button was
   deepest. */
const SUBMIT =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[color:var(--cyan)] to-[color:var(--blue)] px-7 py-[0.6em] text-[length:var(--c-small)] font-bold uppercase tracking-[0.06em] text-white shadow-[0_10px_24px_-10px_rgba(20,100,200,0.6)] cursor-pointer transition-[filter,transform] duration-200 hover:brightness-105 motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--blue)] max-[560px]:w-full";

const SMALL_PRINT = "m-0 text-[length:calc(var(--c-small)*0.9)] text-[color:var(--ink)]/60";

const ROW_ICON =
  "grid size-[clamp(38px,2.8vw,44px)] shrink-0 place-items-center rounded-full bg-gradient-to-br from-white to-[color:var(--blue)]/10 text-[color:var(--blue)] shadow-[0_6px_14px_-6px_rgba(20,70,140,0.35),inset_0_1px_0_rgba(255,255,255,0.9)]";

/* The text side of a contact row. Rows 1 and 2 carry the divider under them. */
const ROW_BODY = "flex min-w-0 flex-1 items-center py-1.5";
const ROW_DIVIDER = "border-b border-[color:var(--ink)]/15";

const ROW_TEXT =
  "text-[length:var(--c-lead)] text-[color:var(--ink)] transition-colors break-words";

/**
 * Contact page: a hero with copy and contact details left, a faded photo in the
 * middle and a glass enquiry form right.
 *
 * Server component. The form posts natively; nothing here needs client state.
 */
export default function ContactPage() {
  return (
    <main className={PAGE}>
      <section className={HERO} aria-labelledby="contact-title">
        <div
          className={`${INNER} grid items-center gap-[clamp(20px,3vw,36px)] min-[1100px]:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] min-[1100px]:gap-[clamp(32px,5vw,96px)]`}
        >
          {/* Left: copy + contact rows */}
          <div className="flex [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] flex-col gap-[clamp(8px,1vw,14px)]">
            <p className={EYEBROW}>
              <span
                aria-hidden="true"
                className="block h-[2px] w-14 shrink-0 bg-[color:var(--cyan)]"
              />
              Contact Us
            </p>

            <h1 id="contact-title" className={HERO_TITLE}>
            Have a complex site or
              <br />
              an
              <span className="text-[color:var(--cyan)]"> operational challenge?</span>
            </h1>

            <p className={HERO_LEAD}>
              Tell us what you need to carry, inspect or survey, and where. Our
              team will get back with the right drone, the right plan and a
              clear quote.
            </p>

            <address className="m-0 flex max-w-[26em] flex-col not-italic">
              <div className="flex items-center gap-4">
                <span className={ROW_ICON}>
                  <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className={`${ROW_BODY} ${ROW_DIVIDER}`}>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className={ROW_TEXT}
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={ROW_ICON}>
                  <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className={`${ROW_BODY} ${ROW_DIVIDER}`}>
                  <a href={`mailto:${CONTACT.email}`} className={ROW_TEXT}>
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={ROW_ICON}>
                  <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className={ROW_BODY}>
                  <span className="text-[length:var(--c-lead)] text-[color:var(--ink)]">
                    {CONTACT.location}
                  </span>
                </div>
              </div>
            </address>
          </div>

          {/* Right: white enquiry card, with two translucent glass plates peeking
              out behind it at the top and left. Only the front card is opaque —
              the plates stay translucent so the photo reads through them. */}
          <div
            id="enquiry"
            className="relative isolate [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [animation-delay:150ms]"
          >
            <span
              aria-hidden="true"
              className="absolute -z-20 hidden rounded-[24px] border border-white/70 bg-gradient-to-br from-white/60 to-[color:var(--blue)]/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md min-[900px]:block -left-[3%] -top-[4%] right-[17%] bottom-[8%]"
            />
            <span
              aria-hidden="true"
              className="absolute -z-10 hidden rounded-[24px] border border-white/70 bg-gradient-to-br from-white/70 to-[color:var(--blue)]/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md min-[900px]:block -left-[6%] -top-[1.5%] right-[17%] bottom-[5%]"
            />

            <div
              className={`rounded-[24px] p-[clamp(14px,1.8vw,26px)] ${GLASS}`}
            >
              <h2 className={FORM_TITLE}>Send us your enquiry</h2>
              <span
                aria-hidden="true"
                className="mt-1.5 block h-[3px] w-[clamp(32px,2.6vw,44px)] rounded-full bg-[color:var(--cyan)]"
              />
              <p className="m-0 mt-1.5 max-w-[48ch] text-[length:var(--c-small)] leading-[1.35] text-[color:var(--ink)]/75 text-pretty">
                Share your requirements and our team will reach out with the
                right solution.
              </p>

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
                    placeholder="Your name"
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
                    placeholder="Your company name"
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
                    placeholder="you@company.com"
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
                    placeholder="+91 98765 43210"
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
                    rows={2}
                    placeholder="Payload, distance, altitude, location"
                    className={TEXTAREA}
                  />
                </div>

                <div
                  className={`${FULL} flex flex-wrap items-center gap-x-[clamp(12px,1.4vw,20px)] gap-y-2`}
                >
                  <button type="submit" className={SUBMIT}>
                    Send Enquiry
                    <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
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
    </main>
  );
}
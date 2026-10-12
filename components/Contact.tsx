import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

/* app/contact/page.tsx
   The contact page body only. The navbar and footer are not rendered here: they
   belong in app/layout.tsx so every page shares them.

   Responsive strategy (mobile-first, Tailwind defaults):
   - base            : < 560px  -> single column, full-width controls, 44px+ touch targets
   - min-[560px]     : form switches to two columns
   - min-[900px]     : decorative glass plates appear behind the card
   - min-[1100px]    : hero becomes copy | form side by side */

export const metadata: Metadata = {
  title: "Contact | Himalayan Haulers",
  description:
    "Connect with our team to discuss your project requirements, drone capabilities, and potential deployment opportunities. We work with enterprises, EPC contractors, and industrial organisations to support complex operational needs.",
};

/* Where the form posts. Point this at your own endpoint. The form is plain HTML
   with native validation, so the page needs no client JavaScript. */
const ENQUIRY_ACTION = "/api/enquiry";

const CONTACT = {
  phone: "+91 91487 67910",
  email: "sales@himalayanhaulers.com",
  location: "Bangalore · Tirupati · Leh · Noida",
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
   browser discards it.
   overflow-x-clip guarantees no sideways scroll on narrow phones without
   breaking sticky descendants. */
const PAGE =
  "w-full overflow-x-clip bg-white text-[color:var(--ink)] [--c-small:calc(var(--fs-small)*1.1)] [--c-body:calc(var(--fs-body)*1.08)] [--c-lead:calc(var(--fs-lead)*1.0)] [--c-h3:calc(var(--fs-h3)*1.1)]";

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))] max-[640px]:pl-5 max-[640px]:pr-5";

/* ---- Hero --------------------------------------------------------------------
   Two zones on desktop: copy (left), glass form (right). The background was a
   photograph behind the copy; it is now a soft blue tint, so the section reads
   as a distinct band without an image competing with the form. */
const HERO =
  "relative isolate overflow-hidden bg-gradient-to-br from-[color:var(--blue)]/6 via-[color:var(--blue)]/3 to-sky-100/70 pt-5 pb-8 min-[560px]:pt-[clamp(24px,4vw,64px)] min-[560px]:pb-[clamp(36px,7vw,112px)]";

/* Tracking and rule shrink on phones so "CONTACT US" never crowds the edge. */
const EYEBROW =
  "m-0 flex items-center gap-3 text-[length:var(--c-small)] font-medium uppercase tracking-[0.2em] text-[color:var(--ink)]/50 min-[560px]:gap-4 min-[560px]:tracking-[0.3em]";

/* Title: on very small screens the 0.78*h1 step can be too wide for words like
   "REQUIREMENTS", so it is clamped down to a phone-safe size and allowed to
   break as a last resort. */
const HERO_TITLE =
  "m-0 text-balance break-words text-[length:clamp(1.65rem,8.2vw,calc(var(--fs-h1)*0.78))] font-extrabold uppercase leading-[1.05] tracking-tight text-[color:var(--ink)] min-[640px]:text-[length:calc(var(--fs-h1)*0.78)] min-[640px]:leading-[1]";

const HERO_LEAD =
  "m-0 max-w-[50ch] text-[15px] leading-[1.5] text-[color:var(--ink)]/80 text-pretty min-[640px]:text-sm min-[640px]:leading-[1.4]";

/* Opaque white card, not glass: the form has to read as solid white behind
   every label and field, so there is no translucency and no backdrop blur for
   the photo to bleed through. The hairline border is what separates the card
   from the page's own near-white backdrop — a white border would vanish. */
const GLASS =
  "border border-[color:var(--blue)]/10 bg-white shadow-[0_30px_60px_-28px_rgba(20,70,140,0.35)]";

const FORM_TITLE =
  "m-0 text-[length:calc(var(--c-h3)*1.15)] font-extrabold leading-tight text-[color:var(--ink)]";

/* One column on phones, two from 560px up. */
const FORM =
  "mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5 min-[560px]:mt-[clamp(8px,1vw,14px)] min-[560px]:gap-x-[clamp(12px,1.4vw,20px)] min-[560px]:gap-y-[clamp(8px,0.9vw,12px)]";

/* Mobile: every field is full width (2 of 2 columns) except HALF ones. */
const FIELD = "flex min-w-0 flex-col gap-[0.2em] min-[560px]:gap-[0.3em]";
const ONE = "col-span-2 min-[560px]:col-span-1";
const HALF = "col-span-2 min-[400px]:col-span-1 min-[560px]:col-span-1";
const FULL = "col-span-2";

const LABEL =
  "text-[length:var(--c-small)] font-semibold normal-case tracking-normal text-[color:var(--ink)]";

/* Boxed fields on solid white — the card behind them is already white, so a
   translucent fill would only tint the labels sitting on top of it.
   16px at phone width stops iOS zooming on focus; min-h-11 (44px) gives a
   comfortable touch target on phones and relaxes from 560px. */
const CONTROL =
  "w-full min-w-0 min-h-11 rounded-lg border border-[color:var(--blue)]/15 bg-white px-3 py-[0.5em] text-[16px] text-[color:var(--ink)] outline-none transition-colors placeholder:text-[color:var(--ink)]/40 focus:border-[color:var(--cyan)] focus-visible:border-[color:var(--cyan)] focus-visible:shadow-[0_0_0_1px_var(--cyan)] min-[560px]:min-h-0 min-[560px]:py-[0.45em] min-[560px]:text-[length:var(--c-small)]";

const SELECT = `${CONTROL} appearance-none cursor-pointer pr-8 min-[560px]:pr-10 bg-[length:0.7em] bg-[position:right_1em_center] bg-no-repeat bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%206'%3E%3Cpath%20d='M1%201l4%204%204-4'%20fill='none'%20stroke='%2313294b'%20stroke-width='1.5'/%3E%3C/svg%3E")]`;

const TEXTAREA = `${CONTROL} min-h-[4.2em] resize-y leading-[1.35] min-[560px]:min-h-[3.4em]`;

/* White label on the cyan->blue gradient: the dark end of the ramp swallowed
   the ink-coloured text, so contrast dropped exactly where the button was
   deepest. Full width and 48px tall on phones. */
const SUBMIT =
  "inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[color:var(--cyan)] to-[color:var(--blue)] px-7 py-[0.5em] text-[length:var(--c-small)] font-bold uppercase tracking-[0.06em] text-white shadow-[0_10px_24px_-10px_rgba(20,100,200,0.6)] cursor-pointer transition-[filter,transform] duration-200 hover:brightness-105 motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--blue)] min-[560px]:w-auto min-[560px]:min-h-0";



const ROW_ICON =
  "grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-white to-[color:var(--blue)]/10 text-[color:var(--blue)] shadow-[0_6px_14px_-6px_rgba(20,70,140,0.35),inset_0_1px_0_rgba(255,255,255,0.9)] min-[1024px]:size-[clamp(38px,2.8vw,44px)]";

/* The text side of a contact row: a small caption stacked over the value, so
   each row reads as "label / detail". Rows 1 and 2 carry the divider under
   them. min-h-11 keeps each tappable row at least 44px high. */
const ROW_BODY = "flex min-h-11 min-w-0 flex-1 flex-col justify-center py-1.5";
const ROW_DIVIDER = "border-b border-[color:var(--ink)]/15";

const ROW_LABEL =
  "text-[length:var(--c-small)] font-medium uppercase tracking-[0.14em] text-[color:var(--ink)]/55";

/* break-words + min-w-0 on the parent lets a long email wrap instead of
   pushing the page wider than a 320px screen. */
const ROW_TEXT =
  "text-[length:var(--c-lead)] text-[color:var(--ink)] transition-colors [overflow-wrap:anywhere]";

/**
 * Contact page: a hero with copy and contact details left, and an enquiry form
 * right. On phones everything stacks: copy, contact rows, then the form.
 *
 * Server component. The form posts natively; nothing here needs client state.
 */
export default function ContactPage() {
  return (
    <main className={PAGE}>
      <section className={HERO} aria-labelledby="contact-title">
        <div
          className={`${INNER} grid grid-cols-1 items-center gap-5 min-[560px]:gap-[clamp(20px,4vw,36px)] min-[1100px]:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] min-[1100px]:gap-[clamp(32px,5vw,96px)]`}
        >
          {/* Left: copy + contact rows */}
          <div className="flex min-w-0 [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] flex-col gap-[clamp(10px,1vw,14px)] motion-reduce:[animation:none]">
            <p className={EYEBROW}>
              <span
                aria-hidden="true"
                className="block h-[2px] w-10 shrink-0 bg-[color:var(--cyan)] min-[560px]:w-14"
              />
              Contact Us
            </p>

            <h1 id="contact-title" className={HERO_TITLE}>
              Discuss Your Operational
              <br className="hidden min-[480px]:block" />{" "}
              <span className="text-[color:var(--cyan)]">Requirements</span>
            </h1>

            <p className={HERO_LEAD}>
              Connect with our team to discuss your project requirements, drone
              capabilities, and potential deployment opportunities. We work with
              enterprises, EPC contractors, and industrial organisations to
              support complex operational needs.
            </p>

            <address className="m-0 mt-1 flex w-full max-w-[26em] flex-col not-italic">
              <div className="flex items-center gap-3 min-[560px]:gap-4">
                <span className={ROW_ICON}>
                  <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className={`${ROW_BODY} ${ROW_DIVIDER}`}>
                  <span className={ROW_LABEL}>Phone</span>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className={ROW_TEXT}
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 min-[560px]:gap-4">
                <span className={ROW_ICON}>
                  <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className={`${ROW_BODY} ${ROW_DIVIDER}`}>
                  <span className={ROW_LABEL}>Email</span>
                  <a href={`mailto:${CONTACT.email}`} className={ROW_TEXT}>
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 min-[560px]:gap-4">
                <span className={ROW_ICON}>
                  <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className={ROW_BODY}>
                  <span className={ROW_LABEL}>Our Locations</span>
                  <span className="text-[length:var(--c-lead)] text-[color:var(--ink)] [overflow-wrap:anywhere]">
                    {CONTACT.location}
                  </span>
                </div>
              </div>
            </address>
          </div>

          {/* Right: white enquiry card, with two translucent glass plates peeking
              out behind it at the top and left (desktop/tablet only). Only the
              front card is opaque. scroll-mt keeps the card clear of a sticky
              navbar when jumped to via #enquiry. */}
          <div
            id="enquiry"
            className="relative isolate min-w-0 scroll-mt-24 [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [animation-delay:150ms] motion-reduce:[animation:none]"
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
              className={`rounded-[20px] p-4 min-[560px]:rounded-[24px] min-[560px]:p-[clamp(18px,1.8vw,26px)] ${GLASS}`}
            >
              <h2 className={FORM_TITLE}>Send us your enquiry</h2>
              <span
                aria-hidden="true"
                className="mt-1.5 block h-[3px] w-[clamp(32px,2.6vw,44px)] rounded-full bg-[color:var(--cyan)]"
              />
              <p className="m-0 mt-1.5 hidden max-w-[48ch] text-[length:var(--c-small)] leading-[1.4] min-[560px]:block text-[color:var(--ink)]/75 text-pretty">
                Share your requirements and our team will reach out with the
                right solution.
              </p>

              <form className={FORM} action={ENQUIRY_ACTION} method="post">
                <div className={`${FIELD} ${ONE}`}>
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

                <div className={`${FIELD} ${ONE}`}>
                  <label htmlFor="enq-company" className={LABEL}>
                    Company / Organisation *
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

                <div className={`${FIELD} ${ONE}`}>
                  <label htmlFor="enq-email" className={LABEL}>
                    Email *
                  </label>
                  <input
                    id="enq-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                    className={CONTROL}
                  />
                </div>

                <div className={`${FIELD} ${ONE}`}>
                  <label htmlFor="enq-phone" className={LABEL}>
                    Phone *
                  </label>
                  <input
                    id="enq-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    placeholder="+91 98765 43210"
                    className={CONTROL}
                  />
                </div>

                <div className={`${FIELD} ${HALF}`}>
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

                <div className={`${FIELD} ${HALF}`}>
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
                    Tell Us About Your Requirement *
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
                  className={`${FULL} flex flex-col items-stretch gap-2 min-[560px]:flex-row min-[560px]:flex-wrap min-[560px]:items-center min-[560px]:gap-x-[clamp(12px,1.4vw,20px)] min-[560px]:gap-y-2`}
                >
                  <button type="submit" className={SUBMIT}>
                    Submit Enquiry
                    <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                  </button>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
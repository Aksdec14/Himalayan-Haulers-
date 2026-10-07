import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Button from "@/components/ui/Button";

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

const SOCIALS = [
  { label: "LinkedIn", href: "#", Icon: FaLinkedin },
  { label: "Facebook", href: "#", Icon: FaFacebook },
  { label: "Twitter", href: "#", Icon: FaTwitter },
  { label: "YouTube", href: "#", Icon: FaYoutube },
];

/* Closing three-up, written from copy already on the site. */
const BLURBS = [
  {
    title: "Drone Products",
    body: "Purpose-built heavy-lift logistics drones, plus surveillance and custom platforms, built in India for Indian conditions.",
    cta: { label: "Explore Products", href: "/#products" },
  },
  {
    title: "Drone as a Service",
    body: "Get the result without owning the drone. Our crews bring the aircraft, pilots, batteries and support to your site.",
    cta: { label: "Explore Services", href: "/#services" },
  },
  {
    title: "Industries We Serve",
    body: "Different sectors, same problem: hard-to-reach places. Power, energy, defence and construction.",
    cta: { label: "Explore Industries", href: "/#industries" },
  },
];

/* ---- Shared ------------------------------------------------------------------
   Same type multipliers as the other sections below the hero, set once on the
   page root. --content-pad is --hero-left, so everything here sits on the same
   vertical line as the navbar logo and the home page's hero headline. */
const PAGE =
  "bg-white text-blue [--fs-h2:calc(var(--fs-h2)*1.6)] [--fs-lead:calc(var(--fs-lead)*1.45)] [--fs-h3:calc(var(--fs-h3)*1.35)] [--fs-body:calc(var(--fs-body)*1.18)] [--fs-small:calc(var(--fs-small)*1.2)]";

const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

/* Info column left, wide column right, stacking below 900px. Used by both rows
   that follow the hero, so the two rows share one column line. */
const SPLIT =
  "grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-x-[clamp(24px,4vw,64px)] gap-y-[clamp(24px,3vw,40px)] max-w-[length:var(--content-max,1200px)] max-[900px]:grid-cols-1";

/* ---- Hero --------------------------------------------------------------------
   A navy band with a darkened photo behind it. The top padding clears the fixed
   navbar that layout.tsx renders above the page. */
const HERO =
  "relative isolate overflow-hidden bg-blue text-white pt-[clamp(104px,11vw,160px)] pb-[clamp(72px,8vw,120px)] text-center";

const HERO_INNER = "mx-auto max-w-[56ch] px-[clamp(20px,5vw,64px)]";

const HERO_TITLE = "m-0 text-[length:var(--fs-h2)] uppercase text-white text-balance";

const HERO_RULE = "mx-auto mt-[clamp(16px,2vw,28px)] mb-0 h-px w-[clamp(120px,16vw,220px)] border-0 bg-white/50";

const HERO_TEXT =
  "mt-[clamp(14px,1.8vw,24px)] mb-0 text-[length:var(--fs-lead)] leading-[1.38] text-white/80 text-pretty";

/* Ink on cyan is 5.4:1; white on cyan fails at this size. */
const CTA =
  "mt-[clamp(20px,2.6vw,36px)] inline-block rounded-[4px] bg-cyan px-8 py-[0.85em] text-[length:var(--fs-body)] font-bold tracking-[0.04em] uppercase text-ink no-underline transition-[filter,transform] duration-200 hover:brightness-95 motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/* ---- Enquiry row -------------------------------------------------------------
   Light grey surface. The info card is pulled up over the hero's lower edge, as in
   the reference. */
const ENQUIRY = "bg-[#f4f7fa] pb-[clamp(40px,5vw,72px)]";

const CARD =
  "relative z-[1] -mt-[clamp(40px,5vw,80px)] flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.08)] max-[900px]:-mt-8";

const CARD_BODY = "p-[clamp(20px,2.4vw,32px)]";

const CARD_NAME = "m-0 text-[length:var(--fs-h3)] text-blue";

const ROW = "flex items-start gap-3 m-0";
const ICON = "mt-[0.2em] shrink-0 text-cyan";
const LINE = "m-0 text-[length:var(--fs-small)] leading-[1.4] text-blue/80 break-words";
const LINK =
  "text-blue underline decoration-blue/30 underline-offset-4 transition-colors hover:decoration-cyan focus-visible:decoration-cyan";

const SOCIAL =
  "text-blue/70 transition-colors hover:text-cyan focus-visible:text-cyan";

const FORM_WRAP = "pt-[clamp(28px,3.5vw,56px)]";

const FORM_TITLE = "m-0 text-[length:var(--fs-h3)] text-blue";

const FORM =
  "mt-[clamp(18px,2.2vw,32px)] grid grid-cols-2 gap-x-[clamp(16px,2.4vw,32px)] gap-y-[clamp(16px,1.8vw,26px)] max-[560px]:grid-cols-1";

const FIELD = "flex min-w-0 flex-col gap-[0.4em]";
const FULL = "col-span-2 max-[560px]:col-span-1";

const LABEL =
  "truncate text-[length:var(--fs-small)] font-semibold tracking-normal normal-case text-blue/80";

/* Underline-only fields, on the light grey surface. The rule goes cyan on focus;
   the default outline is replaced by that rule plus a 1px cyan shadow, so keyboard
   focus stays visible. 16px at phone width stops iOS zooming on focus. */
const CONTROL =
  "w-full min-w-0 rounded-none border-0 border-b border-solid border-blue/30 bg-transparent px-0 py-[0.5em] text-[length:var(--fs-body)] text-blue outline-none transition-colors placeholder:text-blue/40 focus:outline-none focus-visible:outline-none focus:border-cyan focus-visible:border-cyan focus-visible:shadow-[0_1px_0_0_var(--color-cyan)] max-[560px]:text-[16px]";

const SELECT = `${CONTROL} appearance-none cursor-pointer pr-[1.5em] bg-[length:0.6em] bg-[position:right_0.2em_center] bg-no-repeat bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%206'%3E%3Cpath%20d='M1%201l4%204%204-4'%20fill='none'%20stroke='%2313294b'%20stroke-width='1.5'/%3E%3C/svg%3E")]`;

const TEXTAREA = `${CONTROL} min-h-[6em] resize-y leading-[1.4]`;

const SUBMIT =
  "self-start rounded-[4px] bg-cyan px-8 py-[0.85em] text-[length:var(--fs-body)] font-bold tracking-[0.04em] uppercase text-ink cursor-pointer transition-[filter,transform] duration-200 hover:brightness-95 motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue max-[560px]:w-full max-[560px]:self-stretch";

const SMALL_PRINT = "m-0 text-[length:var(--fs-small)] text-blue/65";

/* ---- Stay in touch + map ---------------------------------------------------- */

const MAP_ROW = "bg-[#f4f7fa] pb-[clamp(40px,5vw,72px)]";

const NEWSLETTER =
  "flex flex-col justify-center rounded-lg bg-blue p-[clamp(20px,2.4vw,32px)] text-white";

const NEWSLETTER_TITLE = "m-0 text-[length:var(--fs-h3)] text-white";

const NEWSLETTER_TEXT =
  "mt-[0.6em] mb-0 text-[length:var(--fs-small)] leading-[1.4] text-white/80";

const NEWSLETTER_FORM = "mt-[clamp(14px,1.6vw,22px)] flex";

const NEWSLETTER_INPUT =
  "min-w-0 flex-1 rounded-l-[4px] border-0 bg-white px-4 py-[0.8em] text-[length:var(--fs-small)] text-blue outline-none placeholder:text-blue/50 focus-visible:outline-2 focus-visible:outline-cyan max-[560px]:text-[16px]";

const NEWSLETTER_BTN =
  "grid w-[clamp(44px,3.6vw,54px)] shrink-0 cursor-pointer place-items-center rounded-r-[4px] border-0 bg-cyan text-ink transition-[filter] hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const MAP_FRAME =
  "h-[clamp(240px,24vw,340px)] w-full overflow-hidden rounded-lg border-0 bg-blue/10 grayscale-[0.4]";

/* ---- Closing three-up -------------------------------------------------------
   A full-bleed navy band, mirroring the hero above it.

   Two details carry the inversion. The band sets `text-white`, because
   globals.css declares `h1–h6 { color: inherit }` unlayered — an unlayered
   rule beats a layered utility, so each <h2> takes its colour from this
   wrapper rather than from its own class. The trailing `!` on the title
   covers the case where the wrapper's colour is ever removed: `!important`
   outranks the layer, so the heading can never silently fall back to navy
   on navy.

   The cyan tick under each title stays. It is decoration, not text, and it
   is the only accent left on a two-colour band. */

const BLURBS_SECTION = `${INNER} bg-blue text-white`;

const BLURBS_WRAP =
  "grid grid-cols-3 gap-x-[clamp(24px,4vw,64px)] gap-y-[clamp(28px,3.5vw,48px)] max-w-[length:var(--content-max,1200px)] py-[clamp(40px,5vw,80px)] max-[900px]:grid-cols-1";

const BLURB_TITLE = "m-0 text-[length:var(--fs-h3)] text-white!";

const BLURB_RULE = "mt-[clamp(10px,1.2vw,16px)] mb-0 h-[3px] w-10 border-0 bg-cyan";

const BLURB_TEXT =
  "mt-[clamp(10px,1.2vw,16px)] mb-0 text-[length:var(--fs-small)] leading-[1.45] text-white/80 text-pretty";

const BLURB_CTA = "mt-[clamp(14px,1.6vw,22px)] self-start";

/**
 * Contact page — hero, then the contact details beside the enquiry form, then the
 * newsletter card beside a map, then a closing three-up. Navbar and footer are
 * deliberately left to the layout.
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

                <address className="m-0 mt-[clamp(14px,1.6vw,22px)] flex flex-col gap-3 not-italic">
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

                {/* Placeholder hrefs: replace with the real profiles. */}
                <ul className="m-0 mt-[clamp(16px,2vw,28px)] flex list-none gap-4 p-0">
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a href={href} aria-label={label} className={SOCIAL}>
                        <Icon size={20} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-auto aspect-[4/3] w-full">
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

      {/* Closing three-up — full-bleed navy band */}
      <section className={BLURBS_SECTION} aria-label="More about Himalayan Haulers">
        <div className={BLURBS_WRAP}>
          {BLURBS.map((blurb, index) => (
            <div
              key={blurb.title}
              className="flex animate-hh-fade flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className={BLURB_TITLE}>{blurb.title}</h2>
              <hr className={BLURB_RULE} />
              <p className={BLURB_TEXT}>{blurb.body}</p>
              {/* onDark: white label and white rule, the same contrast fix the
                  hero's Button uses on navy. onLight would put cyan on blue. */}
              <Button
                href={blurb.cta.href}
                tone="onDark"
                withArrow
                className={BLURB_CTA}
              >
                {blurb.cta.label}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
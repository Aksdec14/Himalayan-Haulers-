import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

type FooterLink = { label: string; href: string };

/* Each list is data, so a label and its target live together. Anchors point at
   section ids already on the page; swap the ones marked below once those pages
   or sections exist. */
const navLinks: FooterLink[] = [
  { label: "What We Provide", href: "#provide" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const droneProducts: FooterLink[] = [
  { label: "Freightor D-Series logistics drones", href: "#products" },
  { label: "Surveillance drones", href: "#products" },
  { label: "Custom-built drones", href: "#products" },
];

const droneServices: FooterLink[] = [
  { label: "Logistics Drone as a Service (LDaaS)", href: "#services" },
  { label: "Drone inspections", href: "#services" },
  { label: "Industrial sensor surveys", href: "#services" },
  { label: "Drone-based tower stringing", href: "#services" },
];

const industries: FooterLink[] = [
  { label: "Power", href: "#industries" },
  { label: "Energy", href: "#industries" },
  { label: "Defence", href: "#industries" },
  { label: "Construction", href: "#industries" },
];

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  { title: "Quick Links", links: navLinks },
  { title: "Drone Products", links: droneProducts },
  { title: "Drone as a Service", links: droneServices },
  { title: "Industries We Serve", links: industries },
];

/* Same left-anchored padding every section uses, so the footer's first column
   sits on the same vertical line as the navbar logo and the hero headline. */
const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

/* Brand column is the widest; the four link columns share the rest. Steps down to
   two columns, then one, on width. */
const GRID =
  "grid grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,1fr))] gap-x-[clamp(24px,3vw,56px)] gap-y-[clamp(32px,4vw,48px)] max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1";

/* Column titles are <p>, not <h3>. The site's global heading rule colours and
   sizes every h1–h3 for the dark sections, which is why titles set as headings
   came out invisible on this white footer. A <p> is untouched by it. */
const COL_TITLE =
  "m-0 mb-[clamp(14px,1.4vw,20px)] text-[length:calc(var(--fs-small)*1.15)] font-bold tracking-[0.1em] uppercase text-blue";

/* One list style for every column: tight leading (so a wrapped label stays one
   unit) and a fixed gap between items (so spacing never depends on wrapping). */
const LIST = "m-0 p-0 list-none flex flex-col gap-[clamp(10px,1vw,14px)]";

const LINK =
  "text-[length:calc(var(--fs-small)*1.15)] leading-[1.35] text-blue/70 transition-colors hover:text-blue focus-visible:text-blue";

/* shrink-0 is what keeps the icon visible: in a flex row a long email would
   otherwise squeeze the icon to zero width, which is why the mail icon vanished. */
const CONTACT_ROW = "flex items-start gap-3";
const ICON = "mt-[0.2em] shrink-0 text-blue";
const CONTACT_TEXT =
  "text-[length:calc(var(--fs-small)*1.15)] leading-[1.35] text-blue/70 break-words";
const CONTACT_LINK = `${CONTACT_TEXT} transition-colors hover:text-blue`;

const SOCIAL =
  "text-white/70 transition-colors hover:text-white focus-visible:text-white";

/**
 * Site footer: brand and contact details, four link columns, then a navy bar with
 * the legal links and social icons.
 *
 * Server component — nothing here needs client state.
 */
export default function Footer() {
  return (
    <footer className="w-full bg-white text-blue">
      <div
        className={`${INNER} pt-[clamp(40px,5vw,80px)] pb-[clamp(32px,4vw,56px)]`}
      >
        <div className={`${GRID} max-w-[1400px]`}>
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="mb-[clamp(14px,1.6vw,20px)] block w-[clamp(110px,10vw,140px)]"
              aria-label="Himalayan Haulers home"
            >
              <Image
                src="/media/HH-Logo-Ink.png"
                alt="Himalayan Haulers"
                width={1662}
                height={380}
                priority={false}
                sizes="140px"
                className="h-auto w-full object-contain"
              />
            </Link>

            <p className="m-0 max-w-[28ch] text-[length:calc(var(--fs-small)*1.15)] leading-[1.45] text-blue/70">
              Heavy-lift drones for India&rsquo;s toughest terrain.
            </p>

            <address className="m-0 mt-[clamp(20px,2.4vw,32px)] flex flex-col gap-3 not-italic">
              <div className={CONTACT_ROW}>
                <Mail size={16} className={ICON} aria-hidden="true" />
                <a
                  href="mailto:arjun@himalayanhaulers.com"
                  className={CONTACT_LINK}
                >
                  arjun@himalayanhaulers.com
                </a>
              </div>

              <div className={CONTACT_ROW}>
                <Phone size={16} className={ICON} aria-hidden="true" />
                <a href="tel:+917899801210" className={CONTACT_LINK}>
                  +91 78998 01210
                </a>
              </div>

              <div className={CONTACT_ROW}>
                <MapPin size={16} className={ICON} aria-hidden="true" />
                <span className={CONTACT_TEXT}>Bangalore, India</span>
              </div>
            </address>
          </div>

          {/* Link columns */}
          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className={COL_TITLE}>{column.title}</p>
              <ul className={LIST}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={LINK}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom bar: full-bleed navy, content on the same left line as above. */}
      <div className="bg-blue">
        <div
          className={`${INNER} flex flex-col gap-4 py-[clamp(16px,2vw,24px)] md:flex-row md:items-center md:justify-between`}
        >
          <p className="m-0 text-[length:calc(var(--fs-small)*1.15)] text-white/70">
            &copy; 2026 Himalayan Haulers Pvt. Ltd.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className={`${SOCIAL} text-[length:calc(var(--fs-small)*1.15)]`}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className={`${SOCIAL} text-[length:calc(var(--fs-small)*1.15)]`}
            >
              Terms
            </a>
          </div>

          {/* Socials: placeholder hrefs, replace with the real profiles. */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className={SOCIAL}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a href="#" aria-label="Twitter" className={SOCIAL}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>

            <a href="#" aria-label="YouTube" className={SOCIAL}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            <a href="#" aria-label="LinkedIn" className={SOCIAL}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

type FooterLink = { label: string; href: string };

/* Each list is data, so a label and its target live together.

   Every href is absolute. The footer renders on all seven routes, so a bare
   fragment resolves against the CURRENT path and dead-ends everywhere except
   the home page. `#products` / `#services` live on /what-we-provide, not on /,
   which is why they carry that path. */
const navLinks: FooterLink[] = [
  { label: "Browse Drones & Services", href: "/what-we-provide" },
  { label: "See Our Solutions", href: "/solutions" },
  { label: "Find Your Industry", href: "/industries" },
  { label: "Get a Quote", href: "/contact" },
];

const droneProducts: FooterLink[] = [
  {
    label: "Buy a Freightor Drone",
    href: "/what-we-provide#products",
  },
  {
    label: "Get Surveillance Drone Pricing",
    href: "/contact?interest=defence",
  },
  {
    label: "Request a Custom Build",
    href: "/contact?interest=other",
  },
];

const droneServices: FooterLink[] = [
  {
    label: "Hire Delivery Drones",
    href: "/contact?interest=ldaas",
  },
  { label: "Book an Inspection", href: "/contact?interest=inspection" },
  { label: "Order a Sensor Survey", href: "/contact?interest=survey" },
  {
    label: "Get a Stringing Quote",
    href: "/contact?interest=tower-stringing",
  },
];

const industries: FooterLink[] = [
  { label: "Power Sector Solutions", href: "/industries#power" },
  { label: "Energy Sector Solutions", href: "/industries#energy" },
  { label: "Defence Solutions", href: "/industries#defence" },
  {
    label: "Construction Solutions",
    href: "/industries#construction",
  },
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
  "m-0 mb-[clamp(14px,1.4vw,20px)] text-[length:calc(var(--fs-small)*1.15)] font-bold tracking-[0.1em] uppercase text-[color:var(--blue)]";

/* One list style for every column: tight leading (so a wrapped label stays one
   unit) and a fixed gap between items (so spacing never depends on wrapping). */
const LIST = "m-0 p-0 list-none flex flex-col gap-[clamp(10px,1vw,14px)]";

const LINK =
  "text-[length:calc(var(--fs-small)*1.15)] leading-[1.35] text-[color:var(--blue)]/70 transition-colors hover:text-[color:var(--blue)] focus-visible:text-[color:var(--blue)]";

/* shrink-0 is what keeps the icon visible: in a flex row a long email would
   otherwise squeeze the icon to zero width, which is why the mail icon vanished. */
const CONTACT_ROW = "flex items-start gap-3";
const ICON = "mt-[0.2em] shrink-0 text-[color:var(--blue)]";
const CONTACT_TEXT =
  "text-[length:calc(var(--fs-small)*1.15)] leading-[1.35] text-[color:var(--blue)]/70 break-words";
const CONTACT_LINK = `${CONTACT_TEXT} transition-colors hover:text-[color:var(--blue)]`;

/* ---- Closing CTA -------------------------------------------------------------
   A full-width band above the link columns: the section's one action-oriented
   line, so the footer's purpose is stated before the reader starts scanning
   columns. Italic, because the global heading rule colours and sizes every
   h1-h3 for the dark sections and this sits on white — same reason the column
   titles above are <p>. */
const CTA_BAND =
  "mb-[clamp(32px,4vw,56px)] max-w-[length:var(--content-max,1200px)]";

const CTA_TITLE =
  "m-0 text-[length:var(--fs-h2)] font-light uppercase italic leading-[1.1] tracking-[0.01em] text-[color:var(--blue)]";

/* A link, not the shared Button: the footer is a server component and the
   button's `size="lg"` resolves to a fixed --btn-w width that has no meaning
   here. The arrow nudges on hover, matching the site's other CTA links. */
const CTA_LINK =
  "group mt-[clamp(10px,1.4vw,16px)] inline-flex items-center gap-2 text-[length:calc(var(--fs-small)*1.15)] font-bold uppercase tracking-[0.12em] text-[color:var(--blue)] no-underline transition-colors hover:text-[color:var(--cyan)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--cyan)]";

/**
 * Site footer: brand and contact details, four link columns, then a navy bar
 * carrying the copyright line.
 *
 * Server component — nothing here needs client state.
 */
export default function Footer() {
  return (
    <footer className="w-full bg-white text-[color:var(--blue)]">
      <div
        className={`${INNER} pt-[clamp(40px,5vw,80px)] pb-[clamp(32px,4vw,56px)]`}
      >
        <div className={CTA_BAND}>
          <p className={CTA_TITLE}>Let&rsquo;s Move Something Impossible</p>
          <Link href="/contact" className={CTA_LINK}>
            Get a Quote
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </div>

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

            <p className="m-0 max-w-[28ch] text-[length:calc(var(--fs-small)*1.15)] leading-[1.45] text-[color:var(--blue)]/70">
              Heavy-lift drones for India&rsquo;s toughest terrain.
            </p>

            <address className="m-0 mt-[clamp(20px,2.4vw,32px)] flex flex-col gap-3 not-italic">
              <div className={CONTACT_ROW}>
                <Mail size={16} className={ICON} aria-hidden="true" />
                <a
                  href="mailto:arjun@himalayanhaulers.com"
                  className={CONTACT_LINK}
                >
                  Email Our Team
                </a>
              </div>

              <div className={CONTACT_ROW}>
                <Phone size={16} className={ICON} aria-hidden="true" />
                <a href="tel:+917899801210" className={CONTACT_LINK}>
                  Call +91 78998 01210
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
      <div className="bg-[color:var(--blue)]">
        <div
          className={`${INNER} flex flex-col gap-4 py-[clamp(16px,2vw,24px)] md:flex-row md:items-center md:justify-between`}
        >
          <p className="m-0 text-[length:calc(var(--fs-small)*1.15)] text-white/70">
            &copy; 2026 Himalayan Haulers Pvt. Ltd.
          </p>

          {/* The legal links and the social row were both removed: /privacy and
             /terms are not routes, and the social anchors were href="#", so every
             one of them dead-ended. Restore them when there is somewhere to send
             them — a real /privacy page, a real /terms page, and the company's
             actual profile URLs. */}
        </div>
      </div>
    </footer>
  );
}
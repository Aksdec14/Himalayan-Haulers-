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
  { label: "What We Provide", href: "/#provide" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

const droneProducts: FooterLink[] = [
  { label: "Freightor D-Series logistics drones", href: "/what-we-provide#products" },
  { label: "Surveillance drones", href: "/what-we-provide#products" },
  { label: "Custom-built drones", href: "/what-we-provide#products" },
];

const droneServices: FooterLink[] = [
  {
    label: "Logistics Drone as a Service (LDaaS)",
    href: "/what-we-provide#services",
  },
  { label: "Drone inspections", href: "/what-we-provide#services" },
  { label: "Industrial sensor surveys", href: "/what-we-provide#services" },
  { label: "Drone-based tower stringing", href: "/what-we-provide#services" },
];

const industries: FooterLink[] = [
  { label: "Power", href: "/industries" },
  { label: "Energy", href: "/industries" },
  { label: "Defence", href: "/industries" },
  { label: "Construction", href: "/industries" },
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
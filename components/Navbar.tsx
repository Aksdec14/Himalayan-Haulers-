"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

/* Every href is absolute. The navbar renders on all seven routes, so a bare
   fragment ("#industries") resolves against the CURRENT path and dead-ends on
   the six pages that have no such id. */
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", active: true },
  { label: "What We Provide", href: "/what-we-provide" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

const LOGO = "/media/HH-Logo-Ink.png";

/* No bar padding — the breathing room comes from the items themselves so they hug
   the edges. --logo-h is a share of --nav-h, so the two can never disagree. */
const TOPBAR =
  "fixed inset-x-0 top-0 z-30 flex items-center justify-between bg-white text-blue shadow-[0_6px_24px_rgba(10,25,45,0.18)] animate-hh-fade h-[length:var(--nav-h)] gap-[clamp(8px,1.5vw,24px)] pl-[env(safe-area-inset-left,0px)] pr-[env(safe-area-inset-right,0px)]";

const LOGO_CLASSES =
  "block flex-none no-underline h-[length:var(--logo-h)] max-w-[44vw] ml-[length:var(--hero-left)] max-[700px]:max-w-[62vw]";

/* Same type ramp as the frame text, so bar and hero read as one system. Font
   size is deliberately NOT touched at the tablet tier — --fs-nav is the single
   source, and overriding it per tier is what used to let the bar drift out of
   step with the frame. */
const LINK_BASE =
  "no-underline whitespace-nowrap transition-colors duration-300 text-[length:var(--fs-nav)] font-normal tracking-[0.01em] text-blue/75 hover:text-cyan";

/* Panel links step up one rung of the same type scale. */
const LINK_PANEL =
  "max-[1000px]:text-[length:var(--fs-lead)] max-[1000px]:px-[clamp(16px,5vw,32px)] max-[1000px]:py-[clamp(12px,3.2vw,16px)] max-[1000px]:border-t max-[1000px]:border-blue/8";

/* `data-open` drives the panel and the hamburger morph. The bar is `group` so
   both can key off a single attribute rather than duplicating state. */
const LINKS =
  "flex items-center gap-[clamp(12px,2.6vw,48px)] mr-[clamp(12px,1.4vw,26px)] max-[1240px]:gap-[clamp(10px,1.8vw,26px)] max-[1000px]:group-data-[open=true]:flex max-[1000px]:absolute max-[1000px]:inset-x-0 max-[1000px]:top-full max-[1000px]:hidden max-[1000px]:flex-col max-[1000px]:items-stretch max-[1000px]:gap-0 max-[1000px]:mr-0 max-[1000px]:bg-white max-[1000px]:shadow-[0_12px_28px_rgba(10,25,45,0.2)]";

const TOGGLE =
  "hidden max-[1000px]:grid flex-none cursor-pointer place-content-center gap-[5px] size-11 p-0 border-0 bg-none mr-[clamp(10px,1.4vw,22px)]";

/**
 * Site navbar. Sits OUTSIDE the video frame: white bar, logo hard left, links
 * hard right, with a strip of blurred video visible beneath it.
 *
 * Client component because of the mobile dropdown. Everything it needs is
 * local to it — links and logo live here, no props required.
 */
export default function Navbar({ links = NAV_LINKS }: { links?: NavLink[] }) {
  const [open, setOpen] = useState(false);

  // Close the panel if the viewport grows past the collapse breakpoint,
  // otherwise a panel opened on a phone stays over the desktop nav.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1001px)");
    const onChange = () => {
      if (wide.matches) setOpen(false);
    };
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  // Escape closes the panel and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("nav-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`${TOPBAR} group`} data-open={open}>
      <Link href="/" className={LOGO_CLASSES} aria-label="Himalayan Haulers home">
        <Image
          src={LOGO}
          alt="Himalayan Haulers"
          width={1662}
          height={380}
          priority
          sizes="(max-width: 700px) 60vw, 30vw"
          className="block h-full w-auto max-w-full object-contain object-left"
        />
      </Link>

      <button
        id="nav-toggle"
        type="button"
        className={TOGGLE}
        aria-expanded={open}
        aria-controls="primary-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="block h-0.5 w-[22px] bg-blue transition-transform duration-300 group-data-[open=true]:translate-y-[7px] group-data-[open=true]:rotate-45" />
        <span className="block h-0.5 w-[22px] bg-blue opacity-100 transition-opacity duration-200 group-data-[open=true]:opacity-0" />
        <span className="block h-0.5 w-[22px] bg-blue transition-transform duration-300 group-data-[open=true]:-translate-y-[7px] group-data-[open=true]:-rotate-45" />
      </button>

      <nav id="primary-nav" className={LINKS} aria-label="Primary">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${LINK_BASE} ${LINK_PANEL} ${link.active ? "text-blue font-bold" : ""}`}
            aria-current={link.active ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
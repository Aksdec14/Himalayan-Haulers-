import type { Metadata, Viewport } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Himalayan Haulers – Heavy-Lift Logistics Drones",
  description:
    "Heavy-lift drones that carry 20 to 300 kg to places trucks and mules can't reach. Autonomous, high-altitude ready and built in India.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Lets env(safe-area-inset-*) resolve on notched devices, which the frame
  // insets depend on.
  viewportFit: "cover",
  themeColor: "#13294b",
};

/* ==========================================================================
   DESIGN TOKENS — as Tailwind arbitrary properties on <html>
   --------------------------------------------------------------------------
   globals.css is a single `@import "tailwindcss"` and nothing else, so the
   tokens that used to live in a `:root` block are declared here in Tailwind's
   own syntax: `[--token:value]` on the root element, with the media and
   `@supports` overrides as ordinary variants.

   Every value below is the one the old `:root` block declared. Two notes on
   form:

   1. Viewport-relative sizes are written as a FRACTION of `--vh`
      (`clamp(72px,calc(0.104*var(--vh)),150px)`) rather than a literal `10.4vh`.
      Mathematically identical — 0.104 * 100vh IS 10.4vh — but it means the
      `vh` -> `dvh` swap is a single token (TOKENS_SUPPORTS) instead of four
      duplicated declarations that have to stay in step with each other.

   2. Class names here are written out in full, never assembled in a loop.
     Tailwind's scanner reads source text, so a class name built at runtime is
     invisible to it and the rule is silently never generated.

   The comments are kept from the original file, since they document why each
   value is what it is.
   ========================================================================== */

const TOKENS_BASE =
  /* Brand colours + the shared sans stack. */
  "[--blue:#13294b] [--cyan:#1ca9dd] [--ink:#12243a] " +
  "[--font-sans:'Helvetica_Neue',Helvetica,Arial,'Segoe_UI',system-ui,sans-serif] " +
  /* Single source for window height, so a collapsing mobile toolbar can't crop
     the frame. Everything viewport-relative below is a fraction of it. */
  "[--vh:100vh] " +
  /* ---- Frame insets ----------------------------------------------------
     Shared by the frame and the blur layer's cut-out hole so the two can never
     drift apart. Safe-area insets are folded in here rather than applied as
     extra padding, so every consumer stays in sync. */
  "[--frame-top:clamp(72px,calc(0.104*var(--vh)),150px)] " +
  "[--frame-bottom:clamp(24px,calc(0.04*var(--vh)),72px)] " +
  "[--frame-left:calc(clamp(8px,0.8vw,40px)+env(safe-area-inset-left,0px))] " +
  "[--frame-right:calc(clamp(8px,0.9vw,40px)+env(safe-area-inset-right,0px))] " +
  /* ---- Frame size, in page units ----------------------------------------
     The hero lives INSIDE a size container and can use container units
     directly; the navbar lives outside it and cannot, so it reads these. */
  "[--frame-w:calc(100vw-var(--frame-left)-var(--frame-right))] " +
  "[--frame-h:calc(var(--vh)-var(--frame-top)-var(--frame-bottom))] " +
  /* ---- Navbar ----------------------------------------------------------
     --nav-h must stay SMALLER than --frame-top, otherwise the white bar
     overlaps the frame and the strip of blurred video between them is lost. */
  "[--nav-h:clamp(56px,calc(0.08*var(--vh)),92px)] " +
  "[--logo-h:min(calc(var(--nav-h)*0.62),5.2vw)] " +
  /* Left edge of the hero text column, measured on the page so the logo can
     sit on the same vertical line as the hero. Keep 0.049 in step with the
     `left` on the hero frame (components/Hero.tsx). */
  "[--hero-left:calc(var(--frame-left)+0.049*var(--frame-w))] " +
  /* ---- Type scale -------------------------------------------------------
     ONE ramp for the whole site, shared by the navbar, the hero, and every
     section below it. Each size blends frame width and frame height: pure
     width-based sizing breaks on short-but-wide windows, where the heading
     stays large and pushes the CTA off the bottom.

     The rungs are SEMANTIC, not per-component. A heading is sized by its
     LEVEL, so every h2 on the site is the same size and every h3 is the same
     size — regardless of which section it lives in. Adding a section must
     never mean inventing a new size. */
  "[--fs-nav:clamp(14px,calc(0.0080*var(--frame-w)+0.0060*var(--frame-h)),19px)] " +
  "[--fs-body:clamp(13px,calc(0.0070*var(--frame-w)+0.0085*var(--frame-h)),20px)] " +
  "[--fs-lead:clamp(16px,calc(0.0090*var(--frame-w)+0.0090*var(--frame-h)),23px)] " +
  "[--fs-h1:clamp(26px,calc(0.0260*var(--frame-w)+0.0190*var(--frame-h)),68px)] " +
  "[--fs-h2:clamp(24px,calc(0.0180*var(--frame-w)+0.0130*var(--frame-h)),46px)] " +
  "[--fs-h3:clamp(15px,calc(0.0110*var(--frame-w)+0.0080*var(--frame-h)),26px)] " +
  "[--fs-small:clamp(10px,calc(0.0062*var(--frame-w)+0.0070*var(--frame-h)),15px)] " +
  /* ---- Heading treatment -------------------------------------------------
     One place for the properties every heading shares, so weight, case,
     leading and tracking can't drift between sections. Components set only
     their level's SIZE. */
  "[--heading-weight:700] [--heading-leading:1.08] [--heading-tracking:0] " +
  /* ---- Content sections below the hero ------------------------------------
     --content-pad is the SAME expression as --hero-left, so every section's
     text starts on the exact vertical line as the hero headline and the navbar
     logo. All three read one value, which is the only way to guarantee they
     stay aligned as the frame insets change between breakpoints.

     --content-max caps the measure on ultrawide so body copy doesn't run to
     250 characters a line. The padding is what aligns; the max-width only
     limits length. Note the container is NOT centred — a centred block would
     put its left edge at (100vw - max) / 2, which is nowhere near the hero's
     left-anchored text on a wide screen. */
  /* --ry is the vertical gap between a Solutions block and the row beneath it:
     the subhead's top margin, the collage row's top margin, and the pager's
     top margin all read this one value, so the column is distributed evenly by
     construction. Its only consumer is components/Solutions.tsx (the home page
     section).

     NOT to be confused with the /solutions route's own rhythm —
     --gap / --gap-peer / --gap-block — which is a separate, tighter scale
     declared on that page's <main> in app/solutions/page.tsx, because
     capability-showcase.tsx reads it. */
  "[--ry:clamp(14px,1.6vw,22px)] [--section-pad:clamp(56px,9vw,120px)] " +
  "[--content-max:1200px] [--content-pad:var(--hero-left)] " +
  "[--content-pad-end:clamp(20px,5vw,64px)] [--card-gap:clamp(20px,2.6vw,36px)]";

/* vh -> dvh, so a collapsing mobile toolbar can't crop the frame. Every
   viewport-relative size above is a fraction of --vh, so this one swap re-tunes
   all of them. */
const TOKENS_SUPPORTS = "supports-[height:100dvh]:[--vh:100dvh]";

/* ---- Phone / small tablet portrait ----------------------------------------
   A narrow frame needs a proportionally larger type scale: 18px body copy on a
   360px-wide frame is illegible. The scale itself is retuned here rather than
   overridden per component, so the navbar and hero still agree. */
const TOKENS_NARROW =
  "max-[700px]:[--nav-h:clamp(52px,calc(0.074*var(--vh)),68px)] " +
  "max-[700px]:[--logo-h:min(calc(var(--nav-h)*0.6),11vw)] " +
  "max-[700px]:[--frame-left:calc(clamp(10px,3vw,24px)+env(safe-area-inset-left,0px))] " +
  "max-[700px]:[--frame-right:calc(clamp(10px,3vw,24px)+env(safe-area-inset-right,0px))] " +
  "max-[700px]:[--fs-h1:clamp(26px,calc(0.0440*var(--frame-w)+0.0220*var(--frame-h)),40px)] " +
  "max-[700px]:[--fs-h2:clamp(22px,calc(0.0290*var(--frame-w)+0.0150*var(--frame-h)),32px)] " +
  "max-[700px]:[--fs-h3:clamp(15px,calc(0.0190*var(--frame-w)+0.0110*var(--frame-h)),22px)] " +
  "max-[700px]:[--fs-body:clamp(13px,calc(0.0160*var(--frame-w)+0.0140*var(--frame-h)),16px)] " +
  "max-[700px]:[--fs-lead:clamp(14px,calc(0.0190*var(--frame-w)+0.0150*var(--frame-h)),18px)] " +
  "max-[700px]:[--fs-small:clamp(11px,calc(0.0230*var(--frame-w)+0.0130*var(--frame-h)),14px)]";

/* ---- Short viewports: phone in landscape, split screen --------------------- */
const TOKENS_SHORT =
  "max-[620px]:[--frame-bottom:clamp(12px,calc(0.03*var(--vh)),28px)]";

/* ==========================================================================
   BASE — the handful of rules the old globals.css set on html / body / h1-h6.
   Same declarations, expressed as utilities so they live in one place with
   everything else.

   The heading block is one `[&_hN]` variant per level per property, not a
   single comma-separated `[&_h1,&_h2,...]` variant: Tailwind does not compile a
   selector list inside an arbitrary variant, so the comma form emitted nothing.
   ========================================================================== */

const HEADING_TREATMENT =
  /* font-family: inherit */
  "[&_h1]:[font-family:inherit] [&_h2]:[font-family:inherit] " +
  "[&_h3]:[font-family:inherit] [&_h4]:[font-family:inherit] " +
  "[&_h5]:[font-family:inherit] [&_h6]:[font-family:inherit] " +
  /* font-weight: var(--heading-weight) */
  "[&_h1]:[font-weight:var(--heading-weight)] " +
  "[&_h2]:[font-weight:var(--heading-weight)] " +
  "[&_h3]:[font-weight:var(--heading-weight)] " +
  "[&_h4]:[font-weight:var(--heading-weight)] " +
  "[&_h5]:[font-weight:var(--heading-weight)] " +
  "[&_h6]:[font-weight:var(--heading-weight)] " +
  /* line-height: var(--heading-leading) */
  "[&_h1]:[line-height:var(--heading-leading)] " +
  "[&_h2]:[line-height:var(--heading-leading)] " +
  "[&_h3]:[line-height:var(--heading-leading)] " +
  "[&_h4]:[line-height:var(--heading-leading)] " +
  "[&_h5]:[line-height:var(--heading-leading)] " +
  "[&_h6]:[line-height:var(--heading-leading)] " +
  /* letter-spacing: var(--heading-tracking) */
  "[&_h1]:[letter-spacing:var(--heading-tracking)] " +
  "[&_h2]:[letter-spacing:var(--heading-tracking)] " +
  "[&_h3]:[letter-spacing:var(--heading-tracking)] " +
  "[&_h4]:[letter-spacing:var(--heading-tracking)] " +
  "[&_h5]:[letter-spacing:var(--heading-tracking)] " +
  "[&_h6]:[letter-spacing:var(--heading-tracking)] " +
  /* text-wrap: balance */
  "[&_h1]:[text-wrap:balance] [&_h2]:[text-wrap:balance] " +
  "[&_h3]:[text-wrap:balance] [&_h4]:[text-wrap:balance] " +
  "[&_h5]:[text-wrap:balance] [&_h6]:[text-wrap:balance] " +
  /* color: inherit */
  "[&_h1]:[color:inherit] [&_h2]:[color:inherit] [&_h3]:[color:inherit] " +
  "[&_h4]:[color:inherit] [&_h5]:[color:inherit] [&_h6]:[color:inherit] " +
  /* margin: 0 */
  "[&_h1]:m-0 [&_h2]:m-0 [&_h3]:m-0 [&_h4]:m-0 [&_h5]:m-0 [&_h6]:m-0";

const BASE_HTML =
  "h-full antialiased " +
  TOKENS_BASE +
  " " +
  TOKENS_SUPPORTS +
  " " +
  TOKENS_NARROW +
  " " +
  TOKENS_SHORT +
  /* Anchor targets must clear the fixed navbar, or a #provide jump lands the
     section title underneath it. */
  " scroll-pt-[calc(var(--nav-h)+16px)] " +
  "[&_[id]]:scroll-mt-[calc(var(--nav-h)+16px)] " +
  HEADING_TREATMENT +
  " " +
  /* `& :focus-visible` — with the descendant space — so the ring reaches every
     focusable element, exactly as the old bare `:focus-visible` rule did. */
  "[&_:focus-visible]:[outline:2px_solid_var(--cyan)] " +
  "[&_:focus-visible]:[outline-offset:3px]";

const BASE_BODY =
  "min-h-full flex flex-col bg-[#1b2a3d] text-white font-(--font-sans) " +
  "[-webkit-text-size-adjust:100%] " +
  /* The page now scrolls past the hero into light sections, so it can no longer
     lock the viewport the way the standalone HTML did. */
  " overflow-y-auto";

/* The two things Tailwind has no utility for: `@keyframes`, and an `!important`
   reduced-motion reset (arbitrary properties cannot emit `!important`). Both
   used to live in globals.css — keeping them here is what lets that file stay
   a single `@import`. */
const KEYFRAMES = `
@keyframes hh-rise {
  from {
    opacity: 0;
    filter: blur(4px);
    margin-top: 14px;
  }
}

@keyframes hh-fade {
  from {
    opacity: 0;
  }
}

/* Honour the OS "reduce motion" setting. Kept global so components never each
   have to remember it. */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`.trim();

/**
 * Root layout — owns the chrome that must survive navigation.
 *
 * The Navbar lives here rather than in any page because layouts do not
 * re-render on navigation (see the Next docs on `layout`). Putting it in a page
 * would remount the client component — and its mobile-panel state with it — on
 * every route change, and would have to be repeated in each page as routes are
 * added.
 *
 * It is a sibling of `<main>`, not a child, so page content owns `<main>` and
 * the page can never accidentally nest one inside the other.
 *
 * It also owns the design tokens and the base rules, as Tailwind utilities on
 * `<html>` — see the token block above.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={BASE_HTML}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
      </head>
      <body className={BASE_BODY}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
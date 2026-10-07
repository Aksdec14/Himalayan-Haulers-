import type { ReactNode } from "react";

/* ==========================================================================
   /solutions — the small square action button the editorial layout uses.

   Deliberately NOT components/ui/Button: that one is a label with a bottom
   rule, and every call site on the site shares it. Restyling it for this page
   would restyle the whole site. This is a bordered box instead, and it stays
   free of "use client" so the server page can render it — importing it from
   the banner below only puts it in the client bundle as well, which costs
   nothing for a component with no state or handlers of its own.
   ========================================================================== */

const BASE =
  "inline-flex items-center justify-center border px-[clamp(18px,2vw,28px)] py-[clamp(11px,1.2vw,16px)] text-[length:var(--fs-small)] font-bold uppercase leading-none tracking-[0.16em] no-underline transition-colors duration-300";

/** `dark` is a contrast fix, same idea as Button's `tone`: white-on-ink or
 *  ink-on-white. `solid` is the one filled skin — the hero pairs it with the
 *  default outline so the two actions read as primary and secondary. The
 *  hover inverts the outlines and swaps the solid to cyan, so motion never
 *  varies between them. */
const SKIN = {
  light: "border-ink/30 text-ink hover:bg-ink hover:text-white",
  dark: "border-white/45 text-white hover:bg-white hover:text-ink",
  solid: "border-blue bg-blue text-white hover:border-cyan hover:bg-cyan",
} as const;

export default function MoreButton({
  children = "More",
  href = "/#contact",
  tone = "light",
  className = "",
}: {
  children?: ReactNode;
  href?: string;
  tone?: keyof typeof SKIN;
  className?: string;
}) {
  return (
    <a href={href} className={`${BASE} ${SKIN[tone]} ${className}`.trim()}>
      {children}
    </a>
  );
}

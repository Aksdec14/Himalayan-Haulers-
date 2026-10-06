"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonSize = "sm" | "md" | "lg";

/**
 * Which surface the button sits on. This is a contrast fix, not a style choice:
 * `onDark` is white-on-dark, `onLight` is cyan-on-light. The hover behaviour is
 * identical in both, so the motion never varies — only the colours do.
 */
export type ButtonTone = "onDark" | "onLight";

export type ButtonProps = {
  children: ReactNode;
  /** Renders a `next/link` when set, a real `<button>` otherwise. */
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  /** Defaults to `onDark`. Set `onLight` where the button sits on a white or
   *  near-white surface, where white text would be invisible. */
  tone?: ButtonTone;
  size?: ButtonSize;
  /** Appends the arrow glyph. Hidden from assistive tech, so it never has to be
   *  announced separately from the label. */
  withArrow?: boolean;
  /** Extra class names, e.g. to nudge spacing from a parent layout. */
  className?: string;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
};

/* A label and a bottom rule. No box, no fill, in either tone — the underline is
   what makes the control read as a control, and it carries the hover state too.
   Tone only picks the colours, so both surfaces share one shape.

   The two tones deliberately differ on hover: on dark surfaces the hover
   brightens white towards full white; on light surfaces white would be
   invisible, so that tone starts on cyan and darkens towards ink. Both are a
   single colour transition — no fill, no wipe, one animation.

   `group` is on the button so the arrow's hover nudge can be driven from here
   rather than by a caller-specific selector. */
const BASE =
  "group inline-flex items-center justify-center text-center no-underline uppercase font-[inherit] text-[length:var(--fs-nav,16px)] font-normal leading-none tracking-[0.08em] cursor-pointer whitespace-nowrap border-0 bg-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

const TONE: Record<ButtonTone, string> = {
  /* Held just below full white so there is somewhere to go on hover — the
     brightening is invisible if the resting state is already #fff. */
  onDark:
    "text-white/88 border-b-2 border-white/55 hover:text-white hover:border-white",
  onLight:
    "text-cyan border-b-2 border-cyan hover:text-ink hover:border-ink",
};

const SIZE: Record<ButtonSize, string> = {
  /* Bottom padding clears the rule so the label never sits on the line. */
  sm: "min-h-9 pb-[5px]",
  md: "min-h-11 pb-1.5",
  /* `lg` inherits the frame's CTA tokens; the rest fall back to fixed values so
     a button in a normal content section behaves predictably. */
  lg: "min-h-11 w-[length:var(--btn-w,min(260px,100%))] h-[length:var(--btn-h,44px)] pb-1.5",
};

/**
 * The site's only button. There is no `variant` prop and there is no intent to
 * add one: every call site gets the same animation, and callers customise it
 * through `href`, `children`, `size` and `tone` instead.
 *
 * `tone` is not a style variant. The hover behaviour is identical in both tones
 * — a colour fade, no fill, no wipe — so there is only ever one animation to
 * keep in step. All `tone` decides is which colours stay legible on the surface
 * the button has been dropped onto.
 */
export default function Button({
  children,
  href,
  type = "button",
  onClick,
  disabled,
  tone = "onDark",
  size = "md",
  withArrow = false,
  className,
  ...rest
}: ButtonProps) {
  const classNames = [BASE, TONE[tone], SIZE[size], className]
    .filter(Boolean)
    .join(" ");

  /* The label holds the text and the arrow together so the gap between them is
     the Button's business, not the caller's. */
  const content = (
    <>
      {children}
      {withArrow ? (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          &rarr;
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classNames} {...rest}>
        <span className="inline-flex items-center gap-[0.5em]">{content}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames}
      {...rest}
    >
      <span className="inline-flex items-center gap-[0.5em]">{content}</span>
    </button>
  );
}
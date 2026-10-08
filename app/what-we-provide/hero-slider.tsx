"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = {
  src: string;
  alt: string;
  position?: string;
  eyebrow: string;
  title: string;
  /** Rendered after the title in cyan (display size, so cyan on white is fine). */
  accent?: string;
  lead: string;
  links: { href: string; label: string }[];
};

const EYEBROW =
  "m-0 text-[length:var(--fs-small-xl)] font-bold uppercase tracking-[0.16em] text-blue/70";

const TITLE =
  "m-0 max-w-[20ch] text-balance text-[length:var(--fs-h1)] font-light uppercase leading-[1.05]";

const LEAD =
  "m-0 max-w-[44ch] text-[length:var(--fs-body-xl)] leading-[1.5] text-ink/75 text-pretty";

const ARROW =
  "absolute top-1/2 z-10 grid size-[clamp(34px,2.8vw,44px)] -translate-y-1/2 place-items-center rounded-full bg-white/80 text-blue transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan";

/** Small caps with a thin line and arrowhead underneath that lengthens on
 *  hover. Navy text, cyan line (cyan text on white is only 2.7:1). */
function LineLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex flex-col gap-[0.8em] self-start text-blue no-underline"
    >
      <span className="text-[length:var(--fs-small-xl)] font-bold uppercase tracking-[0.12em]">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="relative block h-px w-[clamp(110px,10vw,170px)] bg-cyan transition-[width] duration-300 after:absolute after:right-0 after:top-1/2 after:size-[7px] after:-translate-y-1/2 after:rotate-45 after:border-r after:border-t after:border-cyan after:content-[''] group-hover:w-[clamp(140px,12vw,210px)] motion-reduce:transition-none"
      />
    </Link>
  );
}

/**
 * The whole hero: copy on the left, photograph on the right, and one index
 * that drives both. Pressing an arrow changes the photograph AND the copy
 * beside it, so the words always describe the picture.
 *
 * The slides' copy is stacked in a single grid cell and cross-faded, so the
 * left column is always as tall as the tallest slide and nothing jumps when it
 * changes. Only the active slide is reachable (inert) or read out (aria-hidden),
 * and only the active slide's title is the <h1>.
 *
 * Sizes come from the --fs-*-xl steps the page declares on <main>, which
 * descend into this component.
 */
export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const go = (step: number) =>
    setIndex((current) => (current + step + slides.length) % slides.length);

  return (
    <div
      className="grid min-[860px]:min-h-[clamp(440px,calc(var(--vh,100vh)*0.62),700px)] min-[860px]:grid-cols-[minmax(0,1fr)_minmax(0,48%)]"
      role="group"
      aria-roledescription="carousel"
      aria-label="What we provide"
    >
      {/* Left: the copy, one slide per layer */}
      <div className="grid content-center py-[clamp(32px,5vw,80px)] pl-[length:var(--content-pad)] pr-[clamp(20px,4vw,64px)]">
        {slides.map((slide, i) => {
          const active = i === index;
          const Title = active ? "h1" : "p";
          return (
            <div
              key={slide.src}
              inert={!active}
              aria-hidden={!active}
              className={`col-start-1 row-start-1 flex flex-col justify-center gap-[clamp(14px,1.6vw,24px)] transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
                active
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <p className={EYEBROW}>{slide.eyebrow}</p>

              <Title className={TITLE}>
                {slide.title}
                {slide.accent ? (
                  <>
                    {" "}
                    <span className="text-cyan">{slide.accent}</span>
                  </>
                ) : null}
              </Title>

              <p className={LEAD}>{slide.lead}</p>

              <div
                className="flex flex-wrap gap-x-[clamp(24px,3vw,48px)] gap-y-4 pt-[clamp(8px,1.2vw,16px)]"
                role="group"
                aria-label="Page actions"
              >
                {slide.links.map((link) => (
                  <LineLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Right: the photograph, with the arrows on its edges */}
      <div className="relative max-[859px]:aspect-[4/3]">
        <div className="absolute inset-0 overflow-hidden bg-ink">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                preload={i === 0}
                sizes="(max-width: 860px) 100vw, 48vw"
                className="object-cover"
                style={{ objectPosition: slide.position ?? "center" }}
              />
            </div>
          ))}

          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className={`${ARROW} left-[clamp(8px,1.2vw,18px)]`}
          >
            <ChevronLeft size={20} strokeWidth={1.6} aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(1)}
            className={`${ARROW} right-[clamp(8px,1.2vw,18px)]`}
          >
            <ChevronRight size={20} strokeWidth={1.6} aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {slides.length}: {slides[index].eyebrow}
      </p>
    </div>
  );
}
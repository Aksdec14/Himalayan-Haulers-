import Image from "next/image";
import Button from "./ui/Button";

const CTAS = [
  { label: "Explore Products", href: "/what-we-provide/products" },
  { label: "Explore Services", href: "/what-we-provide/services" },
];

/* ---------------------------------------------------------------------------
   THE SLICED IMAGE — one photograph cut into vertical strips of different
   heights, like the reference. Every strip shows its own slice of the SAME
   image, so the picture reads as one whole across the gaps.

   How: each strip is an overflow-hidden box placed by percentages of the
   frame. Inside it sits a copy of the image sized and offset (also in
   percentages) to cover the whole frame, so the strip is a window onto it.
   Everything is relative, so it scales with the frame at any width.

   Change SLICE_IMAGE to swap the photo. Change STRIPS to reshape the cut:
   `t` is the strip's top and `h` its height, both as % of the frame height.
   --------------------------------------------------------------------------- */
const SLICE_IMAGE = {
  src: "/media/DroneImage.png",
  alt: "Heavy-lift drone delivering supplies at altitude",
  /* Where the subject sits in the photo. */
  position: "center",
};

const STRIPS = [
  { t: 8, h: 84 },
  { t: 2, h: 82 },
  { t: 14, h: 84 },
  { t: 8, h: 76 },
  { t: 2, h: 92 },
  { t: 8, h: 76 },
  { t: 3, h: 84 },
];

/* Gap between strips, as % of the frame width. */
const GAP_PCT = 1.2;
const STRIP_W = (100 - GAP_PCT * (STRIPS.length - 1)) / STRIPS.length;

function SlicedImage({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label={SLICE_IMAGE.alt}
      className={`relative aspect-[16/10] w-full ${className}`}
    >
      {STRIPS.map((strip, i) => {
        const left = i * (STRIP_W + GAP_PCT);
        return (
          <div
            key={i}
            aria-hidden="true"
            className="absolute overflow-hidden bg-ink shadow-[0_14px_30px_-18px_rgba(10,25,45,0.45)]"
            style={{
              left: `${left}%`,
              width: `${STRIP_W}%`,
              top: `${strip.t}%`,
              height: `${strip.h}%`,
            }}
          >
            {/* A full-frame copy of the photo, shifted so this strip shows
                the part of it that lies under the strip. */}
            <div
              className="absolute"
              style={{
                width: `${(100 / STRIP_W) * 100}%`,
                height: `${(100 / strip.h) * 100}%`,
                left: `${-(left / STRIP_W) * 100}%`,
                top: `${-(strip.t / strip.h) * 100}%`,
              }}
            >
              <Image
                src={SLICE_IMAGE.src}
                alt=""
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: SLICE_IMAGE.position }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* This section steps up from the hero's scale, so the rungs it uses are
   overridden HERE as arbitrary properties rather than by editing the tokens in
   globals.css (which would resize the hero headline and navbar too). */
const SECTION =
  "relative overflow-x-clip bg-[#f4f7fa] text-ink animate-hh-fade [--fs-h2:calc(var(--fs-h2)*1.6)] [--fs-body:calc(var(--fs-body)*1.18)] py-[length:var(--section-pad)]";

/* Left-anchored: same --content-pad line as the hero headline and navbar logo. */
const INNER =
  "pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]";

/* Left: heading, sub-heading, buttons, centred against the image. Right: the
   sliced image. Stacks on mobile. */
const LAYOUT =
  "grid items-stretch gap-[clamp(28px,4vw,64px)] min-[860px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]";

const TITLE = "text-[length:var(--fs-h1)] uppercase";
const ACCENT = "text-cyan";

const SUBLINE =
  "mt-[clamp(10px,1.2vw,16px)] max-w-[52ch] text-[length:var(--fs-body)] leading-[1.55] text-ink/75 text-pretty";

/**
 * "What We Provide" — heading, sub-heading and two buttons on the left, one
 * photograph cut into vertical strips on the right. Server component; the
 * only interactive part is the shared Button.
 */
export default function WhatWeProvide() {
  return (
    <section id="provide" className={SECTION} aria-labelledby="provide-title">
      <div className={INNER}>
        <div className={LAYOUT}>
          {/* Stretches to the image's height: heading level with its top,
              buttons level with its bottom. */}
          <div className="flex min-w-0 flex-col justify-between gap-[clamp(20px,2.4vw,32px)]">
            <div>
              <h2 id="provide-title" className={TITLE}>
                What We <span className={ACCENT}>Provide</span>
              </h2>
              <p className={SUBLINE}>
                Put heavy-lift drones to work your way. Own purpose-built
                logistics, surveillance and custom drones, built in India for
                Indian conditions, or hire our crews to bring the aircraft,
                pilots and support to your site. Either way, fewer people end
                up at height or in harm&rsquo;s way.
              </p>
            </div>

            <div className="flex flex-wrap gap-[clamp(12px,1.4vw,18px)]">
              {CTAS.map((cta) => (
                <Button key={cta.href} href={cta.href} tone="onLight" withArrow>
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <SlicedImage />
          </div>
        </div>
      </div>
    </section>
  );
}
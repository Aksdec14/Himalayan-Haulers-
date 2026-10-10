import BackgroundVideo from "./BackgroundVideo";
import Button from "./ui/Button";

const SLIDER_ITEMS = [
  {
    key: "a",
    title: "HH Freightor D-Series",
    body: "Heavy-lift logistics drones, 20 kg to 300 kg payload",
  },
  {
    key: "b",
    title: "Drone as a Service",
    body: "LDaaS, inspections and tower stringing on demand",
  },
];

/** Listed smallest/most efficient first — the browser takes the first it can
 *  play, so a WebM added here is picked up automatically with no code change. */
const VIDEO_SOURCES = [
  { src: "/media/HIMALAYAN-HERO.webm", type: "video/webm" },
  { src: "/media/HIMALAYAN-HERO.mp4", type: "video/mp4" },
];

/* The frame is the page's only size container, so anything inside it can size
   itself with cqw / cqh. `[container-type:size]` is load-bearing: without it
   every cqw/cqh value below falls back to the small viewport.

   The frame is now a flex column: hero copy on top (takes the free space),
   feature strip at the bottom (never shrinks). Because both are in normal flow
   they can never overlap, at any width or height — the old absolute positioning
   could. */
const FRAME =
  "absolute top-[length:var(--frame-top)] bottom-[length:var(--frame-bottom)] left-[length:var(--frame-left)] right-[length:var(--frame-right)] z-[2] [container-type:size] overflow-hidden flex flex-col px-[4.9cqw] bg-[radial-gradient(circle_at_22%_18%,rgba(160,200,235,0.28),transparent_38%),linear-gradient(to_bottom,rgba(10,25,45,0.46),rgba(10,25,45,0)_40%,rgba(10,20,30,0.7))] [--hero-gap:clamp(12px,2.6cqh,28px)] max-h-[620px]:[--hero-gap:clamp(8px,2cqh,16px)]";

const BLUR =
  "absolute inset-0 z-[1] bg-[rgba(20,35,55,0.5)] backdrop-blur-[14px] hero-frame-cutout";

/* One gap token (--hero-gap) separates headline, lede and button, so all three
   gaps are identical. Margins on the children are zeroed so a global heading or
   paragraph margin cannot reintroduce uneven spacing.

   `--btn-*` are CTA geometry, consumed by the shared Button below. */
const HERO_COPY =
  "flex flex-col items-start gap-[length:var(--hero-gap)] flex-1 min-h-0 pt-[clamp(20px,16cqh,160px)] max-[700px]:pt-[clamp(16px,8cqh,80px)] max-h-[620px]:pt-[clamp(12px,8cqh,48px)] w-[46cqw] max-[1240px]:w-[50cqw] max-[700px]:w-full [--btn-w:min(max(13.9cqw,148px),260px)] [--btn-h:min(max(6.4cqh,44px),62px)]";

/* Weight, leading, tracking and balance come from the global heading rule in
   globals.css. Only the level's size and this section's case live here.

   The stagger uses `[animation-delay:...]`, not Tailwind's `delay-[...]`: that
   utility sets transition-delay, which does nothing to an animation. */
const TITLE =
  "m-0 text-[length:calc(var(--fs-h2)*1.09)] uppercase animate-hh-rise [animation-delay:200ms]";

const LEDE =
  "m-0 w-[36cqw] max-[1240px]:w-[40cqw] max-[700px]:w-full max-w-full text-[length:var(--fs-lead)] leading-[1.38] text-white/88 text-pretty animate-hh-rise [animation-delay:300ms]";

/* Glass panel over the shared Button: the tint, not the blur, carries contrast
   over moving footage. `m-0` keeps the flex gap as the only spacing. */
const CTA =
  "mt-5 px-6 rounded-[4px] border border-white/30 bg-[rgba(20,35,55,0.28)] backdrop-blur-[10px] backdrop-saturate-[140%] text-white animate-hh-rise [animation-delay:400ms] hover:bg-[rgba(20,35,55,0.46)] hover:border-white/60";

/* Bottom feature strip: a grid in normal flow. Two equal columns with one gap;
   the second drops out below 1000px. Bottom padding is the same token the rest
   of the hero spaces with, scaled up, so it sits off the frame edge evenly. */
const SLIDER =
  "shrink-0 grid grid-cols-2 max-[1000px]:grid-cols-1 gap-x-[calc(var(--hero-gap)*2)] pt-[length:var(--hero-gap)] pb-[clamp(16px,6cqh,48px)] animate-hh-fade [animation-delay:550ms]";

const ITEM = "min-w-0 flex flex-col gap-[0.4em]";

/* h3 on the site, so --fs-h3 like every other h3. */
const ITEM_TITLE = "m-0 text-[length:var(--fs-h3)]";

const ITEM_BODY =
  "m-0 text-[length:var(--fs-small)] leading-[1.35] text-white/80 text-balance max-h-[480px]:hidden";

/**
 * Home page hero: a full-bleed video, blurred everywhere except a sharp frame,
 * with the headline and CTA inside the frame.
 *
 * Server component — the only interactive parts are leaves (the video honours
 * reduced-motion, the button is the shared component).
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden isolate supports-[min-height:100dvh]:min-h-[100dvh]">
      <BackgroundVideo
        sources={VIDEO_SOURCES}
        poster="/media/HIMALAYAN-HERO-poster.jpg"
      />

      {/* Blurs everything EXCEPT the frame, via a cut-out in the clip path.
          Reads the same --frame-* insets the frame below uses, so the two cannot
          drift apart. */}
      <div className={BLUR} aria-hidden="true" />

      <div className={FRAME}>
        <div className={HERO_COPY}>
          <h1 className={TITLE}>
          Aerial Logistics & 
            <br />
            Intelligence for Every Altitude
          </h1>
          <p className={LEDE}>
          Heavy-payload delivery, stringing, aerial surveys, and inspections for EPCs, power transmission, and industrial enterprises.
          </p>
          <Button href="/#provide" size="lg" className={CTA}>
            Explore Drones
          </Button>
        </div>

        <div className={SLIDER}>
          {SLIDER_ITEMS.map((item) => (
            <div
              key={item.key}
              className={`${ITEM} ${
                item.key === "b" ? "max-[1000px]:hidden" : ""
              }`}
            >
              <h2 className={ITEM_TITLE}>{item.title}</h2>
              <p className={ITEM_BODY}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
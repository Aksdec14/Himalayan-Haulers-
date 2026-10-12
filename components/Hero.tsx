import Image from "next/image";
import heroImg from "../public/media/HeroImage.png"; // adjust path

export default function Hero() {
  return (
    /* Fills exactly the space below the fixed navbar. --nav-h is the same
       value the navbar renders at, so the headline can never slide under the
       white bar. min/max are safety rails for extreme aspect ratios, not a
       size system — hence no aspect-ratio here to fight them. */
    <section
      className="relative isolate w-full overflow-hidden
                 bg-[#0a1a36] mt-[length:var(--nav-h)]
                 h-[length:calc(100dvh-var(--nav-h))] min-h-[320px] max-h-[720px]"
    >
      <Image
        src={heroImg}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-center"
      />

      {/* Scrim: dark navy glow anchored to the top-left corner where the
          headline sits, fading out so the rest of the image stays bright */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]
                   bg-[radial-gradient(ellipse_85%_75%_at_28%_30%,rgba(10,26,54,0.72)_0%,rgba(10,26,54,0.45)_48%,rgba(10,26,54,0)_78%)]
                   max-md:bg-[linear-gradient(to_bottom,rgba(10,26,54,0.55),rgba(10,26,54,0.25))]"
      />

      {/* Headline: left-aligned on the same vertical line as the navbar logo
          (--hero-left), vertically centred in the band. */}
      <div className="absolute inset-0 z-[2] flex items-center justify-start pl-[length:var(--hero-left)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))] text-left">
        <h1
          className="m-0 max-w-[28ch] leading-[1.1] tracking-[-0.02em] text-white
                     text-[length:var(--fs-h1)]
                     [text-shadow:0_2px_4px_rgba(10,26,54,0.6),0_4px_24px_rgba(10,26,54,0.65)]"
        >
          <span className="block font-medium">
            Drone Solutions for
          </span>
          <span className="block font-extrabold">
            Real World Applications
          </span>
        </h1>
      </div>
    </section>
  );
}
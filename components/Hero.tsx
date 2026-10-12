import Image from "next/image";
import heroImg from "../public/media/HeroImage.png"; // adjust path

const HEADER_H = "53px";

export default function Hero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden
                 bg-[#0a1a36] aspect-[16/9] min-h-[300px] max-h-[480px]"
      style={{ marginTop: HEADER_H }}
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
                   bg-[radial-gradient(ellipse_85%_75%_at_22%_30%,rgba(10,26,54,0.72)_0%,rgba(10,26,54,0.45)_48%,rgba(10,26,54,0)_78%)]
                   max-md:bg-[linear-gradient(to_bottom,rgba(10,26,54,0.55),rgba(10,26,54,0.25))]"
      />

      {/* Headline: left-aligned, vertically centred in the band. */}
      <div className="absolute inset-0 z-[2] flex items-center justify-start px-[4%] text-left">
        <h1
          className="m-0 max-w-[28ch] leading-[1.1] tracking-[-0.02em] text-white
                     font-[family-name:var(--font-display),system-ui,sans-serif]
                     text-[clamp(1.35rem,4.6vw,4.2rem)]
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
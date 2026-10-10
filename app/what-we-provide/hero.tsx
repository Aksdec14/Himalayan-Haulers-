import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

export type Cta = { href: string; label: string };

type HeroProps = {
  eyebrow?: string[];
  title: string;
  accent?: string;
  lead: string;
  ctas: [Cta, Cta?];
  image: { src: string; alt: string; position?: string };
  features: Feature[];
};

const EYEBROW =
  "m-0 flex items-center gap-4 text-[length:var(--fs-small-xl)] font-medium uppercase tracking-[0.2em] text-[color:var(--ink)]";

const TITLE =
  "m-0 text-balance text-[length:var(--fs-h1)] font-extrabold uppercase leading-[1.02] tracking-tight text-[color:var(--ink)]";

const LEAD =
  "m-0 max-w-[46ch] text-[length:var(--fs-body-xl)] leading-[1.6] text-[color:var(--ink)]/70 text-pretty";

const LINK =
  "inline-flex items-center gap-2 whitespace-nowrap border-b-2 border-[color:var(--cyan)] pb-2 text-[length:var(--fs-small)] font-medium uppercase tracking-[0.12em] text-[color:var(--cyan)] no-underline transition-colors duration-300 hover:text-[color:var(--blue)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--cyan)]";

export default function Hero({
  eyebrow = [],
  title,
  accent,
  lead,
  ctas,
  image,
  features,
}: HeroProps) {
  const [primary, secondary] = ctas;

  return (
    <section
      aria-label="What we provide"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white via-white to-sky-50"
    >
      {/* Right: full-bleed photo, fading into the page on its left edge */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full min-[1100px]:w-[62%]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          sizes="(max-width: 1100px) 100vw, 62vw"
          className="object-cover opacity-30 min-[1100px]:opacity-100 [mask-image:linear-gradient(to_right,transparent_0%,black_35%)] min-[1100px]:[mask-image:linear-gradient(to_right,transparent_0%,black_30%),linear-gradient(to_top,transparent_0%,black_25%)] min-[1100px]:[mask-composite:intersect]"
          style={{ objectPosition: image.position ?? "center" }}
        />

        {/* decorative arcs + accent bar (desktop only) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 800 700"
          className="absolute inset-0 hidden size-full min-[1100px]:block"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path
            d="M120 90 C 300 20, 560 40, 700 300"
            stroke="white"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          />
          <path
            d="M20 260 C 40 160, 130 90, 230 55"
            stroke="#28a0ff"
            strokeOpacity="0.5"
            strokeWidth="1.2"
            strokeDasharray="1 5"
            strokeLinecap="round"
          />
        </svg>
        <span
          aria-hidden="true"
          className="absolute left-[2%] top-[14%] hidden h-[4px] w-14 bg-[color:var(--cyan)] min-[1100px]:block"
        />
      </div>

      {/* Left: copy */}
      <div className="flex flex-col gap-[clamp(18px,2vw,28px)] py-[clamp(40px,6vw,96px)] pl-[length:var(--content-pad)] pr-[length:var(--content-pad)] min-[1100px]:max-w-[56%]">
        {eyebrow.length > 0 && (
          <p className={EYEBROW}>
            {eyebrow.join(" · ")}
            <span
              aria-hidden="true"
              className="block h-px w-20 shrink-0 bg-[color:var(--ink)]/30"
            />
          </p>
        )}

        <h1 className={TITLE}>
          {title}
          {accent ? (
            <>
              <br />
              <span className="text-[color:var(--cyan)]">{accent}</span>
            </>
          ) : null}
        </h1>

        <p className={LEAD}>{lead}</p>

        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2">
          <Link href={primary.href} className={LINK}>
            {primary.label}
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
          {secondary && (
            <Link href={secondary.href} className={LINK}>
              {secondary.label}
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          )}
        </div>

        {/* Feature row */}
        <ul className="m-0 mt-[clamp(16px,3vw,48px)] grid list-none grid-cols-1 gap-6 p-0 min-[640px]:grid-cols-3 min-[640px]:gap-0">
          {features.map((f, i) => {
            const Icon = f.icon;
            const body = (
              <>
                <Icon
                  size={40}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[color:var(--cyan)]"
                />
                <span className="flex flex-col gap-1">
                  <span className="text-[length:var(--fs-small)] font-bold uppercase leading-tight tracking-[0.06em] text-[color:var(--ink)]">
                    {f.title}
                  </span>
                  <span className="max-w-[18ch] text-[length:var(--fs-small)] leading-snug text-[color:var(--ink)]/60">
                    {f.description}
                  </span>
                </span>
              </>
            );
            return (
              <li
                key={f.title}
                className={`flex ${
                  i > 0
                    ? "min-[640px]:border-l min-[640px]:border-[color:var(--ink)]/15 min-[640px]:pl-[clamp(16px,2vw,32px)]"
                    : ""
                } ${i < features.length - 1 ? "min-[640px]:pr-[clamp(16px,2vw,32px)]" : ""}`}
              >
                {f.href ? (
                  <Link
                    href={f.href}
                    className="flex gap-4 no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--cyan)]"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="flex gap-4">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
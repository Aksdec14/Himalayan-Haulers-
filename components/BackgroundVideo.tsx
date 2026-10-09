"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's background video.
 *
 * Client component for one reason: honouring `prefers-reduced-motion`. The
 * video is decorative (`aria-hidden`), so a visitor who has asked for reduced
 * motion should get a still frame rather than a looping clip. A poster image
 * is what they see in that case.
 */
export default function BackgroundVideo({
  sources,
  poster,
}: {
  sources: { src: string; type: string }[];
  poster?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (query.matches) {
        video.pause();
      } else {
        // play() rejects if the browser still considers this an unmuted
        // autoplay, so swallow it rather than logging a console error.
        void video.play().catch(() => {});
      }
    };

    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    
<video
  ref={ref}
  className="absolute inset-0 z-0 h-full w-full max-w-none object-cover"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  poster={poster}
  aria-hidden="true"
  tabIndex={-1}
>
  {sources.map((source) => (
    <source
      key={source.src}
      src={source.src}
      type={source.type}
    />
  ))}
</video>

  );
}
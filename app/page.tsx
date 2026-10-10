import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Solutions from "@/components/Solutions";
import WhatWeProvide from "@/components/WhatWeProvide";
import Contact from "@/components/Contact";
import BannerPower from "@/components/BannerPower";
import Dronepage from "@/components/Dronepage";
/* No <Navbar> here — it lives in app/layout.tsx, which does not re-render on
   navigation. See the note on RootLayout. */
export default function HomePage() {
  return (
    /* The home page stacks five full-height bands, so the shared section padding
       is the dominant source of vertical whitespace here. It is overridden here
       rather than in layout.tsx because --section-pad is shared with the
       Products / Services / Industries routes, which keep the full value. The
       hero is unaffected: its frame is sized from --vh, not --section-pad. */
    <main className="[--section-pad:calc(clamp(56px,9vw,120px)*0.68)]">
      <Hero />
      <WhatWeProvide />
      <Solutions />
      <Dronepage />
      <BannerPower />
      <Industries />
      <Contact />
    </main>
  );
}

import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Solutions from "@/components/Solutions";
import WhatWeProvide from "@/components/WhatWeProvide";
import Contact from "@/components/Contact";
/* No <Navbar> here — it lives in app/layout.tsx, which does not re-render on
   navigation. See the note on RootLayout. */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatWeProvide />
      <Solutions />
      <Industries />
      <Contact />
    </main>
  );
}

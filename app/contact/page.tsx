import type { Metadata } from "next";
import Contact from "@/components/Contact";

/* app/contact/page.tsx
   This route is a thin shell around <Contact />, which is the one copy of the
   contact section and is shared with the home page.

   The split is forced by the form. <Contact /> must be a client component so
   it can POST to Web3Forms with fetch() and keep that URL out of the address
   bar, and a client component cannot export `metadata` — so the page metadata
   lives here and the markup lives there. */

export const metadata: Metadata = {
  title: "Contact | Himalayan Haulers",
  description:
    "Connect with our team to discuss your project requirements, drone capabilities, and potential deployment opportunities. We work with enterprises, EPC contractors, and industrial organisations to support complex operational needs.",
};

export default function ContactPage() {
  /* The vertical padding belongs to the route rather than the shared section:
     the home page's <Contact /> is one band in a full-height stack and gets its
     spacing from --section-pad, while /contact is the whole page. Keeping it
     here means the shared component stays free of route-specific spacing. */
  return (
    <div className="py-6 min-[560px]:py-12">
      <Contact />
    </div>
  );
}
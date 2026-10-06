import type { Metadata, Viewport } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Himalayan Haulers – Heavy-Lift Logistics Drones",
  description:
    "Heavy-lift drones that carry 20 to 300 kg to places trucks and mules can't reach. Autonomous, high-altitude ready and built in India.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Lets env(safe-area-inset-*) resolve on notched devices, which the frame
  // insets depend on.
  viewportFit: "cover",
  themeColor: "#13294b",
};

/**
 * Root layout — owns the chrome that must survive navigation.
 *
 * The Navbar lives here rather than in any page because layouts do not
 * re-render on navigation (see the Next docs on `layout`). Putting it in a page
 * would remount the client component — and its mobile-panel state with it — on
 * every route change, and would have to be repeated in each page as routes are
 * added.
 *
 * It is a sibling of `<main>`, not a child, so page content owns `<main>` and
 * the page can never accidentally nest one inside the other.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

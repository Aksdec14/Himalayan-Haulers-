"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const navLinks = [
  "What We Provide",
  "Solutions",
  "Industries",
  "Contact",
];

const droneProducts = [
  "Freightor D-Series logistics drones",
  "Surveillance drones",
  "Custom-built drones",
];

const droneServices = [
  "Logistics Drone as a Service (LDaaS)",
  "Drone inspections",
  "Industrial sensor surveys",
  "Drone-based tower stringing",
];

const industries = [
  "Power",
  "Defence",
  "Construction",
  "Energy",
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1400px] px-[length:var(--content-pad)] pt-[clamp(40px,5vw,80px)]">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div>
            <Link href="/" className="mb-5 block max-w-[140px]" aria-label="Himalayan Haulers home">
              <Image
                src="/media/HH-Logo-Ink.png"
                alt="Himalayan Haulers"
                width={1662}
                height={380}
                priority={false}
                sizes="140px"
                className="h-auto w-full object-contain"
              />
            </Link>
            <h2 className="text-2xl font-bold tracking-tight text-[#13294B]">
              HIMALAYAN
              <br />
              HAULERS
            </h2>

            <p className="mt-0 max-w-xs text-sm leading-6 text-gray-500">
              Heavy-lift drones for India's toughest terrain.
            </p>

            <div className="mt-7 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a
                  href="mailto:arjun@himalayanhaulers.com"
                  className="transition hover:text-[#13294B]"
                >
                  arjun@himalayanhaulers.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a
                  href="tel:+917899801210"
                  className="transition hover:text-[#13294B]"
                >
                  +91 78998 01210
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#13294B]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 transition hover:text-[#13294B]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Drone Products */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#13294B]">
              Drone Products
            </h3>

            <ul className="space-y-3">
              {droneProducts.map((product) => (
                <li key={product}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 transition hover:text-[#13294B]"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Drone as a Service */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#13294B]">
              Drone as a Service
            </h3>

            <ul className="space-y-3">
              {droneServices.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 transition hover:text-[#13294B]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries We Serve */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#13294B]">
              Industries We Serve
            </h3>

            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 transition hover:text-[#13294B]"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 -mx-[length:var(--content-pad)] bg-blue px-[length:var(--content-pad)] py-6">
          <div className="mx-auto max-w-[1400px] flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-white/70">
              © 2026 Himalayan Haulers Pvt. Ltd.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="/privacy"
                className="text-xs text-white/70 transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="text-xs text-white/70 transition hover:text-white"
              >
                Terms
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/70 transition hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="text-white/70 transition hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="text-white/70 transition hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white/70 transition hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
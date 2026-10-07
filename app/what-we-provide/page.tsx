import Link from "next/link";

export default function WhatWeProvideLanding() {
  return (
    <main className="flex flex-col gap-[clamp(40px,5vw,80px)] py-[length:var(--section-pad)]">
      <div className="pl-[length:var(--content-pad)] pr-[length:var(--content-pad-end,clamp(20px,5vw,64px))]">
        <header className="max-w-[min(62ch,var(--content-max,1200px))] mb-[clamp(32px,4.5vw,64px)] animate-hh-fade">
          <h1 className="text-[length:var(--fs-h1)] uppercase">
            What We <span className="text-cyan">Provide</span>
          </h1>
          <p className="mt-[clamp(12px,1.6vw,20px)] text-[length:var(--fs-lead)] leading-[1.45] text-ink/72 text-pretty">
            Two ways to put heavy-lift drones to work: own them, or hire the capability.
          </p>
        </header>

        <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] max-w-[length:var(--content-max,1200px)] gap-[length:var(--card-gap)] m-0 p-0 list-none max-[860px]:grid-cols-[minmax(0,1fr)]">
          <Link
            href="/what-we-provide/products"
            className="flex flex-col p-[clamp(24px,2.8vw,40px)] rounded-lg border bg-white text-ink border-blue/10 shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.06)] transition-[border-color,box-shadow,transform] duration-300 hover:border-cyan/50 hover:shadow-[0_4px_8px_rgba(10,25,45,0.05),0_20px_44px_rgba(10,25,45,0.1)] motion-safe:hover:-translate-y-0.5"
          >
            <h2 className="text-[length:var(--fs-h3)] text-ink">Drone Products</h2>
            <p className="mt-[clamp(12px,1.4vw,18px)] text-[length:var(--fs-body)] leading-[1.45] text-pretty text-ink/75">
              Buy the aircraft: Freightor D-Series logistics drones, surveillance drones, and custom platforms built in India for Indian conditions.
            </p>
            <ul className="mt-auto mb-0 mx-0 px-0 pb-0 pt-[clamp(18px,2.2vw,26px)] list-none">
              <li className="text-[length:var(--fs-body)] leading-[1.4] not-first:mt-[0.6em] text-ink/85">Freightor D20, D100, D200, D300</li>
              <li className="text-[length:var(--fs-body)] leading-[1.4] not-first:mt-[0.6em] text-ink/85">VTOL fixed-wing surveillance drones</li>
              <li className="text-[length:var(--fs-body)] leading-[1.4] not-first:mt-[0.6em] text-ink/85">Custom-built drones to your spec</li>
            </ul>
          </Link>

          <Link
            href="/what-we-provide/services"
            className="flex flex-col p-[clamp(24px,2.8vw,40px)] rounded-lg border bg-blue text-white border-white/12 shadow-[0_2px_4px_rgba(10,25,45,0.04),0_12px_32px_rgba(10,25,45,0.06)] transition-[border-color,box-shadow,transform] duration-300 hover:border-cyan/50 hover:shadow-[0_4px_8px_rgba(10,25,45,0.05),0_20px_44px_rgba(10,25,45,0.1)] motion-safe:hover:-translate-y-0.5"
          >
            <h2 className="text-[length:var(--fs-h3)] text-white">Drone as a Service</h2>
            <p className="mt-[clamp(12px,1.4vw,18px)] text-[length:var(--fs-body)] leading-[1.45] text-pretty text-white/85">
              Hire the capability: logistics delivery, inspections, sensor surveys, and tower stringing with our crews and drones — no fleet to own.
            </p>
            <ul className="mt-auto mb-0 mx-0 px-0 pb-0 pt-[clamp(18px,2.2vw,26px)] list-none">
              <li className="text-[length:var(--fs-body)] leading-[1.4] not-first:mt-[0.6em] text-white/90">Logistics Drone as a Service (LDaaS)</li>
              <li className="text-[length:var(--fs-body)] leading-[1.4] not-first:mt-[0.6em] text-white/90">Drone inspections (confined space, visual, thermal, UT)</li>
              <li className="text-[length:var(--fs-body)] leading-[1.4] not-first:mt-[0.6em] text-white/90">Industrial sensor surveys</li>
              <li className="text-[length:var(--fs-body)] leading-[1.4] not-first:mt-[0.6em] text-white/90">Drone-based tower stringing</li>
            </ul>
          </Link>
        </div>
      </div>
    </main>
  );
}
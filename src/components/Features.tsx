"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Gift,
  DeviceMobileSpeaker,
  CurrencyCircleDollar,
  Numpad,
  ArrowUpRight,
  ContactlessPayment,
  WifiSlash,
  PiggyBank,
  WhatsappLogo,
} from "@phosphor-icons/react";

const features = [
  {
    n: "01",
    icon: Gift,
    title: "Gift Cards",
    body: "Buy and sell 500+ gift card brands at the best rates. Apple, Amazon, Netflix, Xbox, Steam, and hundreds more, delivered instantly.",
  },
  {
    n: "02",
    icon: DeviceMobileSpeaker,
    title: "Airtime & Data",
    body: "Top up airtime and data bundles for any network instantly. MTN, Airtel, Glo, and 9mobile, 24 hours a day, zero downtime.",
  },
  {
    n: "03",
    icon: CurrencyCircleDollar,
    title: "Live Rates",
    body: "Real-time crypto and fiat exchange rates with a built-in converter. Always know the right moment to buy or sell.",
  },
  {
    n: "04",
    icon: Numpad,
    title: "Virtual Numbers",
    body: "Get US, UK, Canadian, and Australian numbers for OTP verification and privacy. Receive SMS from any service worldwide.",
  },
  {
    n: "05",
    icon: ArrowUpRight,
    title: "Send Money",
    body: "Instant transfers to any Nigerian bank account or PPAY user worldwide. Settles in under 10 seconds, zero peer-to-peer fees.",
  },
  {
    n: "06",
    icon: ContactlessPayment,
    title: "Virtual & Physical Cards",
    body: "Create a USD virtual card for online shopping in seconds, or order a premium physical card accepted everywhere Mastercard is.",
  },
  {
    n: "07",
    icon: WifiSlash,
    title: "NearPay",
    body: "Our proprietary offline payment technology. Send and receive money between nearby devices with zero internet, a world first.",
  },
  {
    n: "08",
    icon: PiggyBank,
    title: "Savings",
    body: "Set goals, automate deposits, and earn up to 8.5% APY. Track your wealth visually as you build toward what matters most.",
  },
  {
    n: "09",
    icon: WhatsappLogo,
    title: "WhatsApp Bot",
    body: "Full PPAY access without the app. Trade OTC, swap crypto, sell gift cards, buy airtime, and check live prices, all via a WhatsApp message.",
  },
];

export default function Features() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative bg-white section">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-600 mb-5"
          >
            What&apos;s inside
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.07] tracking-[-0.025em] text-[#0f172a]"
          >
            Everything you need.
            <br />
            <span className="text-gradient-blue">One account.</span>
          </motion.h2>
        </div>

        {/* Feature rows — zero-card, divided by lines */}
        <div className="flex flex-col">
          {features.map((f, i) => (
            <FeatureRow key={f.n} f={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  f,
  index,
}: {
  f: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-[48px_1fr] md:grid-cols-[72px_1fr_1fr] gap-6 md:gap-10 py-9 md:py-11 border-b border-[#f1f5f9] last:border-0 hover:bg-[#f8faff] -mx-5 sm:-mx-8 px-5 sm:px-8 transition-colors duration-300"
    >
      {/* Number + icon */}
      <div className="flex flex-col items-start gap-3 pt-0.5">
        <span className="text-[12px] font-semibold text-[#94a3b8] tracking-widest">{f.n}</span>
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
          <f.icon
            size={20}
            weight="duotone"
            className="text-blue-600 group-hover:text-white transition-colors duration-300"
          />
        </div>
      </div>

      {/* Title */}
      <div className="md:col-auto">
        <h3 className="text-[1.15rem] md:text-[1.3rem] font-bold text-[#0f172a] tracking-[-0.015em] leading-tight">
          {f.title}
        </h3>
      </div>

      {/* Description — full row on mobile, 3rd col on desktop */}
      <div className="col-span-2 md:col-span-1 md:col-start-3 md:row-start-1 md:self-center">
        <p className="text-[15px] leading-[1.7] text-[#64748b]">{f.body}</p>
      </div>
    </motion.div>
  );
}

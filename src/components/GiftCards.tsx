"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Package, SealCheck, ClockCountdown } from "@phosphor-icons/react";
import PhoneMockup from "./PhoneMockup";

const row1 = [
  { name: "Apple",     src: "/brands/apple.png" },
  { name: "Amazon",    src: "/brands/amazon.png" },
  { name: "Netflix",   src: "/brands/netflix.png" },
  { name: "Spotify",   src: "/brands/spotify.png" },
  { name: "Google",    src: "/brands/google.png" },
  { name: "Discord",   src: "/brands/discord.png" },
  { name: "Steam",     src: "/brands/steam.png" },
  { name: "Xbox",      src: "/brands/xbox.png" },
];

const row2 = [
  { name: "PayPal",    src: "/brands/paypal.png" },
  { name: "Cash App",  src: "/brands/cashapp.png" },
  { name: "Uber",      src: "/brands/uber.png" },
  { name: "Airbnb",    src: "/brands/airbnb.png" },
  { name: "Venmo",     src: "/brands/venmo.png" },
  { name: "Wise",      src: "/brands/wise.png" },
  { name: "Revolut",   src: "/brands/revolut.png" },
  { name: "Zelle",     src: "/brands/zelle.png" },
];

function BrandLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-[128px] h-[56px] mx-2.5 rounded-xl bg-white border border-[#e2e8f0] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105">
      <Image
        src={src}
        alt={name}
        width={72}
        height={30}
        className="max-h-8 w-auto object-contain"
      />
    </div>
  );
}

function MarqueeRow({ brands, reverse = false }: { brands: typeof row1; reverse?: boolean }) {
  return (
    <div className={`overflow-hidden py-1 ${reverse ? "marquee-reverse" : ""}`}>
      <div className="marquee-inner">
        {[...brands, ...brands].map((b, i) => (
          <BrandLogo key={`${b.name}-${i}`} {...b} />
        ))}
      </div>
    </div>
  );
}

const perks = [
  { icon: ClockCountdown, label: "Instant delivery",    desc: "Codes in seconds, 24/7" },
  { icon: SealCheck,      label: "100% verified",       desc: "From authorised sources" },
  { icon: Package,        label: "500+ brands",         desc: "Global & Nigerian brands" },
];

export default function GiftCards() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="giftcards" className="relative bg-[#02040f] overflow-hidden noise">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">

          {/* Copy */}
          <div ref={ref} className="flex-1 lg:max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5"
            >
              Gift Cards
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.06] tracking-[-0.025em] text-white mb-6"
            >
              Shop any brand.
              <br />
              <span className="text-gradient">Best price, always.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[16px] leading-[1.7] text-white/40 mb-10"
            >
              Over 500 brands across gaming, entertainment, food, shopping,
              and finance, bought or sold at the best market rates, instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-5 mb-10"
            >
              {perks.map((p) => (
                <div key={p.label} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/12 flex items-center justify-center flex-shrink-0">
                    <p.icon size={17} weight="bold" className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-white">{p.label}</div>
                    <div className="text-[13px] text-white/30">{p.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              href="#download"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Browse all brands
              <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Phone mockup — drop /screenshots/giftcards.jpg */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-none flex justify-center w-full lg:w-auto"
          >
            <PhoneMockup
              src="/screenshots/giftcards.jpg"
              alt="PPAY gift cards screen"
              width={300}
              screenBg="#f4f7fb"
            />
          </motion.div>

        </div>
      </div>

      {/* Full-width brand marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="pb-24 md:pb-32 flex flex-col gap-3.5"
      >
        <MarqueeRow brands={row1} />
        <MarqueeRow brands={row2} reverse />
      </motion.div>
    </section>
  );
}

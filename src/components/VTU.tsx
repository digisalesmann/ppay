"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check, Bell } from "@phosphor-icons/react";
import PhoneMockup from "./PhoneMockup";

const networks = [
  { name: "MTN",     src: "/brands/mtn.png",     bg: "#FCD34D" },
  { name: "Airtel",  src: "/brands/airtel.png",  bg: "#ffffff" },
  { name: "Glo",     src: "/brands/glo.png",     bg: "#16A34A" },
  { name: "9mobile", src: "/brands/9mobile.png", bg: "#ffffff" },
];

export default function VTU() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-white section overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Phone mockup — drop /screenshots/vtu.jpg */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-none flex justify-center w-full lg:w-auto"
          >
            <PhoneMockup
              src="/screenshots/vtu.jpg"
              alt="PPAY airtime and data screen"
              width={300}
              screenBg="#f4f7fb"
            />
          </motion.div>

          {/* Copy */}
          <div ref={ref} className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-600 mb-5"
            >
              Airtime & Data
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.025em] text-[#0f172a] mb-6"
            >
              Top up any
              <br />
              <span className="text-gradient-blue">network instantly.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[16px] leading-[1.7] text-[#64748b] mb-8"
            >
              Buy airtime and data bundles for any Nigerian network in
              seconds. The cheapest plans, available round the clock.
            </motion.p>

            {/* Network logos — colored by default */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-3 mb-9"
            >
              {networks.map((net, i) => (
                <motion.div
                  key={net.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.35 + i * 0.06 }}
                  className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm flex items-center justify-center"
                  style={net.bg ? { background: net.bg } : undefined}
                >
                  <Image
                    src={net.src}
                    alt={net.name}
                    width={40}
                    height={40}
                    className="w-9 h-9 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-col gap-3 mb-9">
              {[
                { icon: Check, text: "All 4 major networks" },
                { icon: Check, text: "Cheapest available plans" },
                { icon: Check, text: "Instant delivery, 24/7" },
                { icon: Bell,  text: "Auto-recharge reminders" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 14 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.07 }}
                  className="flex items-center gap-3 text-[15px] font-medium text-[#0f172a]"
                >
                  <item.icon size={15} weight="bold" className="text-blue-600 flex-shrink-0" />
                  {item.text}
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              href="#download"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
            >
              Buy airtime now
              <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}

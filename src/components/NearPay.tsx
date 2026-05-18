"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, WifiSlash, Users, Timer } from "@phosphor-icons/react";
import PhoneMockup from "./PhoneMockup";

export default function NearPay() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nearpay" className="relative bg-white section overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-none flex justify-center w-full lg:w-auto"
          >
            <PhoneMockup
              src="/screenshots/nearpay.jpg"
              alt="PPAY NearPay screen"
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
              NearPay. Offline Payments
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.07] tracking-[-0.025em] text-[#0f172a] mb-6"
            >
              Pay without
              <br />
              <span className="text-gradient-blue">the internet.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[15px] leading-[1.7] text-[#64748b] mb-8"
            >
              PPAY&apos;s proprietary NearPay enables device-to-device
              payments with zero internet. Built for markets, rural areas,
              and anywhere connectivity runs out.
            </motion.p>

            <div className="flex flex-col gap-0">
              {[
                { icon: WifiSlash, title: "Fully offline",          desc: "No data connection needed" },
                { icon: Timer,    title: "Settles in 3 seconds",   desc: "Faster than most online sends" },
                { icon: Users,    title: "Pure peer-to-peer",      desc: "No server required" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 14 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3.5 py-4 border-b border-[#f1f5f9] last:border-0"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon size={15} weight="bold" className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-[#0f172a] mb-0.5">{item.title}</div>
                    <div className="text-[13px] text-[#94a3b8]">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              href="#download"
              className="inline-flex items-center gap-1.5 mt-7 text-[14px] font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
            >
              Try NearPay
              <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}

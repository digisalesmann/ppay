"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Globe, SealCheck } from "@phosphor-icons/react";
import Image from "next/image";
import PhoneMockup from "./PhoneMockup";

const countries = [
  { code: "US", name: "United States", dial: "+1",  sub: "555-xxx-xxxx" },
  { code: "GB", name: "United Kingdom", dial: "+44", sub: "7xxx xxxxxx"  },
  { code: "CA", name: "Canada",          dial: "+1",  sub: "647-xxx-xxxx" },
  { code: "AU", name: "Australia",       dial: "+61", sub: "4xx xxx xxx"  },
  { code: "DE", name: "Germany",         dial: "+49", sub: "1xx xxxxxxx"  },
  { code: "FR", name: "France",          dial: "+33", sub: "6x xx xx xx"  },
];

export default function VirtualNumbers() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-white section overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">

          {/* Copy + country grid */}
          <div ref={ref} className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-600 mb-5"
            >
              Virtual Numbers
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.025em] text-[#0f172a] mb-6"
            >
              A global number.
              <br />
              <span className="text-gradient-blue">In seconds.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[16px] leading-[1.7] text-[#64748b] mb-12"
            >
              Get US, UK, Canadian, Australian, and European numbers for OTP
              verification and privacy. 10+ countries available.
            </motion.p>

            {/* Country list — zero-card, row-based */}
            <div className="flex flex-col">
              {countries.map((c, i) => (
                <motion.div
                  key={c.code}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                  className="group flex items-center gap-3 sm:gap-5 py-3.5 border-b border-[#f1f5f9] last:border-0 hover:bg-[#f8faff] -mx-2 px-2 rounded-xl transition-colors cursor-default"
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                    <Image
                      src={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png`}
                      alt={c.name}
                      width={44}
                      height={44}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] sm:text-[14px] font-semibold text-[#0f172a] truncate">{c.name}</div>
                    <div className="text-[11px] sm:text-[12px] text-[#94a3b8]">{c.dial} · {c.sub}</div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#16a34a] flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
                    <span className="hidden xs:inline">Available</span>
                    <span className="xs:hidden">•</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 mt-8"
            >
              {[
                { icon: Globe,     text: "10+ countries" },
                { icon: SealCheck, text: "Privacy protected" },
                { icon: Phone,     text: "SMS & calls" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-[13px] font-medium text-[#64748b]">
                  <item.icon size={14} weight="bold" className="text-blue-600" />
                  {item.text}
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              href="#download"
              className="inline-flex items-center gap-1.5 mt-6 text-[14px] font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
            >
              Get a number
              <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Phone mockup — drop /screenshots/numbers.jpg */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-none flex justify-center w-full lg:w-auto"
          >
            <PhoneMockup
              src="/screenshots/numbers.jpg"
              alt="PPAY virtual numbers screen"
              width={300}
              screenBg="#f4f7fb"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

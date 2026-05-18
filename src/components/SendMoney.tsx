"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ClockCountdown, Fingerprint, Globe } from "@phosphor-icons/react";
import PhoneMockup from "./PhoneMockup";

export default function SendMoney() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#02040f] section overflow-hidden noise">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.05] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Copy */}
          <div ref={ref} className="flex-1 lg:max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5"
            >
              Send Money
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.025em] text-white mb-6"
            >
              Money moved
              <br />
              <span className="text-gradient">at the speed</span>
              <br />of thought.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[16px] leading-[1.7] text-white/40 mb-10"
            >
              Transfer to any Nigerian bank or PPAY user worldwide. Settles in
              under 10 seconds with zero fees on peer-to-peer sends.
            </motion.p>

            <div className="flex flex-col">
              {[
                { icon: ClockCountdown, title: "Under 10 seconds",      desc: "Bank and wallet transfers settle in real time" },
                { icon: Fingerprint,    title: "Encrypted end-to-end",  desc: "Every transfer verified with biometric security" },
                { icon: Globe,          title: "Send globally",          desc: "Any PPAY user, anywhere in the world" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 py-5 border-b border-white/[0.06] last:border-0"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-blue-600/12 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} weight="bold" className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-white mb-0.5">{item.title}</div>
                    <div className="text-[14px] text-white/30">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              href="#download"
              className="inline-flex items-center gap-1.5 mt-8 text-[14px] font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Start sending
              <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Phone mockup — drop /screenshots/send.jpg */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-none flex justify-center w-full lg:w-auto"
          >
            <PhoneMockup
              src="/screenshots/send.jpg"
              alt="PPAY send money screen"
              width={300}
              screenBg="#1a3f7a"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Fingerprint, Key, ClockCountdown } from "@phosphor-icons/react";
import PhoneMockup from "./PhoneMockup";

const perks = [
  { icon: Globe,          title: "Accepted worldwide",   desc: "Anywhere Mastercard is accepted, online and in-store." },
  { icon: ClockCountdown, title: "Instant virtual card", desc: "Created in seconds. Ready for any online purchase immediately." },
  { icon: Fingerprint,    title: "Biometric security",   desc: "Face ID and fingerprint authentication protect every action." },
  { icon: Key,            title: "Freeze anytime",       desc: "Lock or unlock your card instantly with a single tap." },
];

export default function CardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef    = useRef<HTMLDivElement>(null);
  const copyInView = useInView(copyRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="cards" ref={sectionRef} className="relative bg-[#02040f] section overflow-hidden noise">
      <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] bg-blue-600/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Phone — left */}
          <motion.div
            style={{ y: phoneY }}
            className="flex-none flex justify-center w-full lg:w-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Drop file at: public/screenshots/card.jpg */}
              <PhoneMockup
                src="/screenshots/card.jpg"
                alt="PPAY card screen"
                width={310}
                screenBg="#0c2b5e"
              />
            </motion.div>
          </motion.div>

          {/* Copy — right */}
          <div ref={copyRef} className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={copyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5"
            >
              Virtual & Physical Cards
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={copyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.025em] text-white mb-6"
            >
              Your card.
              <br />
              <span className="text-gradient">Everywhere.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={copyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[16px] leading-[1.7] text-white/40 mb-10"
            >
              Create a USD virtual card instantly for online shopping, or
              order a premium physical Mastercard delivered to your door.
              Both managed from one sleek dashboard.
            </motion.p>

            <div className="flex flex-col">
              {perks.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={copyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.28 + i * 0.09 }}
                  className="flex items-start gap-4 py-5 border-b border-white/[0.06] last:border-0"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-blue-600/12 flex items-center justify-center flex-shrink-0">
                    <p.icon size={16} weight="bold" className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-white mb-0.5">{p.title}</div>
                    <div className="text-[14px] leading-[1.6] text-white/35">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={copyInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              href="#download"
              className="inline-flex items-center gap-1.5 mt-8 text-[14px] font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Get your card today
              <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}

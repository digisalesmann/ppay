"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, DeviceMobile } from "@phosphor-icons/react";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const phoneY   = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen bg-[#02040f] overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/[0.07] rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/[0.1] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 h-full max-w-[1200px] mx-auto px-5 sm:px-8 pt-20
                      flex flex-col
                      lg:grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">

        {/* ── Left: copy — vertically centered ── */}
        <motion.div
          style={{ y: contentY, opacity }}
          className="flex flex-col items-start justify-center py-10 lg:py-0 lg:pr-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 mb-8"
          >
            <DeviceMobile size={14} weight="bold" className="text-white/30" />
            <span className="text-[13px] font-medium text-white/30 tracking-wide">
              iOS & Android
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.8rem,5.2vw,5.5rem)] font-bold leading-[1.01] tracking-[-0.04em] text-white mb-6"
          >
            The smarter<br />
            way to{" "}
            <span className="text-gradient">manage</span>
            <br />
            <span className="text-gradient">money.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1rem,1.6vw,1.1rem)] leading-[1.72] text-white/40 max-w-[440px] mb-9"
          >
            Gift cards, airtime & data, live rates, virtual numbers, instant
            transfers, cards, offline payments, and savings, one app.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            <a
              href="#download"
              className="group inline-flex items-center gap-2.5 h-12 px-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[15px] transition-all duration-200 glow-sm active:scale-[0.97]"
            >
              Download free
              <ArrowRight size={15} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center h-12 px-6 text-white/50 font-semibold text-[15px] hover:text-white transition-colors"
            >
              See all features
              <ArrowRight size={13} weight="bold" className="ml-1.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex items-center gap-5 mt-9"
          >
            <div className="flex flex-col">
              <span className="text-[22px] font-bold text-white tracking-tight leading-none">9</span>
              <span className="text-[12px] text-white/30 mt-0.5">Core features</span>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="flex flex-col">
              <span className="text-[22px] font-bold text-white tracking-tight leading-none">10+</span>
              <span className="text-[12px] text-white/30 mt-0.5">Countries</span>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="flex flex-col">
              <span className="text-[22px] font-bold text-white tracking-tight leading-none">Free</span>
              <span className="text-[12px] text-white/30 mt-0.5">To download</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: phone — anchored to bottom, bottom clips below fold ── */}
        <div className="hidden lg:flex items-end justify-center self-end overflow-hidden">
          <motion.div
            style={{ y: phoneY }}
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhoneMockup
              src="/screenshots/hero.jpg"
              alt="PPAY dashboard"
              width={260}
              screenBg="#1a3f7a"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

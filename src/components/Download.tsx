"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function AppleBadge() {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-3.5 h-14 px-6 rounded-2xl glass border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all"
    >
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
        <path d="M16.878 12.607c-.027-2.688 2.218-3.985 2.317-4.047-1.262-1.843-3.225-2.094-3.916-2.121-1.668-.169-3.258.983-4.102.983-.853 0-2.166-.961-3.565-.934-1.828.028-3.519 1.065-4.461 2.686C1.04 12.627 2.374 18.2 4.178 21.327c.896 1.539 1.957 3.262 3.348 3.207 1.347-.056 1.854-.864 3.486-.864 1.625 0 2.094.864 3.52.837 1.454-.026 2.372-1.557 3.256-3.101 1.03-1.777 1.454-3.501 1.477-3.586-.032-.016-2.824-1.08-2.852-4.285l.465.072zm-2.642-7.877c.742-.9 1.243-2.15 1.106-3.398-1.085.046-2.396.722-3.174 1.63-.697.806-1.31 2.095-1.144 3.33 1.21.094 2.447-.615 3.212-1.562z" fill="white"/>
      </svg>
      <div>
        <div className="text-[10px] text-white/40 leading-none mb-0.5">Download on the</div>
        <div className="text-[15px] font-semibold text-white leading-tight">App Store</div>
      </div>
    </motion.a>
  );
}

function GoogleBadge() {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-3.5 h-14 px-6 rounded-2xl glass border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all"
    >
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <path d="M.886.82C.628 1.095.48 1.526.48 2.09v17.82c0 .565.148 1 .406 1.27l.067.062L10.5 11.6v-.202L.953.758.886.82z" fill="#4285F4"/>
        <path d="M13.633 14.75l-3.133-3.15v-.202l3.133-3.15.071.04 3.713 2.11c1.061.602 1.061 1.59 0 2.2l-3.713 2.11-.071.042z" fill="#FBBC04"/>
        <path d="M13.704 14.71L10.5 11.499.886 21.18c.35.37.927.418 1.58.048l11.238-6.518z" fill="#34A853"/>
        <path d="M13.704 8.29L2.466 1.772C1.813 1.4 1.236 1.45.886 1.82l9.614 9.679 3.204-3.21z" fill="#EA4335"/>
      </svg>
      <div>
        <div className="text-[10px] text-white/40 leading-none mb-0.5">Get it on</div>
        <div className="text-[15px] font-semibold text-white leading-tight">Google Play</div>
      </div>
    </motion.a>
  );
}

export default function Download() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="download" className="relative overflow-hidden bg-[#02040f] noise">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040f] via-[#060f26] to-[#02040f]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-blue-600/[0.08] rounded-full blur-[160px]" />
        <div className="grid-bg absolute inset-0 opacity-50" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 py-28 md:py-36 flex flex-col items-center text-center"
      >
        {/* Logo — natural colors, no filter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <Image
            src="/ppay.PNG"
            alt="PPAY"
            width={100}
            height={40}
            className="h-10 w-auto object-contain rounded-2xl"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white mb-6"
        >
          Your entire financial
          <br />
          life in{" "}
          <span className="text-gradient">one app.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-md text-[clamp(1rem,2vw,1.1rem)] leading-[1.7] text-white/38 mb-8"
        >
          Be among the first to manage your entire financial life with PPAY.
          Free to download. No hidden fees.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 items-center"
        >
          <AppleBadge />
          <GoogleBadge />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-9 text-[12px] text-white/18 font-medium tracking-wide"
        >
          Free · No credit card required · iOS & Android
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { List, X, ArrowRight } from "@phosphor-icons/react";

const links = [
  { label: "Features",        href: "#features"  },
  { label: "Gift Cards",      href: "#giftcards" },
  { label: "Cards",           href: "#cards"     },
  { label: "Live Rates",      href: "#rates"     },
  { label: "Send Money",      href: "#send"      },
  { label: "NearPay",         href: "#nearpay"   },
  { label: "Savings",         href: "#savings"   },
  { label: "WhatsApp Bot",    href: "#whatsapp"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-[#02040f]/90 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 md:h-[72px] flex items-center justify-between">

          <a href="#" aria-label="PPAY home" onClick={() => setOpen(false)}>
            <Image
              src="/ppay.PNG"
              alt="PPAY"
              width={100}
              height={36}
              className="h-9 object-contain rounded-2xl"
              style={{ width: "auto" }}
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.slice(0, 5).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-4 py-2 text-[14px] font-medium text-white/45 hover:text-white rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#download" className="text-[14px] font-medium text-white/40 hover:text-white transition-colors">
              Log in
            </a>
            <a
              href="#download"
              className="inline-flex items-center h-9 px-5 rounded-full bg-blue-600 text-white text-[13px] font-semibold hover:bg-blue-500 transition-colors glow-sm active:scale-[0.97]"
            >
              Download
            </a>
          </div>

          {/* Mobile: download + toggle */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="inline-flex items-center h-9 px-4 rounded-full bg-blue-600 text-white text-[13px] font-semibold hover:bg-blue-500 transition-colors active:scale-[0.97]"
            >
              Download
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-white/50 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Full-page mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-[#02040f] flex flex-col"
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/[0.06] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/[0.08] rounded-full blur-[100px] pointer-events-none" />

            {/* Spacer for header height */}
            <div className="h-16 flex-shrink-0" />

            {/* Nav links — scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center justify-between py-4 border-b border-white/[0.06] last:border-0"
                >
                  <span className="text-[1.35rem] font-bold text-white/80 group-hover:text-white transition-colors tracking-tight">
                    {l.label}
                  </span>
                  <ArrowRight size={16} weight="bold" className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </motion.a>
              ))}
            </div>

            {/* Bottom CTA — always visible */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex-shrink-0 px-6 pt-4 pb-10 flex flex-col gap-3 border-t border-white/[0.06]"
            >
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center h-13 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[15px] transition-colors glow-sm"
              >
                Download free
              </a>
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center h-11 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] text-white/60 font-semibold text-[14px] transition-colors"
              >
                Log in
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

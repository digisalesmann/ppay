"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Features",   href: "#features" },
  { label: "Gift Cards", href: "#giftcards" },
  { label: "Cards",      href: "#cards" },
  { label: "NearPay",    href: "#nearpay" },
  { label: "Savings",    href: "#savings" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#02040f]/80 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 md:h-[72px] flex items-center justify-between">

          <a href="#" aria-label="PPAY home">
            <Image
              src="/ppay.PNG"
              alt="PPAY"
              width={100}
              height={36}
              className="h-9 w-auto object-contain rounded-2xl"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-4 py-2 text-[14px] font-medium text-white/45 hover:text-white rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
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

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-[#02040f]/96 backdrop-blur-2xl border-b border-white/[0.07]"
          >
            <div className="max-w-[1200px] mx-auto px-5 py-5 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="py-3 text-[15px] font-medium text-white/55 hover:text-white border-b border-white/[0.05] last:border-0 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center h-12 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[15px] transition-colors"
              >
                Download free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

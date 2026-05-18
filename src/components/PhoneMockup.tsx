"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src: string;
  alt?: string;
  className?: string;
  screenBg?: string;
  /** width in px — height is computed from 9:19.5 ratio */
  width?: number;
}

export default function PhoneMockup({
  src,
  alt = "PPAY app screenshot",
  className,
  screenBg = "#f4f7fb",
  width = 280,
}: PhoneMockupProps) {
  const h = Math.round(width * 2.16);

  return (
    <div
      className={cn("relative flex-shrink-0 select-none", className)}
      style={{ width, height: h }}
    >
      {/* ── Outer glow ── */}
      <div
        className="absolute -inset-6 rounded-[60px] bg-blue-600/10 blur-2xl pointer-events-none"
        aria-hidden
      />

      {/* ── Frame ── */}
      <div
        className="absolute inset-0 rounded-[44px]"
        style={{
          background: "linear-gradient(160deg, #2c2c2e 0%, #1c1c1e 60%, #111113 100%)",
          boxShadow: [
            "0 60px 120px rgba(0,0,0,0.65)",
            "0 0 0 1px rgba(255,255,255,0.13)",
            "inset 0 1px 1px rgba(255,255,255,0.14)",
            "inset 0 -1px 1px rgba(0,0,0,0.35)",
          ].join(", "),
          padding: 6,
        }}
      >
        {/* ── Screen ── */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{ borderRadius: 34, background: screenBg }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes={`${width}px`}
          />
        </div>
      </div>

      {/* ── Glass specular ── */}
      <div
        className="absolute pointer-events-none rounded-[36px]"
        style={{
          inset: 6,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      {/* ── Side buttons ── */}
      {/* Volume */}
      {[0.2, 0.29].map((top, i) => (
        <div
          key={i}
          className="absolute bg-[#2a2a2c] rounded-r-full"
          style={{ left: -3, top: `${top * 100}%`, width: 3, height: Math.round(width * 0.075) }}
          aria-hidden
        />
      ))}
      {/* Power */}
      <div
        className="absolute bg-[#2a2a2c] rounded-l-full"
        style={{ right: -3, top: "26%", width: 3, height: Math.round(width * 0.12) }}
        aria-hidden
      />
    </div>
  );
}

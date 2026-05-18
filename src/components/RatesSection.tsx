"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendUp, TrendDown } from "@phosphor-icons/react";
import Image from "next/image";
import PhoneMockup from "./PhoneMockup";

const COIN_IDS = "bitcoin,ethereum,tether,binancecoin,solana,ripple";

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

interface FiatPair {
  pair: string;
  from: string;
  to: string;
  prefix: string;
}

const FIAT_PAIRS: FiatPair[] = [
  { pair: "USD / NGN", from: "USD", to: "NGN", prefix: "₦" },
  { pair: "GBP / NGN", from: "GBP", to: "NGN", prefix: "₦" },
  { pair: "EUR / NGN", from: "EUR", to: "NGN", prefix: "₦" },
  { pair: "USD / GHS", from: "USD", to: "GHS", prefix: "₵" },
];

function formatPrice(price: number): string {
  if (price >= 10000) return `$${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  if (price >= 1)     return `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  return `$${price.toFixed(4)}`;
}

function formatChange(pct: number): string {
  const sign = pct >= 0 ? "+" : "";
  return `${sign}${pct.toFixed(2)}%`;
}

function formatFiat(value: number, prefix: string): string {
  return `${prefix} ${value.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

const FALLBACK_COINS: CoinData[] = [
  { id: "bitcoin",      symbol: "btc",  name: "Bitcoin",   image: "", current_price: 67420, price_change_percentage_24h:  2.41 },
  { id: "ethereum",     symbol: "eth",  name: "Ethereum",  image: "", current_price:  3520, price_change_percentage_24h:  1.82 },
  { id: "tether",       symbol: "usdt", name: "Tether",    image: "", current_price:     1, price_change_percentage_24h:  0.00 },
  { id: "binancecoin",  symbol: "bnb",  name: "BNB",       image: "", current_price:   412, price_change_percentage_24h: -0.63 },
  { id: "solana",       symbol: "sol",  name: "Solana",    image: "", current_price:   178, price_change_percentage_24h:  5.24 },
  { id: "ripple",       symbol: "xrp",  name: "XRP",       image: "", current_price: 0.623, price_change_percentage_24h:  1.10 },
];

export default function RatesSection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [coins, setCoins]     = useState<CoinData[]>(FALLBACK_COINS);
  const [fiat, setFiat]       = useState<{ pair: string; rate: string; prefix: string }[]>([]);
  const [live, setLive]       = useState(false);
  const [pulse, setPulse]     = useState(false);

  const fetchAll = useCallback(async () => {
    // ── Crypto ──────────────────────────────────────────────
    try {
      const res  = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`,
        { next: { revalidate: 0 } }
      );
      if (res.ok) {
        const data: CoinData[] = await res.json();
        if (Array.isArray(data) && data.length) {
          setCoins(data);
          setLive(true);
          setPulse(true);
          setTimeout(() => setPulse(false), 800);
        }
      }
    } catch { /* keep previous */ }

    // ── Fiat ────────────────────────────────────────────────
    try {
      const res  = await fetch("https://open.er-api.com/v6/latest/USD");
      if (res.ok) {
        const data = await res.json();
        const r    = data.rates as Record<string, number>;
        const pairs = FIAT_PAIRS.map((p) => {
          const rate =
            p.from === "USD"
              ? r[p.to]
              : (r[p.to] / r[p.from]);
          return { pair: p.pair, rate: formatFiat(rate, p.prefix), prefix: p.prefix };
        });
        setFiat(pairs);
      }
    } catch { /* keep previous */ }
  }, []);

  useEffect(() => {
    fetchAll();
    const id = setInterval(fetchAll, 60_000);
    return () => clearInterval(id);
  }, [fetchAll]);

  return (
    <section className="relative bg-white section overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">

          {/* Copy — sticky on desktop */}
          <div ref={ref} className="flex-1 lg:sticky lg:top-32">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-600 mb-5"
            >
              Live Rates
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.025em] text-[#0f172a] mb-6"
            >
              Always know
              <br />
              <span className="text-gradient-blue">the best rate.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[16px] leading-[1.7] text-[#64748b] mb-8"
            >
              Real-time crypto prices, multi-currency fiat rates, and
              a built-in converter, so you always act at exactly the right moment.
            </motion.p>

            <ul className="flex flex-col gap-3 mb-10">
              {["Real-time crypto market data", "Multi-currency fiat rates", "Built-in currency converter", "Instant price alerts"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-[#0f172a] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              href="#download"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
            >
              View live rates
              <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex justify-start mt-14"
            >
              <PhoneMockup src="/screenshots/rates.jpg" alt="PPAY rates screen" width={270} screenBg="#f4f7fb" />
            </motion.div>
          </div>

          {/* Rates panel */}
          <div className="flex-1 w-full flex flex-col gap-4">
            {/* Phone — mobile only */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex lg:hidden justify-center mb-4"
            >
              <PhoneMockup src="/screenshots/rates.jpg" alt="PPAY rates screen" width={290} screenBg="#f4f7fb" />
            </motion.div>

            {/* Crypto table */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#f8faff] rounded-2xl overflow-hidden border border-[#e2e8f0]"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#e2e8f0]">
                <span className="text-[12px] font-semibold text-[#0f172a] tracking-[0.07em] uppercase">Crypto</span>
                <div className="flex items-center gap-1.5 text-[12px] text-[#64748b]">
                  <span className={`w-1.5 h-1.5 rounded-full ${live ? "bg-[#16a34a]" : "bg-[#94a3b8]"} ${pulse ? "animate-ping" : live ? "animate-pulse" : ""}`} />
                  {live ? "Live" : "Loading…"}
                </div>
              </div>

              {coins.map((c, i) => {
                const up = c.price_change_percentage_24h >= 0;
                return (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-center justify-between px-5 py-3.5 border-b border-[#f1f5f9] last:border-0 hover:bg-blue-50/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {c.image ? (
                        <Image
                          src={c.image}
                          alt={c.name}
                          width={32}
                          height={32}
                          className="rounded-full flex-shrink-0"
                          unoptimized
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-[#0f172a] flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0">
                          {c.symbol[0].toUpperCase()}
                        </div>
                      )}
                      <div>
                        <div className="text-[14px] font-semibold text-[#0f172a]">{c.symbol.toUpperCase()}</div>
                        <div className="text-[12px] text-[#94a3b8]">{c.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[14px] font-bold text-[#0f172a]">{formatPrice(c.current_price)}</div>
                      <div className={`flex items-center justify-end gap-0.5 text-[12px] font-semibold ${up ? "text-[#16a34a]" : "text-[#dc2626]"}`}>
                        {up ? <TrendUp size={11} weight="bold" /> : <TrendDown size={11} weight="bold" />}
                        {formatChange(c.price_change_percentage_24h)}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Fiat grid */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-3"
            >
              {(fiat.length ? fiat : FIAT_PAIRS.map(p => ({ pair: p.pair, rate: "—", prefix: p.prefix }))).map((f, i) => (
                <motion.div
                  key={f.pair}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
                  className="bg-[#f8faff] rounded-xl p-4 border border-[#e2e8f0] hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                >
                  <div className="text-[11px] font-semibold text-[#94a3b8] tracking-wide mb-1">{f.pair}</div>
                  <div className="text-[17px] font-bold text-[#0f172a] mb-1">{f.rate}</div>
                  <div className="text-[11px] text-[#94a3b8]">Updated live</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

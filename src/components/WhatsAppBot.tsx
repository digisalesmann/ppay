"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, WhatsappLogo, CurrencyCircleDollar, ArrowsClockwise, Gift, DeviceMobileSpeaker } from "@phosphor-icons/react";
import PhoneMockup from "./PhoneMockup";

const commands = [
  { cmd: "balance",  desc: "View crypto & fiat wallet"       },
  { cmd: "deposit",  desc: "Fund your account"               },
  { cmd: "withdraw", desc: "Cash out instantly"              },
  { cmd: "swap",     desc: "Convert USDT ↔ NGN"             },
  { cmd: "otc",      desc: "OTC / P2P fiat rates"            },
  { cmd: "redeem",   desc: "Sell gift cards for cash"        },
  { cmd: "vtu",      desc: "Buy airtime & data bundles"      },
  { cmd: "price",    desc: "Live crypto market prices"       },
  { cmd: "alert",    desc: "Set a price alert for any coin"  },
  { cmd: "referral", desc: "Your referral link & earnings"   },
];

const highlights = [
  { icon: CurrencyCircleDollar, title: "OTC & P2P trading",   desc: "Buy and sell USDT at competitive NGN rates directly on WhatsApp." },
  { icon: ArrowsClockwise,      title: "Instant swaps",        desc: "Convert between crypto and fiat in seconds with a single message." },
  { icon: Gift,                 title: "Gift card cashout",    desc: "Send a photo of any gift card and receive instant wallet credit." },
  { icon: DeviceMobileSpeaker,  title: "Airtime & data",       desc: "Top up any Nigerian network without leaving the chat." },
];

export default function WhatsAppBot() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="whatsapp" className="relative bg-[#02040f] section overflow-hidden noise">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#25d366]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">

          {/* Left: copy */}
          <div className="flex-1 lg:max-w-[520px]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-5"
            >
              <WhatsappLogo size={16} weight="fill" className="text-[#25d366]" />
              <span className="text-[13px] font-semibold tracking-[0.1em] uppercase text-[#25d366]">
                WhatsApp Bot
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.025em] text-white mb-6"
            >
              Full PPAY.
              <br />
              <span className="text-gradient">No app needed.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[16px] leading-[1.7] text-white/40 mb-10"
            >
              Access your PPAY wallet entirely through WhatsApp. Trade OTC,
              swap crypto, sell gift cards, buy airtime, and track live prices,
              all with a simple text message. No download required.
            </motion.p>

            {/* Feature rows */}
            <div className="flex flex-col mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-4 py-4 border-b border-white/[0.06] last:border-0"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#25d366]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} weight="bold" className="text-[#25d366]" />
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
              transition={{ duration: 0.6, delay: 0.7 }}
              href="https://wa.me/message/PPAYBOT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#25d366] hover:bg-[#22c55e] text-white font-semibold text-[15px] transition-colors active:scale-[0.97]"
            >
              <WhatsappLogo size={18} weight="fill" />
              Chat with PPAY Bot
              <ArrowRight size={13} weight="bold" />
            </motion.a>
          </div>

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-none flex justify-center w-full lg:w-auto"
          >
            <PhoneMockup
              src="/screenshots/bot.jpg"
              alt="PPAY WhatsApp Bot"
              width={300}
              screenBg="#111b21"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

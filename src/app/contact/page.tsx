"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";
import { EnvelopeSimple, ChatCircle, TwitterLogo } from "@phosphor-icons/react";

const channels = [
  {
    icon: EnvelopeSimple,
    title: "Email support",
    desc: "For account and billing queries.",
    value: "support@ppay.app",
    href: "mailto:support@ppay.app",
  },
  {
    icon: ChatCircle,
    title: "In-app chat",
    desc: "Fastest response, open the app and tap Support.",
    value: "Open PPAY app",
    href: "/#download",
  },
  {
    icon: TwitterLogo,
    title: "Twitter / X",
    desc: "Public questions and updates.",
    value: "@ppayapp",
    href: "#",
  },
];

export default function ContactPage() {
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  }

  const inputCls = "w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-[15px] text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.06] transition-all";

  return (
    <PageShell>
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-24">
        <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5">
          Contact
        </p>
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.03em] text-white mb-5">
          We&apos;re here to help.
        </h1>
        <p className="text-[clamp(1rem,1.8vw,1.1rem)] leading-[1.75] text-white/40 max-w-lg">
          Reach out through any of the channels below or fill in the form and
          we&apos;ll get back to you within one business day.
        </p>
      </section>

      {/* Channels + Form */}
      <section className="border-t border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-20 grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-20">

          {/* Channels */}
          <div>
            <h2 className="text-[18px] font-bold text-white mb-8">Other ways to reach us</h2>
            <div className="flex flex-col gap-6">
              {channels.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.07] hover:border-blue-500/30 hover:bg-white/[0.03] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 group-hover:bg-blue-600/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <c.icon size={18} weight="duotone" className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-white mb-0.5">{c.title}</div>
                    <div className="text-[13px] text-white/35 mb-1">{c.desc}</div>
                    <div className="text-[13px] font-medium text-blue-400">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/[0.05]">
              <p className="text-[13px] text-white/25 leading-[1.7]">
                Support hours: Monday – Friday, 8 AM – 8 PM WAT.<br />
                In-app chat is monitored 7 days a week.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-[18px] font-bold text-white mb-8">Send us a message</h2>

            {sent ? (
              <div className="flex flex-col items-start gap-3 p-8 rounded-2xl border border-green-500/20 bg-green-500/[0.06]">
                <div className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="text-[16px] font-semibold text-white">Message sent!</div>
                <p className="text-[14px] text-white/40">
                  Thanks for reaching out. We&apos;ll reply to <span className="text-white/60">{form.email}</span> within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-medium text-white/35 tracking-wide">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Victor Chinagoro"
                      className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-medium text-white/35 tracking-wide">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-white/35 tracking-wide">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className={inputCls}
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="account">Account issue</option>
                    <option value="transaction">Transaction problem</option>
                    <option value="cards">Cards</option>
                    <option value="gift-cards">Gift cards</option>
                    <option value="savings">Savings</option>
                    <option value="partnership">Partnership / business</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-white/35 tracking-wide">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your issue or question in detail…"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="self-start inline-flex items-center gap-2 h-12 px-7 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold text-[15px] transition-all glow-sm active:scale-[0.97]"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Sending…
                    </>
                  ) : "Send message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </PageShell>
  );
}

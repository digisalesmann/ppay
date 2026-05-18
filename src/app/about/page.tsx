import PageShell from "@/components/PageShell";

const values = [
  {
    title: "Built for Africa",
    body: "We started PPAY because managing money across Nigerian banks, crypto, gift cards, and international transfers was needlessly complex. We are fixing that, one feature at a time.",
  },
  {
    title: "Transparency first",
    body: "No hidden fees on peer-to-peer transfers. No fine print. What you see is what you get, always the best available rate, shown upfront.",
  },
  {
    title: "Always available",
    body: "Our infrastructure runs 24/7. With NearPay, you can even send money with zero internet. Finance doesn't sleep, and neither do we.",
  },
  {
    title: "Security by design",
    body: "End-to-end encryption, biometric authentication, and real-time fraud monitoring are built into every transaction, not bolted on.",
  },
];

const stats = [
  { value: "9",    label: "Core features"       },
  { value: "10+",  label: "Countries supported" },
  { value: "Free", label: "To download"         },
  { value: "24/7", label: "Service availability" },
];

export const metadata = {
  title: "About | PPAY",
  description: "Learn about PPAY, the all-in-one financial super-app built for Africa.",
};

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.06] rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-24 md:py-32">
          <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5">
            About PPAY
          </p>
          <h1 className="text-[clamp(2.4rem,5.5vw,5rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white max-w-3xl mb-6">
            Finance made simple,<br />
            <span className="text-gradient">for everyone.</span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.15rem)] leading-[1.75] text-white/40 max-w-xl">
            PPAY is an all-in-one financial super-app built for Nigerians and
            Africans everywhere, gift cards, airtime, live rates, virtual numbers,
            instant transfers, cards, offline payments, and savings, all in one
            beautifully simple experience.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[2.6rem] font-bold text-white tracking-tight leading-none mb-1">
                {s.value}
              </div>
              <div className="text-[14px] text-white/35">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5">
              Our mission
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6">
              Make every financial tool accessible to every African.
            </h2>
          </div>
          <div className="text-[16px] leading-[1.8] text-white/40 space-y-4">
            <p>
              Too many Nigerians juggle five different apps to do what PPAY does
              in one. We built PPAY to change that, a single, trusted platform
              where your entire financial life lives.
            </p>
            <p>
              We are a technology company, not a bank. That means we move faster,
              charge less, and put the user experience first without compromise.
            </p>
            <p>
              From buying an Amazon gift card at 3 AM to sending ₦50,000 offline
              at a market with no data. PPAY works when you need it, how you
              need it.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-24">
          <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5">
            Our values
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-16">
            What we stand for.
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-white/[0.05]">
            {values.map((v) => (
              <div key={v.title} className="bg-[#02040f] p-8 md:p-10">
                <h3 className="text-[18px] font-bold text-white mb-3">{v.title}</h3>
                <p className="text-[15px] leading-[1.75] text-white/35">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-20 text-center">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-[16px] text-white/35 mb-8">
            Download PPAY free, no credit card, no hidden fees.
          </p>
          <a
            href="/#download"
            className="inline-flex items-center h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[15px] transition-colors glow-sm"
          >
            Download the app
          </a>
        </div>
      </section>
    </PageShell>
  );
}

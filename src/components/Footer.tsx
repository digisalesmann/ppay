import Image from "next/image";
import Link from "next/link";

const nav: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Gift Cards",      href: "/#giftcards" },
    { label: "Airtime & Data",  href: "/#vtu"       },
    { label: "Live Rates",      href: "/#rates"     },
    { label: "Virtual Numbers", href: "/#virtual"   },
    { label: "Send Money",      href: "/#send"      },
    { label: "Cards",           href: "/#cards"     },
    { label: "NearPay",         href: "/#nearpay"   },
    { label: "Savings",         href: "/#savings"   },
    { label: "WhatsApp Bot",    href: "/#whatsapp"  },
  ],
  Company: [
    { label: "About",   href: "/about"   },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "/privacy" },
    { label: "Terms of Service", href: "/terms"   },
  ],
};

const socials = [
  {
    label: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.263 5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#02040f] border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">

        {/* Main grid */}
        <div className="py-16 md:py-20 grid grid-cols-2 md:grid-cols-6 gap-10">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex mb-5">
              <Image
                src="/ppay.PNG"
                alt="PPAY"
                width={80}
                height={28}
                className="h-7 w-auto object-contain rounded-2xl"
              />
            </Link>
            <p className="text-[14px] leading-[1.7] text-white/30 max-w-[220px] mb-6">
              The smarter way to manage money. Gift cards, airtime, cards,
              savings, all in one beautiful app.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.06] transition-all"
                >
                  {s.svg ?? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d={s.path} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(nav).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-[12px] font-semibold tracking-[0.08em] uppercase text-white/40 mb-4">{section}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[14px] text-white/35 hover:text-white/70 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/20">
            &copy; {new Date().getFullYear()} PPAY Technologies Ltd. All rights reserved.
          </p>
          <p className="text-[12px] text-white/15">
            Designed for the future of African finance.
          </p>
        </div>

      </div>
    </footer>
  );
}

import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Terms of Service | PPAY",
  description: "PPAY Terms of Service, the rules governing your use of our platform.",
};

const sections = [
  {
    title: "Acceptance of terms",
    content: [
      "By downloading, registering, or using the PPAY application or website, you agree to be bound by these Terms of Service, our Privacy Policy, Cookie Policy, and AML & KYC Policy.",
      "If you do not agree to these terms, do not use PPAY.",
      "We may update these terms at any time. Continued use after changes are notified constitutes acceptance. We will give at least 14 days' notice of material changes.",
    ],
  },
  {
    title: "Eligibility",
    content: [
      "You must be at least 18 years old to create a PPAY account.",
      "You must be a resident of Nigeria or an eligible country where PPAY operates.",
      "You may not create more than one account. Duplicate accounts will be suspended.",
      "You must provide accurate, current, and complete information during registration and keep it updated.",
    ],
  },
  {
    title: "Services",
    content: [
      "PPAY provides a platform for purchasing gift cards, buying airtime and data, viewing live exchange rates, obtaining virtual phone numbers, sending and receiving money, issuing virtual and physical cards, offline payments (NearPay), savings, and financial services via WhatsApp Bot.",
      "We reserve the right to add, modify, or discontinue any feature or service at any time with reasonable notice.",
      "Certain features may require identity verification (KYC) before use, in compliance with CBN regulations.",
    ],
  },
  {
    title: "Payments and fees",
    content: [
      "Peer-to-peer transfers between PPAY users are free. Fees may apply to bank transfers, card funding, and certain third-party services.",
      "All applicable fees are displayed before you confirm a transaction. We will never charge a fee that was not disclosed prior to confirmation.",
      "Exchange rates are fetched in real time. PPAY may add a small spread to market rates for currency conversion services.",
      "All transactions are final once confirmed. Refunds are handled on a case-by-case basis. Contact support at ppay.ng1@gmail.com for assistance.",
    ],
  },
  {
    title: "Prohibited conduct",
    content: [
      "Using PPAY for money laundering, fraud, terrorism financing, or any other illegal activity. See our AML & KYC Policy for full details on prohibited conduct and enforcement.",
      "Attempting to access another user's account without authorisation.",
      "Reverse engineering, decompiling, or otherwise attempting to extract the source code of the PPAY app.",
      "Sending unsolicited commercial communications through PPAY's messaging features.",
      "Creating accounts for bots, scripts, or automated services without our written permission.",
      "Violating any applicable Nigerian law or international sanction.",
    ],
  },
  {
    title: "Account security",
    content: [
      "You are responsible for maintaining the confidentiality of your login credentials and transaction PIN.",
      "You must notify us immediately at ppay.ng1@gmail.com if you suspect unauthorised access to your account.",
      "PPAY will never ask for your password or PIN via phone, email, or chat. Any such request is fraudulent.",
    ],
  },
  {
    title: "Intellectual property",
    content: [
      "All content, trademarks, logos, and software on the PPAY platform are owned by PROSPER DIGITAL SYSTEMS LTD or our licensors.",
      "You are granted a limited, non-exclusive, non-transferable licence to use the PPAY app for personal, non-commercial purposes.",
      "You may not copy, modify, distribute, or create derivative works from any part of the PPAY platform without written permission.",
    ],
  },
  {
    title: "Limitation of liability",
    content: [
      "PPAY is not liable for indirect, incidental, special, or consequential damages arising from your use of the platform.",
      "Our total liability for any claim arising from these terms shall not exceed the amount of fees you paid to PPAY in the 3 months preceding the claim.",
      "We do not guarantee uninterrupted or error-free service, though we target 99.9% uptime.",
    ],
  },
  {
    title: "Termination",
    content: [
      "You may close your account at any time through the app settings. Any outstanding balance will be settled before closure.",
      "We may suspend or terminate your account immediately if you violate these terms, engage in fraudulent activity, or at the direction of a regulator.",
      "Upon termination, your right to use PPAY ceases immediately. We retain your data as required by law.",
    ],
  },
  {
    title: "Governing law",
    content: [
      "These terms are governed by the laws of the Federal Republic of Nigeria.",
      "Any dispute arising from these terms shall be submitted to the jurisdiction of the courts of Lagos State, Nigeria.",
      "We encourage resolution of disputes through our support channels before legal action.",
    ],
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 py-24">
        <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5">
          Legal
        </p>
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.03em] text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-[14px] text-white/30 mb-16">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <p className="text-[16px] leading-[1.8] text-white/50 mb-16">
          These Terms of Service ("Terms") constitute a legally binding agreement
          between you and PROSPER DIGITAL SYSTEMS LTD governing your access to and use
          of the PPAY application and related services.
        </p>

        <div className="flex flex-col divide-y divide-white/[0.06]">
          {sections.map((s, i) => (
            <div key={s.title} className="py-10">
              <h2 className="text-[18px] font-bold text-white mb-5">
                {i + 1}. {s.title}
              </h2>
              <ul className="flex flex-col gap-3">
                {s.content.map((c, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-[1.75] text-white/40">
                    <span className="text-blue-500 flex-shrink-0 mt-0.5">—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-white/[0.06]">
          <h2 className="text-[18px] font-bold text-white mb-3">Questions?</h2>
          <p className="text-[15px] leading-[1.75] text-white/40">
            If you have questions about these Terms, contact us at{" "}
            <a href="mailto:ppay.ng1@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              ppay.ng1@gmail.com
            </a>
            {" "}or through the in-app support chat.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

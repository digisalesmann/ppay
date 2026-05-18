import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Privacy Policy | PPAY",
  description: "How PPAY collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information we collect",
    content: [
      "Account information: name, email address, phone number, and date of birth provided at registration.",
      "Identity verification data: government-issued ID and selfie photos required for KYC/AML compliance under CBN regulations.",
      "Transaction data: amounts, recipients, timestamps, and reference numbers for all payments processed through PPAY.",
      "Device and usage data: IP address, device type, operating system, and in-app behaviour used to detect fraud and improve the app.",
      "Communications: support tickets, chat messages, and feedback you send us.",
    ],
  },
  {
    title: "How we use your information",
    content: [
      "To create and manage your PPAY account and verify your identity.",
      "To process transactions, transfers, gift card purchases, airtime top-ups, and savings operations.",
      "To comply with legal obligations including CBN anti-money laundering (AML) and the Nigeria Data Protection Regulation (NDPR).",
      "To detect, investigate, and prevent fraud, abuse, and security incidents.",
      "To send transaction confirmations, security alerts, and with your consent, promotional communications.",
      "To improve our products through anonymised analytics and usage patterns.",
    ],
  },
  {
    title: "Sharing your information",
    content: [
      "Payment processors and banking partners necessary to settle your transactions.",
      "Identity verification providers required for regulatory KYC compliance.",
      "Cloud infrastructure providers who store data under strict data-processing agreements.",
      "Regulatory authorities (CBN, EFCC, NFIU) when required by Nigerian law.",
      "We do not sell, rent, or trade your personal data to advertisers or data brokers.",
    ],
  },
  {
    title: "Data security",
    content: [
      "All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.",
      "Biometric authentication and two-factor verification protect account access.",
      "Our security team monitors for threats 24/7. Incidents are reported to you and relevant authorities within 72 hours of discovery.",
      "We conduct regular third-party security audits and penetration tests.",
    ],
  },
  {
    title: "Your rights",
    content: [
      "Access: request a copy of the personal data we hold about you.",
      "Correction: ask us to correct inaccurate or incomplete data.",
      "Deletion: request erasure of your data where we are not legally required to retain it.",
      "Objection: opt out of marketing communications at any time via app settings or the unsubscribe link in emails.",
      "Portability: receive your data in a machine-readable format.",
      "To exercise any right, email privacy@ppay.app. We respond within 30 days.",
    ],
  },
  {
    title: "Data retention",
    content: [
      "Account and transaction records are retained for 7 years as required by Nigerian financial regulations.",
      "Identity verification documents are held for 5 years post-account closure.",
      "Marketing preferences and device logs are deleted 90 days after account closure.",
    ],
  },
  {
    title: "Children's privacy",
    content: [
      "PPAY is intended for users aged 18 and above. We do not knowingly collect personal data from anyone under 18. If you believe a minor has created an account, contact us immediately at privacy@ppay.app.",
    ],
  },
  {
    title: "Changes to this policy",
    content: [
      "We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you via in-app notification and email at least 14 days before material changes take effect. Continued use of PPAY after that date constitutes acceptance.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 py-24">
        <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5">
          Legal
        </p>
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.03em] text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-[14px] text-white/30 mb-16">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <p className="text-[16px] leading-[1.8] text-white/50 mb-16">
          PROSPER DIGITAL SYSTEMS LTD ("PPAY", "we", "us", "our") is committed to protecting
          your privacy. This policy explains what personal information we collect,
          how we use it, and your rights under the Nigeria Data Protection Regulation
          (NDPR) and applicable law.
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
          <h2 className="text-[18px] font-bold text-white mb-3">Contact us</h2>
          <p className="text-[15px] leading-[1.75] text-white/40">
            For privacy questions or to exercise your rights, contact our Data
            Protection Officer at{" "}
            <a href="mailto:privacy@ppay.app" className="text-blue-400 hover:text-blue-300 transition-colors">
              privacy@ppay.app
            </a>
            {" "}or write to PROSPER DIGITAL SYSTEMS LTD, Lagos, Nigeria.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

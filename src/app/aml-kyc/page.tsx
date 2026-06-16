import PageShell from "@/components/PageShell";

export const metadata = {
  title: "AML & KYC Policy | PPAY",
  description: "PPAY's Anti-Money Laundering and Know Your Customer compliance policy.",
};

const sections = [
  {
    title: "Purpose of this policy",
    content: [
      "Prevent the misuse of PPAY Services for illegal or fraudulent activities.",
      "Establish customer verification standards and onboarding procedures.",
      "Detect and report suspicious transactions or behaviors.",
      "Protect the integrity and security of the PPAY ecosystem.",
      "Comply with applicable anti-money laundering and counter-terrorism financing obligations.",
      "Mitigate financial, operational, legal, and reputational risks.",
    ],
  },
  {
    title: "Regulatory commitment",
    intro: "PPAY is committed to complying with all applicable financial crime prevention and regulatory obligations in jurisdictions where we operate or provide Services. Where applicable, PPAY may cooperate with financial institutions, payment processors, regulatory authorities, law enforcement agencies, financial intelligence units, and fraud prevention and compliance partners.",
    content: [
      "PPAY reserves the right to monitor, review, investigate, suspend, restrict, or report accounts and transactions where necessary to comply with legal, regulatory, or security obligations.",
    ],
  },
  {
    title: "Customer identification program (KYC)",
    intro: "To maintain the integrity of our platform and comply with applicable regulations, PPAY implements Know Your Customer (\"KYC\") procedures designed to verify the identity of users before or during access to certain Services.",
    content: [
      "Full legal name.",
      "Residential address.",
      "Date of birth.",
      "Phone number and email address.",
      "Government-issued identification.",
      "Selfie or biometric verification.",
      "Proof of address.",
      "BVN, NIN, or equivalent verification information where applicable.",
      "Corporate registration documents for businesses or merchants.",
    ],
    note: "Failure to provide accurate, complete, or verifiable information may result in delayed onboarding, restricted access to Services, transaction limitations, account suspension, or account termination.",
  },
  {
    title: "Verification tiers and limits",
    content: [
      "Access to certain features, transaction volumes, withdrawal limits, or financial services may depend on the completion of additional verification requirements.",
      "PPAY reserves the right to modify verification requirements and adjust transaction limits at any time.",
      "Enhanced due diligence may be requested for users seeking access to higher transaction limits or premium features.",
      "PPAY may re-verify users periodically to maintain compliance with updated regulatory requirements.",
    ],
  },
  {
    title: "Ongoing monitoring",
    intro: "PPAY monitors transactions, account activities, and user behaviors to identify unusual, suspicious, fraudulent, or prohibited activities.",
    content: [
      "Transaction pattern analysis and velocity and frequency checks.",
      "Device and IP monitoring with risk scoring.",
      "Geolocation analysis and fraud detection screening.",
      "Sanctions and watchlist screening.",
      "Blockchain or crypto transaction analysis where applicable.",
      "Structuring or layering transaction detection.",
      "Suspicious fund movement identification.",
      "Fraudulent onboarding attempt detection.",
    ],
  },
  {
    title: "Enhanced due diligence (EDD)",
    intro: "PPAY may apply Enhanced Due Diligence (\"EDD\") measures to higher-risk users, businesses, transactions, or jurisdictions. Users classified as high-risk may experience additional onboarding reviews, delays, restrictions, or monitoring.",
    content: [
      "Additional identity verification.",
      "Source of funds and source of wealth verification.",
      "Business activity review.",
      "Enhanced transaction monitoring.",
      "Additional compliance questionnaires.",
      "Manual compliance reviews.",
    ],
  },
  {
    title: "Sanctions compliance",
    intro: "PPAY prohibits the use of its Services by individuals, entities, organizations, or jurisdictions subject to applicable sanctions, embargoes, restrictions, or prohibitions.",
    content: [
      "Terrorism financing.",
      "Human trafficking.",
      "Fraud schemes.",
      "Illegal gambling.",
      "Prohibited weapons.",
      "Cybercrime.",
      "Money laundering.",
      "Any other unlawful activity.",
    ],
    note: "PPAY reserves the right to screen users against sanctions databases and watchlists, block or reject prohibited transactions, restrict or terminate access to Services, and report activities to relevant authorities where required.",
  },
  {
    title: "Suspicious activity reporting",
    intro: "PPAY reserves the right to investigate and report suspicious activities, transactions, or behaviors to appropriate authorities, regulators, financial institutions, or compliance partners where required or permitted by law. PPAY may file reports or disclosures without notifying affected users where legally permitted.",
    content: [
      "Unusual transaction patterns.",
      "Large or rapid movements of funds.",
      "Use of false or misleading information.",
      "Attempts to circumvent verification procedures.",
      "Transactions linked to fraud, scams, or criminal activities.",
    ],
  },
  {
    title: "Account restrictions and enforcement",
    intro: "PPAY reserves the right, at its sole discretion and without prior notice where necessary, to take enforcement action. Such actions may be taken where compliance concerns arise, fraudulent or suspicious activities are detected, regulatory obligations require intervention, or users violate PPAY policies or applicable laws.",
    content: [
      "Refuse onboarding requests.",
      "Suspend or terminate accounts.",
      "Delay, block, reverse, or cancel transactions.",
      "Freeze funds where required by law or compliance obligations.",
      "Restrict access to Services.",
      "Request additional verification information.",
    ],
  },
  {
    title: "Record retention",
    content: [
      "Customer identification records and transaction records.",
      "Compliance reviews, communications, and risk assessments.",
      "Investigation materials.",
      "Records may be retained for periods required under applicable laws, regulations, contractual obligations, or internal compliance procedures.",
    ],
  },
  {
    title: "Data protection and privacy",
    content: [
      "Information collected for AML and KYC purposes will be processed in accordance with PPAY's Privacy Policy and applicable data protection laws including the Nigeria Data Protection Regulation (NDPR).",
      "PPAY implements reasonable administrative, technical, and organizational safeguards designed to protect user information against unauthorized access, misuse, disclosure, or loss.",
    ],
  },
  {
    title: "Third-party verification and compliance providers",
    intro: "PPAY may engage trusted third-party service providers for identity verification, fraud prevention, transaction monitoring, risk analysis, compliance screening, sanctions checks, and security services.",
    content: [
      "By using PPAY Services, users acknowledge and consent to such verification and compliance processes where applicable.",
    ],
  },
  {
    title: "User responsibilities",
    content: [
      "Provide accurate and truthful information at all times.",
      "Maintain updated account details.",
      "Cooperate fully with compliance reviews.",
      "Avoid unlawful or fraudulent activities.",
      "Protect account credentials and security.",
      "Never use false identities or forged documents.",
      "Never attempt to bypass verification procedures.",
      "Never use PPAY Services to facilitate money laundering or fraudulent activities.",
    ],
  },
  {
    title: "Limitation of liability",
    content: [
      "PPAY shall not be liable for losses, delays, restrictions, or disruptions arising from compliance investigations, regulatory obligations, or verification procedures.",
      "PPAY shall not be liable for security reviews, suspicious activity monitoring, or account restrictions imposed in good faith.",
    ],
  },
  {
    title: "Amendments to this policy",
    content: [
      "PPAY reserves the right to update, modify, or revise this AML & KYC Policy at any time to reflect changes in legal or regulatory obligations, operational or technological developments, compliance requirements, or risk management practices.",
      "Updated versions will become effective upon publication on our platform unless otherwise stated.",
    ],
  },
];

export default function AmlKycPage() {
  return (
    <PageShell>
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 py-24">
        <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5">
          Legal
        </p>
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.03em] text-white mb-4">
          AML &amp; KYC Policy
        </h1>
        <p className="text-[14px] text-white/30 mb-16">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <p className="text-[16px] leading-[1.8] text-white/50 mb-16">
          This Anti-Money Laundering (&ldquo;AML&rdquo;) and Know Your Customer (&ldquo;KYC&rdquo;) Policy
          explains the measures and compliance procedures implemented by PPAY to prevent,
          detect, and report money laundering, terrorist financing, fraud, identity theft,
          sanctions violations, and other unlawful financial activities. This Policy applies
          to all users, merchants, partners, and any individuals or entities accessing
          or using PPAY&rsquo;s services.
        </p>

        <div className="flex flex-col divide-y divide-white/[0.06]">
          {sections.map((s, i) => (
            <div key={s.title} className="py-10">
              <h2 className="text-[18px] font-bold text-white mb-5">
                {i + 1}. {s.title.charAt(0).toUpperCase() + s.title.slice(1)}
              </h2>

              {s.intro && (
                <p className="text-[15px] leading-[1.75] text-white/40 mb-5">{s.intro}</p>
              )}

              {s.content && (
                <ul className="flex flex-col gap-3">
                  {s.content.map((c, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-[1.75] text-white/40">
                      <span className="text-blue-500 flex-shrink-0 mt-0.5">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              )}

              {s.note && (
                <p className="text-[14px] leading-[1.7] text-white/25 italic mt-5">{s.note}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-white/[0.06]">
          <h2 className="text-[18px] font-bold text-white mb-3">Contact us</h2>
          <p className="text-[15px] leading-[1.75] text-white/40">
            For questions, compliance concerns, or verification-related inquiries, contact the
            PPAY Compliance Team at{" "}
            <a href="mailto:use@ppayglobal.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              use@ppayglobal.com
            </a>{" "}
            or visit{" "}
            <a href="https://ppayglobal.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              ppayglobal.com
            </a>.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

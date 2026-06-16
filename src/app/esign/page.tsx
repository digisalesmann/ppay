import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Electronic Signature Consent | PPAY",
  description: "PPAY Electronic Signature Consent Agreement — how electronic signatures and consents work on the PPAY platform.",
};

const sections = [
  {
    title: "Consent to electronic records and signatures",
    intro: "PPAY may provide agreements, disclosures, notices, statements, receipts, transaction records, policies, and other communications electronically. You agree that:",
    content: [
      "Your electronic signature has the same legal effect as a handwritten signature.",
      "Electronic records provided by PPAY satisfy any legal requirement that such communications be in writing.",
      "Your consent applies to all present and future communications relating to your use of PPAY services.",
    ],
  },
  {
    title: "Methods of electronic signature",
    intro: "You may provide your electronic consent through any of the following methods. Each action shall constitute your legally binding electronic signature.",
    content: [
      "Selecting an \"Accept\" or \"Agree\" button.",
      "Entering a One-Time Password (OTP).",
      "Completing account verification processes.",
      "Authorizing a transaction through PPAY.",
      "Providing consent through WhatsApp-based interactions supported by PPAY.",
      "Using biometric authentication where available.",
      "Any other electronic authentication method approved by PPAY.",
    ],
  },
  {
    title: "Scope of consent",
    intro: "Your electronic consent may be used for:",
    content: [
      "Account registration and wallet creation and management.",
      "Virtual account issuance.",
      "Fund deposits and withdrawals.",
      "Peer-to-peer transfers.",
      "Local and international payment transactions.",
      "Currency conversion transactions.",
      "Compliance and identity verification processes.",
      "Acceptance of Terms and Conditions and Privacy Policy acknowledgements.",
      "Future PPAY products and services.",
    ],
  },
  {
    title: "Hardware and software requirements",
    intro: "To access and retain electronic communications, you must have:",
    content: [
      "A mobile phone, computer, or compatible device.",
      "Internet access.",
      "A valid email address and/or registered phone number.",
      "Access to WhatsApp where applicable.",
      "Software capable of viewing PDF or electronic documents.",
    ],
    note: "You are responsible for maintaining access to these requirements.",
  },
  {
    title: "Record retention",
    intro: "PPAY may retain electronic records of transactions, consents, agreements, communications, and authentication events. Such records shall constitute evidence of your actions and instructions.",
    content: [
      "Users are encouraged to download or retain copies of important documents for their own records.",
    ],
  },
  {
    title: "Withdrawal of consent",
    intro: "You may withdraw your consent to receive electronic communications by contacting PPAY support. Please note that withdrawal of consent may:",
    content: [
      "Limit your access to certain services.",
      "Prevent completion of transactions.",
      "Result in suspension or closure of certain account features where electronic communications are necessary.",
    ],
    note: "Any withdrawal shall not affect the validity of prior electronic signatures or consents already provided.",
  },
  {
    title: "Accuracy of contact information",
    content: [
      "You agree to maintain accurate and current phone numbers, email addresses, account information, and identification details.",
      "PPAY shall not be responsible for communications sent to outdated or incorrect contact information provided by you.",
    ],
  },
  {
    title: "Security and authentication",
    intro: "PPAY employs security measures to protect user information and transactions. You agree to:",
    content: [
      "Keep your login credentials confidential.",
      "Protect your authentication devices.",
      "Immediately notify PPAY of any unauthorized access or suspected security breach.",
    ],
    note: "Any action authenticated using your approved credentials may be treated as authorized by you unless proven otherwise.",
  },
  {
    title: "Legal effect",
    content: [
      "Electronic signatures are legally enforceable.",
      "Electronic records are admissible as evidence.",
      "Transactions executed electronically through PPAY are valid and binding.",
      "This Agreement shall be governed by applicable laws and regulations governing electronic transactions and digital signatures in jurisdictions where PPAY operates.",
    ],
  },
  {
    title: "Amendments",
    content: [
      "PPAY reserves the right to amend this Agreement at any time. Any updates shall become effective upon publication on the PPAY platform, website, application, or other approved communication channels.",
      "Continued use of PPAY services after such updates constitutes acceptance of the revised Agreement.",
    ],
  },
];

export default function ESignPage() {
  return (
    <PageShell>
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 py-24">
        <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5">
          Legal
        </p>
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.03em] text-white mb-4">
          Electronic Signature Consent
        </h1>
        <p className="text-[14px] text-white/30 mb-16">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <p className="text-[16px] leading-[1.8] text-white/50 mb-16">
          This Electronic Signature Consent Agreement (&ldquo;Agreement&rdquo;) explains how users
          of PPAY may electronically sign, authorize, and consent to transactions, disclosures,
          agreements, records, and communications through the PPAY platform. By creating an
          account, accessing PPAY services, clicking &ldquo;I Agree&rdquo;, using any PPAY feature,
          or otherwise providing your electronic consent, you agree to the terms outlined below.
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
            For questions regarding this Electronic Signature Consent Agreement, contact PPAY Support at{" "}
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

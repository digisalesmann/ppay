import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Cookie Policy | PPAY",
  description: "How PPAY uses cookies and similar technologies on our platform.",
};

const sections = [
  {
    title: "What are cookies?",
    intro: "Cookies are small text files stored on your browser, device, or system when you visit a website or use an application. They help websites and applications recognize users, improve functionality, remember preferences, enhance security, and analyze platform performance.",
    content: [
      "Session Cookies — deleted once you close your browser.",
      "Persistent Cookies — remain stored until they expire or are manually deleted.",
    ],
    note: "We may also use related technologies such as web beacons, pixels, device identifiers, SDKs, and local storage technologies.",
  },
  {
    title: "Why we use cookies",
    content: [
      "Enable secure login and authentication.",
      "Protect user accounts against fraud and unauthorized access.",
      "Remember user preferences and settings.",
      "Improve platform functionality and performance.",
      "Analyze traffic and user interaction.",
      "Personalize user experience.",
      "Support payment and transaction processes.",
      "Maintain system integrity and security.",
      "Measure effectiveness of features, campaigns, and services.",
    ],
  },
  {
    title: "Types of cookies we use",
    subsections: [
      {
        label: "a. Strictly Necessary Cookies",
        body: "These cookies are essential for the operation of our Services and cannot be disabled in our systems. Without these cookies, certain parts of the Services may not function properly.",
        items: ["User authentication", "Security verification", "Fraud prevention", "Session management", "Payment processing", "Network management"],
      },
      {
        label: "b. Performance and Analytics Cookies",
        body: "These cookies help us understand how users interact with our platform by collecting anonymous statistical information. Information collected may include browser type, device information, pages visited, duration of sessions, and referral sources.",
        items: ["Measure traffic and usage patterns", "Identify system errors", "Improve platform performance", "Optimize user experience"],
      },
      {
        label: "c. Functional Cookies",
        body: "These cookies allow the platform to remember choices you make and provide enhanced functionality.",
        items: ["Language preferences", "Region selection", "Saved settings", "Personalized interface preferences"],
      },
      {
        label: "d. Advertising and Marketing Cookies",
        body: "Where applicable, these cookies may be used to deliver relevant advertisements and measure their effectiveness. Third-party advertising partners may place these cookies subject to their own privacy policies.",
        items: ["Deliver relevant advertisements", "Measure advertising effectiveness", "Prevent repetitive advertising", "Track campaign performance"],
      },
    ],
  },
  {
    title: "Third-party cookies",
    content: [
      "Analytics providers.",
      "Payment processors.",
      "Security and fraud prevention services.",
      "Customer support tools.",
      "Marketing and advertising partners.",
    ],
    note: "These third parties may collect information in accordance with their respective privacy policies. PPAY does not control third-party cookies directly.",
  },
  {
    title: "Managing cookies",
    intro: "You may control or disable cookies through your browser or device settings. Most browsers allow you to view, delete, block, or restrict cookies, and receive notifications before cookies are stored.",
    content: [
      "Google Chrome — chrome://settings/cookies",
      "Mozilla Firefox — about:preferences#privacy",
      "Safari — Preferences → Privacy",
      "Microsoft Edge — edge://settings/privacy",
    ],
    note: "Please note that disabling certain cookies may affect the availability or functionality of parts of the Services.",
  },
  {
    title: "Data protection and privacy",
    content: [
      "Any personal information collected through cookies will be processed in accordance with our Privacy Policy and applicable data protection laws including the Nigeria Data Protection Regulation (NDPR).",
      "For more information on how we process personal data, please refer to the PPAY Privacy Policy.",
    ],
  },
  {
    title: "Children's privacy",
    content: [
      "Our Services are not directed toward individuals under the age of 18. We do not knowingly use cookies to collect personal information from minors.",
    ],
  },
  {
    title: "Updates to this policy",
    content: [
      "We may update this Cookies Policy periodically to reflect changes in legal or regulatory requirements, operational changes, technology updates, or service improvements.",
      "Any updates will become effective immediately upon publication on our platform unless otherwise stated.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <PageShell>
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 py-24">
        <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-500 mb-5">
          Legal
        </p>
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.03em] text-white mb-4">
          Cookie Policy
        </h1>
        <p className="text-[14px] text-white/30 mb-16">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <p className="text-[16px] leading-[1.8] text-white/50 mb-16">
          Welcome to PPAY (&ldquo;PPAY&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). This Cookie Policy explains how PPAY uses
          cookies and similar technologies when you access or use our website, mobile
          application, platform, and related services. By continuing to use our
          Services, you agree to the use of cookies in accordance with this policy
          unless disabled through your browser or device settings.
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
                <ul className="flex flex-col gap-3 mb-5">
                  {s.content.map((c, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-[1.75] text-white/40">
                      <span className="text-blue-500 flex-shrink-0 mt-0.5">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              )}

              {s.note && (
                <p className="text-[14px] leading-[1.7] text-white/25 italic">{s.note}</p>
              )}

              {s.subsections && (
                <div className="flex flex-col gap-8">
                  {s.subsections.map((sub) => (
                    <div key={sub.label}>
                      <h3 className="text-[15px] font-semibold text-white/70 mb-3">{sub.label}</h3>
                      <p className="text-[15px] leading-[1.75] text-white/40 mb-4">{sub.body}</p>
                      <ul className="flex flex-col gap-2">
                        {sub.items.map((item, k) => (
                          <li key={k} className="flex gap-3 text-[14px] leading-[1.7] text-white/35">
                            <span className="text-blue-500/60 flex-shrink-0 mt-0.5">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-white/[0.06]">
          <h2 className="text-[18px] font-bold text-white mb-3">Contact us</h2>
          <p className="text-[15px] leading-[1.75] text-white/40">
            If you have any questions, concerns, or requests regarding this Cookie Policy
            or our use of cookies, please contact us at{" "}
            <a href="mailto:ppay.ng1@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              ppay.ng1@gmail.com
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

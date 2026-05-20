import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#02040f] flex flex-col">
      {/* Minimal header */}
      <header className="border-b border-white/[0.06] bg-[#02040f]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/" aria-label="PPAY home">
            <Image
              src="/ppay.PNG"
              alt="PPAY"
              width={90}
              height={32}
              className="h-8 object-contain rounded-2xl"
              style={{ width: "auto" }}
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-[13px] font-medium text-white/40 hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GiftCards from "@/components/GiftCards";
import RatesSection from "@/components/RatesSection";
import CardSection from "@/components/CardSection";
import VTU from "@/components/VTU";
import SendMoney from "@/components/SendMoney";
import NearPay from "@/components/NearPay";
import Savings from "@/components/Savings";
import VirtualNumbers from "@/components/VirtualNumbers";
import WhatsAppBot from "@/components/WhatsAppBot";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <GiftCards />
        <CardSection />
        <RatesSection />
        <VTU />
        <SendMoney />
        {/* <NearPay /> */}
        <Savings />
        <VirtualNumbers />
        <WhatsAppBot />
        <Download />
      </main>
      <Footer />
    </>
  );
}

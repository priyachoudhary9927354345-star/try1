import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { PropertiesSection } from "@/components/properties/PropertiesSection";
import { Philosophy } from "@/components/about/Philosophy";
import { ValuationCalculator } from "@/components/valuation/ValuationCalculator";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-charcoal-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PropertiesSection />
        <Philosophy />
        <ValuationCalculator />
      </main>
      <Footer />
    </div>
  );
}

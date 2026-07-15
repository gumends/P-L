import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Navbar } from "@/components/landing/navbar";
import { Services } from "@/components/landing/services";
import { Stats } from "@/components/landing/stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Signature } from "@/components/home/Signature";
import { Community } from "@/components/home/Community";
import { VolleyballCTA } from "@/components/home/VolleyballCTA";
import { EventsCTA } from "@/components/home/EventsCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Signature />
        <VolleyballCTA />
        <Community />
        <EventsCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

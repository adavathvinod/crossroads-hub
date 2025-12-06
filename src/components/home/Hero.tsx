import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import volleyballHero from "@/assets/volleyball-hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={volleyballHero}
          alt="Volleyball at Crossroads"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-hero-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 md:px-8 text-center py-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold font-medium tracking-widest uppercase mb-4 animate-fade-in">
            The Community Hub
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 animate-fade-in-up">
            Great Food. Great Company.{" "}
            <span className="text-gradient">Great Games.</span>
          </h1>
          <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            Where family, friends, and neighbors come together for delicious dining, refreshing drinks, and exciting volleyball leagues.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/menus">View Menu</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/volleyball#register">Register for Volleyball</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/events">Book a Private Party</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#features" className="text-cream/60 hover:text-cream transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

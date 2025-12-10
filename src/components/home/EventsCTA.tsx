import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PartyPopper, Users, Utensils, Music } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/hooks/use-scroll-animation";
import privateParty from "@/assets/private-party.jpg";

const features = [
  { icon: Users, text: "Groups up to 80 guests" },
  { icon: Utensils, text: "Custom catering menus" },
  { icon: Music, text: "Full A/V equipment" },
  { icon: PartyPopper, text: "Dedicated event staff" },
];

export function EventsCTA() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection animation="scale" className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={privateParty} alt="Private party setup" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl hidden md:block">
                <div className="text-4xl font-heading font-bold text-amber">3</div>
                <div className="text-sm text-primary-foreground/80">Event Spaces</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="slide-left" delay={150} className="order-1 lg:order-2">
            <p className="text-amber font-medium tracking-widest uppercase mb-4">Private Events</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Host Your Next <span className="text-gradient">Celebration</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              From intimate birthday dinners to large corporate gatherings, our versatile spaces make every event unforgettable.
            </p>
            <StaggeredContainer className="grid sm:grid-cols-2 gap-4 mb-8" staggerDelay={80}>
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-amber" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </div>
              ))}
            </StaggeredContainer>
            <Button variant="gold" size="lg" asChild>
              <Link to="/events">Plan Your Event</Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
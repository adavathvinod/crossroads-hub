import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Utensils, Wine, Trophy } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/hooks/use-scroll-animation";
import broastedChicken from "@/assets/broasted-chicken.png";
import barAtmosphere from "@/assets/bar-atmosphere.jpg";
import volleyballHero from "@/assets/volleyball-hero.jpg";

const features = [
  {
    icon: Utensils,
    title: "Restaurant",
    description: "Savor our signature Broasted Chicken and comfort classics in a warm, family-friendly atmosphere.",
    image: broastedChicken,
    link: "/menus",
    linkText: "View Menus",
    accent: "bg-amber/20 text-amber",
  },
  {
    icon: Wine,
    title: "Bar & Patio",
    description: "Unwind with craft cocktails and local brews on our beautiful patio with fountain views.",
    image: barAtmosphere,
    link: "/events",
    linkText: "Plan an Event",
    accent: "bg-primary/20 text-primary",
  },
  {
    icon: Trophy,
    title: "Volleyball League",
    description: "Join the action! Our sand courts host competitive and recreational leagues all season.",
    image: volleyballHero,
    link: "/volleyball",
    linkText: "Register Now",
    accent: "bg-amber/20 text-amber",
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-max">
        <AnimatedSection className="text-center mb-16" animation="fade-up">
          <p className="text-accent font-medium tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Three Reasons to Visit
          </h2>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-8" staggerDelay={150}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 ${feature.accent} rounded-xl flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Button variant="gold" className="w-full" asChild>
                  <Link to={feature.link}>{feature.linkText}</Link>
                </Button>
              </div>
            </div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
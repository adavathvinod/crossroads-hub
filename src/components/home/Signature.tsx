import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import broastedChicken from "@/assets/broasted-chicken.png";

export function Signature() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection animation="slide-right" duration={700}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-2xl" />
              <img
                src={broastedChicken}
                alt="Signature Broasted Chicken"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm font-bold">Local Favorite</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="slide-left" delay={200} duration={700}>
            <p className="text-accent font-medium tracking-widest uppercase mb-3">
              Our Signature Dish
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Famous Broasted Chicken
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Crispy on the outside, juicy on the inside. Our legendary Broasted Chicken has been a community favorite for decades. Pressure-cooked to perfection in our signature blend of herbs and spices.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Pressure-cooked for maximum juiciness",
                "Secret family recipe seasoning blend",
                "Served with homestyle sides",
                "Available for dine-in or takeout",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/menus/lunch-dinner">View Full Menu</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Order Takeout</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
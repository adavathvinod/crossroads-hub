import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, ArrowRight } from "lucide-react";
import volleyballHero from "@/assets/volleyball-hero.jpg";

export function VolleyballCTA() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-max">
        <div className="bg-card rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-80 lg:h-auto">
              <img
                src={volleyballHero}
                alt="Volleyball league action"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest-dark/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit">
                <Calendar className="w-4 h-4" />
                Registration Opens March 1st
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join Our Volleyball League
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Competitive and recreational leagues for all skill levels. Play on our premium sand courts, grab food and drinks courtside, and be part of the action.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Users, label: "6+ Divisions" },
                  { icon: Calendar, label: "Spring & Summer" },
                  { icon: Trophy, label: "Playoffs" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/volleyball#register">
                    Register Your Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="forestOutline" size="lg" asChild>
                  <Link to="/volleyball/rules">View Rules</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

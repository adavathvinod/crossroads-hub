import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, Award, ArrowRight } from "lucide-react";
import volleyballHero from "@/assets/volleyball-hero.jpg";

const features = [
  { icon: Calendar, label: "Spring & Fall Leagues" },
  { icon: Users, label: "All Skill Levels" },
  { icon: Trophy, label: "Weekly Tournaments" },
  { icon: Award, label: "End of Season Awards" },
];

export function VolleyballCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 parallax-section" style={{ backgroundImage: `url(${volleyballHero})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>
      
      <div className="relative z-10 container-max px-4 md:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber/20 text-amber px-4 py-2 rounded-full mb-6">
            <Trophy className="w-5 h-5" />
            <span className="font-medium">Registration Opens March 1st</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-6">
            Join Our <span className="text-gradient">Volleyball League</span>
          </h2>
          <p className="text-cream/85 text-lg mb-8 max-w-2xl">
            Experience the thrill of competition in our premier outdoor volleyball leagues. Great games, cold drinks, and lasting friendships await.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-amber" />
                </div>
                <span className="text-cream font-medium">{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/volleyball#register">Register Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/volleyball/rules">League Rules</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
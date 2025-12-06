import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PartyPopper, Users, Sparkles } from "lucide-react";
import privateParty from "@/assets/private-party.jpg";

export function EventsCTA() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-medium tracking-widest uppercase mb-3">
              Private Events
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Host Your Next Celebration
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From intimate gatherings to large parties, our versatile event spaces are perfect for any occasion. Enjoy our private party room, beautiful outdoor patio with fountain, and customizable menus.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: PartyPopper, text: "Private party room for up to 50 guests" },
                { icon: Users, text: "Outdoor patio with scenic fountain views" },
                { icon: Sparkles, text: "Customizable menu packages" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground">{text}</span>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg" asChild>
              <Link to="/events">Plan Your Event</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-forest/10 rounded-2xl" />
            <img
              src={privateParty}
              alt="Private party setup"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
